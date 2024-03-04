function botao_somar() {
    var num1 = parseFloat(document.getElementById('num1').value)
    console.log('primeiro número: ' + num1)
    console.log(typeof (num1))
    var num2 = parseFloat(document.getElementById('num2').value)
    console.log('segundo número: ' + num2)
    console.log(typeof (num2))
    var soma = num1 + num2
    console.log(soma)
    resul.innerHTML = (soma)
}

function botao_subtrair(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var subt = num1 - num2
    resul.innerHTML = (subt)
}

function botao_multiplicacao(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var multip = num1 * num2
    resul.innerHTML = (multip)
}

function botao_dividir(){
    var num1 = parseFloat(document.getElementById('num1').value)
    var num2 = parseFloat(document.getElementById('num2').value)
    var divi = num1 / num2
    resul.innerHTML = (divi)
}

function limpar() {
    var num1 = document.getElementById('num1')
    var num2 = document.getElementById('num2')
    num1.value = ""
    num2.value = ""
    resul.innerHTML = ""
}