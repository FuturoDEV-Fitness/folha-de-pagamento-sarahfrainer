const calcularImpostoRenda = require("./calculo_imposto_renda");
const calcularInss = require("./calculo_inss");

const salarioBruto = 0;

const inss = calcularInss(salarioBruto);
const impostoRenda = calcularImpostoRenda(salarioBruto);

function CalcularSalarioLiquido (salarioBruto, inss, impostoRenda) {
    salarioBruto = salarioBruto - inss - impostoRenda;
    return salarioBruto;
}

module.exports = CalcularSalarioLiquido;