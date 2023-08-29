function numerosImpares(inicio = 0, fim = 100) {
   if(inicio > fim) {
    inicio = fim + inicio
    fim = inicio - fim
    inicio = fim - inicio
   }
   for(let i=inicio; i <= fim; i++) {
    if(i % 2 == 1) {
        console.log(i)
    }
   }
}

numerosImpares(19, 3)

