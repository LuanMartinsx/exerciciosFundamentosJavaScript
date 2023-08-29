function vendaDeCarro(modelo) {
    switch(modelo) {
        case 'hatch':
            console.log("Compra efetuada com sucesso");
            break;
        case 'sedans':
        case 'caminhonetes':
        case 'motocicletas':    
            console.log("Tem certeza que não prefere este modelo?");
            break;
        default: 
            console.log("Não trabalhamos com este tipo de automóvel aqui")    
            break;    

    }
}


vendaDeCarro('hatch')
vendaDeCarro('sedans')
vendaDeCarro('caminhonetes')
vendaDeCarro('motocicletas')
vendaDeCarro('ferrari')