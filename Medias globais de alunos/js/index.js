
var a  = document.getElementById('enviar');
a.addEventListener('click', verificar);

function verificar () {
    
    /*Apagando registros antigos*/ 
    document.getElementById('section-res').innerHTML = 'Resultado';
    document.getElementById('section-nome').innerHTML = 'Nome: ';
    document.getElementById('section-media').innerHTML = 'Media: ';
    document.getElementById('section-notaf').innerHTML = '';
    document.getElementById('topo').style.background = 'lightgray'
    

    var nome, erroshtml, notas,  cont;

    nome = document.getElementById('nome')
    erroshtml = document.getElementById('erros')
    notas = document.getElementsByName('notas');
    cont = 0;

    erroshtml.innerHTML = ''

    /*Verficação de erros*/
    if (nome.value == '') {
        erroshtml.innerHTML='Nome inválido';
        return;
    }

    /*Verfica se as notas são validas*/ 
    for (let nota in notas) {
        cont ++;
        let n = Number(notas[nota].value);

        if ( (n>10) || (n<0) ) {
            erroshtml.innerHTML = "Nota inválida";
            return;
        }

        if (cont == 4) {break};      // ele fica listando uns negocios estranho dps das notas //
    };

    calcular()
}


function calcular () {
    
    var notas,  cont, ListaNotas;

    notas = document.getElementsByName('notas');
    cont = 0;
    ListaNotas = []

    /*Adiciona as notas em uma lista*/
    for (let nota in notas) {
        cont ++;
        let n = Number(notas[nota].value);
        ListaNotas.push(n)
        if (cont == 4) {break};      // ele fica listando uns negocios estranho dps das notas //
    };

    var media, resultadohtml, nomehtml, mediahtml, notafinalhtml;

    resultadohtml = document.getElementById('section-res');
    nomehtml = document.getElementById('section-nome');
    mediahtml = document.getElementById('section-media');
    notafinalhtml = document.getElementById('section-notaf');
    media = (ListaNotas[0] + ListaNotas[1] + ListaNotas[2] + ListaNotas[3])/4;

    /* Informando o resultado */
    nomehtml.innerHTML = `Nome:  ${document.getElementById('nome').value} `;
    mediahtml.innerHTML = `Media:  ${media.toFixed(2)} `;

    if (media >= 7) {
        resultadohtml.innerHTML = `Resutado - APROVADO`;
        document.getElementById('topo').style.background = 'rgb(0,255,0)';
    } else if (media < 4) {
        resultadohtml.innerHTML = `Resultado - REPROVADO`;
        document.getElementById('topo').style.background = 'rgb(255,0,0)';

    } else if(media>=4 && media<7) {
        resultadohtml.innerHTML = `Resultado - PROVA FINAL`;
        document.getElementById('topo').style.background = 'orange';
        var pontosfinais = (50 - (media * 6)) / 4;
        notafinalhtml.innerText = `Precisa de ${pontosfinais.toFixed(2)} na prova final `;
    }

};


