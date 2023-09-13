import { 
  setAccounts, setIsLoading, setSelectedAccount, setTransaction, 
  setTransactions, setActiveTransactionsByDateFilter, setCategories 
} from "./PocketfySlice";
import { loadLocalAccounts, loadLocalTransactions, saveLocalTransaction } from "../../service/local";
import { loadExpensesCategories, loadIncomesCategories } from "../../service/online";
import dayjs from "dayjs";

export const startLoadingApp = () => {
  return async(dispatch) => {
    dispatch( startLoadingAccounts() );
    dispatch( startSelectAccount(-1) ); // -1: All accounts
    dispatch( startLoadingTransactions() );
    dispatch( startSetActiveTransactionsByDateFilter(dayjs(), "day") );
    dispatch( startLoadingCategories() );
  }
}

export const startLoadingCategories = () => {
  return async(dispatch) => {
    dispatch( setIsLoading() );
    const expenses = await loadExpensesCategories();
    const incomes = await loadIncomesCategories();

    dispatch( setCategories({ expenses, incomes }) );
  }
}

export const startLoadingAccounts = () => {
  return async(dispatch) => {

    let accounts = [];

    accounts = loadLocalAccounts();

    dispatch( setAccounts(accounts) );
  }
}

export const startSelectAccount = (id) => {
  return async(dispatch, getState) => {

    const { accounts } = getState().pocketfy;

    const accountFound = accounts.find((account) => account.id === id);

    dispatch( setSelectedAccount(accountFound) );
  }
}

export const startSetTransaction = (transaction) => {
  return async(dispatch, getState) => {

    dispatch( setIsLoading() );

    const { activeDate, dateFilterSelected } = getState().pocketfy;

    saveLocalTransaction(transaction);

    dispatch( setTransaction(transaction) );

    // Update active transactions if the date of the transaction is the same that the date filter selected
    if (dayjs(activeDate).isSame(transaction.date, dateFilterSelected)) {
      dispatch( startSetActiveTransactionsByDateFilter( dayjs(activeDate), dateFilterSelected) );
    }
  }
}

export const startLoadingTransactions = () => {
  return async(dispatch) => {

    let transactions = [];

    transactions = loadLocalTransactions();

    dispatch( setTransactions(transactions) );
  }
}

export const startSetActiveTransactionsByDateFilter = (date = dayjs(), filter) => {
  return async(dispatch, getState) => {

    dispatch( setIsLoading() );

    const { transactions } = getState().pocketfy;

    const transactionsFiltered = transactions.filter(transaction => {
      if ( dayjs(transaction.date).isSame(date, filter) ) {
        return transaction;
      }
    });

    dispatch( setActiveTransactionsByDateFilter({ 
      transactionsFiltered, 
      filter, 
      date: date.startOf(filter).toString(),
    }));

  }
}