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

//Função para montar o LINK para colocar dentro do parágrafo
export function montaLink(url, codProduto) {
    const linkMontado = `<a href="${url}" class="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" target="_blank"><sup> ${codProduto}</sup></a>`
    return linkMontado
}

//Função para concatenar o link criado e o texto para formar o parágrafo completo
export function paragrafoLinkavel(qtdModulos, tipoModulo, callback) {
    const link = callback()
    const linkavel = `${qtdModulos} un - ${tipoModulo} ${link}`
    return linkavel
}