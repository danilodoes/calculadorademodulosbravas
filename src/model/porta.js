/**
 * * 1 - Calcula a quantidade de módulos porta ip
 * * 2 - Monta os dados para modal
 */

import { addParagrafoComModulo, montaLink, paragrafoLinkavel } from "../controller/feedbackData.js"

export function calcPortaIP(qtdPortas, qtdVeiculos, qtdVeiculosRF, qtdElevadores) {
    const humModAcesso = 4
    const qtdTotalPortas = qtdPortas + qtdVeiculos + qtdElevadores

    if (qtdTotalPortas > 4) {
        if (qtdVeiculosRF <= 0) {
            const qtdModPortaIP = (qtdPortas + qtdVeiculos + qtdElevadores - humModAcesso)
            const paragrafo = paragrafoLinkavel(`${qtdModPortaIP}`, `Módulo Porta IP`, () => montaLink("https://bravas.ind.br/Produtos/57/PRD0008-Modulo-Porta-IP", "(PRD0008)"))
            addParagrafoComModulo(paragrafo)

        } else {
            const qtdModPortaIP = (qtdPortas + qtdVeiculos + qtdElevadores - qtdVeiculosRF - humModAcesso)
            const paragrafo = paragrafoLinkavel(`${qtdModPortaIP}`, `Módulo Porta IP`, () => montaLink("https://bravas.ind.br/Produtos/57/PRD0008-Modulo-Porta-IP", "(PRD0008)"))
            addParagrafoComModulo(paragrafo)
        }
    }
}
