/*
    Interface em funções
*/

interface FuncaoCalculo{
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, expoente: number): number{
    return base ** expoente
}

console.log(potencia(3, 10))