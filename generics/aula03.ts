/**
 * Usando generics com arrays
 */

// Funcao recebendo parametros em uma lista com tipos genericos
function print<T>(args: T[]){
    args.forEach(elem => console.log(elem))
}

// Passando uma lista com varios parametros para ser detectado com generics
print([1, 'a', 8])

// Passando uma lista de parametros obrigatoriamente string
print<string>(['7','5', '2'])