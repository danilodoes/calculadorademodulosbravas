/**
 * *Calcula a quantidade de módulos rf ip
 */

export function calcRFIP(qtdVeicularRF) {
    return Math.ceil(Number(qtdVeicularRF)/4)
}