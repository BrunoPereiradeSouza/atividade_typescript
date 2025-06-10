type Livro = {
    titulo: string;
    autor: string;
    paginas: number;
}


const livro: Livro = {
    titulo: "Retórica",
    autor: "Aristóteles",
    paginas: 272
}

console.log(`O livro ${livro.titulo}, escrito por ${livro.autor} tem ${livro.paginas} páginas.`);
