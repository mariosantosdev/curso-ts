/*
    Aula 07 - Tipo Any
*/

let carro: any = 'i8'
console.log(carro);
carro = { marca: 'BMW', modelo: carro, ano: 2015 }
console.log(carro, '\n');