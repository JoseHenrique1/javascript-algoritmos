class ClienteBanco {
    constructor (nome, documento, saldo) {
        this.nome = nome;
        this.documento = documento;
        this.saldo = saldo;
    }

    depositarcem () {
        this.saldo = this.saldo + 100
    }

    sacarcem () {
        this.saldo = this.saldo - 100
    }
}
let bank = [];

document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault(); 
    bank =[...bank, {name:e.target.name.value, document: e.target.document.value, saldo: Number(e.target.balance.value)}];
})


/* const element = document.getElementById("myList").children[0];

// Create a new text node:
const newNode = document.createTextNode("Water");

// Replace the text node:
element.replaceChild(newNode, element.childNodes[0]); */