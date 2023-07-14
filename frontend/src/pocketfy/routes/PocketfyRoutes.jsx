import { Route, Routes } from "react-router-dom"
import { PocketfyPage } from "../pages/PocketfyPage"


export const PocketfyRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<PocketfyPage />} />
    </Routes>
  )
}
