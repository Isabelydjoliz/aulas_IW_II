const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const consertar = document.getElementById('consertar')
const lampada = document.getElementById('lamp') 

function lampligada(){
    if(!estaquebrada()){
        lampada.src = "img/ligada.jpg"
    }
}
function lampdesligada(){
    if(!estaquebrada()){
        lampada.src = "img/desligada.jpg"
    }
}
function lampquebrada(){
    lampada.src = "img/quebrada.jpg"
}
function estaquebrada(){
    return lampada.src.indexOf('quebrada') > -1
    //isso retorna True ou False
}
function lampconsertada(){
    if(estaquebrada()){
        lampada.src = "img/desligada.jpg"
    }
}

//funcão sempre tem que estar antes
//addEventListener identifica a ação do cursor

ligar.addEventListener('click',lampligada)
desligar.addEventListener('click',lampdesligada)
consertar.addEventListener('click',lampconsertada)
//maouseleave identifica o evento de quando o mouse clicar em cima do item

lampada.addEventListener('mouseover',lampligada)
lampada.addEventListener('mouseleave',lampdesligada)
//mouseover identifica o evento de quando o mouse passar por cima do item
//maouseleave identifica o evento de quando o mouse sair de cima do item

lampada.addEventListener('dblclick',lampquebrada)
//dblclick identifica o evento de quando o item for clicado duas vezes



