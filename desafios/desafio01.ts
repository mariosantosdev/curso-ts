/*
    Desafio refente a aula 10

    Criar um objeto funcionario com:
    - Array de strings com os nomes dos supervisores
    - Funcao de bater ponto que recebe a hora e retorna uma string
        -> Ponto normal (<=8)
        -> Fora do horario (> 8)
*/

// Definindo o tipo das chaves do objeto
let funcionario: {
    supervisores: string[],
    baterPonto: (hora: number) => string
}

// Definindo os valores do objeto
funcionario = {
    supervisores: ['Mario', 'Ana'],
    baterPonto: (horario) => {
        return horario <= 8 ? 'No horário' : 'Fora do horário'
    }
}

console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(5));
console.log(funcionario.baterPonto(13));