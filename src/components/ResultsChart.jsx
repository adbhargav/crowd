// 📁 src/components/ResultsChart.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ResultsChart = ({ votesData, question }) => {
  if (!votesData) return <p>No data available</p>;

  const labels = Object.keys(votesData);
  const voteCounts = Object.values(votesData);

  const chartData = {
    labels,
    datasets: [
      {
        label: "# of Votes",
        data: voteCounts,
        backgroundColor: [
          "#3498db",
          "#2ecc71",
          "#e67e22",
          "#e74c3c",
          "#9b59b6",
          "#f1c40f",
          "#34495e",
          "#1abc9c",
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { precision: 0 },
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md w-[90%] md:w-[60%] mx-auto">
      <h2 className="text-xl font-bold mb-4">{question}</h2>
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default ResultsChart;
