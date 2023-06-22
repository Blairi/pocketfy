import { Home } from "../components"
import { TransactionFormProvider } from "../contexts/TransactionFormProvider"
import { PocketfyLayout } from "../layout/PocketfyLayout"

export const PocketfyPage = () => {

  return (
    <PocketfyLayout>

      <TransactionFormProvider>

        <Home /> 

      </TransactionFormProvider>

    </PocketfyLayout>
  )
}
