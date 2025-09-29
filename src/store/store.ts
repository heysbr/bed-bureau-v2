import { configureStore } from "@reduxjs/toolkit";
import adminReducer, { checkAdmin } from "./reducerSlice/adminReducer";
import { getProfile } from "./actions/adminAction";

// Create store
export const store = configureStore({
  reducer: {
    admin: adminReducer,
  },
});

// Infer types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// 🔑 Hydrate store with localStorage
const authDetail = localStorage.getItem("authorization");

if (authDetail) {
  store.dispatch(checkAdmin(authDetail));

  try {
    const token = JSON.parse(authDetail).token;
    console.log("token", token);
    store.dispatch(getProfile());
  } catch (error) {
    console.error("Invalid authorization token in localStorage", error);
  }
}

export default store;
