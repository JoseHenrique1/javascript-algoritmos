import { adicionar, listar, remover } from "./lista.js"

function rowHtml (produto) {
    let row = document.createElement('tr');
    let nome = document.createElement('th');
    nome.innerText = produto.nome;
    let preco = document.createElement('td');
    preco.innerText = produto.preco;

    let comprado = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    comprado.appendChild(checkbox);

    let excluir = document.createElement('td');
    let i = document.createElement('i');
    i.setAttribute('class', 'btn btn-outline-danger bi bi-trash');
    excluir.appendChild(i);

    i.addEventListener("click", ()=> {
        row.remove();
        remover(produto);
    })

    row.appendChild(nome);
    row.appendChild(preco);
    row.appendChild(comprado);
    row.appendChild(excluir);
    return row;
}

document.querySelector("form").addEventListener("submit", (e)=>{
    let nome = e.target.produto.value;
    let preco = Number(e.target.preco.value);
    adicionar(nome, preco);
})




document.querySelector("body").onload = ()=> {
    let tbody = document.querySelector("tbody");
    let lista = listar();
    console.log(lista)
    for (let produto of lista) {
        console.log(produto)
        let row = rowHtml(produto);
        tbody.appendChild(row)
    }
} 