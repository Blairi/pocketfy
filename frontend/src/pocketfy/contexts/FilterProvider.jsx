import { useState } from "react"
import { FilterContext } from "./FilterContext";
import dayjs from 'dayjs'

export const FilterProvider = ({ children }) => {

  const [showFilter, setShowFilter] = useState(false);

  const [filterSelected, setFilterSelected] = useState("day");
  
  const [date, setDate] = useState(dayjs());

  return (
    <FilterContext.Provider value={
      {showFilter, setShowFilter, date, setDate, filterSelected, setFilterSelected}
    }>
      { children }
    </FilterContext.Provider>
  )
}
