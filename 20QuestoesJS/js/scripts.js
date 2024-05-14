function q1 () {
    var n1,n2,n3,p, media;
    
    n1 = parseInt(document.getElementById('num').value);
    n2 = parseInt(document.getElementById('ndois').value);
    n3 = parseInt(document.getElementById('ntres').value);

    if (isNaN(n1)){
        n1 = 0
    } else if (isNaN(n2)) {
        n2 = 0
    } else if (isNaN(n3)) {
        n3 = 0
    } 

    p = document.getElementById('q1media');
    media = (n1+n2+n3)/3;
    if (isNaN(media)) {
        p.innerHTML = `Erro divisão por 0`
        return
    }
    p.innerHTML = `A media é ${media}`

}

function q2() {
    var lado, res;
    lado = Number(document.getElementById('lado').value);
    res = document.getElementById('q2res')

    res.innerHTML = `A área é ${lado*lado} e o perîmetro é ${lado*4}`
}

function q3 (){
    var num;
    num = parseInt(document.getElementById('inteiro').value)

    if (isNaN(num)){
        num = 0
    }
    document.getElementById('q3res').innerHTML = `2 x ${num} = ${num*2} <br> 3 x ${num} = ${num*3} <br> ${num}² = ${num*num} <br> ${num}³ = ${num**3} <br> raiz²(${num}) = ${num**0.5}`


}

function q4 (){
    var raio;
    raio = Number(document.getElementById('raio').value);

    document.getElementById('q4res').innerHTML = `Comprimento: ${(2*raio*3.14).toFixed(2)}, Área: ${(3.14 * raio**2).toFixed(2)} `;
}

function q5() {
    var base, altura;
    base = Number(document.getElementById('base').value);
    altura = Number(document.getElementById('altura').value);

    document.getElementById('q5res').innerText = `A área do triângulo é ${(base*altura/2).toFixed(2)}`
}

function q6() {
    var temp;
    temp = Number(document.getElementById('temperatura').value)

    document.getElementById('q6res').innerText = `Fahrenheit ${temp*1.8+32}, Kelvin ${temp+273}`
}

function q7 (){
    var cateto1, cateto2, hipotenusa;
    
    cateto1 = Number(document.getElementById('catetoum').value)**2
    cateto2 = Number(document.getElementById('catetodois').value)**2

    soma = cateto1+cateto2

    hipotenusa = soma**0.5


    document.getElementById('q7res').innerText = `${hipotenusa}`

    
}

function q8 (){

    var polegada;
    polegada = Number(document.getElementById('polegada').value);

    document.getElementById('q8res').innerText = ` ${polegada*2.54} cm`
}

function q9 (){
    var tamanho;

    tamanho = document.getElementById('texto').value

    document.getElementById('q9res').innerText = `${tamanho.length}`


}



function q10(){
    let metros = Number(document.getElementById('metros').value);
    document.getElementById('metros').value = ``;
    if (metros > 0){
        let km = metros/1000;
        document.getElementById('km').innerHTML = `${metros} metros em quilômetros: ${km} quilômetros`;
        let hec = metros/100;
        document.getElementById('hec').innerHTML = `${metros} metros em hectômetros: ${hec} hectômetros`;
        let dec = metros/10;
        document.getElementById('dec').innerHTML = `${metros} metros em decâmetros: ${dec} decâmetros`;
        let cent = metros*100;
        document.getElementById('cent').innerHTML = `${metros} metros em centímetros: ${cent} centímetros`;
        let decm  = metros*10;
        document.getElementById('decm').innerHTML = `${metros} metros em decímetros: ${decm} decímetros`;
        let ml  = metros*1000;
        document.getElementById('ml').innerHTML = `${metros} metros em milímetros: ${ml} milímetros`;
    } else{
        document.getElementById('km').innerHTML = `Digite um valor válido!`;
    }
}

function q11(){
    let num = parseInt(document.getElementById('num11').value);
    document.getElementById('num11').value = ``;
    if (num === 0 || isNaN(num)){
        document.getElementById('exibir01').innerHTML = `Digite um número diferente de 0!`;
    }else{
        if (num % 2 === 0){
            document.getElementById('exibir01').innerHTML = `${num} é par`;
        }else if(num % 2 != 0){
            document.getElementById('exibir01').innerHTML = `${num} é ímpar`;   
        }
    } 
}

function q12() {
    let num1 = parseInt(document.getElementById('num112').value);
    let num2 = parseInt(document.getElementById('num212').value);
    document.getElementById('num112').value = ``;
    document.getElementById('num212').value = ``;
    if (num1 % num2 === 0){
        document.getElementById('exibir02').innerHTML = `${num1} é múltiplo de ${num2}`;
    } else if(num2 % num1 === 0){
        document.getElementById('exibir02').innerHTML = `${num2} é múltiplo de ${num1}`;
    } else {
        document.getElementById('exibir02').innerHTML = `Não são múltiplos`;
    } 
}

function q13(){
    let num = parseInt(document.getElementById('numq13').value);
    document.getElementById('numq13').value = ``;
    if (num === 0){
        document.getElementById('exibir03').innerHTML = `O número ${num} é neutro`;
    } else if (num > 0){
        document.getElementById('exibir03').innerHTML = `O número ${num} é positivo`;
    } else if (num < 0){
        document.getElementById('exibir03').innerHTML = `O número ${num} é negativo`;
    } else{
        document.getElementById('exibir03').innerHTML = `Digite um número!`
    }
}

function q14(){
    let idade = Number(document.getElementById('idade').value);
    document.getElementById('idade').value == ``;
    if (idade >= 0 && idade <= 12){
        document.getElementById('exibir04').innerHTML = `Idade: ${idade} anos, portanto é uma criança`;
    } else if (idade >= 13 && idade <= 17){
        document.getElementById('exibir04').innerHTML = `Idade: ${idade} anos, portanto é um adolescente`;
    } else if (idade >= 18 && idade <= 59){
        document.getElementById('exibir04').innerHTML = `Idade: ${idade}, portanto é um adulto`;
    } else{
        document.getElementById('exibir04').innerHTML = `Idade: ${idade}, portanto é um idoso`;
    }
}

function q15(){
    let lado1 = Number(document.getElementById('l1').value);
    let lado2 = Number(document.getElementById('l2').value);
    let lado3 = Number(document.getElementById('l3').value);
    document.getElementById('l1').value = ``;
    document.getElementById('l2').value = ``;
    document.getElementById('l3').value = ``;
    if (lado1 === lado2 && lado2 === lado3){
        if (lado1 > 0 && lado2 > 0 && lado3 > 0){
            document.getElementById('exibir05').innerHTML = `${lado1}, ${lado2}, ${lado3} são iguais, portanto o triângulo é equilátero`;
        } else{
            document.getElementById('exibir05').innerHTML = `Digite lados válidos`;
        }
    } else if(lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        if (lado1 > 0 && lado2 > 0 && lado3 > 0){
            document.getElementById('exibir05').innerHTML = `${lado1}, ${lado2}, ${lado3} são pelo menos 2 lados iguais, portanto o triângulo é isósceles`;
        } else{
            document.getElementById('exibir05').innerHTML = `Digite lados válidos`;
        }
    } else {
        if (lado1 > 0 && lado2 > 0 && lado3 > 0){
            document.getElementById('exibir05').innerHTML = `${lado1}, ${lado2}, ${lado3} são todos diferentes, portanto o triângulo é escaleno`;
        } else{
            document.getElementById('exibir05').innerHTML = `Digite lados válidos`;
        }
    }
}

function q16(){
    let num1 = parseInt(document.getElementById('num116').value);
    let num2 = parseInt(document.getElementById('num216').value);
    let num3 = parseInt(document.getElementById('num316').value);
    document.getElementById('num116').value = ``;
    document.getElementById('num216').value = ``;
    document.getElementById('num316').value = ``;
    if (num1 === num2 && num2 === num3 && num2 === num3){
        document.getElementById('exibir06').innerHTML = `Digite números diferentes`;
    } else{
        if (isNaN(num1)){
            document.getElementById('exibir06').innerHTML = `Digite números diferentes`;
        } else if(isNaN(num2)){
            document.getElementById('exibir06').innerHTML = `Digite números diferentes`;
        } else if(isNaN(num3)){
            document.getElementById('exibir06').innerHTML = `Digite números diferentes`;
        } else{
            let array = [].concat(num1, num2, num3);
            array.sort((a, b) => a - b);
            document.getElementById('exibir06').innerHTML = `Entre ${num1}, ${num2} e ${num3}, o ${array[2]} é maior`;
        }  
    }
}

function q17(){
    let num1 = parseInt(document.getElementById('num117').value);
    let num2 = parseInt(document.getElementById('num217').value);
    let num3 = parseInt(document.getElementById('num317').value);
    document.getElementById('num117').value = ``;
    document.getElementById('num217').value = ``;
    document.getElementById('num317').value = ``;
    if (num1 === num2 && num2 === num3 && num2 === num3){
        document.getElementById('exibir07').innerHTML = `Digite números diferentes`;
    } else{
        if (isNaN(num1)){
            document.getElementById('exibir07').innerHTML = `Digite números diferentes`;
        }else if(isNaN(num2)){
            document.getElementById('exibir07').innerHTML = `Digite números diferentes`;
        }else if(isNaN(num3)){
            document.getElementById('exibir07').innerHTML = `Digite números diferentes`;
        }else{
            let array = [].concat(num1, num2, num3);
            array.sort((a, b) => a - b);
            document.getElementById('exibir07').innerHTML = `Entre ${num1}, ${num2} e ${num3}, o ${array[2]} é maior e o ${array[0]} é o menor`;
        }
    }
}

function q18(){
    let num1 = Number(document.getElementById('num118').value);
    let num2 = Number(document.getElementById('num218').value);
    let num3 = Number(document.getElementById('num318').value);
    document.getElementById('num118').value = ``;
    document.getElementById('num218').value = ``;
    document.getElementById('num318').value = ``;
    if (num1 === num2 && num2 === num3 && num2 === num3){
        document.getElementById('exibir08').innerHTML = `Digite números diferentes`;
    } else{
        if (isNaN(num1)){
            document.getElementById('exibir08').innerHTML = `Digite números diferentes`;
        }else if(isNaN(num2)){
            document.getElementById('exibir08').innerHTML = `Digite números diferentes`;
        }else if(isNaN(num3)){
            document.getElementById('exibir08').innerHTML = `Digite números diferentes`;
        }else{
            let array = [].concat(num1, num2, num3);
            array.sort((a, b) => a - b);
            document.getElementById('exibir08').innerHTML = `Entre ${num1}, ${num2} e ${num3}, o ${array[1]} é o intermediário`;
        } 
    }
}

function q19(){
    let num1 = parseInt(document.getElementById('num119').value);
    let num2 = parseInt(document.getElementById('num219').value);
    let operador = document.getElementById('operador').value;
    document.getElementById('num119').value = ``;
    document.getElementById('num219').value = ``;
    document.getElementById('operador').value = ``;
    if (operador === "+"){
        let soma = num1 + num2;
        document.getElementById('exibir09').innerHTML = `${num1} ${operador} ${num2} = ${soma}`;
    } else if(operador === "-"){
        let subtracao = num1 - num2;
        document.getElementById('exibir09').innerHTML = `${num1} ${operador} ${num2} = ${subtracao}`;
    } else if(operador === "*"){
        let multiplicacao = num1 * num2;
        document.getElementById('exibir09').innerHTML = `${num1} ${operador} ${num2} = ${multiplicacao}`;
    } else if(operador === "/"){
        let divisao = num1 / num2;
        document.getElementById('exibir09').innerHTML = `${num1} ${operador} ${num2} = ${divisao}`;
    } else{
        document.getElementById('exibir09').innerHTML = `Digite um operador válido!`;
    }
}

function q20(){
    let num = parseInt(document.getElementById('num120').value);
    document.getElementById('num120').value = ``;
    if (num < 0 || num > 12 || isNaN(num)){
        document.getElementById('exibir10').innerHTML = `Digite um número entre 1 e 12!`;
    } else{
        if(num >= 1 && num <= 3){
            if (num === 1){
                document.getElementById('exibir10').innerHTML = `Mês ${num} = Janeiro<br>Primeiro trimestre`;
            }
            if (num === 2){
                document.getElementById('exibir10').innerHTML = `Mês ${num} = Fevereiro<br>Primeiro trimestre`;  
            }
            if (num === 3){
                document.getElementById('exibir10').innerHTML = `Mês ${num} = Março<br>Primeiro trimestre`;
            }
        }
        if(num >= 4 && num <= 6){
            if (num === 4){
                document.getElementById('exibir10').innerHTML = `Mês ${num} = Abril<br>Segundo trimestre`;
            }
            if (num === 5){
                document.getElementById('exibir10').innerHTML = `Mês ${num} = Maio<br>Segundo trimestre`;  
            }
            if (num === 6){
                document.getElementById('exibir10').innerHTML = `Mês ${num} = Junho<br>Segundo trimestre`;
            }
        }
        if(num >= 7 && num <=9){
            if (num === 7){
                document.getElementById('exibir10').innerHTML = `Mês ${num} = Julho<br>Terceiro trimestre`;
            }
            if (num === 8){
                document.getElementById('exibir10').innerHTML = `Mês ${num} = Agosto<br>Terceiro trimestre`;  
            }
            if (num === 9){
                document.getElementById('exibir10').innerHTML = `Mês ${num} = Setembro<br>Terceiro trimestre`;
            }
        }
        if (num >= 10 && num <= 12){
            if (num === 10){
                document.getElementById('exibir10').innerHTML = `Mês ${num} = Outubro<br>Quarto trimestre`;
            }
            if (num === 11){
                document.getElementById('exibir10').innerHTML = `Mês ${num} = Novembro<br>Quarto trimestre`;  
            }
            if (num === 12){
                document.getElementById('exibir10').innerHTML = `Mês ${num} = Dezembro<br>Quarto trimestre`;
            }
        }
    }
}