function aplicarDesconto(livros) {
    const desconto = 0.3;
    livrosComDesconto = livros.map(livros => {
        return {...livros, preco: livro.preco - (livros.preco * desconto)}
    })
    return livrosComDesconto();
}