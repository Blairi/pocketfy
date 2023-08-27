import { useMemo, useState } from "react";;
import { PieChart, PieTransactionTypeSelector } from "./";
import { usePocketfyStore } from "../../../../hooks";

export const TransactionsPie = () => {

  const { categories, activeTransactions } = usePocketfyStore();

  const [type, setType] = useState("expenses");

  const data = useMemo(() => {

    if (activeTransactions.length === 0) {
      return null;
    }

    const dictionary = activeTransactions.reduce((dic, transaction) => {

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

    return {
      labels: Object.keys(dictionary[type]),
      datasets: [
        {
          label: 'Amount',
          data: Object.values(dictionary[type]),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        }
      ]
    };

  }, [activeTransactions, type]);

  return (
    <div className="space-y-5">

      <PieTransactionTypeSelector
        setType={setType}
        type={type}
      />

      {
        Boolean(data) && <PieChart data={data} />
      }

    </div>
  )
}
