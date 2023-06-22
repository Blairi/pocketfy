import { useContext } from "react";
import { TransactionFormContext } from "../contexts/TransactionFormContext";

export const TransactionForm = () => {

  const { setShowTransactionForm } = useContext(TransactionFormContext);

  return (
    <div className="bg-base-300 animate__animated animate__fadeInUp rounded-md overflow-hidden">

      <div className="bg-primary flex items-center justify-between p-2">

        <h2 className="text-lg font-black">New Transaction</h2>

        <button 
          onClick={() => setShowTransactionForm(false)}
          className="btn btn-square btn-outline ml-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

      </div>

      TransactionForm

    </div>
  )
}
