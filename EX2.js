function triangulo(p1, p2, p3) {
    if (p1 == p2 && p1 == p3) {
        console.log("Equilátero")
    } else if (p1 == p2 || p1 == p3 || p2 == p3) {
        console.log("Isóceles")
    } else {
        console.log("Escaleno")
    }
}


triangulo(1,1,1)
triangulo(1,1,2)
triangulo(1,2,3)