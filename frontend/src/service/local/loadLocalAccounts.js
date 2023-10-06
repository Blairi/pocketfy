export const loadLocalAccounts = () => {

  let accounts = localStorage.getItem("accounts");

  if(!accounts) {
    localStorage.setItem("accounts", JSON.stringify([
      {id: 1, name: "default"},
      {id: 2, name: "visa"},
      {id: 3, name: "cash"},
    ]));
    accounts = localStorage.getItem("accounts");
  }

  return JSON.parse(accounts);
}
