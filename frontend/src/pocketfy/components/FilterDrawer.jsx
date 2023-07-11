import { useContext, useState } from "react";
import { FilterContext } from "../contexts/FilterContext";
import { AccountSelector } from "./AccountSelector";
import { useDispatch, useSelector } from "react-redux";
import { startSetActiveTransactionsByDateFilter } from "../../store/pocketfy/thunks";
import dayjs from "dayjs";

export const FilterDrawer = () => {

  const { setShowFilter} = useContext(FilterContext);

  const { dateFilterSelected, activeDate } = useSelector(state => state.pocketfy);

  const dispacth = useDispatch();

  const [isHiding, setIsHiding] = useState(false);

  const handleContainerClick = (e) => {
    if (e.target === e.currentTarget) {

      // Fade out animation
      setIsHiding(true);
      
      setTimeout(() => {
        setShowFilter(false);
      }, 800);
    }
  };

  const handleToday = () => {

    dispacth( startSetActiveTransactionsByDateFilter(dayjs(), "day") );

    // Fade out animation
    setIsHiding(true);
      
    setTimeout(() => {
      setShowFilter(false);
    }, 800);
  }

  const setFilter = (filter) => {

    // Fade out animation
    setIsHiding(true);

    dispacth( startSetActiveTransactionsByDateFilter(dayjs(activeDate), filter) );
      
    setTimeout(() => {
      setShowFilter(false);
    }, 800);
  }

  return (
    <div
      onClick={ handleContainerClick }
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      className={`h-screen w-screen fixed top-0 left-0 z-10 animate__animated
        ${isHiding ? "animate__fadeOut" : "animate__fadeIn"}`
      }
    >
      <aside 
        className={`opacity-100 bg-base-300 w-2/4 h-full p-5 animate__animated 
          ${isHiding ? "animate__fadeOutLeft" : "animate__fadeInLeft"}`
      }
      >

        <AccountSelector />

        <div className="divider"></div>

        <form className="flex flex-col gap-5">

          <label 
            className={`btn btn-outline btn-secondary 
              ${dateFilterSelected === "day" ? "btn-active" : ""}`
            } 
            htmlFor="day"
          >Day</label>
          <input 
            type="radio" 
            name="filter" 
            id="day" 
            className="hidden" 
            onChange={()=> setFilter("day")}
          />

          <label 
            className={`btn btn-outline btn-secondary 
              ${dateFilterSelected === "week" ? "btn-active" : ""}`
            } 
            htmlFor="week"
          >Week</label>
          <input 
            type="radio" 
            name="filter" 
            id="week" 
            className="hidden" 
            onChange={()=> setFilter("week")}
          />

          <label 
            className={`btn btn-outline btn-secondary 
              ${dateFilterSelected === "month" ? "btn-active" : ""}`
            } 
            htmlFor="month"
          >Month</label>
          <input 
            type="radio" 
            name="filter" 
            id="month" 
            className="hidden" 
            onChange={()=> setFilter("month")}
          />

        </form>

        <div className="divider"></div>

        <button 
          className="btn btn-outline btn-secondary w-full"
          onClick={ handleToday }
        >Today</button>

      </aside>
    </div>
  )
}
