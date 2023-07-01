
export const saveLocalTransaction = (transaction) => {

  const localTransactions = localStorage.getItem("transactions");

  const transactions = JSON.parse( localTransactions );
  transactions.push(transaction);

  localStorage.setItem("transactions", JSON.stringify(transactions));
}
