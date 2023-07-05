import { useContext, useEffect } from "react";
import { FilterDrawer, Home, Navbar } from "../components"
import { FilterContext } from "../contexts/FilterContext";
import { TransactionFormProvider } from "../contexts/TransactionFormProvider"
import { PocketfyLayout } from "../layout/PocketfyLayout"
import { useDispatch } from 'react-redux';
import { startLoadingAccounts, startLoadingTransactions, startSelectAccount, startSetActiveTransactionsByDateFilter } from "../../store/pocketfy/thunks";
import dayjs from "dayjs";

export const PocketfyPage = () => {

  const { showFilter } = useContext(FilterContext);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( startLoadingAccounts() );
    dispatch( startSelectAccount(-1) );
    dispatch( startLoadingTransactions() );
    dispatch( startSetActiveTransactionsByDateFilter(dayjs(), "day") );
  }, [])

  return (
    <PocketfyLayout>

      <TransactionFormProvider>

        {showFilter && <FilterDrawer />}

        <Navbar />
        <Home /> 

      </TransactionFormProvider>

    </PocketfyLayout>
  )
}
