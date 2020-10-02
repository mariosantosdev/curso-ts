/*
    **Melhorar o desafio 09**
    
    Criar métodos precoComDesconto
    Criar metodo de resumo que mostre o preço com desconto

    AULA 69 do cursona udemy
*/

class Product {
    nome: string
    preco: number
    desconto: number

    constructor(nome: string, preco: number, desconto: number = 0) {
        this.nome = nome
        this.preco = preco
        this.desconto = desconto
    }

    public Resumo(): string {
        return `${this.nome} custa R$${this.preco} e recebeu ${100 * this.desconto}% de desconto, passando a custar ${this.CalcularDesconto(this.preco, this.desconto)}`
    }

    private CalcularDesconto(preco: number, desconto: number): number {
        return preco - (preco * desconto)
    }
}

const calculadora = new Product('Calculadora', 5.70, 0.2)
console.log(calculadora.Resumo())