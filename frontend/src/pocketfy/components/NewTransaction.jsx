import { useContext } from "react"
import { TransactionFormContext } from "../contexts/TransactionFormContext"

export const NewTransaction = () => {

  const { setShowTransactionForm, setTransactionType } = useContext(TransactionFormContext);

  const handleClick = (type) => {
    setTransactionType(type);
    setShowTransactionForm(true);
  }

  return (
    <div className="flex justify-between gap-5">

      <button 
        onClick={() => handleClick("Expense")} 
        className="btn btn-error flex-grow text-lg"
      >-</button>

      <button 
        onClick={() => handleClick("Income")} 
        className="btn btn-success flex-grow text-lg"
      >+</button>

    </div>
  )
}
