import { Link } from "react-router-dom"

export const NewTransaction = () => {

  return (
    <div className="flex justify-between gap-5">

      <Link
        to={"/new-transaction/expense"}
        className="btn btn-error flex-grow text-lg"
      >-</Link>

      <Link 
        to={"/new-transaction/income"}
        className="btn btn-success flex-grow text-lg"
      >+</Link>

    </div>
  )
}
