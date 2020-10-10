/*
    Usando interface em uma classe
*/

interface Carro {
    marca: string,
    modelo: string
}

class Carro implements Carro {
    marca: string = 'BMW'
    modelo: string = 'x1'
}

const meuCarro = new Carro()
console.log(`Meu carro é da marca ${meuCarro.marca}, modelo ${meuCarro.modelo}`)