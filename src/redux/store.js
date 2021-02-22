import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Theme/themeSlice";

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});
