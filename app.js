import { addParagrafoComResposta } from "./src/controller/feedbackData.js"
import { getPortas, getCatracas, getVeiculos, getVeiculosRF, getAntiCarona, getAudio, getControleVagasEntrada, getControleVagasSaida, getElevadores, getAndares, getSensorNivel, getIluminacao, getEstacionamentoEntradas, getEstacionamentoSaidas } from "./src/controller/utils/getFields.js"
import { calcAudio } from "./src/model/audio.js"
import { calcCatracaIP } from "./src/model/catraca.js"
import { calcEstacionamentoAutonomo } from "./src/model/estacionamento.js"
import { calcModAcesso } from "./src/model/modAcesso.js"
import { calcElevadorIP } from "./src/model/pgmElev.js"
import { calcPGM } from "./src/model/pgms.js"
import { calcPortaIP } from "./src/model/porta.js"
import { calcRFIP } from "./src/model/rf.js"

document.addEventListener("DOMContentLoaded", function () {

  // Botão Calcular
  const btnCalcular = document.querySelector(".calcular")
  btnCalcular.addEventListener("click", () => {

    // Text fields (inputaveis)
    const qtdPortas = getPortas()
    const qtdCatracas = getCatracas()
    const qtdVeiculos = getVeiculos()
    const qtdVeiculosRF = getVeiculosRF()
    const qtdAcessosAntiCarona = getAntiCarona()
    const qtdAudio = getAudio()
    const qtdControleVagasEntrada = getControleVagasEntrada()
    const qtdControleVagasSaida = getControleVagasSaida()
    const qtdElevadores = getElevadores()
    const qtdAndares = getAndares()
    const qtdSensorNivel = getSensorNivel()
    const qtdIluminacao = getIluminacao()
    const qtdTotensEntrada = getEstacionamentoEntradas()
    const qtdTotensSaida = getEstacionamentoSaidas()



    // * Calcula e mostra a quantidade de: Módulos Áudio IP
    calcAudio(qtdAudio)

    // * Calcula e mostra a quantidade de: Módulos Porta IP
    calcPortaIP(qtdPortas, qtdVeiculos, qtdVeiculosRF)

    // * Calcula e mostra a quantidade de: Módulos Catraca IP
    calcCatracaIP(qtdCatracas)

    // * Calcula e mostra a quantidade de: Módulos RF IP
    calcRFIP(qtdVeiculosRF)

    // * Calcular e mostra a quantidade de: Módulos PGMs IP
    calcPGM(qtdAcessosAntiCarona, qtdControleVagasEntrada, qtdControleVagasSaida, qtdSensorNivel, qtdIluminacao)

    // * Calcula e mostra a quantidade de: Módulos Elevador IP
    calcElevadorIP(qtdElevadores, qtdAndares)

    // * Calcula e mostra a quantidade de: Totens para estacionamento autonônomo
    calcEstacionamentoAutonomo(qtdTotensEntrada, qtdTotensSaida)

    // * Calcula e mostra a quantidade de: Módulos Acesso Programável
    calcModAcesso(qtdPortas, qtdCatracas, qtdVeiculos, qtdVeiculosRF, qtdAcessosAntiCarona, qtdAudio, qtdControleVagasEntrada, qtdControleVagasSaida, qtdElevadores, qtdAndares, qtdSensorNivel, qtdIluminacao, qtdTotensEntrada, qtdTotensSaida)


    // * Funções para montar o PDF com todos os inputs do usuário. 
    //? Controle de acesso
    addParagrafoComResposta(`Quantidade de portas: ${qtdPortas}`)
    addParagrafoComResposta(`Quantidade de acessos por catraca: ${qtdCatracas}`)

    addParagrafoComResposta(`Quantidade de acessos veiculares: ${qtdVeiculos}`)
    addParagrafoComResposta(`Quantidade de acessos por RF: ${qtdVeiculosRF}`)

    //? Automações
    addParagrafoComResposta(`Quantidade de acessos anti-caronas: ${qtdAcessosAntiCarona}`)
    addParagrafoComResposta(`Quantidade de módulo de áudio: ${qtdAudio}`)
    addParagrafoComResposta(`Quantidade de acessos controle de vagas entrada: ${qtdControleVagasEntrada}`)
    addParagrafoComResposta(`Quantidade de acessos controle de vagas saída: ${qtdControleVagasSaida}`)
    addParagrafoComResposta(`Quantidade de elevadores: ${qtdElevadores}`)
    addParagrafoComResposta(`Quantidade de andares: ${qtdAndares}`)
    addParagrafoComResposta(`Quantidade de sensores de nível: ${qtdSensorNivel}`)
    addParagrafoComResposta(`Quantidade de circuitos para iluminação: ${qtdIluminacao}`)
  })
})