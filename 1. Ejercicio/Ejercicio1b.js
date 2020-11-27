'use strict'
/**Mostrar todos los números impares que hay entre dos números dados por el usuario */

var numeroUno;
let numeroDos;

// numeroUno = Number(prompt('Ingrese en número Uno'))
// numeroDos = Number(prompt('Ingrese en número Dos'))

// while (numeroUno < 0 || numeroDos < 0 || isNaN(numeroUno) || isNaN(numeroDos)) {
//     alert('Error en la información')
//     numeroUno = Number(prompt('Ingrese en número Uno'))
//     numeroDos = Number(prompt('Ingrese en número Dos'))
// }

numeroUno = Number(prompt('Ingrese en número Uno'))
Leer(numeroUno)
numeroDos = Number(prompt('Ingrese en número Dos'))
Leer(numeroDos)

function Leer(N){
    while (N < 0 || isNaN(N)) {
        alert('Error en la información')
        numeroUno = Number(prompt('Ingrese en número Uno'))
        numeroDos = Number(prompt('Ingrese en número Dos'))
    }
}

for (let i = numeroUno; i <= numeroDos; i++) {
    if (i % 2 != 0) {
        console.log('El número ' + i + ' impar')
    }
}

while(numeroUno<=numeroDos){
    if (numeroUno % 2 != 0) {
        document.write('El número ' + numeroUno + ' impar'+ '<br/>')
    } else {
        document.write('El número ' + numeroUno + ' par'+ '<br/>')
    }
    numeroUno++;
}