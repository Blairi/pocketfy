import { useDispatch, useSelector } from "react-redux"
import { startLoadingApp, startSelectAccount, startSetActiveTransactionsByDateFilter, startSetTransaction } from "../store/pocketfy/thunks";

export const usePocketfyStore = () => {
  const dispatch = useDispatch();

  const {
    accounts,
    accountSelected,
    categories,
    dateFilterSelected, 
    activeDate,
    activeTransactions,
    isLoading,
  } = useSelector(state => state.pocketfy);

  const onStartLoadingApp = () => {
    dispatch( startLoadingApp() );
  }

  const onStartSetTransaction = (transaction) => {
    dispatch( startSetTransaction(transaction) );
  }

  const onStartSelectAccount = (id) => {
    dispatch( startSelectAccount(id) );
  }

  const onStartSetActiveTransactionsByDateFilter = (date, filter) => {
    dispatch( startSetActiveTransactionsByDateFilter(date, filter) );
  }

  return {
    // Properties
    accounts,
    accountSelected,
    categories,
    dateFilterSelected, 
    activeDate,
    activeTransactions,
    isLoading,

    //Methods
    onStartLoadingApp,
    onStartSetTransaction,
    onStartSelectAccount,
    onStartSetActiveTransactionsByDateFilter,
  }
}
