package com.pocketfy.pocketfy.account;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AccountController {

    private AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping("users/{id}/accounts")
    public List<AccountDTO> retrieveAccountsByUserId(@PathVariable Long id) {
        return accountService.getAccountsByUserId(id);
    }

    @GetMapping("users/{userId}/accounts/{accountId}")
    public AccountDTO retrieveAccountById(@PathVariable Long userId, @PathVariable Long accountId) {
        return accountService.getAccountById(accountId);
    }
}
