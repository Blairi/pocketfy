import { Route, Routes } from "react-router-dom"
import { PocketfyPage } from "../pages/PocketfyPage"

export const PocketfyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PocketfyPage />}/>
    </Routes>
  )
}
