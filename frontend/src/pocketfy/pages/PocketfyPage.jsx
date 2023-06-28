import { useContext, useEffect } from "react";
import { FilterDrawer, Home, Navbar } from "../components"
import { FilterContext } from "../contexts/FilterContext";
import { TransactionFormProvider } from "../contexts/TransactionFormProvider"
import { PocketfyLayout } from "../layout/PocketfyLayout"
import { useDispatch } from 'react-redux';
import { startLoadingAccounts, startSelectAccount } from "../../store/pocketfy/thunks";

export const PocketfyPage = () => {

  const { showFilter } = useContext(FilterContext);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch( startLoadingAccounts() );
    dispatch( startSelectAccount(-1) );
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
