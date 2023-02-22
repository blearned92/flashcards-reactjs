import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "../features/topics/topicsSlice"; //this is exported as default in the slice, naming it what we want

export default configureStore({
  reducer: {
    topics: topicReducer,
  },
});
