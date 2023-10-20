/* eslint-disable react/prop-types */

import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../../redux/file";
import { Button } from "antd";

import styles from "./addDataModal.module.css";

export default function AddDataModal({ modalState, setModalState }) {
  const [lenInfo, setLenInfo] = useState();
  const [status, setStatus] = useState(0);

  const formRef = useRef(null);
  const dispatch = useDispatch();

  const resetModal = () => {
    formRef.current.reset();
    setLenInfo("");
    setStatus(0);
  };

  const closeModalWindow = () => {
    setModalState(false);
    resetModal();
  };

  const addDataToFile = () => {
    if (lenInfo) {
      dispatch(addData([lenInfo, status]));
      closeModalWindow();
    } else {
      alert("Fill the blanks please.");
    }
  };

  return (
    <div className={modalState ? styles.addDataModal : styles.hidden}>
      <div className={styles.modalWindow}>
        <div className={styles.closeModal}>
          <i className="fa-solid fa-x" onClick={closeModalWindow}></i>
        </div>

        <form className={styles.modalBody} ref={formRef} id={styles.addForm}>
          <div className={styles.inputs}>
            <label htmlFor="len">Please enter Len information </label>
            <input
              type="number"
              name="len"
              id="len"
              onChange={(e) => setLenInfo(+e.target.value)}
            />

            <label htmlFor="status">Select status please</label>
            <select
              name="status"
              id="status"
              onChange={(e) => setStatus(+e.target.value)}
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>

          <div className={styles.btnGroup}>
            <Button size={"large"} onClick={resetModal}>
              Reset
            </Button>
            <Button size={"large"} type="primary" onClick={addDataToFile}>
              Add
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
