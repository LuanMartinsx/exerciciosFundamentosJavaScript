function vendaDeFrutas(fruta) {
    switch(fruta) {
        case 'maçã': 
            return "Não vendemos esta fruta aqui";
        case 'kiwi': 
            return "Estamos com escassezes de kiwi";
        case 'melancia':
            return "Aqui está, são 3 reais o quilo";
        default:
            return "error";    
    }
}

console.log(vendaDeFrutas('maçã'))
console.log(vendaDeFrutas('kiwi'))
console.log(vendaDeFrutas('melancia'))
console.log(vendaDeFrutas('tomate'))