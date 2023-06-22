import { useContext } from "react"
import { TransactionFormContext } from "../contexts/TransactionFormContext"

export const NewTransaction = () => {

  const { setShowTransactionForm } = useContext(TransactionFormContext);

  return (
    <div className="flex justify-between gap-5">

      <button 
        onClick={() => setShowTransactionForm(true)} 
        className="btn btn-error flex-grow text-lg"
      >-</button>

      <button 
        onClick={() => setShowTransactionForm(true)} 
        className="btn btn-success flex-grow text-lg"
      >+</button>

    </div>
  )
}
