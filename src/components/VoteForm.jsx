import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../firebaseConfig";

const VoteForm = () => {
  const [language, setLanguage] = useState("");
  const languages = ["Python", "Java", "C++", "JavaScript"];

  const submitVote = async (e) => {
    e.preventDefault();
    if (!language) return;

    try {
      await addDoc(collection(db, "votes"), {
        language,
        timestamp: serverTimestamp(),
      });
      setLanguage("");
    } catch (error) {
      console.error("Error submitting vote: ", error);
    }
  };

  return (
    <form onSubmit={submitVote} className="mt-6 space-y-4">
      <div>
        <label className="block text-lg mb-2">Choose your favorite language:</label>
        <select
          className="border rounded px-4 py-2 w-1/2"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="">-- Select --</option>
          {languages.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </div>
      <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
        Submit Vote
      </button>
    </form>
  );
};

export default VoteForm;