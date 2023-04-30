let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
let btnOrdenarPorPreco2 = document.getElementById('btnOrdenarPorPreco2')
btnOrdenarPorPreco.addEventListener('click', ordenarFilmesPorPreco)
btnOrdenarPorPreco2.addEventListener('click', ordenarFilmesPorPreco)

function ordenarFilmesPorPreco() {
    let filmesOrdenados = filmes.sort((a, b) => a.preco - b.preco)
    exibirOsFilmesNaTela(filmesOrdenados)
}