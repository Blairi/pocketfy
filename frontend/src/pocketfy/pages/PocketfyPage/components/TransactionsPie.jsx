import { useMemo, useState } from "react";;
import { PieChart, PieTransactionTypeSelector, Resume } from "./";
import { usePocketfyStore } from "../../../../hooks";
import { calculateCategoriesAmountsDict } from "../../../../helpers";

export const TransactionsPie = () => {

  const { categories, activeTransactions } = usePocketfyStore();

  const [type, setType] = useState("expenses");

  const dictCategoriesAmounts = useMemo(() => 
    calculateCategoriesAmountsDict(activeTransactions, categories), [activeTransactions, type]
  );

  return (
    <div className="animate__animated animate__fadeInUp py-2 space-y-5">

      {
        Object.keys(dictCategoriesAmounts).length > 0 && (
          <>
            <PieTransactionTypeSelector
              setType={setType}
              type={type}
              categoriesAmounts={dictCategoriesAmounts}
            />
            <PieChart categoriesAmounts={ dictCategoriesAmounts } type={type} />
            <Resume amounts={ dictCategoriesAmounts } type={type} />
          </>
        )
      }

    </div>
  )
}
