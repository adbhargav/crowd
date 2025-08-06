// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen text-gray-900 flex flex-col">
      {/* Header is already included globally in App.jsx */}

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-start px-4 text-center mt-24">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Welcome to CrowdVote</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Real Time Polling Platform With Predictive Analytics.
        </p>

        <div className="mb-10">
          <Link to="/vote">
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition">
              Vote Now
            </button>
          </Link>
        </div>

        {/* Info Cards */}
        <section className="grid gap-6 md:grid-cols-3 max-w-6xl w-full px-4 pb-16">
          {/* Card 1 */}
          <div className="bg-white text-gray-800 shadow-lg rounded-lg p-6 text-left border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">🤝 What is Crowd Voting?</h3>
            <p>
              Crowd voting collects real-time opinions from users for collective decision-making. Great for events, competitions, and audience engagement.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white text-gray-800 shadow-lg rounded-lg p-6 text-left border-l-4 border-yellow-500">
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">⚠️ Precautions</h3>
            <ul className="list-disc list-inside">
              <li>Prevent duplicate votes</li>
              <li>Close polls on time</li>
              <li>Avoid biased questions</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-gray-800 shadow-lg rounded-lg p-6 text-left border-l-4 border-green-500">
            <h3 className="text-xl font-semibold text-green-600 mb-2">🌟 Features</h3>
            <ul className="list-disc list-inside">
              <li>Live result charts</li>
              <li>Mobile-friendly voting UI</li>
              <li>Fast & lightweight API</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
