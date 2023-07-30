import { useSelector } from "react-redux"
import { BackButton } from "../../../components";
import { DateFilterSelection, DateSelection } from "../../components";
import { TransactionList } from "./components";

export const BalancePage = () => {

  const { activeTransactions, dateFilterSelected } = useSelector(state => state.pocketfy);

  return (
    <div className="py-5 min-h-screen w-[90%] max-w-[1280px] mx-auto space-y-5">

      <BackButton />

      <div className="animate__animated animate__fadeInUp space-y-5">

        <DateSelection />

        <div className="text-center">
          <h1 className="text-lg font-black">Transactions by {dateFilterSelected}</h1>
        </div>

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
