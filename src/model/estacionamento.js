/**
 * * 1 - Calcula a quantidade de totens de entrada, saída e licença de gestão de estacionamento
 * * 2 - Monta os dados para modal
 */

import { addParagrafoComModulo, montaLink, paragrafoLinkavel } from "../controller/feedbackData.js"

function entrada(qtdEstacionamentoEntrda) {
    if (qtdEstacionamentoEntrda != 0) {
        const entrada = paragrafoLinkavel(`${qtdEstacionamentoEntrda}`, `Totem de Estacionamento Entrada`, () => montaLink("", "(PRD0024)"))
        addParagrafoComModulo(entrada)
    }
}

function saida(qtdEstacionamentoSaida) {
    if (qtdEstacionamentoSaida != 0) {
        const saida = paragrafoLinkavel(`${qtdEstacionamentoSaida}`, `Totem de Estacionamento Saída`, () => montaLink("", "(PRD0026)"))
        addParagrafoComModulo(saida)
    }
}

export function calcEstacionamentoAutonomo(qtdEstacionamentoEntrda, qtdEstacionamentoSaida) {

    entrada(qtdEstacionamentoEntrda)
    saida(qtdEstacionamentoSaida)

    if (qtdEstacionamentoEntrda != 0 || qtdEstacionamentoSaida != 0) {
        const licenca = paragrafoLinkavel(`1`, `Licença Software de Gestão de Estacionamento`, () => montaLink("", "(PRD0034)"))
        addParagrafoComModulo(licenca)
    }
}