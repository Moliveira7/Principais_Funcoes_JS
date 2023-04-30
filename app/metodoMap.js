function aplicarDesconto(filmes) {
    const desconto = 0.3
    filmesComDesconto = filmes.map(filme => {
        return {...filme, preco: (filme.preco - (filme.preco * desconto).toFixed(2))}
    })
    return filmesComDesconto
}