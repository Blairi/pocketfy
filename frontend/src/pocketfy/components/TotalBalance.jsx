import { useMemo } from "react";
import { useSelector } from "react-redux";

export const TotalBalance = () => {

  const { activeTransactions, dateFilterSelected } = useSelector(state => state.pocketfy);

  const balance = useMemo(() => {
    return activeTransactions.reduce((balance, transaction) => {

      balance["expenses"] = balance["expenses"] || 0;
      balance["incomes"] = balance["incomes"] || 0;
      balance["total"] = balance["total"] || 0;

      if (transaction.amount < 0) {
        balance.expenses += transaction.amount;
      } else {
        balance.incomes += transaction.amount;
      }

      balance.total += transaction.amount;

      return balance;

    }, {});
  }, [activeTransactions]);

  return (
    <div className="bg-neutral py-2 rounded-md">
      <header className="text-center">
        <p className="text-neutral-content">
          Balance of
          <span className="font-extrabold"> {dateFilterSelected}</span>
        </p>
      </header>
      <div className="grid grid-cols-3">
        <div className="flex flex-col items-center">
          <p className="text-red-500">Expenses</p>
          <span>{balance.expenses}</span>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-green-500">Incomes</p>
          <span>{balance.incomes}</span>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-blue-500">Total</p>
          <span>{balance.total}</span>
        </div>
      </div>
    </div>
  )
}
