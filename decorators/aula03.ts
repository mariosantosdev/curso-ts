/**
 * Nessa aula geramos uma herança através do uso de decorators
 */

type Construtor = { new(...args: any[]): {} }

@printObject
class Eletrodomestico {
    constructor() {
        console.log('Classe pai');
    }
}

function printObject(construtor: Construtor) {
    return class extends construtor {
        constructor(...args: any[]) {
            console.log('Antes da classe pai');
            super(...args)
            console.log('Depois da classe pai');
        }
    }
}

new Eletrodomestico()