import { useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { usePocketfyStore } from '../../../../hooks/usePocketfyStore';

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {

  const { activeTransactions } = usePocketfyStore();

  const categoriesDict = useMemo(() => {
    return activeTransactions.reduce((dict, transaction) => {

      const { category, amount } = transaction;

      if (amount < 0) {
        dict[category.name] = dict[category.name] || 0;
        dict[category.name] += amount;
      }

      return dict;
    }, {});
  }, [activeTransactions]);

  const data = {
    labels: Object.keys(categoriesDict),
    datasets: [
      {
        label: '# of Votes',
        data: Object.values(categoriesDict),
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
      },
    ],
  };

  return (
    <Pie data={data} />
  )
}
