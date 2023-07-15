import { useSelector } from "react-redux"
import { DateSelection, NewTransaction, PieChart, TopBar } from "./"

export const Home = () => {

  const { accountSelected } = useSelector(state => state.pocketfy);

  return (
    <main className="space-y-10 mt-5">

      <div className="animate__animated animate__fadeInUp space-y-10">

        <TopBar />

        <DateSelection />

        <div className="text-center">
          <span className="text-xs">Account Selected</span>
          <h2 className="text-lg text-primary font-black">{accountSelected?.name}</h2>
        </div>

        <PieChart />

        <NewTransaction />

      </div>

    </main>
  )
}
