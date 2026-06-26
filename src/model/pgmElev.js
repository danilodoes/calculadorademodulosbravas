/**
 * * 1 - Calcula a quantidade de módulos elevador ip
 * * 2 - Monta os dados para modal
 */

import { addParagrafoComModulo, montaLink, paragrafoLinkavel } from "../controller/feedbackData.js"

export function calcElevadorIP(qtdElevadores, qtdAndares) {
    if (qtdElevadores > 0 && qtdAndares > 0) {
        const qtdTotalPGMElevador = Number(Math.ceil(qtdAndares / 10) * qtdElevadores)
        const paragrafo = paragrafoLinkavel(`${qtdTotalPGMElevador}`, `Módulo Elevador IP`, () => montaLink("https://bravas.ind.br/Produtos/69/PRD00022-Modulo-Elevador", "(PRD0022)"))
        addParagrafoComModulo(paragrafo)
    }
}