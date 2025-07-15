import { BlockList } from "net";
import { colors } from "../util/Colors";
import { Account } from "./Account";

export class CurrentAccount extends Account {
    private _limit: number;

    constructor(accountNumber: number, branchNumber: number, accountType: number, accountHolder: string, balance: number, limit: number) {
        super(accountNumber, branchNumber, accountType, accountHolder, balance);
        this._limit = limit;
    }

    public get limit(): number {
        return this._limit;
    }
    public set limit(amount: number) {
        this._limit = amount;
    }
    //methods
    public withDraw(amount: number, silent: boolean = false): boolean {
        if (amount <= 0) {
            if (!silent) console.log(colors.fg.red, "Valor inválido.", colors.reset);
            return false;
        }
        if (this.balance + this.limit < amount) {
            if (!silent) console.log(colors.fg.red, "Saldo insuficiente.", colors.reset);
            return false;
        }
        if (!silent) console.log(colors.fg.green, `Saque no valor de R$ ${amount} efetuado com sucesso`, colors.reset);
        this.balance -= amount;
        return true;
    }


    public showAccountDetails(): void {
        console.log("\n\n*****************************************************");
        console.log("Dados da Conta Corrente:");
        console.log("*****************************************************");
        console.log("Número da Conta: " + this.accountNumber);
        console.log("Agência: " + this.branchNumber);
        console.log("Tipo da Conta: " + this.accountType);
        console.log("Titular: " + this.accountHolder);
        console.log("Saldo: R$ " + this.balance.toFixed(2));
        console.log("Limite: R$ " + this._limit);
    }

}