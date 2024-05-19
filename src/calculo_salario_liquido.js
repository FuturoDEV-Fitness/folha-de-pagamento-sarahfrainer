const calcularImpostoRenda = require("./calculo_imposto_renda");
const calcularInss = require("./calculo_inss");

let salarioBruto = 0;

let inss = calcularInss(salarioBruto);
let impostoRenda = calcularImpostoRenda(salarioBruto);

function CalcularSalarioLiquido (salarioBruto, inss, impostoRenda) {
    salarioLiquido = salarioBruto - inss - impostoRenda;
    return salarioLiquido;
}

module.exports = CalcularSalarioLiquido;