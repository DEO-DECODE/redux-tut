import { createReducer } from "@reduxjs/toolkit";
// Define your action types
const INCREMENT = 'increment';
const INCREMENT_BY_VALUE = 'incrementByValue';
const DECREMENT = 'decrement';

// Use these action types in your reducer


const initialState = {
  c: 0,
};

export const customReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(INCREMENT, (state, action) => {
      state.c += 1;
    })
    .addCase(INCREMENT_BY_VALUE, (state, action) => {
      state.c += action.payload;
    })
    .addCase(DECREMENT, (state, action) => {
      state.c -= 1;
    });
});
