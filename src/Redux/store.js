import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./color/colorSlice";
import countReducer from "./count/countSlice";
import usersReducer from "./users/usersSlice";
import productsReducer from "./filter/filterSlice";
export default configureStore({
  reducer: {
    color: colorReducer,
    count: countReducer,
    users: usersReducer,
    items: productsReducer,
  },
});
