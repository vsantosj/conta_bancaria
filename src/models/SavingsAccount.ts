
import { Account } from "./Account";

export class SavingAccount extends Account {

    private _accountAnniversaryMonth: number;


    constructor(accountNumer: number, branchNumber: number, accountType: number, accountHolder: string, balance: number, accountAnniversaryMonth: number) {
        super(accountNumer, branchNumber, accountType, accountHolder, balance);
        this._accountAnniversaryMonth = accountAnniversaryMonth;
    }

    public getaccountAnniversaryMonth(): number {
        return this._accountAnniversaryMonth;
    }
    public setaccountAnniversaryMonth(value: number) {
        this._accountAnniversaryMonth = value;
    }

    public withDraw(amount: number): boolean {
        const isAmountInvalid: boolean = amount <= 0;
        const isInsufficientBalance = this.balance < amount;

        if (isAmountInvalid) {
            console.log("Digite um valor maior que 0. ");
            return false;
        }
        if (isInsufficientBalance) {
            console.log("Saldo insufiente. ");
            return false;
        }
        this.balance - amount;

        return true;
    }


    public showAccountDetails(): void {
        console.log("\n\n*****************************************************");
        console.log("Dados da Conta Poupança:");
        console.log("*****************************************************");
        console.log("Número da Conta: " + this.accountNumber);
        console.log("Agência: " + this.branchNumber);
        console.log("Tipo da Conta: " + this.accountType);
        console.log("Titular: " + this.accountHolder);
        console.log("Saldo: R$ " + this.balance.toFixed(2));
        console.log("Mês de Aniversário: " + this._accountAnniversaryMonth);
    }







}