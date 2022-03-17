function listarProduto(item) {
    for (let i = 0; i < produtos.length; i++) {
        if (item === produtos[i].tipo || item === produtos[i].nome) {
            const card = document.createElement("section");
            card.setAttribute("class", "card");
            // card.setAttribute("id", "card");

            card.innerHTML =
                `
                        <figure class="cardProductHeader">
                            <img src="${produtos[i].imagem}" alt="" class="cardProductImage">
                        </figure>

                        <article class="cardProductBody">
                            <p class="productType">${produtos[i].tipo}</p>
                            <h2 class="productName">${produtos[i].nome}</h2>
                            <p class="productDesc">${produtos[i].desc}</p>
                            <p class="productPrice" id="productPrice${i}">R$ ${(produtos[i].valor).toFixed(2)}</p>
                            <small class="productAdd">Adicionar ao carrinho</small>
                        </article>
                    `
            secCard.appendChild(card)

        } else if (item === "Todos") {
            const card = document.createElement("section");
            card.setAttribute("class", "card");

            card.innerHTML =
                `
                    <figure class="cardProductHeader">
                        <img src="${produtos[i].imagem}" alt="" class="cardProductImage">
                    </figure>

                    <article class="cardProductBody">
                        <p class="productType">${produtos[i].tipo}</p>
                        <h2 class="productName">${produtos[i].nome}</h2>
                        <p class="productDesc">${produtos[i].desc}</p>
                        <p class="productPrice" id="productPrice${i}">R$ ${(produtos[i].valor).toFixed(2)}</p>
                        <small class="productAdd">Adicionar ao carrinho</small>
                    </article>
                `

            secCard.appendChild(card)
        }
    }
}