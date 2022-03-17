function navi() {
    const nav = document.createElement("nav");
    nav.innerHTML =
        `
            <h1 class="logo">Weartake</h1>
            <ul class="listFilter">
                <li class="productFilter" id="productFilter0">Todos</li>
            </ul>
        `

    header.appendChild(nav);

    filtrarObject();

    for (let index = 0; index < filtroResult.length; index++) {
        const productFilter = document.createElement("li");
        productFilter.innerHTML =
            `
                <li class="productFilter" id="productFilter${index+1}">${filtroResult[index]}</li>
            `

        document.querySelector("ul").appendChild(productFilter);
    }
}