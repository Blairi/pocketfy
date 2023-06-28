import { useContext } from "react"
import { DateSelection, NewTransaction, PieChart, TransactionForm } from "../components"
import { TransactionFormContext } from "../contexts/TransactionFormContext";
import { useSelector } from "react-redux";

export const Home = () => {

  const { showTransactionForm } = useContext(TransactionFormContext);
  const { accountSelected } = useSelector(state => state.pocketfy);

  return (
    <>

      <main className="space-y-10 mt-5">

        {
          showTransactionForm
          ? <TransactionForm />

          : (
            <div className="animate__animated animate__fadeInUp space-y-10">

              <DateSelection />

              <div>
                <span className="text-xs">Account Selected</span>
                <h2 className="text-lg text-primary font-black">{accountSelected?.name}</h2>
              </div>

              <PieChart />

              <NewTransaction />
            </div>
          )
        }

      </main>
    </>
  )
}
