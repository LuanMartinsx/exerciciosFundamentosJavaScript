function cardapio(codigo, quantidade) {
    switch(codigo) {
        case 100: 
        return quantidade * 3;
        case 200: 
        return quantidade * 4
        case 300: 
        return quantidade * 5.5
        case 400: 
        return quantidade * 7.5
        case 500: 
        return quantidade * 3.5
        case 600: 
        return quantidade * 2.8
        default: 
        return "Codigo não econtrado"
    }
}




console.log(cardapio(100, 2))
console.log(cardapio(200, 2))
console.log(cardapio(300, 3))
console.log(cardapio(400, 3))
console.log(cardapio(500, 4))
console.log(cardapio(600, 4))