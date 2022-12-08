import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [451, 128, 716, 412],
        backgroundColor: ["#002A76", "#F1B242", "#06C1FF", "#E6521F"],
        hoverOffset: 4,
      },
    ],
  };
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};
  
  
  return (
    <div className="w-[292px]  h-[282px] mx-auto">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
