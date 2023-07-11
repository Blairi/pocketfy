import { useState } from "react"
import { FilterContext } from "./FilterContext";

export const FilterProvider = ({ children }) => {

  const [showFilter, setShowFilter] = useState(false);

  return (
    <FilterContext.Provider value={
      {showFilter, setShowFilter}
    }>
      { children }
    </FilterContext.Provider>
  )
}
