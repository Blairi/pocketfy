import { useState } from "react"
import dayjs from 'dayjs'

export const DateSelection = () => {

  const [date, setDate] = useState(dayjs().format('DD/MMM/YYYY'));

  return (
    <nav className="flex justify-between items-center">
      <button className="btn btn-primary">&#10094;</button>
      <span className="font-black">{date}</span>
      <button className="btn btn-primary">&#10095;</button>
    </nav>
  )
}
