import { NavButton } from "../../../../components";
import { PieChart } from "./";
import { usePocketfyStore } from "../../../../hooks";

export const Home = () => {

  const { accountSelected } = usePocketfyStore();

  return (

    <div className="space-y-2">

      <div className="text-center">
        <span className="text-xs">Account Selected</span>
        <h2 className="text-lg text-primary font-black">{accountSelected?.name}</h2>
      </div>

      <div className="w-[80%] mx-auto space-y-2">
        <NavButton
          path="/balance"
          text="Balance"
        />

        <PieChart />
      </div>

    </div>

  )
}
