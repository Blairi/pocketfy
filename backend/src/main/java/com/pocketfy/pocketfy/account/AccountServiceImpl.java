package com.pocketfy.pocketfy.account;

import com.pocketfy.pocketfy.user.UserDTO;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Service
public class AccountServiceImpl implements AccountService{

    private static List<AccountDTO> accounts = new ArrayList<>();
    private static Long accountCount = 0L;

    static {
        accounts.add(
          new AccountDTO(++accountCount, "visa", 1L)
        );
        accounts.add(
                new AccountDTO(++accountCount, "cash", 1L)
        );
    }

    @Override
    public List<AccountDTO> getAccountsByUserId(Long id) {
        Predicate<? super AccountDTO> predicate =
                account -> account.getUserId().equals(id);

        return accounts.stream().filter(predicate).collect(Collectors.toList());
    }

    @Override
    public AccountDTO getAccountById(Long id) {

        Predicate<? super AccountDTO> predicate =
                account -> account.getId().equals(id);

        Optional<AccountDTO> account = accounts.stream().filter(predicate).findFirst();

        if(account.isEmpty()) throw new RuntimeException("Account not found.");

        return account.get();
    }

    @Override
    public void newAccount(AccountDTO account) {
        accounts.add(account);
    }
}
