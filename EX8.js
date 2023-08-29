let stringPontuacoes = "10, 20, 15, 0, 8, 21, 7, 26, 2, 1"

function avaliaPontuacao(stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i=1; i < pontuacoes.length; i++) {
        if(parseInt(pontuacoes[i]) > parseInt(maiorPontuacao)) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraRecords++;
        } else if (parseInt(pontuacoes[i]) < parseInt(menorPontuacao)) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1
        }
    }
    return [qtdQuebraRecords, piorJogo]
}

console.log(avaliaPontuacao(stringPontuacoes))

