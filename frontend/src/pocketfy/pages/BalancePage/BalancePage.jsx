import { useSelector } from "react-redux"
import { BackButton } from "../../../components";
import { DateFilterSelection, DateSelection, TotalBalance } from "../../components";
import { TransactionList } from "./components";

export const BalancePage = () => {

  const { activeTransactions } = useSelector(state => state.pocketfy);

  return (
    <div className="py-5 min-h-screen w-[90%] max-w-[1280px] mx-auto space-y-5">

      <BackButton />

      <div className="animate__animated animate__fadeInUp space-y-5">

        <DateSelection />

        <TotalBalance />

        <DateFilterSelection />

        <div className="space-y-5">
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
    </div>
  )
}
