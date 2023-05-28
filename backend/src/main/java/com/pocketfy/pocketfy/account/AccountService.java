package com.pocketfy.pocketfy.account;

import java.util.List;

public interface AccountService {
    public List<AccountDTO> getAccountsByUserId(Long id);
}
