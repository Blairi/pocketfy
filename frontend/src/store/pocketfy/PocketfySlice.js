import { createSlice } from '@reduxjs/toolkit';

export const pocketfySlice = createSlice({
  name: 'pocketfy',
  initialState: {
    accounts: [],
    accountSelected: null,
    dateFilterSelected: null,
    activeDate: null,
    transactions: [],
    activeTransactions : [],
    categories: {
      expenses: [
      ],
      incomes: [
      ],
    },
    isLoading: false,
  },
  reducers: {
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    setCategories: (state, action) => {
      state.categories.expenses = action.payload.expenses;
      state.categories.incomes = action.payload.incomes;
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
      state.activeDate = action.payload.date;
      state.dateFilterSelected = action.payload.filter;
      state.activeTransactions = action.payload.transactionsFiltered;
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
  setCategories,
  setIsLoading,
  setSelectedAccount, 
  setTransactions, 
  setActiveTransactionsByDateFilter, 
  setTransaction 
} = pocketfySlice.actions;