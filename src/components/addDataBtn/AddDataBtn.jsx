/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";

import styles from "./addDataBtn.module.css";

export default function AddDataBtn({ setModalState }) {
  const data = useSelector((state) => state.fileData.file);

  const openModalWindow = () => {
    if (data.length > 0) {
      setModalState(true);
    } else {
      alert("Load Excel file please.");
    }
  };

  return (
    <button className={styles.addDataBtn} onClick={openModalWindow}>
      Add data
    </button>
  );
}
