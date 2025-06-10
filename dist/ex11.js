"use strict";
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["SEGUNDA"] = 0] = "SEGUNDA";
    DiasSemana[DiasSemana["TER\u00C7A"] = 1] = "TER\u00C7A";
    DiasSemana[DiasSemana["QUARTA"] = 2] = "QUARTA";
    DiasSemana[DiasSemana["QUINTA"] = 3] = "QUINTA";
    DiasSemana[DiasSemana["SEXTA"] = 4] = "SEXTA";
})(DiasSemana || (DiasSemana = {}));
let today = DiasSemana.QUARTA;
console.log(`Hoje é ${DiasSemana[today]}! O ${today + 2}° dia da semana.`);
