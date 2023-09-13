const data = [
  {
    id: 1,
    name: "salary",
  },
  {
    id: 2,
    name: "gifts",
  },
  {
    id: 3,
    name: "allowance",
  },
  {
    id: 4,
    name: "Bonus",
  },
];

export const loadLocalIncomesCategories = () => {

  let incomes = localStorage.getItem("incomes");

  if (!incomes) {
    localStorage.setItem("incomes", JSON.stringify(data));
    incomes = localStorage.getItem("incomes");
  }

  return JSON.parse(incomes);

}
