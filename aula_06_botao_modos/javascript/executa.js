/* Arquivo JS + alterar CSS */

//let titulo = document.querySelector('h1')
//titulo.textContent = 'Aula 09 Manipular CSS'
//titulo.innerHTML = 'Aula Manipular CSS'
//let imagem = document.querySelector('#foto')
//imagem.setAttribute('src', 'img/pride-fc.jpg')
//imagem.setAttribute('width', '280px')

/* MANIPULAR CSS */
//document.querySelector('h1').style.color = "red";
//titulo.style.color = "red";
//titulo.style.backgroundColor = "#000";
//titulo.style.borderBottom = "2px solid red";
//titulo.style.padding = "0.625rem";
//titulo.style.borderRadius = "5px";

//let box = document.querySelectorAll('.box')
//box[0].setAttribute('class', 'escura')
//box[0].removeAttribute('class')

/////// MODOS DE COR ///////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')
let btnLight = document.querySelector('#btlight')


//btnDark.addEventListener('click', modoDark)
//btnLight.addEventListener('click', modoLight)

function modoDark() {
    //event.preventDefault();
    console.log('modo dark')
    tela.classList.add("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("verde");
    tela.classList.remove("amarelo");
    tela.classList.remove("azul");
}

function modoLight() {
    //event.preventDefault();
    console.log('modo light')
    tela.classList.remove("dark");
    tela.classList.add("light");
    tela.classList.remove("pink");
    tela.classList.remove("verde");
    tela.classList.remove("amarelo");
    tela.classList.remove("azul");
}

function modoPink() {
    //event.preventDefault();
    console.log('modo pink')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.add("pink");
    tela.classList.remove("verde");
    tela.classList.remove("amarelo");
    tela.classList.remove("azul");
}

function modoAzul() {
    //event.preventDefault();
    console.log('modo pink')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.add("azul");
    tela.classList.remove("verde");
    tela.classList.remove("amarelo");
    tela.classList.remove("pink");
}

function modoVerde() {
    //event.preventDefault();
    console.log('modo pink')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.add("verde");
    tela.classList.remove("pink");
    tela.classList.remove("amarelo");
    tela.classList.remove("azul");
}

function modoAmarelo() {
    //event.preventDefault();
    console.log('modo pink')
    tela.classList.remove("dark");
    tela.classList.remove("light");
    tela.classList.remove("pink");
    tela.classList.remove("verde");
    tela.classList.add("amarelo");
    tela.classList.remove("azul");
}
/*
titulo.addEventListener('click', mudarId)
function mudarId() {
    titulo.id = 'titulo'
    console.log(titulo.id)
}
*/