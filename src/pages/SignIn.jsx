import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const ADMIN_EMAIL = "saicharan172005@gmail.com";
const ADMIN_PASSWORD = "saicharan17";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [isAdmin, setIsAdmin] = useState(false);
  const [votes, setVotes] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Firebase login
      await signInWithEmailAndPassword(auth, form.email, form.password);

      // Admin check
      if (form.email === ADMIN_EMAIL && form.password === ADMIN_PASSWORD) {
        setIsAdmin(true);
        fetchVotes();
      } else {
        alert("Login successful! Redirecting to vote page...");
        window.location.href = "/vote";
      }
    } catch (error) {
      alert(error.message);
    }
  };

  const fetchVotes = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "votes"));
      const votesList = [];
      querySnapshot.forEach((doc) => {
        votesList.push({ id: doc.id, ...doc.data() });
      });
      setVotes(votesList);
    } catch (err) {
      console.error("Error fetching votes:", err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      {!isAdmin ? (
        <>
          <h1 className="text-3xl font-bold text-center mb-6">Sign In</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="border p-2 w-full rounded"
              required
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded">
              Sign In
            </button>
          </form>
        </>
      ) : (
        <div>
          <h1 className="text-3xl font-bold text-center mb-4">Admin Dashboard</h1>
          <p className="text-center mb-6">
            📊 <b>Total Votes:</b> {votes.length}
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 shadow">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Voter Email</th>
                  <th className="border p-2 text-left">Vote Choice</th>
                </tr>
              </thead>
              <tbody>
                {votes.length > 0 ? (
                  votes.map((v) => (
                    <tr key={v.id} className="hover:bg-gray-50">
                      <td className="border p-2">{v.userEmail || "Unknown"}</td>
                      <td className="border p-2">{v.vote || "No Vote"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="2" className="text-center p-4 text-gray-500">
                      No votes yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignIn;
