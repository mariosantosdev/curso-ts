/**
 * Nessa aula adicionamos um metodo na classe decorada
 * o typescript pode reclamar da funcao adicionada nao existir quando invocada
 * por isso uma opção é criar uma interface COM O MESMO nome da classe
 */

interface DecoratorLesson04 {
    log?(): void
}

@printing
class DecoratorLesson04 {

}

function printing(constructor: Function) {
    constructor.prototype.log = function () {
        console.log(this);
    }
}

const decoratedClass = new DecoratorLesson04()
decoratedClass.log && decoratedClass.log()