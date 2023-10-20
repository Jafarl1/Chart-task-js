/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";

import styles from "./analyzes.module.css";
export default function Diagram({ sortedData, diagramAnalysis }) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && diagramAnalysis) {
      window.scrollTo({
        top: chartRef.current.offsetTop + chartRef.current.clientHeight,
        behavior: "smooth",
      });
    }
  }, [diagramAnalysis]);
  const data = {
    labels: sortedData
      ? Object.keys(sortedData).map((el) => `Status ${el}`)
      : [],
    datasets: [
      {
        label: "Len's length",
        data: sortedData
          ? Object.values(sortedData).map((arr) => arr.length)
          : [],
        backgroundColor: ["rgba(255, 99, 132)"],
      },
    ],
  };

  return (
    <div
      ref={chartRef}
      className={diagramAnalysis ? styles.analysis2 : styles.hidden}
    >
      <h3>Diagram analyis</h3>
      <Bar data={data} />
    </div>
  );
}
