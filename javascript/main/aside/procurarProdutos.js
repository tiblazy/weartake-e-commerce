function procurarProduto() {

    const productForm = document.createElement("form");
    productForm.setAttribute("class", "productForm");

    productForm.innerHTML =
        `
            <input type="text" name="" class="productSearch" id="productSearch" placeholder="Digite aqui sua pesquisa">
            <button class="productGet" id="productGet">Pesquisar</button>
        `

    aside.appendChild(productForm);
}

function negarVazio(e) {

    if (productSearch.value !== "") {
        removerFiltro("secCard");
        listarProduto(capitalize(productSearch.value));
        productSearch.value = "";

        if (document.getElementById("secCard").childElementCount === 0) {
            listar();
        }
    }

    e.preventDefault();
}