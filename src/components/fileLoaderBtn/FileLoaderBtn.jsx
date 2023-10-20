import { useDispatch } from "react-redux";
import { load } from "../../redux/file";
import * as XLSX from "xlsx";

import styles from "./fileLoaderBtn.module.css";

export default function FileLoader() {
  const dispatch = useDispatch();

  const formatData = (data) => {
    return data
      .reverse()
      .slice(0, -1)
      .map((element) => ({
        id: element[0],
        len: element[1],
        wkt: element[2],
        status: element[3],
      }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const data = event.target.result;
        const workbook = XLSX.read(data, { type: "binary" });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const excelData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const bodyData = formatData(excelData);

        dispatch(load(bodyData));
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <input
      type="file"
      className={styles.fileLoader}
      onChange={handleFileUpload}
    />
  );
}
