function selecionarComida(elemento) {
    const botaocliclado = document.querySelector(".selectOne")
    if (botaocliclado !== null) {
        botaocliclado.classList.remove("selectOne");
    }
    elemento.classList.add("selectOne");
    verificar();
}

function selecionarBebida(elemento) {
    const botaocliclado = document.querySelector(".selectTwo")
    if (botaocliclado !== null) {
        botaocliclado.classList.remove("selectTwo");
    }
    elemento.classList.add("selectTwo");
    verificar();
}

function selecionarSobremesa(elemento) {
    const botaocliclado = document.querySelector(".selectThree")
    if (botaocliclado !== null) {
        botaocliclado.classList.remove("selectThree");
    }
    elemento.classList.add("selectThree");
    verificar();
}

function verificar() {
    const fechar = document.querySelector(".conclusao-inc");
    if (selecionarComida && selecionarBebida && selecionarSobremesa) {
        fechar.innerHTML= "Fechar pedido"
        fechar.classList.add("fecharpedido")
    }
}

function Mandarzap (){
const prato = document.querySelector(".containerprato .selectOne .nomeprato").textContent
const bebida = document.querySelector(".containerbebida .selectTwo .nomebebida").textContent
const sobremesa = document.querySelector(".containersobremesa .selectThree .nomesobremesa").textContent

let valorprato = document.querySelector(".containerprato .selectOne .valorcomida");
let valorbebida = document.querySelector(".containerbebida .selectTwo .value");
let valorsobremesa =document.querySelector(".containersobremesa .selectThree .value");
}