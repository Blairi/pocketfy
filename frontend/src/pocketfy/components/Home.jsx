import { useContext } from "react"
import { DateSelection, NewTransaction, PieChart, TransactionForm } from "../components"
import { TransactionFormContext } from "../contexts/TransactionFormContext";

export const Home = () => {

  const { showTransactionForm } = useContext(TransactionFormContext);

  return (
    <>

      <main className="space-y-10 mt-5">

        {
          showTransactionForm
          ? <TransactionForm />

          : (
            <div className="animate__animated animate__fadeInUp space-y-10">
              <DateSelection />
              <PieChart />
              <NewTransaction />
            </div>
          )
        }

      </main>
    </>
  )
}
