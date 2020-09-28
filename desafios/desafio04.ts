/*
    Transformar codigo js da video aula em codigo ts

    var dizerOlar = function(nome){
        if(nome === undefined) { nome = 'Pessoa' }
        console.log('Olá, ' + nome)
    }
    dizerOla()
    dizerOla('Anna')
*/

let Saudacao = (nome: string = 'Pessoa'): void => {
    console.log(`Olá ${nome}`)
}

Saudacao()
Saudacao('Anna')