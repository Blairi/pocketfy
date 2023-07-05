import { createSlice } from '@reduxjs/toolkit';

export const pocketfySlice = createSlice({
  name: 'pocketfy',
  initialState: {
    accounts: [],
    accountSelected: null,
    transactions: [],
    activeTransactions : [],
    isLoading: false,
  },
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    setAccounts: (state, action ) => {
      state.accounts = action.payload;
    },
    setSelectedAccount: (state, action) => {
      state.accountSelected = action.payload;
    },
    setTransactions: (state, action) => {
      state.transactions = action.payload;
    },
    setActiveTransactionsByDateFilter: (state, action) => {
      state.activeTransactions = action.payload;
      state.isLoading = false;
    },
    setTransaction: (state, action) => {
      state.transactions.push( action.payload );
      state.isLoading = false;
    },
  }
});

// Action creators are generated for each case reducer function
export const { 
  setAccounts, 
  setIsLoading,
  setSelectedAccount, 
  setTransactions, 
  setActiveTransactionsByDateFilter, 
  setTransaction 
} = pocketfySlice.actions;