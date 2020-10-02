/*
    Classes & Metodos
    Metodos de uma classe é basicamente funções de uma classe
*/

class Computador {
    dono: string
    marca: string
    preco: number

    constructor(dono: string, marca: string, preco: number){
        this.dono = dono
        this.marca = marca
        this.preco = preco
    }

    public Ligar(): void{
        console.log(`O computador da ${this.marca} ligou !`)
    }
}

const pc = new Computador('Mario', 'Positivo', 100)
pc.Ligar() 