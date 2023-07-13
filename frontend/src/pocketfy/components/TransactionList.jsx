
export const TransactionList = ({ transactions = [] }) => {
  console.log(transactions);
  return (
    <div>
      {
        transactions.map((transaction, index) => (
          <div className="flex gap-5">
          <div>
            {transaction.category}
          </div>
          <div>
            {transaction.amount}
          </div>
          </div>
        ))
      }
    </div>
  )
}
