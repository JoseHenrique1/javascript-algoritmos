function verificar() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var fano = document.getElementById('ano')
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Dados invalidos!')
    } 
    else {
        var sexo = getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if (sexo[0].checked) {
            genero = 'homem'
        } 
        else if (sexo[1].checked) {
            genero = 'mulher'
        } 
        var resultado = document.querySelector('div#res')
        resultado.innerText = `${genero} com ${idade} ano(s)`
    }
    var resultado = document.getElementById('res')
    resultado.innerHTML = `${genero} com ${idade} ano(s)`
}       