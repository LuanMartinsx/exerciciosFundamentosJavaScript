function anoBissexto(ano) {
    if(ano <= 0) {
        return "valor invalido"
    }else if(ano % 400 == 0) {
        return "O ano é bissexto"
    } else if (ano % 100 == 0 ) {
        return "o ano nao é bissexto"
    } else if (ano % 4 == 0) {
        return "O ano é bissexto"
    }   else {
        return "O ano não é bissexto"
    }
}


console.log(anoBissexto(2023))
console.log(anoBissexto(2024))
console.log(anoBissexto(2020))
console.log(anoBissexto(2019))
console.log(anoBissexto(0))
console.log(anoBissexto(100))
console.log(anoBissexto(400))
