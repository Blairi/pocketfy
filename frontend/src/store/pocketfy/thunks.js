import { 
  setAccounts, setIsLoading, setSelectedAccount, setTransaction, 
  setTransactions, setActiveTransactionsByDateFilter, setCategories, setActiveTransactions, setActiveDate, setDateFilterSelected 
} from "./PocketfySlice";
import { loadLocalAccounts, loadLocalTransactions, saveLocalTransaction } from "../../service/local";
import { loadExpensesCategories, loadIncomesCategories } from "../../service/online";
import dayjs from "dayjs";

export const startLoadingApp = () => {
  return async(dispatch) => {
    dispatch( startLoadingAccounts() );
    dispatch( startLoadingTransactions() );
    dispatch( startLoadingCategories() );
    
    // TODO: load the args from the user's preference
    dispatch( setActiveDate(dayjs().toString()) );
    dispatch( setDateFilterSelected("day") );
    dispatch( setSelectedAccount({id: 1, name: "default"}) );

    dispatch( startSetActiveTransactions() );
  }
}

export const startSetActiveTransactions = () => {
  return async(dispatch, getState) => {

    const { 
      transactions, 
      activeDate, dateFilterSelected, accountSelected 
    } = getState().pocketfy;

    let activeTransactions = transactions.filter((transaction) => (
      dayjs(transaction.date).isSame(activeDate, dateFilterSelected)
      &&
      transaction.account === accountSelected.id
    ));

    dispatch(setActiveTransactions( activeTransactions ));
  }
}

export const startLoadingCategories = () => {
  return async(dispatch) => {
    const expenses = loadExpensesCategories();
    const incomes = loadIncomesCategories();

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
    dispatch( startSetActiveTransactions() );
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