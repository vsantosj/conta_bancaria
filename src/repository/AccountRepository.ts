import { Account } from "../models/Account";

export interface AccountRepository {

	// CRUD account
	findByAccountNumber(number: number): void;
	listAllAccounts(): void;
	createAccount(account: Account): void;
	updateAccount(account: Account): void;
	deleteAccount(number: number): void;

	//Banking methods
	withDraw(number: number, amount: number): void;
	deposit(number: number, amount: number): void;
	transfer(sourceAccountNumber: number, destinationAccountNumber: number, amount: number): void;

}