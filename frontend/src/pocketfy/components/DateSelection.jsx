import { usePocketfyStore } from "../../hooks/usePocketfyStore";
import dayjs from "dayjs";

export const DateSelection = () => {

  const { dateFilterSelected, activeDate, onStartSetActiveTransactionsByDateFilter } = usePocketfyStore();

  const manipulateDate = (add = true) => {
    let date = dayjs(activeDate);

    if(add)
      date = date.add(1, dateFilterSelected);
    else
      date = date.subtract(1, dateFilterSelected);

    onStartSetActiveTransactionsByDateFilter(date, dateFilterSelected);
  }

  return (
    <nav className="flex justify-between items-center">

      <button 
        className="btn btn-primary" 
        onClick={() => manipulateDate(false)}
      >&#10094;</button>

      <span className="font-black">
        {
          dateFilterSelected === "day" ? dayjs(activeDate).format("DD/MMM/YYYY") :
          dateFilterSelected === "week" ? ( dayjs(activeDate).format("DD/MMM/YYYY") + " - " + dayjs(activeDate).endOf("week").format("DD/MMM/YYYY") ) :
          dateFilterSelected === "month" ? dayjs(activeDate).format("MMMM/YYYY") : ""
        }
      </span>

      <button 
        className="btn btn-primary" 
        onClick={() => manipulateDate(true)}
      >&#10095;</button>
      
    </nav>
  )
}
