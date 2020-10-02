/*
    Transformar codigo js da video aula em codigo ts

    var cientista = {primeiroNome: "Will", experiencia: 12}
    var primeiroNome = cientista.primeiroNome
    var experiencia = cientista.experiencia
    console.log(primeiroNome, experiencia)
*/

let cientista = {
    primeiroNome: "Will",
    experiencia: 12
}
let { primeiroNome, experiencia } = cientista
console.log(primeiroNome, experiencia)