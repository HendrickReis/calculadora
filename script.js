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

// res
const igual = document.getElementById('res')

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

igual.onclick = function () {
    if (tela.value.length !== 0 && is_number(tela.value) && !operator_check(tela.value)) {
        tela.value = eval(tela.value)
    } else {
        window.alert("errou, nobre!")
    }
}

let is_number = function (target) {
    let alfa = 'abcdefghijklmnopqrstuvwxyz;.?^~|%!@#$¨&_´`"'
    for (let i of target) {
    if (alfa.indexOf(i) !== -1) {
       return false
    }
    }
    return true;
}

let operator_check = function (target) {
    const regex = /([+-/*])\1+/;
    return regex.test(target);
}


// const clear_entry = document.getElementById("ce")

// clear_entry.onclick = function () {
//     window.alert("hello, world!")
// }