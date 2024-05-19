const CalcularSalarioLiquido = require("./calculo_salario_liquido");
const calcularImpostoRenda = require("./calculo_imposto_renda");
const calcularInss = require("./calculo_inss");
const readline = require('readline');
const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

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

                generatePDF(nome, cpf, mes, salarioBruto, inss2, impostoRenda2, salarioLiquido2);

                input.close();
            });
        });
    });
});

function generatePDF(nome, cpf, mes, salarioBruto, inss, impostoRenda, salarioLiquido) {
    const doc = new PDFDocument();

    const data = new Date();
    const dataFormatada = data.toLocaleDateString('pt-BR').replace(/\//g, '-');

    const outputDir = path.join(__dirname, '../folhas_pagamento', 'output');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    const filePath = path.join(outputDir, `${nome}.pdf`);
    
    doc.pipe(fs.createWriteStream(filePath));

  
    doc.fontSize(18).text('Folha de pagamento', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Data de geração: ${dataFormatada}`);
    doc.fontSize(12).text(`Nome: ${nome}`);
    doc.text(`CPF: ${cpf}`);
    doc.text(`Mês: ${mes}`);
    doc.text(`Salário bruto: R$ ${salarioBruto.toFixed(2)}`);
    doc.text(`INSS: R$ ${inss2}`);
    doc.text(`Imposto de Renda: R$ ${impostoRenda2}`);
    doc.text(`Salário Líquido: R$ ${salarioLiquido2}`);

    doc.end();
}