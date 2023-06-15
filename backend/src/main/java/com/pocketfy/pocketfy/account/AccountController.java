package com.pocketfy.pocketfy.account;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("users/{id}/accounts")
    public ResponseEntity<Object> createAccount(@RequestBody AccountDTO account) {
        accountService.newAccount(account);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("users/{userId}/accounts/{accountId}")
    public AccountDTO retrieveAccountById(@PathVariable Long userId, @PathVariable Long accountId) {
        return accountService.getAccountById(accountId);
    }

    @DeleteMapping("users/{userId}/accounts/{accountId}")
    public ResponseEntity<Object> deleteAccountById(@PathVariable Long userId, @PathVariable Long accountId) {
        accountService.deleteAccountById(accountId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
