//QUESTAO 1
let q1_lista = document.querySelector("#q1_lista");
document.querySelector("#q1_btn").addEventListener("click", ()=>{
    q1_lista.innerHTML = q1_lista.innerHTML + ` <li>${(Math.random()*100).toFixed(0)}</li>`;
})


//QUESTAO 2
let q2resposta = document.querySelector("#q2resposta");


function calcularPotencia(base, expoente) {
    return Math.pow(base, expoente);
}
document.querySelector("#q2_btn").addEventListener("click", ()=>{
    let base = Number(document.querySelector("#q2_base").value);
    let expoente = Number(document.querySelector("#q2_expoente").value);
    let resposta = calcularPotencia(base, expoente);
    q2resposta.innerText = resposta;
})


//QUESTAO 3

let q3resposta = document.querySelector("#q3resposta");


function calcularMelhorCombustivel(gasolina, alcool) {
    if (gasolina < alcool) {
        return 0;
    }
    return 1;
}
document.querySelector("#q3_btn").addEventListener("click", ()=>{
    let gasolina = Number(document.querySelector("#q3_gasolina").value);
    let alcool = Number(document.querySelector("#q3_alcool").value);
    let resposta = calcularMelhorCombustivel(gasolina, alcool);
    q3resposta.innerText = resposta==0? "gasolina":"alcool";
})


//QUESTAO 4

let kelvin = document.querySelector("#temp-kelvin");
let fahrenheit = document.querySelector("#temp-fahrenheit");
let alertas = document.querySelector("#q4alerta")

kelvin.innerText = "-";
fahrenheit.innerText = "-";
alertas.innerText = "Digite um valor"

function converterFahrenheit(celsius){return (9/5 * celsius)+32}
function converterKelvin(celsius){return celsius+273.15}

document.querySelector("#celsius").addEventListener("keyup", (e)=>{
    if (e.target.value ==="") {
        kelvin.innerText = "-";
        fahrenheit.innerText = "-";
        alertas.innerText = "Digite um valor"
    }else {
        kelvin.innerText = converterKelvin( Number(e.target.value));
        fahrenheit.innerText = converterFahrenheit(Number(e.target.value));
        alertas.innerText = ""

    }
})


//QUESTAO 5
let resposta = document.querySelector("#q5_resposta")
document.querySelector("#q5_btn").addEventListener("click", ()=>{
    let array = [0,0,0,0,0,0]
    for (k=0;k<1000000;k++) {
        let num = parseInt(Math.floor(Math.random() * 6) + 1);
        array[num-1] +=1;
    }
    resposta.innerHTML = `1 => ${array[0]} vezes <br/>
                          2 => ${array[1]} vezes <br/>
                          3 => ${array[2]} vezes <br/>
                          4 => ${array[3]} vezes <br/>
                          5 => ${array[4]} vezes <br/>
                          6 => ${array[5]} vezes <br/>`
})


