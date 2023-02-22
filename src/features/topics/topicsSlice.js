import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    topics: {}
}

const topicsSlice = createSlice({
    name: "topics",
    initialState,
    reducers:{
        addTopic:(state, action) => {
            state.topics = {...state.topics, [action.payload.id]: action.payload} 
        }
    },
});

export const {addTopic} = topicsSlice.actions;
export const getAllTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;