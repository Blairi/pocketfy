import { TransactionsPie } from "./";
import { NavButton } from "../../../../components";
import { usePocketfyStore } from "../../../../hooks";

export const Home = () => {

  const { accountSelected, activeTransactions } = usePocketfyStore();

  return (

    <div className="space-y-2">

      <div className="text-center">
        <span className="text-xs">Account Selected</span>
        <h2 className="text-lg text-primary font-black">{accountSelected?.name}</h2>
      </div>

      {
        activeTransactions.length > 0
        ? <>
          <div className="w-[80%] mx-auto space-y-5">

            <NavButton
              path="/balance"
              text="Balance"
            />

            <TransactionsPie />

          </div>
        </>
        : 
        <div className="text-center">
          <p>Not have transaction in this date yet, create a new one!</p>
        </div>
      }


    </div>

  )
}
