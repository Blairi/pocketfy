import { useContext, useState } from "react"
import { FilterContext } from "../contexts/FilterContext";
import { useEffect } from "react";

export const DateSelection = () => {

  const { date, setDate, filterSelected } = useContext(FilterContext);

  const [unit, setUnit] = useState(filterSelected);

  useEffect(() => {

    if(filterSelected === "day") {
      setUnit("day");
    }

    if(filterSelected === "week") {
      setDate(date.startOf("week"));
      setUnit("week");
    }

    if(filterSelected === "month") {
      setDate(date.startOf("month"));
      setUnit("month");
    }

  }, [filterSelected]);

  return (
    <nav className="flex justify-between items-center">

      <button 
        className="btn btn-primary" 
        onClick={() => setDate(date.subtract(1, unit))}
      >&#10094;</button>

      <span className="font-black">
        {
          filterSelected === "day" ? date.format("DD/MMM/YYYY") :
          filterSelected === "week" ? ( date.format("DD/MMM/YYYY") + " - " + date.endOf("week").format("DD/MMM/YYYY") ) :
          filterSelected === "month" ? date.format("MMMM/YYYY") : ""
        }
      </span>

      <button 
        className="btn btn-primary" 
        onClick={() => setDate(date.add(1, unit))}
      >&#10095;</button>
    </nav>
  )
}
