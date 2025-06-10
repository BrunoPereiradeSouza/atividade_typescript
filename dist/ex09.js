"use strict";
function ehPar(numero) {
    if (numero % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
let n = 5;
let resultado = ehPar(n);
console.log(`${n} é par? ${resultado}!`);
