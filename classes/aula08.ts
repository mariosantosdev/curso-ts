/*
    Membros Estaticos

    São atributo/metodos que os objetos receberam o mesmo valor em todos objetos
*/

class Matematica {
    static PI: number = 3.141592

    static areaCirc(raio: number): number {
        return this.PI * raio * raio
    }
}

console.log(Matematica.areaCirc(4))