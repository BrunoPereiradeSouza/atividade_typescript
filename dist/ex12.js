"use strict";
function numberOrString(parameter) {
    return typeof parameter;
}
let tipo = numberOrString(10);
console.log(`O tipo passado na função foi ${tipo}.`);
