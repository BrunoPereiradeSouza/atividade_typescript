function ehPar(numero: number): boolean {
    if (numero % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

let n: number = 5;
let resultado = ehPar(n);

console.log(`${n} é par? ${resultado}!`);
