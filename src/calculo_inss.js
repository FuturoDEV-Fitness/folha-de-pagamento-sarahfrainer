function calcularInss (salarioBruto) {

    let inss = 0;

    if(salarioBruto <= 1412) {
        inss = salarioBruto * 0.075;
    }
    else if(salarioBruto>1412 && salarioBruto<=2666.68) {
        inss = salarioBruto * 0.09;
    }
    else if(salarioBruto>2666.68 && salarioBruto<=4000.03) {
        inss = salarioBruto * 0.12;
    }
    else if(salarioBruto>4000.03 && salarioBruto<=7786.02) {
        inss = salarioBruto * 0.14;
    } else {
        inss = 908.85;
    }

    if (inss > 908.85) {
        inss = 908.85;
    }

    return inss;
}

module.exports = calcularInss;