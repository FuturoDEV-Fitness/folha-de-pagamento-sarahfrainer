const CalcularSalarioLiquido = require("./calculo_salario_liquido");
const calcularImpostoRenda = require("./calculo_imposto_renda");
const calcularInss = require("./calculo_inss");
const readline = require('readline');

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nome = "";
let cpf = "";
let mes = 0;
let salarioBruto = 0;
let inss = 0;
let impostoRenda = 0;
let salarioLiquido = 0;

input.question("Qual o seu nome completo? ", (nomeDigitado) => {
    nome = nomeDigitado;

    input.question("Qual o seu cpf? ", (cpfDigitado) => {
        cpf = cpfDigitado;

        input.question("Qual o mês do pagamento (em número)? ", (mesDigitado) => {
            mes = parseInt(mesDigitado);

            input.question("Qual o seu salário bruto? ", (salarioDigitado) => {
                salarioBruto = parseFloat(salarioDigitado);

                inss = calcularInss(salarioBruto);
                inss2 = (inss).toFixed(2)
                impostoRenda = calcularImpostoRenda(salarioBruto);
                impostoRenda2 = (impostoRenda).toFixed(2)

                salarioLiquido = CalcularSalarioLiquido(salarioBruto, inss, impostoRenda);
                salarioLiquido2 = (salarioLiquido).toFixed(2)

                console.log(
                    "Nome do usuário: ", nome, 
                    ", CPF: ", cpf, 
                    ", Mês: ", mes, 
                    ", Salário bruto: ", salarioBruto, 
                    ", INSS: ", inss2, 
                    ", Imposto de Renda: ", impostoRenda2, 
                    ", Salário Líquido: ", salarioLiquido2
                );

                input.close();
            });
        });
    });
});