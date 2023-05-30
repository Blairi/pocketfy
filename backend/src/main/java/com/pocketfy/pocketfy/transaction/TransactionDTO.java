package com.pocketfy.pocketfy.transaction;

import java.math.BigDecimal;
import java.time.LocalDate;

public class TransactionDTO {

    private Long id;
    private String description;
    private LocalDate date;
    private BigDecimal amount;
    private Long userId;
    private Long categoryId;
    private Long accountId;

    public TransactionDTO() {
    }

    public TransactionDTO(Long id, String description, LocalDate date, BigDecimal amount, Long userId, Long categoryId, Long accountId) {
        this.id = id;
        this.description = description;
        this.date = date;
        this.amount = amount;
        this.userId = userId;
        this.categoryId = categoryId;
        this.accountId = accountId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public Long getAccountId() {
        return accountId;
    }

    public void setAccountId(Long accountId) {
        this.accountId = accountId;
    }
}
