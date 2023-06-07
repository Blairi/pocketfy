package com.pocketfy.pocketfy.transaction;

import com.pocketfy.pocketfy.account.AccountDTO;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;
import java.util.stream.Collectors;

@Service
public class TransactionServiceImpl implements TransactionService{

    private static Long transactionCount = 0L;
    private static List<TransactionDTO> transactions = new ArrayList<>();

    static {
        transactions.add(
                new TransactionDTO(++transactionCount, "Clothes and transport", LocalDate.now(), BigDecimal.valueOf(-2000), 1L, 1L, 1L)
        );
    }

    @Override
    public TransactionDTO getTransactionById(Long id) {

        Predicate<? super TransactionDTO> predicate =
                transaction -> transaction.getUserId().equals(id);

        Optional<TransactionDTO> transaction = transactions.stream().filter(predicate).findFirst();

        if(transaction.isEmpty()) throw new RuntimeException("Transaction not found.");

        return transaction.get();
    }

    @Override
    public List<TransactionDTO> getTransactionsByUserId(Long userId) {
        Predicate<? super TransactionDTO> predicate =
                transaction -> transaction.getUserId().equals(userId);

        return transactions.stream().filter(predicate).collect(Collectors.toList());
    }

    @Override
    public void newTransaction(TransactionDTO transaction) {

    }
}
