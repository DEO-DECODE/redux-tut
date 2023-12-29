import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./reducer";
const store = configureStore({
  reducer: {
    custom: customReducer,
  },
  // It will combine multiple reducers
});
export default store;
