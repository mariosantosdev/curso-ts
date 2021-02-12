/**
 * Aula para vermos quando usar o recurso do generics
 */

// Essa funcao recebe & retorna um valor any
function echo(obj: any) {
    return obj
}

console.log(echo('Mario').length); // Retorna o tamanho da string
console.log(echo(17).length); // Retorna undefined
console.log(echo({ name: 'Mario', age: 17 }));
