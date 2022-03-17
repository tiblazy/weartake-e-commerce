function carrinho() {
    const carrinho = document.createElement("section");
    carrinho.setAttribute("class", "cartSection");

    carrinho.innerHTML =
        `
            <h2 class="cartTitle">Carrinho de compras</h2>
            <div class="cart" id="cart">
                <p class="cartBoxTitle" id="cartBoxTitle">Carrinho Vazio</p>
                <p class="cartBoxParagraph" id="cartBoxParagraph">Adicione Items</p>
            </div>
        `

    aside.appendChild(carrinho);
}


function carrinhoVolume(clicks, imagem, nome, valor) {
    const cart = document.getElementById("cart");

    for (let index = 0; index < clicks; index++) {

        const cartBoxProductCheio = document.createElement("div");
        cartBoxProductCheio.setAttribute("class", "cartBoxProductCheio");

        cartBoxProductCheio.innerHTML =
            `
                <figure class="cartBoxFigure">
                    <img src="${imagem}" class="cartBoxImage">
                </figure>
                
                <div class="cartBoxDirection" id="cartBoxDirection">
                    <h3 class="cartBoxTitleCheio">${nome}</h3>
                    <small class="cartBoxPrice" id="cartBoxPrice"> ${(valor).toFixed(2)}</small>
                    <small class="cartBoxRemove">Remover</small>
                </div>
            `

        cart.appendChild(cartBoxProductCheio);
    }
}

function inserirCarrinho() {
    const cbTitle = document.createElement("p");
    cbTitle.setAttribute("class", "cartBoxTitle");
    cbTitle.setAttribute("id", "cartBoxTitle");
    cbTitle.innerText = "Carrinho Vazio"

    const cbParagraph = document.createElement("p");
    cbParagraph.setAttribute("class", "cartBoxParagraph");
    cbParagraph.setAttribute("id", "cartBoxParagraph");
    cbParagraph.innerText = "Adicione Items"


    document.getElementById("cart").appendChild(cbTitle);
    document.getElementById("cart").appendChild(cbParagraph);
}