function anuidade(mes, valor) {
   if (mes > 0 && mes < 13) {
    atraso = mes - 1
    return (valor * ((1 + (5/100))**atraso)).toFixed(2)
   } else {
    return "Mês Inválido"
   }
}


console.log(anuidade(4, 100))
console.log(anuidade(1, 100))
console.log(anuidade(2, 100))
console.log(anuidade(8, 100))
console.log(anuidade(13, 100))