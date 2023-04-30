const elementoParaInserirFilmes = document.getElementById('filmes')
const elementoComValorTotalDeFilmesDisponiveis = document.getElementById('valor_total_Filmes_disponiveis')

function exibirOsFilmesNaTela(listaDeFilmes) {
    elementoParaInserirFilmes.innerHTML = ''    
    elementoComValorTotalDeFilmesDisponiveis.innerHTML = ''
   
    listaDeFilmes.forEach(filmes => {

      // Usando o if ternario, para verificar a quantidade dispnivel dos filmes     
      let disponibilidade = filmes.quantidade > 0 ? 'filmes__imagens' : 'filmes__imagens indisponivel'
      let precoFormatado = parseFloat(filmes.preco)      
      
      elementoParaInserirFilmes.innerHTML += `        
      <div class="filme">
            <img class="${disponibilidade}" src="${filmes.imagem}" 
                alt="${filmes.alt}" 
                />
            <h2 class="filme__titulo">
              ${filmes.titulo}
            </h2>
            <p class="filme__diretor">Diretor : ${filmes.diretor}</p>
            <p class="filme__preco" id="preco">R$ ${precoFormatado.toFixed(2)}</p>
            <div class="filme__categoria">
              <span class="tag">Categoria : ${filmes.categoria}</span>
            </div>
          </div>         
          
        `
      })    
}

