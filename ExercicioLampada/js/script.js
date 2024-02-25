const ligar = document.getElementById('ligar')
const desligar = document.getElementById('desligar')
const consertar = document.getElementById('consertar')
const lampada = document.getElementById('lamp') 
const estado = document.getElementById ('estado')
const duplo1 = document.getElementById ('duplo1')


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

//botão único:

function estado1(){
    return lamp.src.indexOf('desligada') > -1 
}

function estado2(){
    return lamp.src.indexOf('ligada') > -1 
}

function ligar2 (){
    if(!estaQuebrada()){
        lamp.src = "img/ligada.jpg"
    }
        if(estado2()){           
            estado.innerHTML = "Sua lâmpada está Ligada"   
        }
}

function desligar2 (){
    if(!estaQuebrada()){
        lamp.src = "img/desligada.jpg"
    }
        if(comoEsta()){
            estado.innerHTML = "Sua lâmpada está Desligada"
        }
}

function destruir (){
    lamp.src = "img/quebrada.jpg"
    estado.innerHTML = "Sua lâmpada está Quebrada"
}

function duplo (){
    if(estado()){
        ligar2()
    }
    else{
        desligar2()
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

ambos.addEventListener('click', duplo)

