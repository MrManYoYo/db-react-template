import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

export enum ThemeType {
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

export const selectTheme = (state: RootState) => state.global.theme

export const { toggleTheme } = globalSlice.actions
