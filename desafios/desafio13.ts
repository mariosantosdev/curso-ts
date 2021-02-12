/*
    Criar uma classe Fila usando Generics
    Atributos: array de objector (Chave/Valor)
    Metodos: obter(Chave), colocar({C, V}), limpar, imprimir

    AULA 122 do curso na udemy
*/

class Mapa<C, V>{
    private items: Array<{ chave: C, valor: V }> = []

    // Funcao para obter um item
    obter(chave: C) {
        // Pega o item que tenha a mesma chave passada no parametro
        const [itemInList] = this.items.filter(item => item.chave === chave)

        return itemInList
    }

    // Adiciona ou atualiza um item
    colocar(item: { chave: C, valor: V }) {
        // Se nao existir nenhum item, cria um novo
        if(!this.obter(item.chave)) return this.items.push(item)

        // Percorre todos os items existentes
        this.items = this.items.map(itemInList => {
            // Verifica se as chaves dos items concidem
            if(itemInList.chave === item.chave){
                // Altera o valor do item
                itemInList.valor = item.valor
            }

            return itemInList
        })
    }

    // Imprime no console todos os items
    imprimir() {
        console.log(this.items);
    }

    // Limpa todos os items da classe
    limpar() {
        this.items = []
    }
}

/* 
    O codigo abaixo ja foi entregue no desafio, e precisava fazer ele funcionar
    construindo a classe Mapa com todos os metodos abaixo
*/
const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })

console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()