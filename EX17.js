function aumento(plano, salario) {
    switch(plano) {
        case 'A': 
            return salario + (salario * 0.10)
        case 'B': 
            return salario + (salario * 0.15)
        case 'C':
            return salario + (salario * 0.20)
        default:
            return "O plano é inválido"
        
    }
}


console.log(aumento('A', 1000))
console.log(aumento('B', 1000))
console.log(aumento('C', 1000))
console.log(aumento('D', 1000))
