import React, { useState, useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  onSnapshot,
  serverTimestamp,
  query,
  where,
} from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { motion } from "framer-motion";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ADMIN_EMAIL = "saicharan172005@gmail.com";

const categories = [
  {
    title: "Subjects",
    description: "Vote for your favorite academic subject.",
    options: ["Math", "Science", "History", "English"],
  },
  {
    title: "Politics",
    description: "Vote for your political preference.",
    options: ["Party A", "Party B", "Party C", "None"],
  },
  {
    title: "Technology",
    description: "Vote for your favorite tech trend.",
    options: ["AI", "Blockchain", "IoT", "Quantum"],
  },
];

const Vote = () => {
  const [user, setUser] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [votes, setVotes] = useState([]);
  const [userVotes, setUserVotes] = useState({});

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchUserVotes(currentUser.uid);
        if (currentUser.email === ADMIN_EMAIL) {
          listenToVotes();
        }
      }
    });
    return () => unsubscribeAuth();
  }, []);

  const listenToVotes = () => {
    return onSnapshot(collection(db, "votes"), (snapshot) => {
      const votesList = [];
      snapshot.forEach((doc) => votesList.push(doc.data()));
      setVotes(votesList);
    });
  };

  const fetchUserVotes = (uid) => {
    const q = query(collection(db, "votes"), where("userId", "==", uid));
    onSnapshot(q, (snapshot) => {
      const voteMap = {};
      snapshot.forEach((doc) => {
        voteMap[doc.data().category] = doc.data().vote;
      });
      setUserVotes(voteMap);
    });
  };

  const handleVote = async () => {
    if (!user) {
      alert("You must be logged in to vote!");
      return;
    }
    if (userVotes[selectedCategory.title]) {
      alert(`You already voted in "${selectedCategory.title}"!`);
      return;
    }
    try {
      await addDoc(collection(db, "votes"), {
        userId: user.uid,
        email: user.email, // ✅ Save email for admin view
        vote: selectedOption,
        category: selectedCategory.title,
        timestamp: serverTimestamp(),
      });
      alert("Vote submitted successfully!");
      setSelectedCategory(null);
      setSelectedOption("");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
    alert("Logged out successfully!");
  };

  // ===== ADMIN DASHBOARD =====
  if (user && user.email === ADMIN_EMAIL) {
    const voteCounts = {};
    votes.forEach((v) => {
      const key = `${v.category} - ${v.vote}`;
      voteCounts[key] = (voteCounts[key] || 0) + 1;
    });

    const chartData = {
      labels: Object.keys(voteCounts),
      datasets: [
        {
          label: "Votes",
          data: Object.values(voteCounts),
          backgroundColor: "#3b82f6",
        },
      ],
    };

    return (
      <div className="p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>

        <p className="mb-2">Total Votes: {votes.length}</p>

        {/* Chart Section */}
        <div className="bg-white p-4 rounded shadow mb-6">
          <Bar data={chartData} />
        </div>

        {/* Table Section */}
        <table className="w-full table-auto border border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Category</th>
              <th className="border px-4 py-2">Vote</th>
            </tr>
          </thead>
          <tbody>
            {votes.map((v, i) => (
              <tr key={i} className="text-center">
                <td className="border px-2 py-1">{i + 1}</td>
                <td className="border px-2 py-1">{v.email || "Unknown"}</td>
                <td className="border px-2 py-1">{v.category}</td>
                <td className="border px-2 py-1">{v.vote}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // ===== USER VOTING VIEW =====
  return (
    <div className="p-6">
      <div className="flex justify-between mb-6">
        <h2 className="text-2xl font-bold">Cast Your Vote</h2>
        {user && (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        )}
      </div>

      {!user ? (
        <p className="text-center text-red-600">Please log in to vote.</p>
      ) : !selectedCategory ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              className={`bg-white p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-2xl border ${
                userVotes[cat.title] ? "opacity-50 cursor-not-allowed" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => !userVotes[cat.title] && setSelectedCategory(cat)}
            >
              <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
              <p className="text-sm text-gray-600">{cat.description}</p>
              {userVotes[cat.title] && (
                <p className="text-green-600 font-bold mt-2">
                  ✅ Already voted
                </p>
              )}
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
          <h3 className="text-xl font-semibold mb-4">{selectedCategory.title}</h3>
          <p className="text-sm text-gray-600 mb-4">
            {selectedCategory.description}
          </p>

          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="w-full border px-4 py-2 rounded mb-4"
          >
            <option value="">-- Select an option --</option>
            {selectedCategory.options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>

          <div className="flex justify-between">
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              ⬅ Back
            </button>
            <button
              onClick={handleVote}
              disabled={!selectedOption}
              className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Submit Vote
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vote;
