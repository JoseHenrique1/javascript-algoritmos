function contar() {
    
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resultado = document.getElementById('res')
    resultado.innerHTML = ``

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Preencha todos os campos')} 
    
    else {    
        var i = Number(inicio.value) 
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (i <f) { // Ordem crescente
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += ` \u{1F449}${c} `}
        } 

        else {
            
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += ` \u{1F449}${c} `}
        }
        
    }    
}