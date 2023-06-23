import { Route, Routes } from "react-router-dom"
import { PocketfyPage } from "../pages/PocketfyPage"
import { FilterProvider } from "../contexts/FilterProvider";


export const PocketfyRoutes = () => {
  return (
    <Routes>
      
        <Route path="/" element={
          <FilterProvider><PocketfyPage /></FilterProvider>
        }/>
    </Routes>
  )
}
