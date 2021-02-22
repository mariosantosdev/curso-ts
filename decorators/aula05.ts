/**
 * Nessa aula fizemos um decorator para ser usado em um metodo da classe e não na
 * classe em si
 */

function congelar(classe: any, metodo: string, descriptor: PropertyDescriptor) {
    descriptor.writable = false
}

class ContaCorrente {
    private saldo: number

    constructor(saldo: number) {
        this.saldo = saldo
    }

    @congelar
    sacar(valor: number) {
        if (this.saldo >= valor) {
            this.saldo -= valor
            return true
        } else {
            return false
        }
    }

    @congelar
    getSaldo() {
        return this.saldo
    }
}

const cc = new ContaCorrente(10000)
cc.sacar(2000)
console.log(cc.getSaldo())

// PROBLEMA TENTANO ALTERAR O METODO DA CLASSE
cc.getSaldo = function () {
    return this['saldo'] + 7000
}
console.log(cc.getSaldo());
