/*
    Atributos somente leitura
*/

class Aviao {
    public readonly modelo: string

    constructor(modelo: string, public readonly prefixo: string){
        this.modelo = modelo
    }
}

const turboHelice = new Aviao('Tu-114', 'PT-ABC')
// turboHelice.modelo = 'DC-8' -> Gerão erro porque os atributos são `readonly` (apenas leitura)
// turboHelice.prefixo = 'PT-DEF' -> Gerão erro porque os atributos são `readonly` (apenas leitura)
console.log(turboHelice)