
export const TransactionList = ({ transactions = [] }) => {
  console.log(transactions);
  return (
    <div className="">
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Account</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.map((transaction, index) => (
              <tr
                key={ index }
              >
                <th>{transaction.date}</th>
                <th>{transaction.category}</th>
                <th>{transaction.account}</th>
                <th>{transaction.amount}</th>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
