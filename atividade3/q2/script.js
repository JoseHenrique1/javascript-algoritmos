class ClienteBanco {
    constructor (name, document, balance) {
        this.name = name;
        this.document = document;
        this.balance = balance;
    }
}

function createItem(client) {
    let p_name = document.createElement("p");
    p_name.innerText = client.name;

    let p_document = document.createElement("p");
    p_document.innerText = client.document;

    let p_balance = document.createElement("p");
    p_balance.innerText = client.balance;

    let btn_more = document.createElement("button");
    btn_more.classList.add("btn");
    btn_more.classList.add("secondary");
    btn_more.innerText = "+ 100 $"
    btn_more.addEventListener("click", ()=>{
        p_balance.innerText = Number(p_balance.innerText) + 100;
    });

    let btn_less = document.createElement("button");
    btn_less.classList.add("btn");
    btn_less.classList.add("danger");
    btn_less.innerText = "- 100 $"
    btn_less.addEventListener("click", ()=>{
        p_balance.innerText = Number(p_balance.innerText) - 100;
    });

    let container_btns = document.createElement("div");
    container_btns.classList.add("container-btns")
    container_btns.appendChild(btn_more);
    container_btns.appendChild(btn_less);



    let div = document.createElement("div");
    div.classList.add('item')
    div.appendChild(p_name);
    div.appendChild(p_document);
    div.appendChild(p_balance);
    div.appendChild(container_btns);

    return div;
}

document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault(); 
    let client = new ClienteBanco(e.target.name.value,  e.target.document.value,  Number(e.target.balance.value)) ;
    htmlClient = createItem(client);
    document.querySelector("#list").appendChild(htmlClient);
})