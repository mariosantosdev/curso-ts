/*
    **Transformar arquivo js em ts**

    Desafio da aula 79 na udemy


--> Exercício 1 - Classe
    function Moto(nome) {
        this.nome = nome
        this.velocidade = 0
    
        this.buzinar = function() {
            
        }
    
        this.acelerar= function(delta) {
            this.velocidade = this.velocidade + delta
        }
    }
    
    var moto = new Moto('Ducati')
    moto.buzinar()
    console.log(moto.velocidade)
    moto.acelerar(30)
    console.log(moto.velocidade)
*/

class Moto{
    public nome: string
    public velocidade: number = 0

    constructor(nome: string){
        this.nome = nome
    }

    Buzinar(): void{
        console.log('Toooooooooot!')
    }

    Acelerar(delta: number){
        this.velocidade += delta
    }
}

const moto = new Moto('Ducatti')
moto.Buzinar()
moto.Acelerar(30)
console.log(moto.velocidade)