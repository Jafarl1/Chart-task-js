import { createSlice } from "@reduxjs/toolkit";

export const uploadedFileData = createSlice({
  name: "uploaded file",
  initialState: {
    file: [],
  },
  reducers: {
    load: (state, action) => {
      state.file = action.payload;
    },
    addData: (state, action) => {
      const newFile = [
        {
          id: state.file.length > 0 ? state.file[0].id + 1 : 1,
          len: action.payload[0],
          wkt: "",
          status: action.payload[1],
        },
        ...state.file,
      ];
      state.file = newFile;
    },
  },
});

export const { load, addData } = uploadedFileData.actions;

export default uploadedFileData.reducer;
