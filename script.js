const textArea = document.querySelector(".entrada");
const mensaje = document.querySelector(".salida");

const derecha = document.querySelector(".salida")

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value= ""
    derecha.style.backgroundImage = "none"
    document.getElementById("bcopy").style.display = "show"
    document.getElementById("bcopy").style.display = "flex"
   

}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
        
    }

    return stringEncriptada
    
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado
    textArea.value= ""
    derecha.style.backgroundImage = "none"


}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }

    }

    return stringDesencriptada
    
}

const btnc = document.getElementById('copy');

btnc.addEventListener('click', e => {
    mensaje.select();
    document.execCommand('copy');


})


var text =function (e){

    var event = e || window.event;
    var key = event.keyCode || event.wchich;
    var tecla = String.fromCharCode(key);

    var patron = /^[a-z\s]*$/;

    if (!tecla.search(patron)){

        return true;

    }else{

        return false;
                
    }
    
}

