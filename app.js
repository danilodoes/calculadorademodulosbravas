import { addParagrafoComModulo, addParagrafoComResposta } from "./src/controller/feedbackData.js"
import { getPortas, getCatracas, getVeiculos, getVeiculosRF, getAntiCarona, getAudio, getControleVagasEntrada, getControleVagasSaida, getElevadores, getAndares, getSensorNivel, getIluminacao } from "./src/controller/utils/getFields.js"
import { calcPortaIP } from "./src/model/porta.js"
import { calcRFIP } from "./src/model/rf.js"

document.addEventListener("DOMContentLoaded", function () {
  
  // Botão Calcular
  const btnCalcular = document.querySelector(".calcular")
  btnCalcular.addEventListener("click", () => {


    //Função para montar o LINK para colocar dentro do parágrafo
    function montaLink(url, codProduto) {
      const linkMontado = `<a href="${url}" class="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" target="_blank"><sup> ${codProduto}</sup></a>`
      return linkMontado
    }

    //Função para concatenar o link criado e o texto para formar o parágrafo completo
    function paragrafoLinkavel(qtdModulos, tipoModulo, callback) {
      const link = callback()
      const linkavel = `${qtdModulos} un - ${tipoModulo} ${link}`
      return linkavel
    }


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

    // * Define e mostra a quantidade de: Módulos Áudio IP
    if (qtdAudio > 0) {
      const paragrafo = paragrafoLinkavel(`${qtdAudio}`, `Módulo Áudio IP`, () => montaLink("", "(PRD0021)"))
      addParagrafoComModulo(paragrafo)
    }

    // * Define e mostra a quantidade de: Módulos Porta IP
    if (qtdPortas >= 5) {
      const paragrafo = paragrafoLinkavel(`${calcPortaIP(qtdPortas)}`, `Módulo Porta IP`, () => montaLink("https://bravas.ind.br/Produtos/57/PRD0008-Modulo-Porta-IP", "(PRD0008)"))
      addParagrafoComModulo(paragrafo)
    }

    // * Define e mostra a quantidade de: Módulos Catraca IP
    if (qtdCatracas > 0) {
      const paragrafo = paragrafoLinkavel(`${qtdCatracas}`, `Módulo Catraca IP`, () => montaLink("https://bravas.ind.br/Produtos/60/PRD0016-Modulo-Catraca-IP", "(PRD0016)"))
      addParagrafoComModulo(paragrafo)
    }

    // * Define e mostra a quantidade de: Módulos RF IP
    if (qtdVeiculosRF > 0) {
      const paragrafo = paragrafoLinkavel(`${calcRFIP(qtdVeiculosRF)}`, `Módulo RF IP`, () => montaLink("https://bravas.ind.br/Produtos/58/PRD0009-Modulo-Receptor-RF-IP", "(PRD0009)"))
      addParagrafoComModulo(paragrafo)
    }

    /*
    //Imprimir quantidade de Módulos PGM 4x4 IP
    if (qtdMod4x4IP > 0) {
      const paragrafo = paragrafoLinkavel(`${qtdMod4x4IP}`, `Módulo PGM 4x4 IP`, () => montaLink("https://bravas.ind.br/Produtos/59/PRD0013-Modulo-PGM-4-IP", "(PRD0013)"))
      addParagrafoComModulo(paragrafo)
    }*/


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