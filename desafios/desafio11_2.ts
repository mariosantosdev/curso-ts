/*
    **Transformar arquivo js em ts**

    Desafio da aula 79 na udemy


--> Exercício 2 - Herança
    var objeto2D = {
        base: 0,
        altura: 0
    }
    
    var retangulo = Object.create(objeto2D)
    retangulo.base = 5
    retangulo.altura = 7
    retangulo.area = function() {
        return this.base * this.altura
    }
    console.log(retangulo.area())
*/

abstract class Objeto2D {
    abstract base: number = 0
    abstract altura: number = 0

    abstract Area(): number
}

class Retangulo extends Objeto2D {
    public base: number = 0
    public altura: number = 0

    constructor(base: number = 0, altura: number = 0) {
        super()
        this.base = base
        this.altura = altura
    }

    Area() {
        return this.base * this.altura
    }
}

const retangulo = new Retangulo
retangulo.base = 5
retangulo.altura = 7
console.log(retangulo.Area())