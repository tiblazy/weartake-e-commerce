const filtroProduto = [];
let filtroResult;

function filtrarObject() {
    for (let i = 0; i < produtos.length; i++) {
        filtroProduto.push(produtos[i].tipo);
    }
    
    filtroResult = [...new Set(filtroProduto)];
    // filtroResult = filtroProduto.filter((v, i, s) => s.indexOf(v) === i);
}


function filtrarProduto(e) {

    const click = e.target;

    removerFiltro("secCard");
    listarProduto(click.innerText);
}

function removerFiltro(id) {

    let el = document.getElementById(id);

    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}