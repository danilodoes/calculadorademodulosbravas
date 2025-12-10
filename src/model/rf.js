/**
 * * 1 - Calcula a quantidade de módulos rf ip
 * * 2 - Monta os dados para modal
 */

import { addParagrafoComModulo, montaLink, paragrafoLinkavel } from "../controller/feedbackData.js"

export function calcRFIP(qtdVeicularRF) {
    const qtdModRF = Math.ceil(Number(qtdVeicularRF) / 4)
    
    if (qtdVeicularRF > 0) {
        const paragrafo = paragrafoLinkavel(`${qtdModRF}`, `Módulo RF IP`, () => montaLink("https://bravas.ind.br/Produtos/58/PRD0009-Modulo-Receptor-RF-IP", "(PRD0009)"))
        addParagrafoComModulo(paragrafo)
    }
}

