/*
    Modificadores de acesso

    Um modificador de acesso permite privar e modificar metodos de dentro de uma classe
    dando mais consistencia na classe
*/ 

export default class Carro{
    public marca: string
    public modelo: string

    private velocidadeAtual: number = 0
    private velocidadeMaxima: number = 200

    constructor(marca, modelo, sMax){
        this.marca = marca
        this.modelo = modelo
        this.velocidadeMaxima = sMax
    }

    public Acelerar(): number{
        return this.AlterarVelocidade(5)
    }

    public Frear(): number{
        return this.AlterarVelocidade(-5)
    }

    // Metodo protected pode ser transmitido por herança
    protected AlterarVelocidade(delta: number): number{
        const novaVelocidade = this.velocidadeAtual + delta
        const valocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima

        if(valocidadeValida){
            this.velocidadeAtual = novaVelocidade
        }else{
            this.velocidadeAtual = delta >= 1 ? this.velocidadeMaxima : 0
        }

        return this.velocidadeAtual
    }
}

const celta = new Carro('Chevrolet', 'Celta', 350)
console.log(celta.Acelerar())