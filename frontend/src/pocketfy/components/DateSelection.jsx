import { useContext, useState } from "react"
import { FilterContext } from "../contexts/FilterContext";
import { useEffect } from "react";

export const DateSelection = () => {

  const { date, setDate, filterSelected } = useContext(FilterContext);

  const [manipulate, setManipulate] = useState({amount: null, unit: null});

  useEffect(() => {

    if(filterSelected === "day") {
      setManipulate({amount: 1, unit: "day"});
    }

    if(filterSelected === "week") {
      setManipulate({amount: 7, unit: "day"});
    }

    if(filterSelected === "month") {
      setManipulate({amount: 30, unit: "day"});
    }

  }, [filterSelected]);

  return (
    <nav className="flex justify-between items-center">

      <button 
        className="btn btn-primary" 
        onClick={() => setDate(date.subtract(manipulate.amount, manipulate.unit))}
      >&#10094;</button>

      <span className="font-black">{date.format("DD/MMM/YYYY")}</span>

      <button 
        className="btn btn-primary" 
        onClick={() => setDate(date.add(manipulate.amount, manipulate.unit))}
      >&#10095;</button>
    </nav>
  )
}
