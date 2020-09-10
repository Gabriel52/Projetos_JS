//------------VARIAVEIS GLOBAIS------------------
let msg = window.document.getElementById('msg');
let img= window.document.getElementById('imagem');
console.log(img)


function carregar(){
    let data = new Date();
    let hora = data.getHours();
    
    msg.innerHTML = 'Agora são '+hora+' horas';
    if(hora >=0 && hora < 12){
        //BOM DIA
        img.src = 'assets/manha2.png' 
    }
    else if(hora>=12 && hora < 18){
        //BOA TARDE
        img.src = 'assets/tarde2.png'
        document.body.style.background = '#b9846f'
    }
    else{
        //Boa noite
        img.src = 'assets/noite2.png'
        document.body.style.background = '#515154'
    }
}