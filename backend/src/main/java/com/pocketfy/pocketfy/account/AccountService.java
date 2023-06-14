package com.pocketfy.pocketfy.account;

import java.util.List;

public interface AccountService {
    public List<AccountDTO> getAccountsByUserId(Long id);

    public AccountDTO getAccountById(Long id);

    public void newAccount(AccountDTO account);

    public void deleteAccountById(Long id);

}
