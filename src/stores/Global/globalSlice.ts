import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../index";

export enum ThemeType {
  LIGHT = 'light',
  DARK = 'dark'
}

interface GlobalState {
  theme: ThemeType
}

const localTheme = window.localStorage.getItem('DB-THEME-TYPE')
export const initialMediaTheme = window.matchMedia?.('(prefers-color-scheme: dark)')?.matches && !localTheme ? ThemeType.DARK : (localTheme ?? ThemeType.LIGHT)

const initialState: GlobalState = {
  theme: initialMediaTheme as ThemeType
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
