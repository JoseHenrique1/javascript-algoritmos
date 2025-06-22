function tabuada() {
    var txtnum = document.getElementById('num')
    var tabuada = document.getElementById('tabu')
    if (txtnum.value.length == 0) {
        window.alert(' Prencha o campo! ')
    }
    else {
        let num = Number(txtnum.value)
        var cont = 1
        tabuada.innerHTML = ``
        while (cont<=10) {
            var item = document.createElement('option')
            item.text = `${num} . ${cont} = ${cont*num}`
            tabuada.appendChild(item)
            cont++
        } 
    }
    
}