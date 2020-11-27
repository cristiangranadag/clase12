'use strict'

let num = parseInt(prompt('Ingrese el número de la tabla de multiplicar',0));

while(isNaN(num)){
    num = parseInt(prompt('Ingrese el número de la tabla de multiplicar',0));
}

document.write("<h1>"+" Tabla del "+num+"</h1>")

for(let i=1;i<=10;i++) {
    document.write(i+" x "+num+" = "+(i*num)+" </br>")
}