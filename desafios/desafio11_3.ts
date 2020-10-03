/*
    **Transformar arquivo js em ts**

    Desafio da aula 79 na udemy

--> Exercício 3 - Getters & Setters
    var estagiario = {
        _primeiroNome: ''
    }
    
    Object.defineProperty(estagiario, 'primeiroNome', {
        get: function () {
            return this._primeiroNome
        },
        set: function (valor) {
            if (valor.length >= 3) {
                this._primeiroNome = valor
            } else {
                this._primeiroNome = ''
            }
        },
        enumerable: true,
        configurable: true
    })
    
    console.log(estagiario.primeiroNome)
    estagiario.primeiroNome = 'Le'
    console.log(estagiario.primeiroNome)
    estagiario.primeiroNome = 'Leonardo'
    console.log(estagiario.primeiroNome)
*/

class Estagiario {
    private _primeiroNome: string = ''

    get PrimeiroNome(): string {
        return this._primeiroNome
    }

    set PrimeiroNome(novoNome: string) {
        if (novoNome.length >= 3)
            this._primeiroNome = novoNome
    }
}

const estagiario = new Estagiario
estagiario.PrimeiroNome = 'Le'
console.log(estagiario.PrimeiroNome)
estagiario.PrimeiroNome = 'Leonardo'
console.log(estagiario.PrimeiroNome)