//-----------SCRIPTS PARTE 1------------//
//Variables//
let imgPart1 = document.querySelector('#img-parte1');

//Función//
function border(){
    console.log(imgPart1);
    if(imgPart1.style.border != "2px solid red" ){
        imgPart1.style.border = "2px solid red"
    } else {
        imgPart1.style.border = "0px"
    }
    
};

//Obtener botón 1 desde el DOM//
let botonPart1 = document.querySelector('#btn-parte1');
//Programar para que el botón escuche la función//
botonPart1.addEventListener("click", border);



//-----------SCRIPTS PARTE 2------------//
//Variables//
let sticker1, sticker2, sticker3;
sticker1 = document.querySelector('#in1Parte2');
sticker2 = document.querySelector('#in2Parte2');
sticker3 = document.querySelector('#in3Parte2');

//Función//
function sumaSticker(){
    let num1 = Number(sticker1.value);
    let num2 = Number(sticker2.value);
    let num3 = Number(sticker3.value);
    let suma = num1 + num2 + num3;

    if (num1 < 0|| num2 < 0 || num3 < 0) {
        document.querySelector('#text-check2').innerHTML = 'Seleccionaste una cantidad inválida de stickers.';
    } else if (suma > 10) {
        document.querySelector('#text-check2').innerHTML = `Excedes la cantidad máxima de stickers. Estás llevando ${suma}.`;
    } else if (suma > 0) {
        document.querySelector('#text-check2').innerHTML = `Estás llevando ${suma} stickers.`;
    } else if (suma == 0){
    document.querySelector('#text-check2').innerHTML = 'No seleccionaste stickers';
    }
}

//Obtener botón 2 desde el DOM//
let botonPart2 = document.querySelector('#btn-parte2');
//Programar para que el botón escuche la función//
botonPart2.addEventListener("click",sumaSticker);



//-----------SCRIPTS PARTE 3-----------//
//Variables//
let selectPass1 = document.querySelector('#pass1');
let selectPass2 = document.querySelector('#pass2');
let selectPass3 = document.querySelector('#pass3');

//Función//
function passCheck (){
    let numPass1 = selectPass1.value;
    let numPass2 = selectPass2.value;
    let numPass3 = selectPass3.value;
    let password = numPass1 + numPass2 + numPass3;

    if (password == '911') {
        document.querySelector('#text-check3').innerHTML = 'Password 1 correcto.';
    } else if (password == '714') {
        document.querySelector('#text-check3').innerHTML = 'Password 2 correcto.';
    } else {
        document.querySelector('#text-check3').innerHTML = 'Password incorrecto';
    }
}

//Obtener botón 3 desde el DOM//
let botonPart3 = document.querySelector('#btn-parte3');
//Programar para que el botón escuche la función//
botonPart3.addEventListener("click", passCheck);