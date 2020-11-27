'use strict'
// Muestre todos los números divisores de un número introducido por el usuario
var numero = parseInt(prompt('Ingrese un número', 1))

while (numero < 0 || isNaN(numero)) {
    alert('Intormación incorrecta')
    numero = parseInt(prompt('Ingrese un número', 1))
}

for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        console.log("Divisor: " + i)
    }
}