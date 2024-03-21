//exercício um
function botaoum(){
    var nome = prompt("Digite seu nome:")
    alert("Olá " + nome + ", prazer em te conhecer!")
}

//exercício dois
function botaoum(){
    var nome = prompt("Digite seu nome:")
    alert("Olá " + nome + ", prazer em te conhecer!")
    mensagem.innerHTML = "Olá " + nome + ", prazer em te conhecer!"
}


//exercício tres
function botao1(){
    mensagembotao.innerHTML = "Você clicou no botão 1"
}

function botao2(){
    mensagembotao.innerHTML = "Você clicou no botão 2"
}

function botao3(){
    mensagembotao.innerHTML = "Você clicou no botão 3"
}


//exercício quatro
function botaovermelho(){
    mensagembotao.innerHTML = "Você clicou no botão 1 - Vermelho"
    document.getElementById('mensagembotao').style.color='red'
}

function botaoazul(){
    mensagembotao.innerHTML = "Você clicou no botão 2 - Azul"
    document.getElementById('mensagembotao').style.color='blue'
}

function botaoverde(){
    mensagembotao.innerHTML = "Você clicou no botão 3 - Verde"
    document.getElementById('mensagembotao').style.color='green'
}

//exercício cinco
function compraproduto(){
    var produto = prompt("Informe o nome do produto:")
    var precoproduto = prompt("Informe o preço do produto:")
    alert("Voce irá comprar um(a) " + produto + ", por " + precoproduto + " reais")
    produtomensagem.innerHTML = "Voce irá comprar um(a) " + produto + ", por " + precoproduto + " reais"
}

//exercício seis 
function compraproduto2(){
    var produto2 = prompt("Informe o nome do produto:")
    var precoproduto2 = prompt("Informe o preço do produto:")
    var valordinheiro = prompt("Informe qual será o valor em dinheiro:")
    var troco = valordinheiro - precoproduto2
    produtomensagem1.innerHTML = ("Voce irá comprar um(a) " + produto2 + ", por " + precoproduto2 + " reais")
    produtomensagem2.innerHTML = ("Você deu a seguinte quantia em dinheiro R$ " + valordinheiro)
    produtomensagem3.innerHTML = ("Você vai receber de troco R$ " + troco)
}

function salario(){
    var nomefun = prompt("Qual o nome do funcionário?")
    var salariofun = parseFloat(prompt("Qual o salário atual de " + nomefun + "?"))
    var salarioporcent = parseFloat(prompt("O salário de " + nomefun + " vai ser reajustado em qual porcentagem (exemplo: 14)?"))
    var salarioreaj = salariofun * salarioporcent/100
    var salariofim = salarioreaj + salariofun
    salariomensagem1.innerHTML = ("O salário atual de " + nomefun + " era de R$:")
    salariomensagem2.innerHTML = ("com um aumento de " + salarioporcent + "%, o salário vai aumentar: " + salarioreaj)
    salariomensagem3.innerHTML = ("E a partir dai, " + nomefun + "vai passar a ganhar: R$ " + salariofim)
}

function baskara(){
    var num_a = parseFloat(prompt("Digite o valor de a:"))
    var num_b = parseFloat(prompt("Digite o valor de b:"))
    var num_c = parseFloat(prompt("Digite o valor de c:"))
    var delta = (num_b * num_b) - (4 * num_a * num_c)
    baskaramensagem1.innerHTML = "A equação atual é de " + num_a + "x²" + num_b + "x" + num_c + "=0"
    baskaramensagem2.innerHTML = "O cálculo realizado será de Δ=" + num_b + "² - 4." + num_a + "." + num_c
    baskaramensagem3.innerHTML = "O valor calculado foi: Δ=" + delta


}