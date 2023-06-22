import { useState } from "react";
import { TransactionFormContext } from "./TransactionFormContext"

export const TransactionFormProvider = ({ children }) => {

  const [showTransactionForm, setShowTransactionForm] = useState(false);

  return (
    <TransactionFormContext.Provider value={{showTransactionForm, setShowTransactionForm}}>
      { children }
    </TransactionFormContext.Provider>
  )
}
