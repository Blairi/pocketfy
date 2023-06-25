import { useContext, useState } from "react";
import { FilterContext } from "../contexts/FilterContext";

export const FilterDrawer = () => {

  const { setShowFilter, filterSelected, setFilterSelected } = useContext(FilterContext);

  const [isHiding, setIsHiding] = useState(false);

  const handleContainerClick = (e) => {
    if (e.target === e.currentTarget) {

      setIsHiding(true);
      
      setTimeout(() => {
        setShowFilter(false);
      }, 800);
    }
  };

  return (
    <div
      onClick={handleContainerClick}
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

          <div className="dropdown flex">
            <button className="btn btn-outline btn-accent w-full">All accounts</button>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex gap-3">
              <li><button className="btn btn-outline btn-accent">Cash</button></li>
              <li><button className="btn btn-outline btn-accent">Visa</button></li>
            </ul>
          </div>

        <div className="divider"></div>

        <form className="flex flex-col gap-5">

          <label 
            className={`btn btn-outline btn-secondary 
              ${filterSelected === "day" ? "btn-active" : ""}`
            } 
            htmlFor="day"
          >Day</label>
          <input 
            type="radio" 
            name="filter" 
            id="day" 
            className="hidden" 
            onChange={()=> setFilterSelected("day")}
          />

          <label 
            className={`btn btn-outline btn-secondary 
              ${filterSelected === "week" ? "btn-active" : ""}`
            } 
            htmlFor="week"
          >Week</label>
          <input 
            type="radio" 
            name="filter" 
            id="week" 
            className="hidden" 
            onChange={()=> setFilterSelected("week")}
          />

          <label 
            className={`btn btn-outline btn-secondary 
              ${filterSelected === "month" ? "btn-active" : ""}`
            } 
            htmlFor="month"
          >Month</label>
          <input 
            type="radio" 
            name="filter" 
            id="month" 
            className="hidden" 
            onChange={()=> setFilterSelected("month")}
          />

        </form>

      </aside>
    </div>
  )
}
