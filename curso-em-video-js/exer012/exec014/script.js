function carregar () {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    var minut = agora.getMinutes()
    msg.innerText = `Agora são exatamente ${hora}:${minut} `
    
    if (hora < 13) {
        imagem.src = 'manha.png'
        document.body.style.background = 'green'
    } else if (hora < 18) {
        imagem.src = 'tarde.png'
        document.body.style.background = 'red'
    } else {
        imagem.src = 'noite.jpg'
        document.body.style.background = 'blue'
    }
}

