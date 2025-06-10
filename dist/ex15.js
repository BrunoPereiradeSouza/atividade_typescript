"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const alunos = [
    { nome: "Aluno 1", matricula: 123, ativo: true },
    { nome: "Aluno 2", matricula: 970, ativo: true },
    { nome: "Aluno 3", matricula: 246, ativo: false },
];
let alunos_ativos = [];
for (let aluno of alunos) {
    if (aluno.ativo === true) {
        alunos_ativos.push(aluno.nome);
    }
}
console.log(`Alunos ativos: ${alunos_ativos}`);
