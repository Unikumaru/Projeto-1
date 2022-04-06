function carregar(){

    var imagem = window.document.getElementById('imagem')
    var msg = window.document.getElementById('msg')
    var header = window.document.getElementById('header')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >= 5 && hora < 13){
        //bom dia
        header.innerHTML = `<h1> Bom dia </h1>`
        imagem.src= `img/dia.png`
        document.body.style.background = '#f3c5b2'
    }else if(hora >=13 && hora < 18){
        //bo tarde
        header.innerHTML = `<h1> Boa tarde </h1>`
        imagem.src= `img/tarde.png`
        document.body.style.background = '#fc9500'
    }else(hora >=18 && hora < 5)
        //bo noite
        header.innerHTML = `<h1> Boa noite </h1>`
        imagem.src= `img/noite.png`
        document.body.style.background = '#443556'
    
}