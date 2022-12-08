import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = () => {
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: "#002A76",
        borderColor: "#002A76",
        barThickness: 28,
        data: [4, 5, 9, 5, 14, 24.6, 6.6, 13, 8.8, 12, 3, 2],
        borderRadius: 20,
      },
      {
        backgroundColor: "rgba(0, 42, 118, 0.1)",
        borderColor: "rgba(0, 42, 118, 0.1)",
        barThickness: 28,
        data: [4, 5, 9, 10, 14, 24.6, 22, 16, 8.8, 12, 5.5, 2],

        borderRadius: 20,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
        labels: {
          fontColor: "blue",
          fontSize: 18,
        },
      },
    },

    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          color: "#000000",
          font: {
            size: 12,
            weight: "bold",
          },
        },
      },

      y: {
        grid: {
          display: true,
          dash: [],
        },
      },
    },
  };

  return (
    <div className="mt-7">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
