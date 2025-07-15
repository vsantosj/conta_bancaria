import readlinesync = require("readline-sync");
import { SavingAccount } from "./src/models/SavingAccount";
import { CurrentAccount } from "./src/models/CurrentAcount";
import { AccountController } from "./src/controller/AccountController";
import { colors } from "./src/util/Colors";

export function main() {

    const readlineSync = require("readline-sync");

    let accounts: AccountController = new AccountController();
    let option, branchNumber, balance, limit, type, accountAnniversaryMonth, amount, sourceAccountNumber, destinationAccountNumber, accountNumber: number;
    let accountHolder: string;
    const accountsType = ["Conta Corrente", "Conta Poupança"];


    while (true) {
        menu();
        console.log("Entre com a opção desejada: ");
        option = readlinesync.questionInt("");

        if (option == 9) {
            console.log(colors.fg.greenstrong,
                "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (option) {
            case 1:
            case 1:
                console.log(colors.fg.whitestrong, "\n\nCriar Conta\n\n", colors.reset);

                console.log("Digite o Número da agência: ");
                branchNumber = readlineSync.questionInt("");

                console.log("Digite o Nome do Titular da conta: ");
                accountHolder = readlineSync.question("");

                console.log("\nDigite o tipo da Conta: ");
                type = readlineSync.keyInSelect(accountsType, "", { cancel: false }) + 1;

                console.log("\nDigite o Saldo da conta (R$): ");
                balance = readlineSync.questionFloat("");

                switch (type) {
                    case 1:
                        console.log("Digite o limite da Conta (R$): ");
                        limit = readlineSync.questionFloat("");
                        accounts.createAccount(
                            new CurrentAccount(accounts.generateAccountNumber(), branchNumber, type, accountHolder, balance, limit));
                        break;
                    case 2:
                        console.log("Digite o Dia do aniversário da Conta Poupança:");
                        accountAnniversaryMonth = readlineSync.questionInt("");
                        accounts.createAccount(new SavingAccount(accounts.generateAccountNumber(), branchNumber, type, accountHolder, balance, accountAnniversaryMonth));
                        break;
                }

                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar todas as Contas\n\n", colors.reset);
                accounts.listAllAccounts();

                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                console.log("Digite o número da Conta: ");
                accountNumber = readlineSync.questionInt("");
                accounts.findByAccountNumber(accountNumber);
                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar dados da Conta\n\n", colors.reset);

                console.log("Digite o número da Conta: ");
                accountNumber = readlinesync.questionInt("");

                let account = accounts.findByArray(accountNumber);

                if (account != null) {

                    console.log("Digite o Número da agência: ");
                    branchNumber = readlinesync.questionInt("");

                    console.log("Digite o Nome do Titular da conta: ");
                    accountHolder = readlinesync.question("");

                    type = account.accountType;

                    console.log("\nDigite o Saldo da conta (R$): ");
                    balance = readlinesync.questionFloat("");

                    switch (type) {
                        case 1:
                            console.log("Digite o Limite da Conta (R$): ");
                            limit = readlinesync.questionFloat("");
                            accounts.updateAccount(
                                new CurrentAccount(accountNumber, branchNumber, type, accountHolder, balance, limit)
                            );
                            break;
                        case 2:
                            console.log("Digite o Dia do aniversário da Conta Poupança: ");
                            accountAnniversaryMonth = readlinesync.questionInt("");
                            accounts.updateAccount(new SavingAccount(accountNumber, branchNumber, type, accountHolder, balance,
                                accountAnniversaryMonth));
                            break;
                    }

                } else {
                    console.log(colors.fg.red, `\nA Conta numero: ${accountNumber}
                        " não foi encontrada!`, colors.reset);
                }

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar uma Conta\n\n", colors.reset);
                console.log("Digite o número da Conta: ");
                accountNumber = readlineSync.questionInt("");
                accounts.deleteAccount(accountNumber);

                keyPress();
                break;
            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSaque\n\n", colors.reset);
                console.log("Digite o número da conta: ");
                accountNumber = readlineSync.questionInt("");

                console.log("Digite o valor do saque: ");
                amount = readlineSync.questionFloat("");

                accounts.withDraw(accountNumber, amount);

                keyPress()
                break;

            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepósito\n\n", colors.reset);

                console.log("Digite o número da conta: ");
                accountNumber = readlineSync.questionInt("");

                console.log("Digite o valor do Depósito: ");
                amount = readlineSync.questionFloat("");

                accounts.deposit(accountNumber, amount);


                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferência entre Contas\n\n", colors.reset);

                console.log("Digite o número da conta origem: ");
                sourceAccountNumber = readlineSync.questionInt("");

                console.log("Digite o número da conta destino: ");
                destinationAccountNumber = readlineSync.questionInt("");
                console.log("Digite o valor: ");
                amount = readlineSync.questionFloat("");

                accounts.transfer(sourceAccountNumber, destinationAccountNumber, amount);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,
                    "\nOpção Inválida!\n", colors.reset);

                keyPress()
                break;
        }
    }

}

function menu() {
    console.log(colors.bg.black, colors.fg.yellow,
        "*****************************************************");
    console.log("                                                     ");
    console.log("                BANCO DO BRAZIL COM Z                ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ");
    console.log("            1 - Criar Conta                          ");
    console.log("            2 - Listar todas as Contas               ");
    console.log("            3 - Buscar Conta por Numero              ");
    console.log("            4 - Atualizar Dados da Conta             ");
    console.log("            5 - Apagar Conta                         ");
    console.log("            6 - Sacar                                ");
    console.log("            7 - Depositar                            ");
    console.log("            8 - Transferir valores entre Contas      ");
    console.log("            9 - Sair                                 ");
    console.log("                                                     ");
    console.log("*****************************************************");
    console.log("                                                     ",
        colors.reset);
}
/* Função com os dados da pessoa desenvolvedora */
function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Viviane Santos - vivianes@genstudents.org");
    console.log("github.com/vsantosj");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();