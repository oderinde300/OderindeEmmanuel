import { configureStore } from "@reduxjs/toolkit";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  isDarkMode: boolean;
}

const initialState: ThemeState = {
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
  },
});
