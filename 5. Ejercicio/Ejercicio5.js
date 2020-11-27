'use strict'

var numero = Number(prompt('Ingrese un número',1))
document.write("<h1>"+"Suma"+"</h1>")
for(let i = 1; i<=10;i++){
    document.write(numero+' + '+i+' = '+(numero+i)+'</br>')
}

document.write("<h1>"+"Resta"+"</h1>")
for(let i = 1; i<=10;i++){
    document.write(numero+' - '+i+' = '+(numero-i)+'</br>')
}

document.write("<h1>"+"Producto"+"</h1>")
for(let i = 1; i<=10;i++){
    document.write(numero+' x '+i+' = '+(numero*i)+'</br>')
}

document.write("<h1>"+"División"+"</h1>")
for(let i = 1; i<=10;i++){
    document.write(numero+' / '+i+' = '+(numero/i)+'</br>')
}