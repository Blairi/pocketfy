
export const PieTransactionTypeSelector = ({ type, setType }) => {
  return (
    <div className="grid grid-cols-2 gap-5">
      <button
        onClick={() => setType("expenses")}
        className={`rounded-md py-1 ${type === "expenses" ? "bg-red-500 text-white" : "bg-red-800 text-base-content"}`}
      >Expenses</button>
      <button
        onClick={() => setType("incomes")}
        className={`rounded-md py-1 ${type === "incomes" ? "bg-green-500 text-white" : "bg-green-800 text-base-content"}`}
      >Incomes</button>
    </div>
    
  )
}
