/* eslint-disable react/prop-types */

import { useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

import styles from "./analyzes.module.css";

export default function PieCharth({ sortedData, pieAnalysis }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && pieAnalysis) {
      window.scrollTo({
        top: chartRef.current.offsetTop + chartRef.current.clientHeight,
        behavior: "smooth",
      });
    }
  }, [pieAnalysis]);

  const data = {
    labels: sortedData
      ? Object.keys(sortedData).map((el) => `Status ${el}`)
      : [],
    datasets: [
      {
        data: sortedData
          ? Object.values(sortedData).map((arr) => arr.length)
          : [],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div
      ref={chartRef}
      className={pieAnalysis ? styles.analysis1 : styles.hidden}
    >
      <h3>Pie chart analysis</h3>
      {sortedData ? <Pie className={styles.pie} data={data} /> : ""}
    </div>
  );
}
