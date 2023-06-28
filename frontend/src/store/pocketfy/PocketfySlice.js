import { createSlice } from '@reduxjs/toolkit';

export const pocketfySlice = createSlice({
  name: 'pocketfy',
  initialState: {
    accounts: []
  },
  reducers: {
    setAccounts: (state, action ) => {
      state.accounts = action.payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { setAccounts } = pocketfySlice.actions;