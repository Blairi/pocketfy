package com.pocketfy.pocketfy.transaction;

import java.util.List;

public interface TransactionService {

    public TransactionDTO getTransactionById(Long id);

    public List<TransactionDTO> getTransactionsByUserId(Long userId);

}
