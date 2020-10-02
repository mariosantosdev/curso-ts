/*
    Criar uma classe produtos
    Atributos: nome, preco e desconto
    OBS 1: Desconto é opcional (padrão é 0)
    OBS 2: Criar dois produtos, passando dois e três params

    AULA 66 do cursona udemy
*/

class Produto{
    nome: string
    preco: number
    desconto: number

    constructor(nome: string, preco: number, desconto: number = 0){
        this.nome = nome
        this.preco = preco
        this.desconto = desconto
    }
}

const produto1 = new Produto('Computador', 3450.00)
console.log(`Nome do produto: ${produto1.nome}\nPreço: ${produto1.preco}\nDesconto: ${produto1.desconto}`)

console.log('\n')

const produto2 = new Produto('Caneta', 2.50, 0.1)
console.log(`Nome do produto: ${produto2.nome}\nPreço: ${produto2.preco}\nDesconto: ${produto2.desconto}`)