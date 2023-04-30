function calcularValorTotalDeFilmesDisponiveis(filmes) {
    
let valorTotalDosFilmes =  filmes.reduce((acc, filmes) => acc += parseFloat(filmes.preco), 0);
return valorTotalDosFilmes;


}