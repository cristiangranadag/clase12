'use strict'
/**Mostrar todos los números impares que hay entre dos números dados por el usuario */

var numeroUno = parseInt(prompt("Introduce el primer número", 0))
var numeroDos = parseInt(prompt("Introduce el segundo número", 0))

while (numeroUno <= numeroDos) {
    if (numeroUno % 2 != 0) {
        console.log("El " + numeroUno + " es impar")
    }
    numeroUno++;
}