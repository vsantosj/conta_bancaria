
import { colors } from "../util/Colors";
import { Account } from "./Account";

export class SavingAccount extends Account {

    private _accountAnniversaryMonth: number;

    constructor(accountNumber: number, branchNumber: number, accountType: number, accountHolder: string, balance: number, accountAnniversaryMonth: number) {
        super(accountNumber, branchNumber, accountType, accountHolder, balance);
        this._accountAnniversaryMonth = accountAnniversaryMonth;
    }

    public get accountAnniversaryMonth(): number {
        return this._accountAnniversaryMonth;
    }
    public set accountAnniversaryMonth(number: number) {
        this._accountAnniversaryMonth = number;
    }

    //methods 
    public withDraw(amount: number, silent: boolean = false): boolean {
        const isAmountInvalid: boolean = amount <= 0;
        const isInsufficientBalance = this.balance < amount;

        if (isAmountInvalid) {
            if (!silent) console.log(colors.fg.red, "Valor inválido. ", colors.reset);
            return false;
        }
        if (isInsufficientBalance) {
            if (!silent) console.log(colors.fg.red, "Saldo insufiente. ", colors.reset);
            return false;
        }
        if (!silent) console.log(colors.fg.green, `Saque no valor de R$ ${amount} efetuado com sucesso`, colors.reset);
        this.balance -= amount;

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