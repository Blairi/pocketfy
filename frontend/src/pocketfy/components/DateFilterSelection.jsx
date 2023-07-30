import { useDispatch, useSelector } from "react-redux";
import { startSetActiveTransactionsByDateFilter } from "../../store/pocketfy/thunks";
import dayjs from "dayjs";

export const DateFilterSelection = () => {

  const { dateFilterSelected, activeDate } = useSelector(state => state.pocketfy);

  const dispacth = useDispatch();

  const setFilter = (filter) => {
    dispacth(startSetActiveTransactionsByDateFilter(dayjs(activeDate), filter));
  }

  return (
    <form className="grid grid-cols-3 gap-3">
      <label 
        htmlFor="day" 
        className={`p-1 text-center rounded-md font-bold transition hover:bg-secondary-focus hover:text-white cursor-pointer animate__animated animate__backInRight day-filter ${dateFilterSelected === "day" ? "bg-secondary text-white" : "bg-neutral"}`}
      >Day</label>
      <input
        className="hidden"
        type="radio"
        name="filter"
        id="day"
        onChange={() => setFilter("day")}
      />
      <label 
        htmlFor="week" 
        className={`p-1 text-center rounded-md font-bold transition hover:bg-secondary-focus hover:text-white cursor-pointer animate__animated animate__backInRight week-filter ${dateFilterSelected === "week" ? "bg-secondary text-white" : "bg-neutral"}`}
      >Week</label>
      <input
        className="hidden"
        type="radio"
        name="filter"
        id="week"
        onChange={() => setFilter("week")}
      />
      <label 
        htmlFor="month" 
        className={`p-1 text-center rounded-md font-bold transition hover:bg-secondary-focus hover:text-white cursor-pointer animate__animated animate__backInRight month-filter ${dateFilterSelected === "month" ? "bg-secondary text-white" : "bg-neutral"}`}
      >Month</label>
      <input
        className="hidden"
        type="radio"
        name="filter"
        id="month"
        onChange={() => setFilter("month")}
      />
    </form>
  )
}
