const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const resultado = document.querySelector(".resultado");
const muneco = document.querySelector(".muneco");


function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.style.display = "block";
    mensaje.value = textoEncriptado;
    muneco.style.display = "none";
    inputTexto.value = "";
}

function encriptar(stringEncriptada){
    let matrizCordigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCordigo.length; i++){
        if(stringEncriptada.includes(matrizCordigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCordigo[i][0], matrizCordigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    inputTexto.value = "";
}

function desencriptar(stringDesncriptada){
    let matrizCordigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesncriptada = stringDesncriptada.toLowerCase();

    for(let i = 0; i < matrizCordigo.length; i++){
        if(stringDesncriptada.includes(matrizCordigo[i][1])){
            stringDesncriptada = stringDesncriptada.replaceAll(matrizCordigo[i][1], matrizCordigo[i][0])
        }
    }

    return stringDesncriptada;
}

function btnCopiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    alert("Mensaje copiado");
}