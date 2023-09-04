
export const calculateCategoriesAmountsDict = ({ transactions }) => {
  return transactions.reduce((dic, transaction) => {

    const { category, amount } = transaction;

    // Initialize the dictionary
    dic["incomes"] = dic["incomes"] || {};
    dic["expenses"] = dic["expenses"] || {};

    if (amount < 0) {
      const cat = categories.expenses.find(expense => expense.id == category);
      dic["expenses"][cat.name] = dic["expenses"][cat.name] || 0;
      dic["expenses"][cat.name] += amount;
      return dic;
    }

    const cat = categories.incomes.find(income => income.id == category);
    dic["incomes"][cat.name] = dic["incomes"][cat.name] || 0;
    dic["incomes"][cat.name] += amount;
    return dic;

  }, {});
}
