/*
    Herança com interface

    class (herdando) interface -> implements
    class (herdando) class -> extends
    interface (herdando) interface -> extendes
*/

interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

// Herdando interface A
class RealA implements A {
    a(): void { } // Obrigatoriamente deve ser chamado pela herança da interface A
}

// Herdando interface A e B
class RealAB implements A, B {
    a(): void { } // Obrigatoriamente deve ser chamado pela herança da interface A
    b(): void { } // Obrigatoriamente deve ser chamado pela herança da interface B
}

// Herdando interface A, B e C
class RealABC implements ABC {
    a(): void { } // Obrigatoriamente deve ser chamado pela herança da interface A
    b(): void { } // Obrigatoriamente deve ser chamado pela herança da interface B
    c(): void { } // Obrigatoriamente deve ser chamado pela herança da interface C
}

abstract class AbstractABD implements A, B {
    a(): void { } // Obrigatoriamente deve ser chamado pela herança da interface A
    b(): void { } // Obrigatoriamente deve ser chamado pela herança da interface B
    abstract d(): void
}