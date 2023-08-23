import { useMemo } from "react"
import { usePocketfyStore } from "../../../../hooks";

export const TransactionListItem = ({ transaction }) => {

  const { categories, accounts } = usePocketfyStore();

  const category = useMemo(() => {
    if (transaction.amount < 0) {
      return categories.expenses.find(expense => expense.id == transaction.category);
    }
    return categories.incomes.find(income => income.id == transaction.category);
  }, []);

  const account = useMemo(() => (
    accounts.find(account => account.id == transaction.account)
  ), []);

  return (
    <div
      className="grid grid-cols-3"
    >
      <p className="text-center">{category.name}</p>
      <p>{account.name}</p>
      <p
        className={`text-right ${transaction.amount < 0 ? "text-red-500" : "text-green-500"}`}
      >$ {transaction.amount}</p>
    </div>
  )
}
