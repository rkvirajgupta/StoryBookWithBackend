import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  updater: false,
};

export const flagSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    Updater(state, action) {
      state.updater = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { Updater } = flagSlice.actions;

export default flagSlice.reducer;
