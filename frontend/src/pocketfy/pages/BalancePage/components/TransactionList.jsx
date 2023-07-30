import { useMemo } from "react";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

export const TransactionList = () => {

  const { activeTransactions } = useSelector(state => state.pocketfy);

  const transactionsSorted = useMemo(() => {

    return activeTransactions.reduce((sorted, transaction) => {
      const { date } = transaction;
      sorted[date] = sorted[date] || [];
      sorted[date].push(transaction);

      return sorted;
    }, {});

  }, [activeTransactions]);

  return (
    Object.keys(transactionsSorted).map((date, i) => (
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
            <span className="bg-primary py-1 px-2 rounded-md">
              {dayjs(date).format("dddd")}
            </span>
          </div>
        </div>

        <div className="py-2 px-3">
          {
            transactionsSorted[date].map((transaction, j) => (
              <div
                key={j}
                className="grid grid-cols-3"
              >
                <p className="text-center">{transaction.category.name}</p>
                <p>{transaction.account.name}</p>
                <p 
                  className={`text-right ${transaction.amount < 0 ? "text-red-500" : "text-green-500"}`}
                >{transaction.amount}</p>
              </div>
            ))
          }
        </div>

      </div>
    ))
  )
}
