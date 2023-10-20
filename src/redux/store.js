import { configureStore } from "@reduxjs/toolkit";
import file from "./file.js";

const store = configureStore({
  reducer: {
    fileData: file,
  },
});

export default store;
