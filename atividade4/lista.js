function adicionar (nome, preco) {
    let produto = {
        id:null,
        nome:nome,
        preco:preco,
        comprado:false,
    }

    let lista = JSON.parse( localStorage.getItem("lista") ) || [];
    lista.length > 0? produto.id = lista[lista.length-1].id + 1 : produto.id = 1000;
    localStorage.setItem("lista", JSON.stringify( [...lista, produto]));
}







export {adicionar};