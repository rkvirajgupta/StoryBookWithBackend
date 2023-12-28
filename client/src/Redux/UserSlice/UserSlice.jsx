import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    UserData(state, action) {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { UserData } = userSlice.actions;

export default userSlice.reducer;
