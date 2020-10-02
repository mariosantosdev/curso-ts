/*
    Herança #02
*/

import Carro from './aula04'

class Porsche extends Carro {
    constructor(modelo: string, sMax: number) {
        super('Porsche', modelo, sMax) // Propriedade super chama o construtor da classe extends
    }

    public Acelerar(): number {
        return this.AlterarVelocidade(20)
    }

    public Frear(): number {
        return this.AlterarVelocidade(-15)
    }
}

const panamera = new Porsche('panamera', 324)
console.log(`${panamera.marca} ${panamera.modelo}`)
console.log(panamera.Acelerar())
console.log(panamera.Frear())