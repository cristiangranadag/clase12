'use strict'


for(let i=1;i<=15;i++) {
    document.write("<h1>"+" Tabla del "+i+"</h1>")    
    for(let c=1;c<=10;c++) {
        document.write(c+" x "+i+" = "+(c*i)+" </br>")
    }
}