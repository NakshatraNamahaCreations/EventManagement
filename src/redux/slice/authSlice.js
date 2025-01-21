import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: sessionStorage.getItem("isAuthenticated") === "true",
  },
  reducers: {
    login(state,action) {
      state.isAuthenticated = true;
      state.userId = action.payload;
      sessionStorage.setItem("isAuthenticated", "true");
      sessionStorage.setItem("userId", action.payload);
    },
    logout(state) {
      state.isAuthenticated = false;
      sessionStorage.removeItem("isAuthenticated");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
