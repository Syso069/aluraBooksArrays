let livros = [];

const endpointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscaLivrosDaApi();

async function getBuscaLivrosDaApi(){
    const res = await fetch(endpointDaApi);
    livros = await res.json();
    console.table(livros);
    exibirOsLivrosNaTela(livros);
}