"use strict";
function calcularAreaRetangulo(largura, altura) {
    return largura * altura;
}
const larg = 10;
const alt = 5;
let area = calcularAreaRetangulo(larg, alt);
console.log(`largura ${larg}m x ${alt}m = ${area}m².`);
