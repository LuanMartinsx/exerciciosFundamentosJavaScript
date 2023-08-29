function paresEImpares(vetorNumeros) {
    let contadorPar = 0
    let contadorImpar = 0
    for(let i=0; i < vetorNumeros.length; i++) {
        if(vetorNumeros[i] % 2 == 0) {
            contadorPar++
        } else {
            contadorImpar++
        }
        
    }
    console.log(`${contadorPar} de números pares e ${contadorImpar} de números impares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresEImpares(vetor)