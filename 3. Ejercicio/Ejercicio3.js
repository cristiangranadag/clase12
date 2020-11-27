'use strict'

/** Decir si un número es par o impar Si la información no es valida que nos pida los datos de nuevo*/

var numero = parseInt(prompt('Ingrese un número', 0))
let bandera = 1;

    while (numero<0 || isNaN(numero)) {
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