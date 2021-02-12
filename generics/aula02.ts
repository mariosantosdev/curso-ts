/**
 * Aula para usarmos o recurso generics
 */

// Essa funcao recebe & retorna um valor do tipo T
function echoWithGeneric<T>(obj: T) {
    return obj
}

console.log(echoWithGeneric('Mario').length); // Retorna o tamanho da string

/* Typescript nao reconhece o length em um tipo number */
// console.log(echoWithGeneric(17).length); 

/* Typescript converte o tipo T definido na funcão pelo tipo number definido abaixo */
console.log(echoWithGeneric<number>(17)); 

console.log(echoWithGeneric({ name: 'Mario', age: 17 }));
