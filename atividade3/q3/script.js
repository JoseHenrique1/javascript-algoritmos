class Transacao {
    constructor (description, balance){
        this.description = description;
        this.balance = balance;
    }
}

function createItem(transacao) {
    let td_description = document.createElement("td");
    td_description.innerText = transacao.description;

    let td_balance = document.createElement("td");
    td_balance.innerText = transacao.balance;

    transacao.balance > 0? td_balance.classList.add("positive") : td_balance.classList.add("negative")

    let tr = document.createElement("tr");

    tr.appendChild(td_description);
    tr.appendChild(td_balance);

    return tr;
}

let transacoes = []

document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    if (Number(e.target.balance.value) != 0) {
        let transacao = new Transacao(e.target.description.value, Number(e.target.balance.value));
        transacoes = [...transacoes, transacao];
        let htmlRow = createItem(transacao);

        document.querySelector("table").appendChild(htmlRow);

        let balance = transacoes.map(
            (item)=> item.balance
        );

        balance = balance.reduce((acumulador, elemento) => acumulador + elemento, 0);

        document.querySelector("#balance").innerText = `Saldo : ${balance} reais`
}})