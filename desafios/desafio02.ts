/*
    Desafio conta bancaria - (Aula 29 no site da udemy)

    Criar um sistema simples de banco
    -> Criar tipo conta bancaria
        -> saldo
        -> funcao depositar
    -> Criar tipo correntista
        -> Nome
        -> Contabancaria
        -> Contatos
*/

type Conta = {
    saldo: number,
    depositar: (valor: number) => void
}

type Correntista = {
    nome: string,
    contaBancaria: Conta,
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Ana Flávia',
    contaBancaria: {
        saldo: 3456,
        depositar(valor) {
            this.saldo += valor
        }
    },
    contatos: []
}

correntista.contaBancaria.depositar(3000)
console.log(correntista);
