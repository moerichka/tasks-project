import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    addBy(state, action) {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, addBy } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
