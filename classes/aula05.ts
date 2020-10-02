/*
    Herança #01
*/

import Carro from './aula04'

class Ferrari extends Carro {
    public Acelerar(): number {
        return this.AlterarVelocidade(20)
    }

    public Frear(): number {
        return this.AlterarVelocidade(-15)
    }
}

const f40 = new Ferrari('Ferrari', 'f40', 324)
console.log(`${f40.marca} ${f40.modelo}`)
console.log(f40.Acelerar())
console.log(f40.Frear())