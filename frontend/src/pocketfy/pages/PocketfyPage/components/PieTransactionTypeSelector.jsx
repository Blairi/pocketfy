import { useEffect } from "react";

export const PieTransactionTypeSelector = ({ type, setType, categoriesAmounts }) => {

  useEffect(() => {
    if (Object.keys(categoriesAmounts["expenses"]) <= 0) {
      setType("incomes");
    }
    if (Object.keys(categoriesAmounts["incomes"]) <= 0) {
      setType("expenses");
    }
  }, [categoriesAmounts]);

  return (
    <div className="grid grid-cols-2 gap-5">
      <button
        onClick={() => setType("expenses")}
        disabled={Object.keys(categoriesAmounts["expenses"]) <= 0}
        className={`rounded-md py-1 ${type === "expenses" ? "bg-red-500 text-white" : "bg-red-800 text-base-content"}`}
      >Expenses</button>
      <button
        onClick={() => setType("incomes")}
        disabled={Object.keys(categoriesAmounts["incomes"]) <= 0}
        className={`rounded-md py-1 ${type === "incomes" ? "bg-green-500 text-white" : "bg-green-800 text-base-content"}`}
      >Incomes</button>
    </div>
    
  )
}
