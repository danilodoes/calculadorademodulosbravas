/**
 * *Funções para pegar os valores inputados
 */

export function getPortas() {
    const qtdPortas = document.querySelector('.tfPedestres')
    return Number(qtdPortas.value)
}

export function getCatracas() {
    const qtdCatracas = document.querySelector('.tfCatracas')
    return Number(qtdCatracas.value)
}

export function getVeiculos() {
    const qtdVeiculos = document.querySelector('.tfVeiculos')
    return Number(qtdVeiculos.value)
}

export function getVeiculosRF() {
    const qtdAcessosVeicularesRF = document.querySelector('.tfAcessosVeicularesRF')
    return Number(qtdAcessosVeicularesRF.value)
}

export function getAntiCarona() {
    const qtdAcessosAntiCarona = document.querySelector('.tfAcessosAntiCarona')
    return Number(qtdAcessosAntiCarona.value)
}

export function getAudio() {
    const qtdAudio = document.querySelector('.tfAudio')
    return Number(qtdAudio.value)
}

export function getControleVagasEntrada() {
    const qtdControleVagasEntrada = document.querySelector('.tfControleVagasEntrada')
    return Number(qtdControleVagasEntrada.value)
}

export function getControleVagasSaida() {
    const qtdControleVagasSaida = document.querySelector('.tfControleVagasSaida')
    return Number(qtdControleVagasSaida.value)
}

export function getElevadores() {
    const qtdElevadores = document.querySelector('.tfElevadores')
    return Number(qtdElevadores.value)
}

export function getAndares() {
    const qtdAndares = document.querySelector('.tfAndares')
    return Number(qtdAndares.value)
}

export function getSensorNivel() {
    const qtdSensores = document.querySelector('.tfSensores')
    return Number(qtdSensores.value)
}

export function getIluminacao() {
    const qtdIluminacao = document.querySelector('.tfIluminacao')
    return Number(qtdIluminacao.value)
}

export function getEstacionamentoEntradas() {
    const qtdTotensEntrada = document.querySelector('.tfEstacionamentoEntrada')
    return Number(qtdTotensEntrada.value)
}

export function getEstacionamentoSaidas() {
    const qtdTotensSaida = document.querySelector('.tfEstacionamentoSaida')
    return Number(qtdTotensSaida.value)
    
}

