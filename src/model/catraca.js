/**
 * * 1 - Calcula a quantidade de módulos catraca ip
 * * 2 - Monta os dados para modal
 */

import { addParagrafoComModulo, montaLink, paragrafoLinkavel } from "../controller/feedbackData.js"

export function calcCatracaIP(qtdCatracas) {
    if (qtdCatracas > 0) {
        const paragrafo = paragrafoLinkavel(`${qtdCatracas}`, `Módulo Catraca IP`, () => montaLink("https://bravas.ind.br/Produtos/60/PRD0016-Modulo-Catraca-IP", "(PRD0016)"))
        addParagrafoComModulo(paragrafo)
    }
}
