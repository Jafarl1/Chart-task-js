import { useState } from "react";
import FileLoaderBtn from "./components/fileLoaderBtn/FileLoaderBtn";
import AddDataBtn from "./components/addDataBtn/AddDataBtn";
import AddDataModal from "./components/addDataModal/AddDataModal";
import DataTable from "./components/dataTable/DataTable";
import Analyzes from "./components/analyzes/Analyzes";

import "./styles.css";

export default function App() {
  const [modalState, setModalState] = useState(false);

  return (
    <div className="app">
      <div className="btn-group">
        <FileLoaderBtn />
        <AddDataBtn setModalState={setModalState} />
      </div>
      <DataTable />
      <Analyzes />
      <AddDataModal modalState={modalState} setModalState={setModalState} />
    </div>
  );
}
