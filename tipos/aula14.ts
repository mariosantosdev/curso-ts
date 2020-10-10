/*
    Aula 14 - Tipo Never
*/

function falha(str: string): never{
    throw new Error(str)
}

const produto = {
    nome: 'Computador',
    preco: 2.500,
    validarProduto(){
        if(!this.nome || this.nome.trim().length == 0){
            falha('Precisa passar um nome')
        }
        if(this.preco <= 0){
            falha('Preço inválido')
        }
    }
}

produto.validarProduto()