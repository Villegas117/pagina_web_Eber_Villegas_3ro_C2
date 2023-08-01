//DOM
// Creacion de documento Dom
let titulo=document.getElementById("Form1");
console.log(titulo);
console.log("Se muestra  contenido del documento"+titulo.innerHTML);




//Funciones para form

function validar(){
    //Acceso a todos por id

let nombre=document.getElementById("nombre").value;
let app=document.getElementById("app").value;
let apm=document.getElementById("apm").value;
let nacimiento=document.getElementById("fecha").value;
let radios=document.getElementById("rsi");
let valorRadio="";
let correo =document.getElementById("correo").value;

for(let k=0; k<radios.length;  k++){
    if(radios[k].checked)
    valorRadio=radios[k].value;

}
if(radios.checked){
valorRadio="Si";
}
else
{
    valorRadio="No";
}

console.log("Nombre completo "+nombre+" "+app +" "+ apm +" "+ "\nFecha de Nacimiento:  "+ nacimiento + "\n Correo Electrónico: " + correo + "\n Es estudiante: "+valorRadio +"\n");

}

function limpiar() {
    let inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="date"], input[type="radio"]');
    //querySelectorAll permite segun el nombre de la etiqueta y su tipo seleccionarla.
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].type === "radio") {
        inputs[i].checked = false;
      } else {
        inputs[i].value = "";
      }
    }
  }
  