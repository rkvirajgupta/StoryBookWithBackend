import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  storydetails: {},
};

export const storydetailsSlice = createSlice({
  name: "storydetails",
  initialState,
  reducers: {
    StorydetailsData(state, action) {
      state.storydetails = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { StorydetailsData } = storydetailsSlice.actions;

export default storydetailsSlice.reducer;
