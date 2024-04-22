import { useEffect } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { PocketfyPage } from "../pages/PocketfyPage"
import { NewTransactionPage } from "../pages/TransactionPage"
import { BalancePage } from "../pages/BalancePage/BalancePage"
import { usePocketfyStore } from "../../hooks"

export const PocketfyRoutes = () => {

  const { onStartLoadingApp } = usePocketfyStore();

  useEffect(() => {
    onStartLoadingApp();
  }, []);

  return (
    <Routes>
      <Route path="/" element={
        <div className="grid place-items-center w-screen h-screen">
          <div>
            <h1>Testing Deploy</h1>
            <Link to="/home" className="underline">Home</Link>
          </div>
        </div>
      } />
      <Route path="/home" element={<PocketfyPage />} />
      <Route path="/new-transaction/:type" element={<NewTransactionPage />} />
      <Route path="/balance" element={<BalancePage />} />
    </Routes>
  )
}
