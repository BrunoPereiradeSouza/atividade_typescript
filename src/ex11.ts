enum DiasSemana {
    SEGUNDA,
    TERÇA,
    QUARTA,
    QUINTA,
    SEXTA
}

let today = DiasSemana.QUARTA

console.log(`Hoje é ${DiasSemana[today]}! O ${today + 2}° dia da semana.`);
