/*
    Classes & Atributos #02
*/

class SmartData {
    // Os atributos podem ser criados dentro do construtor
    constructor(
        public dia: number = 1,
        public mes: number = 1,
        public ano: number = 1970
    ){}
}

const aniversario2 = new SmartData(4, 9, 2003)
console.log(aniversario2)

const casamento2 = new SmartData
casamento2.ano = 2018
console.log(casamento2)