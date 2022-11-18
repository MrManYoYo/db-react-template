import { createSlice, PayloadAction } from "@reduxjs/toolkit";

enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark'
}

interface GlobalState {
  theme: ThemeType
}

const initialState: GlobalState = {
  theme: ThemeType.LIGHT
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleTheme: (state, action: PayloadAction<ThemeType>) => {
      state.theme = action.payload
    }
  }
})

