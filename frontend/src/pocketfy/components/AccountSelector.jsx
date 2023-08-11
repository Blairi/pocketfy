import { usePocketfyStore } from "../../hooks/usePocketfyStore";

export const AccountSelector = () => {

  const { accounts, accountSelected, onStartSelectAccount } = usePocketfyStore();

  const selectAccount = (id) => {
    onStartSelectAccount(id);
  }

  return (
    <div className="dropdown flex">

      <button className="btn btn-outline btn-accent w-full">
        {accountSelected?.name}
      </button>

      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex gap-3">

        <button className="btn btn-outline btn-accent w-full">
          {accountSelected?.name}
        </button>

        {
          accounts.map((account, key) => {

            if(account.id !== accountSelected?.id){
              return(
                <li key={key}>
                  <button
                    className="btn btn-outline btn-accent"
                    onClick={ () => selectAccount(account.id) }
                  >{account.name}
                  </button>
                </li>
              )
            }

          })
        }

      </ul>

    </div>
  )
}
