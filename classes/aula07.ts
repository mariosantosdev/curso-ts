/*
    Getters & Setters

    São metodos `get` e `set` de uma classe
*/

class Pessoa {
    private _idade: number = 0

    get idade(): number {
        return this._idade
    }

    set idade(valor: number) {
        if (valor >= 0 && valor <= 120)
            this._idade = valor
    }
}

const pessoa1 = new Pessoa
pessoa1.idade = 10 // Aqui ele chama o metodo `set` da classe Pessoa
console.log(pessoa1.idade) // Aqui ele chama o metodo `get` da classe Pessoa
