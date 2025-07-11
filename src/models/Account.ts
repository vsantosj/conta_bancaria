export abstract class Account {
    private _accountNumber: number;
    private _branchNumber: number;
    private _accountType: number;
    private _accountHolder: string;
    private _balance: number;

    //constructor
    constructor(accountNumer: number, branchNumber: number, accountType: number, accountHolder: string, balance: number) {
        this._accountNumber = accountNumer;
        this._branchNumber = branchNumber;
        this._accountType = accountType;
        this._accountHolder = accountHolder;
        this._balance = balance;
    }

    //getter and setter

    public get accountNumber(): number {
        return this._accountNumber;
    }
    public set accountNumber(value: number) {
        this._accountNumber = value;
    }

    public get branchNumber(): number {
        return this._branchNumber;
    }
    public set branchNumber(value: number) {
        this._branchNumber = value;
    }

    public get accountType(): number {
        return this._accountType;
    }
    public set accountType(value: number) {
        this._accountType = value;
    }

    public get accountHolder(): string {
        return this._accountHolder;
    }
    public set accountHolder(value: string) {
        this._accountHolder = value;
    }

    public get balance(): number {
        return this._balance;
    }
    public set balance(value: number) {
        this._balance = value;
    }


    //methods


    //depositar
    public deposit(amount: number) {
        if (amount > 0) {
            this._balance = this._balance + amount;
        } else {
            console.log("Valor deve ser maior que zer.");
        }
    }

    //ver saldo
    public getBalance(): number {
        return this._balance;

    }

    //sacar
    abstract withDraw(amount: number): boolean;
    //mostrar detalhes da conta
    abstract showAccountDetails(): void;


}


