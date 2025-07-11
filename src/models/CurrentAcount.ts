import { colors } from "../util/Colors";
import { Account } from "./Account";

export class CurrentAcount extends Account {
    private _limit: number;


    constructor(accountNumber: number, branchNumber: number, accountType: number, accountHolder: string, balance: number, limit: number) {
        super(accountNumber, branchNumber, accountType, accountHolder, balance);
        this._limit = limit;
    }

    public get limit(): number {
        return this._limit;
    }
    public set limit(value: number) {
        this._limit = value;
    }


    public withDraw(amount: number): boolean {
        if (amount <= 0) {
            console.log(colors.fg.red, "Valor inválido.", colors.reset);
            return false;
        }

        if (this.balance + this.limit < amount) {
            console.log(colors.fg.red, "Saldo insuficiente.", colors.reset);
            return false;
        }
        console.log(colors.fg.green, `Saque no valor de R$ ${amount} efetuado com sucesso`, colors.reset);
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