/**
 * * 1 - Calcula a quantidade de módulos porta ip
 * * 2 - Monta os dados para modal
 */

import { addParagrafoComModulo, montaLink, paragrafoLinkavel } from "../controller/feedbackData.js"

export function calcPortaIP(qtdPortas, qtdVeiculos, qtdVeiculosRF) {
    const humModAcesso = 4
    const qtdTotalPortas = qtdPortas + qtdVeiculos

    if (qtdTotalPortas > 4) {
        if (qtdVeiculosRF <= 0) {
            const qtdModPortaIP = (qtdPortas + qtdVeiculos - humModAcesso)
            const paragrafo = paragrafoLinkavel(`${qtdModPortaIP}`, `Módulo Porta IP`, () => montaLink("https://bravas.ind.br/Produtos/57/PRD0008-Modulo-Porta-IP", "(PRD0008)"))
            addParagrafoComModulo(paragrafo)

        } else {
            const qtdModPortaIP = (qtdPortas + qtdVeiculos - qtdVeiculosRF - humModAcesso)
            const paragrafo = paragrafoLinkavel(`${qtdModPortaIP}`, `Módulo Porta IP`, () => montaLink("https://bravas.ind.br/Produtos/57/PRD0008-Modulo-Porta-IP", "(PRD0008)"))
            addParagrafoComModulo(paragrafo)
        }
    }
}
