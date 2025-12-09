/**
 * * 1 - Cria e mostra os paráfragos de cálculo dos módulos no modal
 * * 2 - Cria e coloca os paráfragos com todas as respostas do usuário para o PDF
 */

const modulosTotais = document.querySelector(".modulosTotais")
const respostasUsuario = document.querySelector(".respotasUsuario")

// Adiciona o paragrafo com as respostas na div respostasUsuario
export function addParagrafoComResposta(resposta) {
    const paragrafo = document.createElement("p")
    paragrafo.textContent = resposta;
    respostasUsuario.appendChild(paragrafo)
}

// Adiciona o paragrafo com a quantidade de módulo na div modulosTotais
export function addParagrafoComModulo(moduloTexto) {
    const paragrafo = document.createElement("p")
    paragrafo.innerHTML = moduloTexto;
    modulosTotais.appendChild(paragrafo)
}