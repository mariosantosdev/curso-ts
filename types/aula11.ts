/*
    Aula 11 - Tipos Personalizados (Alias)
*/

type Aluno = {
    professores: string[],
    ComecarAula: (hora: number) => string
}

let alunoA: Aluno = {
    professores: ['Pedro', 'Maria'],
    ComecarAula: (horario: number): string => {
        if(horario <= 8){
            return 'Na hora'
        }else{
            return 'Fora da hora'
        }
    }
}

console.log(alunoA.ComecarAula(8), '\n');
