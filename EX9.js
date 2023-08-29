function aprovaAlunos(nota) {
    let notaCorrigida = arredondar(nota)
    if(notaCorrigida >= 40) {
        console.log(`Aprovado com Nota ${notaCorrigida}` )
    } else {
        console.log(`Reprovado com Nota ${notaCorrigida}`)
    }
  
}

function arredondar(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }

}

aprovaAlunos(100)
aprovaAlunos(40)
aprovaAlunos(30)
aprovaAlunos(38)
aprovaAlunos(88)
aprovaAlunos(61)