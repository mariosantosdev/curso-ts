/*
    Modulos são arquivos que podem ser exportados
    (por padrão não é reconhecido pelo browser)
*/

const PI = 3.14

export function areaCircunferencia(raio: number): number{
    return raio * raio * PI
}