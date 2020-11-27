let numero1 = parseInt(prompt('Introduce el primer número', 0));
let numero2 = parseInt(prompt('Introduce el segundo número', 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt('Introduce el primer número', 0));
    numero2 = parseInt(prompt('Introduce el segundo número', 0));
}

var resultado = "La suma es: " + (numero1 + numero2) + " <br/>" +
                "La resta es: " + (numero1 - numero2) + " <br/>" +
                "La multiplicación es: " + (numero1 * numero2) + " <br/>" +
                "La división es: " + (numero1 / numero2) + " <br/>";

var resultadoCMD = "La suma es: " + (numero1 + numero2) + " \n" +
                "La resta es: " + (numero1 - numero2) + " \n" +
                "La multiplicación es: " + (numero1 * numero2) + " \n" +
                "La división es: " + (numero1 / numero2) + " \n";

var resu = "La suma es: " + (numero1 + numero2) +
            ", la resta es: " + (numero1 - numero2) +
            ", la multiplicación es: " + (numero1 * numero2) +
            " y la división es: " + (numero1 / numero2);

document.write(resultado);
alert(resultadoCMD);
console.log(resu);
