/*
    Aula 08 - Parametros e Retornos de Funções
*/

function Somar(num1: number, num2: number): number {
    // A funcao recebe 2 numeros e retorna um outro numero
    return (num1 + num2)
}

function NumberToString(num: number): string {
    // Funcao recebe 1 numero e retorna uma string
    return num.toString()
}

function Hello(): void {
    // Void é uma função que nn retorna nada
    console.log('Hello, World!', '\n');

    // return nome -> Gera um erro

}

let soma = Somar(2, 5)
console.log(soma, typeof soma);
console.log(NumberToString(soma), typeof NumberToString(soma));
Hello()