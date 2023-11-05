import { adicionar, listar, remover, comprar } from "./lista.js"

//cria a linha da tabela com os dados
function rowHtml (produto) {
    let row = document.createElement('tr');
    let nome = document.createElement('th');
    nome.innerText = produto.nome;
    let preco = document.createElement('td');
    preco.innerText = produto.preco + " R$";

    let comprado = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("class", "form-check-input")
    checkbox.checked = produto.comprado;
    checkbox.addEventListener("click", ()=>{comprar(produto.id)})
    comprado.appendChild(checkbox);

    let excluir = document.createElement('td');
    let i = document.createElement('i');
    i.setAttribute('class', 'btn btn-outline-danger bi bi-trash');
    excluir.appendChild(i);

    i.addEventListener("click", ()=> {
        row.remove();
        remover(produto);
    })

    row.append(nome, preco, comprado, excluir);
    return row;
}

document.querySelector("form").addEventListener("submit", (e)=>{
    let nome = e.target.produto.value;
    let preco = Number(e.target.preco.value);
    adicionar(nome, preco);
})


document.querySelector("body").onload = ()=> {
    let tbody = document.querySelector("tbody");
    listar().forEach(produto => {
        let row = rowHtml(produto);
        tbody.appendChild(row)
    });
} 