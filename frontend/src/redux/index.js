import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import productSlideReducer from "./productSlide"; // Corrected import

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    product: productSlideReducer // Corrected reducer name
  },
});
