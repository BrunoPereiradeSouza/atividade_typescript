type Pessoa = {
    nome: string,
    idade: number,
    profissao: string
}

function descreverPessoa(pessoa: Pessoa): string {
    return `Olá ${pessoa.nome}! Você tem ${pessoa.idade} anos e é ${pessoa.profissao}!`
}

const pessoa: Pessoa = {
    nome: "Bruno",
    idade: 20,
    profissao: "Programador"
}

console.log(descreverPessoa(pessoa));
