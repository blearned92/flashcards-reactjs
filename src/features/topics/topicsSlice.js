import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {}
}

const topicsSlice = createSlice({
    name: "topics",
    initialState,
    reducers:{
        addTopic:(state, action) => {
            const {topicId, name, icon} = action.payload;
            state.topics[topicId] = {
              id: topicId,
              name: name,
              icon,
              quizIds: []
            };
            return state;
        },
        addQuizId: (state, action) => {
            const {topicId, quizId} = action.payload;
            state.topics[topicId].quizIds.push(quizId);
        }
    },
});

export const selectTopics = (state) => state.topics.topics; 
export const { addTopic, addQuizId } = topicsSlice.actions;
export default topicsSlice.reducer;