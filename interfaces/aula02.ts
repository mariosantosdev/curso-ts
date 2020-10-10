/*
    Usando uma função dentro de uma interface
*/

interface Banco {
    valor: number
    depositar(valor: number): void
}

const conta: Banco = {
    valor: 0,
    depositar(valor: number){
        this.valor += valor
    }
}

console.log(conta.valor)
conta.depositar(10000)
console.log(conta.valor)