import { loadLocalAccounts } from "../../service/local";
import { setAccounts } from "./PocketfySlice";

export const startLoadingAccounts = () => {
  return async(dispatch, getState) => {

    let accounts = [];

    // TODO: check if user is logged
    accounts = loadLocalAccounts();

    dispatch( setAccounts(accounts) );
  }
}