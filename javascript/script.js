const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");

const btnCopiar = document.querySelector("#copiar");

function encriptar(){
    var inputMensaje = document.getElementById("mensaje").value.toLowerCase();
    
    var mensajeEncriptado = inputMensaje.replace(/e/igm,"enter");
    var mensajeEncriptado = mensajeEncriptado.replace(/o/igm,"ober");
    var mensajeEncriptado = mensajeEncriptado.replace(/i/igm,"imes");
    var mensajeEncriptado = mensajeEncriptado.replace(/a/igm,"ai");
    var mensajeEncriptado = mensajeEncriptado.replace(/u/igm,"ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("resultado").innerHTML = mensajeEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

    inputResultado.value = mensajeEncriptado;
}

function desencriptar(){
    var inputMensaje = document.getElementById("mensaje").value.toLowerCase();
    
    var mensajeEncriptado = inputMensaje.replace(/enter/igm,"e");
    var mensajeEncriptado = mensajeEncriptado.replace(/ober/igm,"o");
    var mensajeEncriptado = mensajeEncriptado.replace(/imes/igm,"i");
    var mensajeEncriptado = mensajeEncriptado.replace(/ai/igm,"a");
    var mensajeEncriptado = mensajeEncriptado.replace(/ufat/igm,"u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("resultado").innerHTML = mensajeEncriptado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

    inputResultado.value = mensajeEncriptado;
}

function copiar (){
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}

btnEncriptar.onclick = encriptar;

btnDesencriptar.onclick = desencriptar;

btnCopiar.onclick = copiar;