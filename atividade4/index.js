import { adicionar } from "./lista.js"

document.querySelector("form").addEventListener("submit", (e)=>{
    let nome = e.target.produto.value;
    let preco = Number(e.target.preco.value);
    adicionar(nome, preco);
})