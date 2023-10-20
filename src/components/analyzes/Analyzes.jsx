/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button } from "antd";
import PieCharth from "./Pie-chart";
import Diagram from "./Diagram";

import styles from "./analyzes.module.css";

export default function Analyzes() {
  const [sortedData, setSortedData] = useState();
  const [pieAnalysis, setPieAnalysis] = useState(false);
  const [diagramAnalysis, setDiagramAnalysis] = useState(false);

  const file = useSelector((state) => state.fileData.file);

  useEffect(() => {
    let sortedObject = {};

    file.forEach((element) => {
      let id = element.status;

      if (!sortedObject[id]) {
        sortedObject[id] = [element];
      } else {
        sortedObject[id].push(element);
      }
    });
    setSortedData(sortedObject);
  }, [file]);

  return (
    <>
      <div className={file.length > 0 ? styles.btnGroup : styles.hidden}>
        <Button size={"large"} onClick={() => setPieAnalysis(!pieAnalysis)}>
          Analysis 1
        </Button>
        <Button
          size={"large"}
          onClick={() => setDiagramAnalysis(!diagramAnalysis)}
        >
          Analysis 2
        </Button>
      </div>
      <div className={styles.analyzesPage}>
        <PieCharth sortedData={sortedData} pieAnalysis={pieAnalysis} />
        <Diagram sortedData={sortedData} diagramAnalysis={diagramAnalysis} />
      </div>
    </>
  );
}
