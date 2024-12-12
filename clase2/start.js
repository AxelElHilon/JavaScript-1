
//------------------------//
// let usuario = prompt("Cual es tu nombre?").toUpperCase()

// if (usuario == "AXEL") {
//     alert("Bienvenido Axel")
// } else {
//     alert("Vos no sos Axel gato!")
// }

//------------------------//

//  let numero =  parseInt(prompt("Ingresa un numero"))
//  if (numero === 15){
//      alert("coinciden")
//  }

//----------------------------//

// let unColor = "verde"

// if (unColor == "Rojo"){
//     console.log("el color es Rojo");
// }else{
//     console.log("el color NO es Rojo");
// 

//--------------------------//

// let nombreUsuario = prompt ("Ingresar nombre de usuario")

// if(nombreUsuario == ""){
//      alert("No ingresaste nombre de usuario")
//  }else{
//     alert("Nombre de usuario ingresado " + nombreUsuario);
//  }

//----------------------//

// parseInt = numero entero
// parseFloat = numero decimal

//-------------------------//

// let num1 = parseFloat(prompt("Ingrese el primer numero"))
// let num2 = parseFloat(prompt("Ingrese el segundo numero"))


// if(num1 > num2){
//     alert("numero " + num1 + " es mayor a " + num2)
// }else if(num2 > num1){
//     alert("numero " + num2 + " es mayor a " + num1)
// }else if (num1 == num2){
//     alert("ambos numeros valen lo mismo")
// }else{
//     alert("esto no se puede comparar numericamente")
// }

//  let nombre = prompt("Ingresa tu nombre")
//  let apellido = prompt("Ingresa tu apellido")
//  if ((nombre!="") && (apellido!="")){
//      alert("todo ok")
//  }else{
//      alert ("algo fallo")
//  }

alert("Vendo Iphone 15, escucho ofertas")

let ofertaBase = 1500
let ofertaUsuario = parseInt(prompt("Ingrese monto"))

if (ofertaUsuario < 1000){
    alert("No me sirve, gracias.")
}else 
if ((ofertaUsuario >= 1001) && (ofertaUsuario <= 1500)){
    alert("Estirate un poco más y es tuy0!")
}else 

if (ofertaUsuario > ofertaBase){
    alert("Un placer hacer negocios!")
}