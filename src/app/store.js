import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "../features/topics/topicsSlice"; 
import quizReducer from "../features/quizzes/QuizzesSlice"; 
import cardReducer from "../features/cards/CardSlice"; 

export default configureStore({
  reducer: {
    topics: topicReducer,
    quizzes: quizReducer,
    cards: cardReducer
  },
});
