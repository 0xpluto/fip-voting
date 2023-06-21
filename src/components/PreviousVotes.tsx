import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "right" as const,
    },
    title: {
      display: true,
      text: "Previous Votes",
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["FIP 11", "FIP 12", "FIP 13", "FIP 14", "FIP 15"];

export const data = {
  labels,
  datasets: [
    {
      label: "No",
      data: [23, 45, 12, 56, 12],
      // borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(249,53,53,0.8)",
    },
    {
      label: "Abstain",
      data: [33, 42, 12, 52, 45],
      // borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(249,171,53,0.8)",
    },
    {
      label: "Yes",
      data: [33, 42, 12, 52, 45],
      // borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53,249,53,0.8)",
    },
  ],
};

export default function App() {
  return (
    <div className="md:px-56">
      <Bar options={options} data={data} />
    </div>
  );
}
