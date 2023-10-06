import { AccountSelector } from "./";
import { usePocketfyStore } from "../../hooks/usePocketfyStore";

export const FilterDrawer = () => {

  const { dateFilterSelected, onStartSetDateFilter, onStartSetToday } = usePocketfyStore();

  const handleToday = () => {
    onStartSetToday();
  }

  const setFilter = (filter) => {
    onStartSetDateFilter(filter);
  }

  return (
    <aside className="bg-base-100 w-[50%] h-full px-3 py-4">

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
          onChange={() => setFilter("day")}
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
          onChange={() => setFilter("week")}
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
          onChange={() => setFilter("month")}
        />

      </form>

      <div className="divider"></div>

      <button
        className="btn btn-outline btn-secondary w-full"
        onClick={handleToday}
      >Today</button>

    </aside>
  )
}
