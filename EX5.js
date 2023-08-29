function dinheiro(valor) {
    valorEmReais = `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

dinheiro(0.1 + 0.2)