let filmes = []
const endpointDaAPI = './filmes.json'
getBuscarFilmesDaAPI()


async function getBuscarFilmesDaAPI() {
    const res = await fetch(endpointDaAPI)
    filmes = await res.json()
    let filmesComDesconto = aplicarDesconto(filmes)
    exibirOsFilmesNaTela(filmesComDesconto)
}

