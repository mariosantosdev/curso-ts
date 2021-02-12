/**
 * Tipo de Funcoes generics
 */

function typeGeneric<T>(obj: T) {
    console.log(obj);
}

/* Variavel recebendo um tipo como funcao generica `<T>(data: T) => void`
    e recebendo o valor de uma funcao typeGeneric
*/
const functionGeneric: <T>(data: T) => void = typeGeneric

functionGeneric('ola')
functionGeneric<number>(3)
functionGeneric<string[]>(['3', '7'])
