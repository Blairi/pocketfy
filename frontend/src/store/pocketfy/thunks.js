import { loadLocalAccounts, loadLocalTransactions, saveLocalTransaction } from "../../service/local";
import { setAccounts, setSelectedAccount, setTransaction, setTransactions } from "./PocketfySlice";

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
  return async(dispatch) => {

    saveLocalTransaction(transaction);

    dispatch( setTransaction(transaction) );
  }
}

export const startLoadingTransactions = () => {
  return async(dispatch) => {

    let transactions = [];

    transactions = loadLocalTransactions();

    dispatch( setTransactions(transactions) );
  }
}