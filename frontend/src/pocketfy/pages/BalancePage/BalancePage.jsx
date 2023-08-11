import { BackButton } from "../../../components";
import { TotalBalance } from "../../components";
import { TransactionList } from "./components";
import { PocketfyLayout } from "../../layout/PocketfyLayout";
import { usePocketfyStore } from "../../../hooks";

export const BalancePage = () => {

  const { activeTransactions } = usePocketfyStore();

  return (
    <PocketfyLayout>
      <div className="space-y-5">
        <BackButton />

        <TotalBalance />

        <div className="pb-20">
          {
            activeTransactions.length === 0
              ?
              <div className="text-center">
                <p>Not have transaction in this date yet, create a new one!</p>
              </div>
              : <TransactionList />
          }
        </div>
      </div>
    </PocketfyLayout>
  )
}
