/*
    Criar uma classe Fila usando Generics
    Atributos: fila (Array)
    Metodos: entrar, proximo, imprimir

    AULA 119 do curso na udemy
*/
class Fila<T> {
    constructor(fila: Array<T>){
        this.fila = fila
    }

    private fila

    // Entrar na fila
    entrar(elem: T) {
        this.fila.push(elem)
    }

    // Funcao para retornar o proximo membro da fila
    proximo(): T | null {
        // Checando se exite alguem na fila
        if(this.fila.length === 0) return null
        
        // Pegar o proximo
        const primeiro = this.fila[0]
        // Removendo o primeiro da fila
        this.fila.splice(0, 1)

        return primeiro
    }

    imprimir(){
        console.log(this.fila);
    }
}

const fila = new Fila(['Mario', 'Ana', 'Jorge', 'Patricia'])

fila.imprimir()
fila.entrar('Bruna')
console.log(fila.proximo())
fila.imprimir()