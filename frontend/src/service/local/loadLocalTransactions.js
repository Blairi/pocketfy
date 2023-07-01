
export const loadLocalTransactions = () => {
  let transactions = localStorage.getItem("transactions");

  if(!transactions) {
    localStorage.setItem("transactions", JSON.stringify([]));
    transactions = localStorage.getItem("transactions");
  }

  return JSON.parse(transactions);
}
