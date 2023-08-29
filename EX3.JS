function expoente(base, exp) {
    // metodo antigo
    let expo =  Math.pow(base, exp)
    // metodo novo
    expo = base ** exp

    return expo;
}

console.log(expoente(2,3))