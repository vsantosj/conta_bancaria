export class Account{
    private _accountNumber: number;
    private _branchNumber: number;
    private _accountType: number;
    private _accountHolder: string;
    private _balance: number;
    
    //constructor
    constructor(accountNumer: number, branchNumber: number, accountType: number, accountHolder: string, balance: number){
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

    public get balance_1(): number {
        return this._balance;
    }
    public set balance_1(value: number) {
        this._balance = value;
    }


    //methods


    //depositar
    public deposit(amount: number){
        if(amount >0){
            this._balance = this._balance + amount;
        }else{
            console.log("Valor deve ser maior que zer.");
        }        
    }

    //ver saldo
    public getBalance(): number{
        return this._balance;

    }

    //sacar
    public withDraw(amount: number): boolean {
        const isAmountInvalid: boolean = amount <=0;
        const isInsufficientBalance = this._balance < amount;
        
        if(isAmountInvalid){
            console.log("Digite um valor maior que 0. ");
            return false;
        }
        if(isInsufficientBalance){
            console.log("Saldo insufiente. ");
            return false;
        }
        this._balance -= amount;

        return true;
    }

    //mostrar detalhes da conta
        public showAccountDetails(): void {

        let accountType: string = "";

        switch (this._accountType) {
            case 1:
                accountType = "Conta Corrente";
                break;
            case 2:
                accountType = "Conta Poupança";
                break;
        }
        

        console.log("\n\n*****************************************************");
        console.log("Dados da Conta:");
        console.log("*****************************************************");
        console.log("Numero da Conta: " + this._accountNumber);
        console.log("Agência: " + this._branchNumber);
        console.log("Tipo da Conta: " + this.accountType);
        console.log("Titular: " + this._accountHolder);
        console.log("Saldo: " + this._balance.toFixed(2));

    }
    }







