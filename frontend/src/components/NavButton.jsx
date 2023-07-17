import { Link } from "react-router-dom"

export const NavButton = ({text, path}) => {
  return (
    <Link
      to={ path }
      className="btn btn-block btn-outline"
    >
      { text }
    </Link>
  )
}
