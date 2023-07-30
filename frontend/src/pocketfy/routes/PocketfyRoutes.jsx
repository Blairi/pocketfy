import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { startLoadingApp } from "../../store/pocketfy/thunks"
import { PocketfyPage } from "../pages/PocketfyPage"
import { NewTransactionPage } from "../pages/TransactionPage"
import { BalancePage } from "../pages/BalancePage/BalancePage"

export const PocketfyRoutes = () => {

  const dispacth = useDispatch();

  useEffect(() => {
    dispacth( startLoadingApp() );
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<PocketfyPage />} />
      <Route path="/new-transaction/:type" element={<NewTransactionPage />} />
      <Route path="/balance" element={<BalancePage />} />
    </Routes>
  )
}
