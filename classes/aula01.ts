/*
    Classes & Atributos #01
*/

class Data {
    // Por padrão todos são publicos
    public dia: number
    mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano: number = 2000) {
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
}

const aniversario = new Data(4, 9, 2003)
console.log(aniversario)

const casamento = new Data
casamento.ano = 2017
console.log(casamento)