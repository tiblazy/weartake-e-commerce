function adicionarProduto(e) {

    const click = e.target;

    if (click.classList.contains("productAdd")) {
        // mudarCarrinho("cart");
        carrinhoVolume(1, produtos[0].imagem, produtos[0].nome, produtos[0].valor);
    }

    // if (click.id === "productAdd0") {
    //     mudarCarrinho("cart");
    //     carrinhoVolume(1, produtos[0].imagem, produtos[0].nome, produtos[0].valor);
    // }
    // if (click.id === "productAdd1") {
    //     mudarCarrinho("cart");
    //     carrinhoVolume(1, produtos[1].imagem, produtos[1].nome, produtos[1].valor);
    // }
    // if (click.id === "productAdd2") {
    //     mudarCarrinho("cart");
    //     carrinhoVolume(1, produtos[2].imagem, produtos[2].nome, produtos[2].valor);
    // }
    // if (click.id === "productAdd3") {
    //     mudarCarrinho("cart");
    //     carrinhoVolume(1, produtos[3].imagem, produtos[3].nome, produtos[3].valor);
    // }
    // if (click.id === "productAdd4") {
    //     mudarCarrinho("cart");
    //     carrinhoVolume(1, produtos[4].imagem, produtos[4].nome, produtos[4].valor);
    // }
    // if (click.id === "productAdd5") {
    //     mudarCarrinho("cart");
    //     carrinhoVolume(1, produtos[5].imagem, produtos[5].nome, produtos[5].valor);
    // }
    // if (click.id === "productAdd6") {
    //     mudarCarrinho("cart");
    //     carrinhoVolume(1, produtos[6].imagem, produtos[6].nome, produtos[6].valor);
    // }
}

function mudarCarrinho() {
    if (document.getElementById("cartBoxTitle") ||
        document.getElementById("cartBoxParagraph")) {
        document.getElementById("cartBoxTitle").remove();
        document.getElementById("cartBoxParagraph").remove();
    }
}

function removerProduto(e) {
    const click = e.target;

    if (click.classList.contains("cartBoxRemove")) {
        click.closest(".cartBoxProductCheio").remove();
    }
}

function confirmarCompra(e) {
    const click = e.target;
    // console.log(click.id);
    // console.log(click.classList);
    // console.log(document.querySelectorAll(".cartBoxRemove").length);
    // if (click.classList.contains("productAdd") || click.classList.contains("cartBoxRemove")) {
    //     document.getElementById("cart").classList.replace("cart", "cheio");

    //     if (click.classList.contains("cartBoxRemove") > -1) {
    //         counter.innerText = document.getElementById("cart").childElementCount;
    //         document.getElementById("cartResult").classList.replace("hide", "cartResult");
    //     }

    //     mudarCarrinho();
    // } else if (document.querySelectorAll(".cartBoxRemove").length > 0) {
    //     document.getElementById("cart").classList.replace("cheio", "cart");
    //     document.getElementById("cartResult").classList.replace("cartResult", "hide");

    //     inserirCarrinho();
    // }


    if (document.getElementById("cart").childElementCount === 0) {
        document.getElementById("cart").classList.replace("cheio", "cart");
        document.getElementById("cartResult").classList.replace("cartResult", "hide");

        inserirCarrinho();
    } else {
        document.getElementById("cart").classList.replace("cart", "cheio");
        document.getElementById("cartResult").classList.replace("hide", "cartResult");
        counter.innerText = document.querySelectorAll(".cartBoxRemove").length;

        mudarCarrinho();
    }
}

function botao() {
    const cartResult = document.createElement("button");
    cartResult.setAttribute("class", "hide");
    cartResult.setAttribute("id", "cartResult");
    cartResult.innerHTML =
        `
            <div class="cartResultDiv">
                <p class="cartText">Quantidade:</p>
                <p class="cartNumber" id="cartNumber">0</p>
            </div>
            <div class="cartResultDiv">
                <p class="cartTotal">Total:</p>
                <p class="cartPriceTotal" id="cartPriceTotal">R$ 0.00</p>
            </div>
        `

    aside.appendChild(cartResult);
}