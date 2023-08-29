function media(vetor) {
    let media = 0
    
    for(let i=0; i < vetor.length;i++) {
        media += vetor[i]

    }

    return media/vetor.length 
}


vetor = [1, 2, 3, 4, 5]
console.log(media(vetor))