// QUESTAO 1

document.querySelector("#q1_btn").addEventListener("click", ()=>{
    let numeros = document.querySelector("#q1_numeros").value;
    let separador = document.querySelector("#q1_separador").value;
    let array = numeros.replaceAll(" ", "");
    array = array.split(separador);
    document.querySelector("#q1_resposta").textContent = `Maior é ${Math.max(...array)}, Menor é ${Math.min(...array)}`;
})

// QUESTAO 2

document.querySelector("#q2_tarefa").addEventListener("keypress", (e)=>{
    if (e.key == "Enter" && e.target.value !== "") {
        let lista = document.querySelector("#q2_lista_tarefas");
        let tarefa = document.createElement("div");
        let texto = document.createTextNode(e.target.value);
        let btn_excluir = document.createElement("button");
        
        btn_excluir.textContent = "excluir"
        btn_excluir.addEventListener("click", ()=>{
            lista.removeChild(tarefa);
        })

        tarefa.appendChild(btn_excluir);
        tarefa.appendChild(texto);
        
        lista.appendChild(tarefa);
    }
})

// QUESTAO 3

const filmes = [{
    "titulo": "Dawn of the Planet of the Apes",
    "lancamento": 2014,
},
{
    "titulo": "District 9",
    "lancamento": 2009,
},
{
    "titulo": "Transformers: Age of Extinction",
    "lancamento": 2014,
},
{
    "titulo": "X-Men: Days of Future Past",
    "lancamento": 2014,
},
{
    "titulo": "The Machinist",
    "lancamento": 2004,
},
{
    "titulo": "The Last Samurai",
    "lancamento": 2003,
},
{
    "titulo": "The Amazing Spider-Man 2",
    "lancamento": 2014,
},
{
    "titulo": "Tangled",
    "lancamento": 2010,
},
{
    "titulo": "Rush",
    "lancamento": 2013,
},
{
    "titulo": "Drag Me to Hell",
    "lancamento": 2009,
},
{
    "titulo": "Despicable Me 2",
    "lancamento": 2013,
},
{
    "titulo": "Kill Bill: Vol. 1",
    "lancamento": 2003,
},
{
    "titulo": "A Bug's Life",
    "lancamento": 1998,
},
{
    "titulo": "Life of Brian",
    "lancamento": 1972,
},
{
    "titulo": "How to Train Your Dragon",
    "lancamento": 2010,
}];

function renderizarFilmes (string) {
    let lista = document.querySelector("#q3_filmes");
    var child = lista.lastElementChild; 
    while (child) {
        lista.removeChild(child);
        child = lista.lastElementChild;
    }

    filmes.forEach( (item)=>{
        if (item.titulo.toLowerCase().includes(string.toLowerCase())){
            let filme = document.createElement("p");
            filme.innerText = item.titulo + " - " + item.lancamento;
            lista.appendChild(filme);
        }
    })
}

renderizarFilmes("");
document.querySelector("#q3_filme").addEventListener("keyup", (e)=>{
    renderizarFilmes(e.target.value);
})


// QUESTAO 4
let lista_fucionarios = []
document.querySelector("#q4_btn").addEventListener("click", ()=>{
    let nome = document.querySelector("#q4_nome").value
    let salario = document.querySelector("#q4_salario").value
    let lista = document.querySelector("#q4_lista")
    let maior_salario = document.querySelector("#q4_maior")
    let li = document.createElement("li");
    
    li.innerText = nome + " - " + salario;
    lista.appendChild(li);
    
    if (lista_fucionarios.length === 0) {
        maior_salario.textContent = `O maior salario é ${salario} de ${nome}`
        maior_salario.setAttribute("salario", salario)
    }
    else {
        if( Number(maior_salario.getAttribute("salario")) < Number(salario)){ 
            maior_salario.textContent = `O maior salario é ${salario} de ${nome}`
            maior_salario.setAttribute("salario", salario) 
        }
    }
    
    lista_fucionarios = [...lista_fucionarios, {"nome": nome, "salario": Number(salario)}]
    const initialValue = 0;
    const salarios_soma = lista_fucionarios.reduce((accumulator, currentValue) => accumulator + currentValue.salario, initialValue);
    document.querySelector("#q4_soma").innerText = `A soma dos salarios é ${salarios_soma}`


})