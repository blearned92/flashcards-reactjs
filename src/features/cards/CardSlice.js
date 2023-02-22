import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
    name: "cards",
    initialState: {cards:{}},
    reducers: {
        addCard: (state, action) => {
            const {cardId, front, back} = action.payload;
            state.cards[cardId] = {
                id: cardId,
                front: front,
                back: back
            }
            return state;
        }
    }
});

export const { addCard } = CardSlice.actions;
export default CardSlice.reducer;
export const selectCards = state => state.cards.cards;