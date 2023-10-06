const data = [
  {
    id: 1,
    name: "food",
  },
  {
    id: 2,
    name: "health",
  },
  {
    id: 3,
    name: "education",
  },
  {
    id: 4,
    name: "transport",
  },
];

export const loadLocalExpensesCategories = () => {
  let expenses = localStorage.getItem("expenses");

  if (!expenses) {
    localStorage.setItem("expenses", JSON.stringify(data));
    expenses = localStorage.getItem("expenses");
  }

  return JSON.parse(expenses);
}
