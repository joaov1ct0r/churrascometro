let inputAdultos = document.getElementById("adultos");

let inputCriancas = document.getElementById("crianca");

let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    let adultos = inputAdultos.value;

    let criancas = inputCriancas.value;

    let duracao = inputDuracao.value;

    let qntTotalCarne = carnePP(duracao) * adultos + (400 / 2) * criancas;

    let qntTotalCerveja = cervejaPP(duracao) * adultos;

    let qntTotalBebidas = bebidasPP(duracao) * adultos + (400 / 2) * criancas;

    resultado.innerHTML = `<p>${qntTotalCarne / 1000}Kg de Carne</p>`;

    resultado.innerHTML += `<p>${Math.ceil(
        qntTotalCerveja / 355
    )}Latas de Cerveja</p>`;

    resultado.innerHTML += `<p>${Math.ceil(
        qntTotalBebidas
    )}ml Pet 2L de Bebidas</p>`;
}

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}
