function calcularImpostoRenda (salarioBruto) {

    let impostoRenda = 0;

    if (salarioBruto <= 2112) {
        impostoRenda = 0;
    }

    else if (salarioBruto > 2112 && salarioBruto <= 2826.65) {
        impostoRenda = (salarioBruto * 0.075) - 158.40;
    }

    else if (salarioBruto > 2826.65 && salarioBruto <= 3751.05) {
        impostoRenda = (salarioBruto * 0.15) - 370.40;
    }

    else if (salarioBruto > 3751.05 && salarioBruto <= 4664.68) {
        impostoRenda = (salarioBruto * 0.225) - 651.73;
    }

    else {
        impostoRenda = (salarioBruto * 0.275) - 884.96;
    }
    
    return impostoRenda;
}

module.exports = calcularImpostoRenda;