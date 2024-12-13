//Estructura del FOR
// for (desde, hasta, incremento)


// for(let i=0; i<=15; i++){
//     console.log("contando" + i)
// }


//Ejemplo 1

// let ingresarNumero =parseInt(prompt ("Ingresar numero"))

// for (let i=1; i <= 10; i++){
//     let resultado = ingresarNumero * 1; 
//     alert(ingresarNumero + " x " + i +" = "+ resultado);
// }

//Ejemplo 2

// for (let i=1; i <= 20; i++) {
//     let ingresarNombre = prompt("Ingresar Nombre");
//     alert(" Turno N° "+i+" Nombre: "+ingresarNombre);
// }

//Sentencia Break

// for (let i=1; i <=10; i++){
//     if(i == 5) {
//         break;
//     }
//     alert(i)
// }

//Sentencia Continue

for (let i=1; i <=10; i++){
    if(i == 5) {
        continue;
    }
    alert(i)
}