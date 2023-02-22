import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "../features/topics/topicsSlice"; 
import quizReducer from "../features/quizzes/QuizzesSlice"; 

export default configureStore({
  reducer: {
    topics: topicReducer,
    quizzes: quizReducer,
  },
});
