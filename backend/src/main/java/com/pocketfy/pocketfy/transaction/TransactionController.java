package com.pocketfy.pocketfy.transaction;

import com.pocketfy.pocketfy.account.AccountDTO;
import com.pocketfy.pocketfy.account.AccountService;
import com.pocketfy.pocketfy.user.UserDTO;
import com.pocketfy.pocketfy.user.UserService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TransactionController {

    private TransactionService transactionService;
    private UserService userService;
    private AccountService accountService;

    public TransactionController(TransactionService transactionService, UserService userService, AccountService accountService) {
        this.transactionService = transactionService;
        this.userService = userService;
        this.accountService = accountService;
    }

    @GetMapping("/users/{userId}/accounts/{accountId}/transactions/{transactionId}")
    public TransactionDTO retrieveTransactionById(
            @PathVariable Long userId, @PathVariable Long accountId, @PathVariable Long transactionId) {

        // TODO: Check if transaction belong to the user
        UserDTO user = userService.getUserById(userId);
        AccountDTO account = accountService.getAccountById(accountId);

        return transactionService.getTransactionById(transactionId);
    }

    @GetMapping("/users/{userId}/accounts/{accountId}/transactions")
    public List<TransactionDTO> retrieveTransactions(
            @PathVariable Long userId, @PathVariable Long accountId) {
        return transactionService.getTransactionsByUserId(userId);
    }

}
