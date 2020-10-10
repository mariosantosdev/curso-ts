/*
    Interface são tipagens de objetos
*/

interface Humano {
    nome: string
    idade?: number
    [prop: string]: any // Propriedade com nome dinamico
}

function SaudarComOla(pessoa: Humano) {
    console.log(`Olá, ${pessoa.nome}`)
}

function MudarNome(pessoa: Humano, nome: string) {
    pessoa.nome = nome
}

const person: Humano = {
    nome: 'Mario',
    idade: 17
}

SaudarComOla(person)
MudarNome(person, 'Mário S.')
SaudarComOla(person)
SaudarComOla({ nome: 'Breno' })
SaudarComOla({ nome: 'Julia', idade: 24, nacionalidade: 'Brasileira'})