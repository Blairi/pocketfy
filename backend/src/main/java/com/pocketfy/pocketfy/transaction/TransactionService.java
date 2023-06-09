package com.pocketfy.pocketfy.transaction;

import java.util.List;

public interface TransactionService {

    public TransactionDTO getTransactionById(Long id);

    public List<TransactionDTO> getTransactionsByUserId(Long userId);

    public void newTransaction(TransactionDTO transaction);

    public void deleteTransactionById(Long id);

    public void updateTransaction(TransactionDTO transaction);

}
