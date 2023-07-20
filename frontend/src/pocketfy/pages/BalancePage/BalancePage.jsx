import { useSelector } from "react-redux"
import { BackButton } from "../../../components";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { DateSelection } from "../PocketfyPage/components/DateSelection";

export const BalancePage = () => {

  const { activeTransactions, dateFilterSelected } = useSelector(state => state.pocketfy);

  const [transactionsSorted, setTransactionsSorted] = useState({});

  const sortTransactionsByDate = (transactions = []) => {

    const transactionsSorted = {};

    transactions.forEach((transaction) => {
      if (!transactionsSorted[transaction.date]) {
        transactionsSorted[transaction.date] = []
      }
      transactionsSorted[transaction.date].push(transaction);
    });
    console.log(transactions, transactionsSorted);
    return transactionsSorted;
  }

  useEffect(() => {
    setTransactionsSorted(sortTransactionsByDate(activeTransactions));
  }, [activeTransactions]);

  return (
    <div className="py-5 min-h-screen w-[90%] max-w-[1280px] mx-auto space-y-5">

      <BackButton />


      <div className="animate__animated animate__fadeInUp space-y-5">

        <div className="text-center">
          <h1 className="text-lg font-black">Transactions by {dateFilterSelected}</h1>
        </div>

        <div className="space-y-5">
          {
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
                        <p className="text-center">Category</p>
                        <p>Account</p>
                        <p className="text-right">Amount</p>
                      </div>
                    ))
                  }
                </div>

              </div>
            ))
          }
        </div>

      </div>
    </div>
  )
}
