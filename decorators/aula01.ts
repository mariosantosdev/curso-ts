/**
 * Criamos uma função "printClass" que recebe uma função como parametro
 * Usandos a função "printClass" como decorator, e vai ser chamada quando a classe
 * for criada no codigo
 */

@printClass
class ClassWithDecorator {

}

function printClass(constructor: Function) {
    console.log(constructor);
}