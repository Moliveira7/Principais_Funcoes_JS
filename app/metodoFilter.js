const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarFilmes))

function filtrarFilmes() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let filmesFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirOsFilmesNaTela(filmesFiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeFilmesDisponiveis(filmesFiltrados)        
        exibirValorTotalDosFilmesDisponiveisNaTela(valorTotal)        
    }    
}

function filtrarPorCategoria(categoria) {
    return filmes.filter(filmes => (filmes.categoria == categoria));
}

function filtrarPorDisponibilidade() {
    return filmes.filter(filmes => filmes.quantidade > 0);
}

function exibirValorTotalDosFilmesDisponiveisNaTela(valorTotal) {
    elementoComValorTotalDeFilmesDisponiveis.innerHTML = `
    <div class="filmes__disponiveis">
    <p>Todos os filmes disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}