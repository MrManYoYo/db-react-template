import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { globalSlice } from '@/stores/Global/globalSlice';

export const store = configureStore({
  reducer: {
    [globalSlice.name]: globalSlice.reducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
