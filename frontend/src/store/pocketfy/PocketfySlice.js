import { createSlice } from '@reduxjs/toolkit';

export const pocketfySlice = createSlice({
  name: 'pocketfy',
  initialState: {
    accounts: [],
    accountSelected: null,
  },
  reducers: {
    setAccounts: (state, action ) => {
      state.accounts = action.payload;
    },
    setSelectedAccount: (state, action) => {
      state.accountSelected = action.payload;
    },
  }
});

// Action creators are generated for each case reducer function
export const { setAccounts, setSelectedAccount } = pocketfySlice.actions;