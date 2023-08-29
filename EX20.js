function sacarDinheiro(valorSaque) {
    let contadorNota100 = 0;
    let contadorNota50 = 0;
    let contadorNota10 = 0;
    let contadorNota5 = 0;
    let contadorNota1 = 0;

    let valorNota = calcularValorNota(valorSaque)

    while(valorSaque >= valorNota) {
        switch(valorNota) {
            case 100:
                valorSaque -= 100
                contadorNota100++
                break;
            case 50:
                valorSaque -= 50
                contadorNota50++
                break;
            case 10:
                valorSaque -= 10
                contadorNota10++      
                break;
            case 5:
                valorSaque -= 5
                contadorNota5++
                break;
            case 1:
                valorSaque -= 1
                contadorNota1++
                break;          
        }
        valorNota = calcularValorNota(valorSaque)
    }
    return mostrarResultado(contadorNota100, contadorNota50, contadorNota10, contadorNota5, contadorNota1)
}

function calcularValorNota(valorSaque) {
    if(valorSaque >= 100) {
        return 100
    } else if ( valorSaque >= 50) {
        return 50
    } else if (valorSaque >= 10) {
        return 10
    } else if (valorSaque >= 5) {
        return 5
    } else if (valorSaque >= 1) {
        return 1
    }
}


function mostrarResultado(contadorNota100, contadorNota50, contadorNota10, contadorNota5, contadorNota1) {
    let resultado = '';

    if (contadorNota100 > 0) {
        resultado += `${contadorNota100} nota(s) de R$ 100. `
    } 
    if (contadorNota50 > 0) {
        resultado += `${contadorNota50} nota(s) de R$ 50. `
    }  
    if (contadorNota10 > 0) {
        resultado += `${contadorNota10} nota(s) de R$ 10. `
    } 
    if (contadorNota5 > 0) {
        resultado += `${contadorNota5} nota(s) de R$ 5. `
    } 
    if (contadorNota1 > 0) {
        resultado += `${contadorNota1} nota(s) de R$ 1. `
    }
    return resultado;
}


console.log(sacarDinheiro(153));
