import { useMemo } from "react";
import { usePocketfyStore } from "../../../../hooks";
import dayjs from "dayjs";

export const TransactionList = () => {

  const { activeTransactions } = usePocketfyStore();

  const transactionsSorted = useMemo(() => {

    return activeTransactions.reduce((sorted, transaction) => {

      const { date } = transaction;
      sorted[date] = sorted[date] || {};

      // Balance dictionary
      sorted[date]["balance"] = sorted[date]["balance"] || {};
      sorted[date]["balance"]["expenses"] = sorted[date]["balance"]["expenses"] || 0;
      sorted[date]["balance"]["incomes"] = sorted[date]["balance"]["incomes"] || 0;
      sorted[date]["balance"]["total"] = sorted[date]["balance"]["total"] || 0;

      // Total expenses
      if (transaction.amount < 0) {
        sorted[date]["balance"]["expenses"] += transaction.amount;
      }
      // Total incomes
      else {
        sorted[date]["balance"]["incomes"] += transaction.amount;
      }

      // Total balance
      sorted[date]["balance"]["total"] += transaction.amount;

      sorted[date]["transactions"] = sorted[date]["transactions"] || [];
      sorted[date]["transactions"].push(transaction);

      return sorted;
    }, {});

  }, [activeTransactions]);

  return (
    <div className="space-y-5">
      {
        Object.keys(transactionsSorted).sort().map((date, i) => (
          <div
            key={i}
            className="bg-neutral p-1 rounded-md animate__animated animate__fadeInRight"
          >
            <div
              className="border-b-2 border-gray-700 px-1 py-2"
            >
              <div className="font-black flex items-center justify-between">
                <p className="space-x-2">
                  <span className="bg-base-100 py-1 px-2 rounded-md mr-1">
                    {dayjs(date).format("MMM")}
                  </span>
                  {dayjs(date).format("DD")}
                </p>
                <div className="flex items-center gap-5">
                  <div className="space-x-3">
                    {
                      transactionsSorted[date].balance.expenses !== 0
                      && <span className="text-red-500">$ {transactionsSorted[date].balance.expenses}</span>
                    }
                    {
                      transactionsSorted[date].balance.incomes !== 0
                      && <span className="text-green-500">$ {transactionsSorted[date].balance.incomes}</span>
                    }
                  </div>
                  <span className="bg-primary py-1 px-2 rounded-md">
                    {dayjs(date).format("dddd")}
                  </span>
                </div>
              </div>
            </div>

            <div className="py-2 px-3">
              {
                transactionsSorted[date].transactions.map((transaction, j) => (
                  <div
                    key={j}
                    className="grid grid-cols-3"
                  >
                    <p className="text-center">{transaction.category}</p>
                    <p>{transaction.account}</p>
                    <p
                      className={`text-right ${transaction.amount < 0 ? "text-red-500" : "text-green-500"}`}
                    >$ {transaction.amount}</p>
                  </div>
                ))
              }
            </div>

            <div className="px-3 py-1 text-right">
              <p className="text-sm">
                Balance: <span className="text-base font-bold">$ {transactionsSorted[date].balance.total}</span>
              </p>
            </div>

          </div>
        ))
      }
    </div>
  )
}
