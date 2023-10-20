import { useSelector } from "react-redux";
import { ReactTabulator } from "react-tabulator";

import "tabulator-tables/dist/css/tabulator.min.css";
import styles from "./dataTable.module.css";

export default function DataTable() {
  const data = useSelector((state) => state.fileData.file);
  const fileData = JSON.parse(JSON.stringify(data));

  return (
    <div id={styles.table} className={fileData.length > 0 ? "" : styles.hidden}>
      <ReactTabulator
        key={JSON.stringify(fileData[0])}
        data={fileData}
        options={{
          pagination: "local",
          paginationSize: 10,
          columns: [
            { title: "id", field: "id", headerFilter: "input" },
            { title: "len", field: "len", headerFilter: "input" },
            { title: "wkt", field: "wkt", headerFilter: "input" },
            { title: "status", field: "status", headerFilter: "input" },
          ],
        }}
      />
    </div>
  );
}
