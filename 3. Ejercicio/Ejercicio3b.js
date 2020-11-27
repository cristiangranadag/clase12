'use strict'

var numero = parseInt(prompt('Ingrese un número', 0))
let bandera = 1;

    while (isNaN(numero)) {
        alert('Información incorrecta')
        numero = parseInt(prompt('Ingrese un número', 0))
    }

    if (numero % 2 == 0) {
        console.log('Número par')
        alert('El número '+ numero +' es par')
    }
    else {
        console.log('Número impar')
        alert('El número '+ numero +' es impar')
    }