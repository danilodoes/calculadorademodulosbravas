/**
 * * 1 - Calcula a quantidade de módulos pgm 10 e pgm 4x4
 * * 2 - Monta os dados para modal
 */

import { addParagrafoComModulo, montaLink, paragrafoLinkavel } from "../controller/feedbackData.js"

//? Calcula a quantidade de PGMs 4x4 utilizados para automação de controle de vagas
function calcControleVagas(qtdControleVagasEntrada, qtdControleVagasSaida) {
    const qtdPGM4x4 = Math.ceil((Number(qtdControleVagasEntrada) + Number(qtdControleVagasSaida)) / 4)
    return qtdPGM4x4
}

//? Calcula a quantidade de PGMs 4x4 utilizados para automação de Nível de Água
function calcSensorNivel(qtdSensorNivel) {
    const qtdPGM4x4 = Math.ceil(Number(qtdSensorNivel) / 4)
    return qtdPGM4x4
}

//? Calcula a quantidade de PGMs 4x4 utilizados para automação de anti-carona
function calcAntiCarona(qtdAcessosAntiCarona) {
    const qtdPGM4x4 = Math.ceil(Number(qtdAcessosAntiCarona) / 4)
    return qtdPGM4x4
}

//? Calcula a quantidade de PGMs 10 utilizados para automação de iluminação
function calcIluminacao(qtdIluminacao) {
    const qtdPGM10 = Math.ceil(Number(qtdIluminacao) / 10)
    return qtdPGM10
}

//? Mostra a quatidade SOMADA de PGMs 4x4 no modal
function mostrarQtdPGM4x4(qtdTotalPGM4x4) {
    if (qtdTotalPGM4x4 > 0) {
        const paragrafo = paragrafoLinkavel(`${qtdTotalPGM4x4}`, `Módulo PGM 4x4 IP`, () => montaLink("https://bravas.ind.br/Produtos/59/PRD0013-Modulo-PGM-4-IP", "(PRD0013)"))
        addParagrafoComModulo(paragrafo)
    }
}

//? Mostra a quatidade SOMADA de PGMs 10 no modal
function mostrarQtdPGM10(qtdTotalPGM10) {
    if (qtdTotalPGM10 > 0) {
        const paragrafo = paragrafoLinkavel(`${qtdTotalPGM10}`, `Módulo PGM 10 IP`, () => montaLink("https://bravas.ind.br/Produtos/68/PRD0019-Modulo-PGM-10-IP", "(PRD0019)"))
        addParagrafoComModulo(paragrafo)
    }
}

//? Calcula e mostra a quantidade total de módulos PGMs
export function calcPGM(qtdAcessosAntiCarona, qtdControleVagasEntrada, qtdControleVagasSaida, qtdSensorNivel, qtdIluminacao) {

    const qtdPGMIluminacao = calcIluminacao(qtdIluminacao)

    const qtdPGMAntiCarona = calcAntiCarona(qtdAcessosAntiCarona)
    const qtdPGMControleVagas = calcControleVagas(qtdControleVagasEntrada, qtdControleVagasSaida)
    const qtdPGMSensorNivel = calcSensorNivel(qtdSensorNivel)

    const totalPGM4x4 = (qtdPGMAntiCarona + qtdPGMControleVagas + qtdPGMSensorNivel)
    const totalPGM10 = qtdPGMIluminacao

    mostrarQtdPGM4x4(totalPGM4x4)
    mostrarQtdPGM10(totalPGM10)

}
