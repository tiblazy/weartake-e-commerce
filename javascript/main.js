// Variáveis
const header = document.querySelector("header");
const secCard = document.getElementById("secCard");
const aside = document.getElementById("aside");
const cart = document.getElementById("cart");
const el = document.getElementsByClassName("cartResult");

// Componentes HTML
navi();
listar();
procurarProduto();
carrinho();
botao();

// Filtros
const listFilter = document.querySelector("ul");
listFilter.addEventListener("click", filtrarProduto);

const productGet = document.getElementById("productGet");
productGet.addEventListener("click", negarVazio);
const productSearch = document.getElementById("productSearch");

const section = document.querySelector("section");
section.addEventListener("click", adicionarProduto);

const retirar = document.querySelector("div");
retirar.addEventListener("click", removerProduto);

section.addEventListener("click", confirmarCompra);
aside.addEventListener("click", confirmarCompra);
let text = "Adicione Items";

let calculaValor = 0;
const counter = document.getElementById("cartNumber");




function capitalize(v) {
    return `${v.toUpperCase().slice(0, 1)}${v.toLowerCase().slice(1)}`
}