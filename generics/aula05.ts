/**
 * Criando classes com generics
 */

// Essa classe será herdada para receber um tipo generico O(operacao) e R(resposta)
export abstract class OperacaoBinaria<O, R> {
    constructor(public op1: O, public op2: O){}

    abstract executar(): R
}

// Essa classe herda a classe OperacaoBinaria passando number para O e R e somando os valores
class SomaBinaria extends OperacaoBinaria<number, number>{
    executar(): number {
        return this.op1 + this.op2
    }
}

console.log(new SomaBinaria(3, 5).executar());