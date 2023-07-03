import { useState } from "react";
import { TransactionFormContext } from "./TransactionFormContext"

export const TransactionFormProvider = ({ children }) => {

  const [showTransactionForm, setShowTransactionForm] = useState(false);
  const [transactionType, setTransactionType] = useState("");

  return (
    <TransactionFormContext.Provider value={{
      showTransactionForm, setShowTransactionForm,
      transactionType, setTransactionType,
    }}>
      { children }
    </TransactionFormContext.Provider>
  )
}
