/**
 * * 1 - Calcula a quantidade de módulos audio ip
 * * 2 - Monta os dados para modal
 */

import { addParagrafoComModulo, montaLink, paragrafoLinkavel } from "../controller/feedbackData.js"

export function calcAudio(qtdAudio) {
    if (qtdAudio > 0) {
        const paragrafo = paragrafoLinkavel(`${qtdAudio}`, `Módulo Áudio IP`, () => montaLink("https://bravas.ind.br/Produtos/70/PRD0021-Modulo-Audio-IP", "(PRD0021)"))
        addParagrafoComModulo(paragrafo)
    }
}