let livros = [];

const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscaLivrosDaApi();
const elementoParaInserirLivros = document.getElementById('livros');

async function getBuscaLivrosDaApi(){
    const res = await fetch(endpointDaApi);
    livros = await res.json();
    console.table(livros);
    exibirOsLivrosNaTela(livros);
}