function planoDeSaude(idade) {
    let valorBase = 100

    if (idade < 10) {
     return valorBase += 80
    }
    if (idade > 10 && idade < 30) {
        return valorBase += 50
    }
    if (idade > 30 && idade < 60) {
        return valorBase += 95
    }
    if (idade > 60) {
        return valorBase += 130
    }
}


console.log(planoDeSaude(9))
console.log(planoDeSaude(16))
console.log(planoDeSaude(36))
console.log(planoDeSaude(67))