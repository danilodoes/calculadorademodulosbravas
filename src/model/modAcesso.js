/**
 * * 1 - Calcula a quantidade de módulos acesso programável
 * * 2 - Monta os dados para modal
 */

import { addParagrafoComModulo, montaLink, paragrafoLinkavel } from "../controller/feedbackData.js"
import { handleCloud } from "./cloud.js"

export function calcModAcesso(qtdPortas, qtdCatracas, qtdVeiculos, qtdVeiculosRF, qtdAcessosAntiCarona, qtdAudio, qtdControleVagasEntrada, qtdControleVagasSaida, qtdElevadores, qtdAndares, qtdSensorNivel, qtdIluminacao, qtdTotensEntrada, qtdTotensSaida, qtdDisplay) {

    //? PGM ELEVADOR
    const qtdPGMElevador = Math.ceil(Number(qtdAndares * qtdElevadores) / 10)

    //? PGM ILUMINACAO
    const qtdPGMIluminacao = Math.ceil(Number(qtdIluminacao) / 10)

    //? PGM Audio
    const qtdModAudio = qtdAudio

    //? PGM 4x4
    const qtdPGMControleVagas = Math.ceil((Number(qtdControleVagasEntrada) + Number(qtdControleVagasSaida)) / 4)
    const qtdPGMSensorNivel = Math.ceil(Number(qtdSensorNivel) / 4)
    const qtdPGMAntiCarona = Math.ceil(Number(qtdAcessosAntiCarona) / 4)
    const qtdTotalPGM = (qtdPGMElevador + qtdPGMIluminacao + qtdModAudio + qtdPGMControleVagas + qtdPGMSensorNivel + qtdPGMAntiCarona)

    //? Módulos para controle de acesso
    const qtdModRF = Math.ceil(Number(qtdVeiculosRF) / 4)
    const qtdModCatraca = qtdCatracas
    const qtdModPorta = (qtdPortas + qtdVeiculos - qtdModRF)
    const qtdTotalAcessos = (qtdModRF + qtdModCatraca + qtdModPorta)

   


    //? Quantidade total de módulos acessos
    const qtdModAcessos = Math.ceil((qtdTotalPGM + qtdTotalAcessos + qtdTotensEntrada + qtdTotensSaida + qtdDisplay) / 40)

    console.log(qtdModAcessos)


    if (qtdModAcessos > 0) {
        const paragrafo = paragrafoLinkavel(`${qtdModAcessos}`, `Módulo Acesso Programável`, () => montaLink("https://bravas.ind.br/Produtos/32/PRD0028-Modulo-Acesso-Programavel", "(PRD0028)"))
        addParagrafoComModulo(paragrafo)

        //TODO: Chama o aviso de Cloud caso a quantidade de módulo acesso seja maior que dois! Descomentar essa parte quando o Cloud for lançado
        //handleCloud()
    }

}