import { DateSelection, FilterDrawer, NewTransaction, TopBar } from "../components";

export const PocketfyLayout = ({children}) => {

  return (
    <div className="drawer">

      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content py-5 min-h-screen w-[90%] max-w-[1280px] mx-auto space-y-5">
        {/* Page content */}

        <TopBar />

        <DateSelection />

        <main className="animate__animated animate__fadeInUp h-[70vh] overflow-scroll">
          {children}
        </main>

        <div className="absolute bottom-5 w-[90%] max-w-[1280px]">
          <NewTransaction />
        </div>

      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        {/* Drawer content */}
        <FilterDrawer />
      </div>
    </div>
  )
}
