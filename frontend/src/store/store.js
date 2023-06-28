import { configureStore } from '@reduxjs/toolkit'
import { pocketfySlice } from './pocketfy/PocketfySlice';

export const store = configureStore({
  reducer: {
    pocketfy: pocketfySlice.reducer,
  },
});