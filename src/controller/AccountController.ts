import { constants } from "buffer";
import { Account } from "../models/Account";
import { AccountRepository } from "../repository/AccountRepository";
import { colors } from "../util/Colors";

export class AccountController implements AccountRepository {

    private AccountList: Array<Account> = new Array<Account>();
    private accountNumberSequence: number = 0;


    findByAccountNumber(accountNumber: number): void {
        let findAccount = this.findByArray(accountNumber);
        if (findAccount != null) {
            findAccount.showAccountDetails();
        } else {
            console.log(colors.fg.red, `\nA Conta número: ${accountNumber} não foi encotrada! `, colors.reset);
        }
    }
    listAllAccounts(): void {
        for (let conta of this.AccountList) {
            conta.showAccountDetails();
        }
    }
    createAccount(account: Account): void {
        this.AccountList.push(account);
        console.log(colors.fg.green, `\nA conta número: ${account.accountNumber} foi criada com sucesso`, colors.reset)

    }
    updateAccount(account: Account): void {
        let findAccount = this.findByArray(account.accountNumber);
        if (findAccount != null) {
            this.AccountList[this.AccountList.indexOf(findAccount)] = account;
            console.log(colors.fg.green, `\nA Conta número: ${account.accountNumber} foi atualizada com sucesso!`, colors.reset);
        } else {
            console.log(colors.fg.red, ` \nA Conta número: ${account.accountNumber} não foi encontrda! `, colors.reset);
        }

    }
    deleteAccount(accountNumber: number): void {
        let findAccount = this.findByArray(accountNumber);
        if (findAccount != null) {
            this.AccountList.splice(this.AccountList.indexOf(findAccount), 1);
            console.log(colors.fg.green, `\nA Conta número: ${accountNumber} foi apagada com sucesso!`, colors.reset);
        } else {
            console.log(colors.fg.red, `\nA Conta número: ${accountNumber} não foi encontrada! `, colors.reset);
        }


    }
    withDraw(accountNumber: number, amount: number): void {
        let account = this.findByArray(accountNumber);

        if (account != null) {
            if (account.withDraw(amount) == true) {
                console.log(colors.fg.green, `\nO Saque da na Conta ${accountNumber} foi realizado com sucesso!`, colors.reset);
            }
        } else {
            console.log(colors.fg.red, `\nO número da conta ${accountNumber} não foi encontrado! `, colors.reset)
        }
    }


    deposit(accountNumber: number, amount: number): void {
        let account = this.findByArray(accountNumber);

        if (account != null) {
            account.deposit(amount);
            console.log(colors.fg.green, `\nO Depósito na Conta ${accountNumber} foi realizado com sucesso!`, colors.reset);
        } else {
            console.log(colors.fg.red, `\nO número da conta ${accountNumber} não foi encontrado! `, colors.reset)
        }
    }

    transfer(sourceAccountNumber: number, destinationAccountNumber: number, amount: number): void {
        throw new Error("Method not implemented.");
    }

    //Auxiliary Methods

    //Generate Account Number
    public generateAccountNumber(): number {
        return ++this.accountNumberSequence;
    }

    public findByArray(accountNumber: number): Account | null {
        for (let account of this.AccountList) {
            if (account.accountNumber === accountNumber) {
                return account;
            }
        }

        return null;
    }


}
