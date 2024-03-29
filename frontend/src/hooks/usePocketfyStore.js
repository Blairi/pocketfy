import { useDispatch, useSelector } from "react-redux"
import { startLoadingApp, startSetActiveTransactions, startSetTransaction } from "../store/pocketfy/thunks";
import { setActiveDate, setDateFilterSelected, setSelectedAccount } from "../store/pocketfy/PocketfySlice";
import dayjs from "dayjs";

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

  const onStartSelectAccount = (account) => {
    dispatch( setSelectedAccount(account) );
    dispatch( startSetActiveTransactions() );
  }

  const onStartSetToday = () => {
    dispatch( setDateFilterSelected("day") );
    dispatch( setActiveDate( dayjs().toString() ) );
  }

  const onStartSetDateFilter = (filter) => {
    dispatch( setDateFilterSelected(filter) );
    dispatch( startSetActiveTransactions() );
  }

  const onStartSetActiveDate = (date) => {
    dispatch( setActiveDate(date) );
    dispatch( startSetActiveTransactions() );
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
    onStartSetDateFilter,
    onStartSetToday,
    onStartSetActiveDate,
  }
}
