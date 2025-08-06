import React from "react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">About CrowdVote</h1>
      <p className="text-lg text-gray-700 leading-relaxed">
        <strong>CrowdVote</strong> is a real-time polling platform that enables users to participate in live polls and see updated results as votes come in.
        Our system not only collects votes securely but also uses predictive analytics to forecast poll outcomes before voting ends.
      </p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold text-blue-500 mb-2">Key Features:</h2>
        <ul className="list-disc text-left text-gray-600 pl-8 space-y-2">
          <li>Live poll creation and participation</li>
          <li>Real-time vote tracking and updates</li>
          <li>Machine learning-based result forecasting</li>
          <li>Clean and responsive user interface</li>
          <li>Secure and scalable backend powered by Firebase</li>
        </ul>
      </div>

      <div className="mt-10 text-gray-500 text-sm">
        Built with ❤️ using React, Tailwind CSS, Firebase, and Chart.js.
      </div>
    </div>
  );
};

export default About;
