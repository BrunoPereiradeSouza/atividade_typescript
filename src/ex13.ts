type Produto = {
    nome: string,
    emEstoque: boolean,
}

const produtos: Produto[] = [
    {nome: "Iphone 16", emEstoque: true},
    { nome: "Fone de ouvido", emEstoque: false },
    { nome: "Smartwatch", emEstoque: true },
    { nome: "Carregador", emEstoque: false },
    { nome: "Câmera", emEstoque: true }
]

function filtrarProdutosDisponiveis(produtos: Produto[]): Produto[] {
    return produtos.filter(produto => produto.emEstoque === true);
}

let produtosEmEstoque = filtrarProdutosDisponiveis(produtos);

console.log(produtosEmEstoque);
