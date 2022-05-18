







// function mostrarnumeros(numero) {
// document.getElementById("display").value = numero;
// }
// 

// function mostrarnumeross(numeros) {
// var numero1 = document.getElementById("display").value = numeros;
// 
// if (numero1 != 1) {
// var numero2 = document.getElementById("display").value = numeros;
// 
// resultado = numero1 + numero2;
// }
// 
// }

var mostrar;
var cantidad = "";
var sumatoria = 0;
var restario = 0;
var mult = 0;
var elevadom = 0;
var elevado = 0;
var cosenoo = 0;
var senoo = 0;
var sumar = false;
var restar = false;
var numerosm = false
var multiplicar = false;



function mostrarnumeros(numero) {
    document.getElementById("display").value = cantidad + numero;
    cantidad = document.getElementById("display").value
    
}

function operaciones(){
    mostrar = eval(cantidad)
    document.getElementById("display").value = mostrar;
    numerosm = true;
}
function borrarTodo(){
    location.reload();
}
function elevado2(){
    if(numerosm == true){
        elevadom = (elevadom + parseInt(mostrar))*mostrar;
        document.getElementById("display").value = elevadom;
    }else{
        elevado = (elevado + parseInt(cantidad))*cantidad;
        document.getElementById("display").value = elevado;
        cantidad = "";
    }   
}

function elevado3(){
    if(numerosm == true){
        elevadom = (elevadom + parseInt(mostrar))*mostrar*mostrar;
        document.getElementById("display").value = elevadom;
    }else{
        elevado = (elevado + parseInt(cantidad))*cantidad*cantidad;
        document.getElementById("display").value = elevado;
        cantidad = "";
    }
}
function elevado4(){
    if(numerosm == true){
        elevadom = (elevadom + parseInt(mostrar))*mostrar*mostrar*mostrar;
        document.getElementById("display").value = elevadom;
    }else{
        elevado = (elevado + parseInt(cantidad))*cantidad*cantidad*cantidad;
        document.getElementById("display").value = elevado;
        cantidad = "";
    }
}

function coseno(){
    if(numerosm == true){
        cosenoo = Math.cos(mostrar);
        document.getElementById("display").value = cosenoo;
    }else{
        cosenoo = Math.cos(cantidad);
        document.getElementById("display").value = cosenoo;
        cantidad = "";
    }
}
function seno(){
    if(numerosm == true){
        senoo = Math.sin(mostrar);
        document.getElementById("display").value = senoo;
    }else{
        senoo = Math.sin(cantidad);
        document.getElementById("display").value = senoo;
        cantidad = "";
    }
}
