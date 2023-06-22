import { Route, Routes } from "react-router-dom"
import { PocketfyRoutes } from "../pocketfy/routes/PocketfyRoutes"

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<PocketfyRoutes />}/>
    </Routes>
  )
}
