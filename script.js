// tela de amostragem
const tela = document.getElementById("tela")

// numeros (0 a 9)
const zero = document.getElementById("zero")
const um = document.getElementById("um")
const dois = document.getElementById("dois")
const tres = document.getElementById("tres")
const quatro = document.getElementById("quatro")
const cinco = document.getElementById("cinco")
const seis = document.getElementById("seis")
const sete = document.getElementById("sete")
const oito = document.getElementById("oito")
const nove = document.getElementById("nove")

// operadores
const add = document.getElementById("add")
const sub = document.getElementById("sub")
const divi = document.getElementById("divi")
const multi = document.getElementById("multi")

// Resto
const clear_empty = document.getElementById("ce")
const clear_all = document.getElementById('clear')
const mem = document.getElementById("memory")
const arredondar = document.getElementById("arredondamento")
const virgula = document.getElementById("virgula")

// Gerenciamento
const memoria = []
const numeros_Array = ["zero", "um", "dois", "tres", "quatro", "cinco", "seis", "sete", "oito", "nove"]

// resultado
const igual = document.getElementById('res')

zero.onclick = function () {
    tela.value += 0
    tela.focus()
}

um.onclick = function () {
    tela.value += 1
    tela.focus()
}
dois.onclick = function () {
    tela.value += 2
    tela.focus()
}

tres.onclick = function () {
    tela.value += 3
    tela.focus()
}

quatro.onclick = function () {
    tela.value += 4
    tela.focus()
}

cinco.onclick = function () {
    tela.value += 5
    tela.focus()
}

seis.onclick = function () {
    tela.value += 6
    tela.focus()
}

sete.onclick = function () {
    tela.value += 7
    tela.focus()
}

oito.onclick = function () {
    tela.value += 8
    tela.focus()
}

nove.onclick = function () {
    tela.value += 9
    tela.focus()
}

add.onclick = function () {
    tela.value += "+"
    tela.focus()
}

sub.onclick = function () {
    tela.value += "-"
    tela.focus()
}

divi.onclick = function () {
    tela.value += "/"
    tela.focus()
}

multi.onclick = function () {
    tela.value += "*"
    tela.focus()
}

clear_empty.onclick = function () {
    let valor = tela.value;
    let array = []
    for (let i in valor) {
        if (Number(i) !== valor.length - 1) {
            array.push(valor[i])
        }
    }
    tela.value = array.join('')
}

clear_all.onclick = function () {
    tela.value = ''
}

mem.onclick = function () {
    memoria.push(tela.value)
}

arredondar.onclick = function () {
    tela.value = Math.round(tela.value)
}

virgula.onclick = function () {
    tela.value += '.'
}

igual.onclick = function () {
    if (tela.value.length !== 0 && is_number(tela.value) && !operator_check(tela.value)) {
        tela.value = eval(tela.value)
    } else {
        if (memoria.length > 0) {
            tela.value = memoria[memoria.length - 1]
        } else {
        tela.value = ''
        window.alert("[ERRO] insira as informações corretas e tente novamente!")
        }
    }
}

let is_number = function (target) {
    let numbers = '0123456789.+-/*'
    for (let c of target) {
        if (numbers.indexOf(c) === -1) {
            return false
        }
}
    return true;
}

let operator_check = function (target) {
    const regex = /([+-/*,])\1+/;
    return regex.test(target);
}