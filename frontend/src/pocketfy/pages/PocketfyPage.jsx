import { useContext } from "react";
import { FilterDrawer, Home, Navbar } from "../components"
import { FilterContext } from "../contexts/FilterContext";
import { TransactionFormProvider } from "../contexts/TransactionFormProvider"
import { PocketfyLayout } from "../layout/PocketfyLayout"

export const PocketfyPage = () => {

  const { showFilter } = useContext(FilterContext);

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
