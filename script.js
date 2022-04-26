
const btnE = document.getElementById("input-cripto");
const btnD = document.getElementById("input-descripto");

const btnCopy = document.getElementById("copiar");

let textocripto = document.getElementById('textocripto');
let mesnagemDeErro = "Use somente minúsculas e sem caracteres especiais ou acentos!";


btnCopy.addEventListener('click', (e) =>{
    const inputCopy = document.getElementById("texto-copia");
    inputCopy.value = textocripto.textContent;

    e.preventDefault();

    inputCopy.select()
    inputCopy.setSelectionRange(0, 99999)
    document.execCommand("copy");
})


btnE.addEventListener('click', (e)=>{
    const name = document.querySelector('#input-principal');
    const value = name.value;

    e.preventDefault();
    
    if(verificarFrase(value)){
        textocripto.textContent = criptografar(value); 
    }else{
        textocripto.textContent = mesnagemDeErro;
    }

});

btnD.addEventListener('click',(e) =>{
    const name = document.querySelector('#input-principal');
    const value = name.value;

    e.preventDefault();

    if(verificarFrase(value)){
        textocripto.textContent =  descriptografar(value); 
    }else{
        textocripto.textContent = mesnagemDeErro;
    }
 });


function criptografar(frase){
    let arrfrase = frase.split("");
    let frasefinal = '';

    for(let i = 0; i < arrfrase.length; i++){
        if(arrfrase[i] == 'a'){
            frasefinal += 'ai';
        }else if(arrfrase[i] == 'e'){
            frasefinal += 'enter';
        }else if(arrfrase[i] == 'i'){
            frasefinal += 'imes';
        }else if(arrfrase[i] == 'o'){
            frasefinal += 'ober';
        }else if(arrfrase[i] == 'u'){
            frasefinal += 'ufat';
        }else if(arrfrase[i] == ' '){ 
            frasefinal += arrfrase[i];
        }else{
            frasefinal += arrfrase[i];
        }
    }
    return  frasefinal;
}

function descriptografar(frase){
    frase = frase.replace(/ai/g, 'a');
    frase = frase.replace(/enter/g, 'e');
    frase = frase.replace(/imes/g, 'i');
    frase = frase.replace(/ober/g, 'o');
    frase = frase.replace(/ufat/g, 'u');

    return  frase;
}

function verificarFrase(frase){
    let proibidas = "ABCDEFGHIJKLMNOPQRSTUVWXYZÇ@+=_)(*&¨%$#<>áéíóúÁÉÍÓÚ";

    for(let i=0; i< frase.length; i++){
        if(proibidas.indexOf(frase.charAt(i)) !== -1){
           return false;
        }
    }
    return true;
}
