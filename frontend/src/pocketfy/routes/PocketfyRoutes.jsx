import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { PocketfyPage } from "../pages/PocketfyPage"
import { NewTransactionPage, ResumeTransactionsPage } from "../pages/TransactionPage"
import { BalancePage } from "../pages/BalancePage/BalancePage"
import { usePocketfyStore } from "../../hooks"

export const PocketfyRoutes = () => {

  const { onStartLoadingApp } = usePocketfyStore();

  useEffect(() => {
    onStartLoadingApp();
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<PocketfyPage />} />
      <Route path="/new-transaction/:type" element={<NewTransactionPage />} />
      <Route path="/balance" element={<BalancePage />} />
      <Route path="/resume/:categoryId" element={<ResumeTransactionsPage />} />
    </Routes>
  )
}
