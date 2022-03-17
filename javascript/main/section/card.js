function listar() {

    for (let index = 0; index < produtos.length; index++) {
        const card = document.createElement("section");
        card.setAttribute("class", "card");

        card.innerHTML =
            `
                <figure class="cardProductHeader">
                    <img src="${produtos[index].imagem}" alt="" class="cardProductImage">
                </figure>
                
                <article class="cardProductBody">
                    <p class="productType">${produtos[index].tipo}</p>
                    <h2 class="productName">${produtos[index].nome}</h2>
                    <p class="productDesc">${produtos[index].desc}</p>
                    <p class="productPrice" id="productPrice${index}">R$ ${(produtos[index].valor).toFixed(2)}</p>
                    <small class="productAdd">Adicionar ao carrinho</small>
                </article>
            `

        secCard.appendChild(card)
    }
}