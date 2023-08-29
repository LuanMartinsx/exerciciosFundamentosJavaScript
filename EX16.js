function calculadora(nmr1, sinal, nmr2) {

    switch(sinal) {
        case '+': 
        return nmr1 + nmr2;
        case '-': 
        return nmr1 - nmr2;
        case '*': 
        return nmr1 * nmr2;
        case '/': 
        return nmr1 / nmr2;
        default: 
        return "Operação invalida"
    }
}



console.log(calculadora(2, '+', 3))
console.log(calculadora(1, '-', 3))
console.log(calculadora(2, '*', 3))
console.log(calculadora(6, '/', 2))
console.log(calculadora(6, 'a', 2))