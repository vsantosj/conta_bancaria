import { colors } from "../util/Colors";

export abstract class Account {
    private _accountNumber: number;
    private _branchNumber: number;
    private _accountType: number;
    private _accountHolder: string;
    private _balance: number;

    constructor(accountNumber: number, branchNumber: number, accountType: number, accountHolder: string, balance: number) {
        this._accountNumber = accountNumber;
        this._branchNumber = branchNumber;
        this._accountType = accountType;
        this._accountHolder = accountHolder;
        this._balance = balance;
    }
    //getter and setter
    public get accountNumber(): number {
        return this._accountNumber;
    }
    public set accountNumber(number: number) {
        this._accountNumber = number;
    }

    public get branchNumber(): number {
        return this._branchNumber;
    }
    public set branchNumber(number: number) {
        this._branchNumber = number;
    }

    public get accountType(): number {
        return this._accountType;
    }
    public set accountType(number: number) {
        this._accountType = number;
    }

    public get accountHolder(): string {
        return this._accountHolder;
    }
    public set accountHolder(number: string) {
        this._accountHolder = number;
    }

    public get balance(): number {
        return this._balance;
    }
    public set balance(number: number) {
        this._balance = number;
    }

    //methods
    public deposit(amount: number) {
        if (amount > 0) {
            console.log(colors.fg.green, `Deposito no valor de R$ ${amount} efetuado com sucesso`, colors.reset);
            this.balance = this.balance + amount;
        } else {
            console.log(colors.fg.red, "Valor inválido.", colors.reset);
        }
    }

    //ver saldo
    public getBalance(): number {
        return this.balance;

    }
    //method abstract
    abstract withDraw(amount: number): boolean;

    abstract showAccountDetails(): void;


}


