function maioreMenor(vetor) {
    let maior = vetor[0]
    let menor = vetor[0]

    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] > maior) {
            maior = vetor[i]
        }
        if(vetor[i] < menor) {
            menor = vetor[i]
        }
        
    }
    return `O maior valor é ${maior} e o menor valor é ${menor}`
}


vetor =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]
console.log(maioreMenor(vetor))