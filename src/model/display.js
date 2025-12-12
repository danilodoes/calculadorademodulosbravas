/**
 * * 1 - Calcula a quantidade de módulos display led ip
 * * 2 - Monta os dados para modal
 */

import { addParagrafoComModulo, montaLink, paragrafoLinkavel } from "../controller/feedbackData.js"

export function calcDisplay(qtdDisplay) {
    if (qtdDisplay > 0) {
        const paragrafo = paragrafoLinkavel(`${qtdDisplay}`, `Módulo Display Led IP`, () => montaLink("", "(PRD0020)"))
        addParagrafoComModulo(paragrafo)
    }
}