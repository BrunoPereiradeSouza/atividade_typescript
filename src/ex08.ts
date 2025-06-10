export interface Aluno {
    nome: string,
    matricula: number,
    ativo: boolean
}

const aluno: Aluno = {
    nome: "Bruno",
    matricula: 102030,
    ativo: true
}

console.log(aluno);
