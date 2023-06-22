import { Navbar } from "../components";

export const PocketfyLayout = ({ children }) => {
  return (
    <div>

      <Navbar />

      { children }

    </div>
  )
}
