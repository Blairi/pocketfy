import { usePocketfyStore } from "../../hooks";

export const AccountItem = ({ account }) => {

  const { onStartSelectAccount } = usePocketfyStore();

  return (
    <li>
      <button
        className="btn btn-outline btn-accent"
        onClick={() => onStartSelectAccount(account)}
      >{account.name}
      </button>
    </li>
  )
}
