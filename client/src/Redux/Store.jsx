import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./UserSlice/UserSlice";
import flagReducer from "./FlagSlice/FlagSlice";
import storydetailsReducer from "./StorydetailsSlice/StorydetailsSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    flag: flagReducer,
    storydetails: storydetailsReducer,
  },
});
