/*
    Classe Abstrata

    Não pode estanciar a classe, mas pode estanciar os filhos dela
*/

abstract class Calculo {
    protected resultado: number = 0

    abstract executar(...nums: number[]): void // Metodos abstract devem ser obrigatoriamente definidos pelos filhos da classe Calculo

    getResult(): number {
        return this.resultado
    }
}

class Multiplicacao extends Calculo {
    executar(...nums: number[]): void {
        this.resultado = nums.reduce((t, a) => t * a)
    }
}

class Divisao extends Calculo {
    executar(...nums: number[]): void {
        this.resultado = nums.reduce((t, a) => t / a)
    }
}

let c1 = new Multiplicacao
c1.executar(2, 3, 4, 5)
console.log(c1.getResult())

let c2 = new Divisao
c2.executar(10, 2, 5)
console.log(c2.getResult())