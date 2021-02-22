/**
 * Nesta aula criamos um decorator recebendo parametros e fazendo validações desses
 * parametros
 */

@decorator(false)
class Class2WithDecorator {

}

function decorator(showFunc: boolean) {
    return function (func: Function) {
        if (showFunc) console.log(func)
    }
}