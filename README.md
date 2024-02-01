# pocketfy

## Summary

### [1. Introduction](#introduction)

[1.1 About project](#about-project)

[1.2 Feautures](#features)

### [2. Analysis](#analysis)

[2.1 The scope of the application](#scope)

[2.2 Global application description](#global-description)

[2.3 Application requirements](#application-requirements)

# 1. Introduction <a name="introduction"></a>

## 1.1 About project <a name="about-project"></a>
App for managing personal finances like expenses and income. In the app, you can track all your movements and see what your budget is in different time intervals like daily, weekly, monthly, and yearly.

## 1.2 Feautures <a name="features"></a>
- Save transactions (incomes/expenses).
- Pie plot to display a transaction resume.
- Create, Read, Update, and Delete transactions.
- Managing different accounts, ex: card, bank, cash, etc...
- Create, Read, Update, and Delete accounts.
- Select different categories for expenses and incomes.
- Create, Read, Update, and Delete categories.
- Select different time intervals to see transactions in there.
- Possibility to use locally and online.


# 2. Analysis <a name="analysis"></a>

## 2.1 The scope of the application <a name="scope"></a>
The app's goal is to give its users one solution to handle personal finances like income, and expenses.
This app is think hed and designed to be simpler than possible for whatever user.

## 2.2 Global application description <a name="global-description"></a>

### 2.2.1 User characteristics
- **Visual interaction**: The visual interface is designed to be simpler than possible to use. With intuitive buttons and great animations to give a great user experience.

- **Transactions**: The transactions that the user can manage in this context are divided into two types:

- *Type income* : the income is thought of as money entrance with your respective category like salary, allowance, etc...
- *Type expense* : the expense is thought of as money exit with your respective category like transport, food, etc...

- **Categories**: The categories that the user can manage in this context, similar to the transactions, are divided into two types. The user can select categories like transport, food, and health that correspond to an expense transaction and also categories like allowance, salary, and gift that correspond to an income.

- **Accounts**: The accounts that the user has access to are thinking of dividing the money, like bank accounts, cash, or any other.

- **CRUD**: The user principally can create, read, update, and delete the **transactions**, **categories**, and **accounts**. (these 3 entities are the nucleus of the application).

### 2.2.2 User authentication
- **Register**: The user signs up with an email, password, and a unique username.

- **Login**: The user logs in with the email and password.

- **Recovery**: If the user has forgotten the password, can recover it with the registered email.

### 2.2.3 Storage and upload data
- The user can use the app to preserve the data locally if the user is unregistered.

- If the user is registered, the user can preserve the data in the database server online.

### 2.2.4 Restrictions
- **Registers limited**: If the user is using the app locally, the user is limited to creating a maximum of 25 transactions, 5 accounts, and 5 categories.

## 2.3 Application requirements <a name="application-requirements"></a>

### 2.3.1 Functional requirements
| Code | Description | Priority |
| ----------- | ----------- | ----------- |
| FR1 | Title | High |
| FR2 | Text | Low |
### 2.3.2 Non functional requirements
| Code | Description | Priority |
| ----------- | ----------- | ----------- |
| FR1 | Title | High |
| FR2 | Text | Low |