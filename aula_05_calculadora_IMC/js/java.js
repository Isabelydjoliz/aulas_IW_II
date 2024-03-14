function calcularIMC() {
    var sexo = document.getElementById("sexo").value;
    var altura = parseFloat(document.getElementById("altura").value);
    var peso = parseFloat(document.getElementById("peso").value);

    if (!isNaN(altura) && !isNaN(peso) && altura > 0 && peso > 0) {
        var imc = peso / (altura * altura);

        var resultado = "Seu IMC é: " + imc.toFixed(2) + "<br>";
        resultado += "Classificação: " + classificarIMC(sexo, imc);

        document.getElementById("result").innerHTML = resultado;
    } else {
        alert("Por favor, insira valores válidos para altura e peso.");
    }
}

function classificarIMC(sexo, imc) {
    if (sexo === "masculino") {
        return classificarMasculino(imc);
    } else {
        return classificarFeminino(imc);
    }
}

function classificarMasculino(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        return "Obesidade grau 1";
    } else if (imc >= 35 && imc < 39.9) {
        return "Obesidade grau 2";
    } else {
        return "Obesidade grau 3";
    }
}

function classificarFeminino(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        return "Obesidade grau 1";
    } else if (imc >= 35 && imc < 39.9) {
        return "Obesidade grau 2";
    } else {
        return "Obesidade grau 3";
    }
}

function recarregarPagina() {
    window.location.reload();
}