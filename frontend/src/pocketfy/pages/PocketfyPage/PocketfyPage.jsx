import { FilterDrawer, Home } from "./components";

export const PocketfyPage = () => {

  return (
    <div className="drawer">

      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        {/* Page content here */}
        <Home />
      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        {/* Drawer content */}
        <FilterDrawer />
      </div>
    </div>
  )
}
