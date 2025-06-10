"use strict";
function descreverPessoa(pessoa) {
    return `Olá ${pessoa.nome}! Você tem ${pessoa.idade} anos e é ${pessoa.profissao}!`;
}
const pessoa = {
    nome: "Bruno",
    idade: 20,
    profissao: "Programador"
};
console.log(descreverPessoa(pessoa));
