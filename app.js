document.addEventListener("DOMContentLoaded", function () {
  // Modal

  const modulosTotais = document.querySelector(".modulosTotais");
  const respostasUsuario = document.querySelector(".respotasUsuario");
  const btnFecharModal = document.querySelector(".btnFecharModal");
  const modulosContabilizados = [];

  // Adiciona o paragrafo com as respostas na div respostasUsuario
  function addParagrafoComResposta(resposta) {
    const paragrafo = document.createElement("p");
    paragrafo.textContent = resposta;
    respostasUsuario.appendChild(paragrafo);
  }

  // Adiciona o paragrafo com a quantidade de módulo na div modulosTotais
  function addParagrafoComModulo(moduloTexto) {
    const paragrafo = document.createElement("p");
    paragrafo.innerHTML = moduloTexto;
    modulosTotais.appendChild(paragrafo);
  }

  // Função para calcular Módulos PGM
  function calcularModPGM(entrada, saida) {
    if (entrada >= 12 && saida >= 12) return 4;
    if (entrada >= 8 && saida >= 8) return 3;
    if (entrada >= 4 && saida >= 4) return 2;
    if (entrada <= 4 && saida <= 4) return 1;
    return 0;
  }

  function calcularModPGMAntiCarona(acessos) {
    if (acessos >= 12) return 4;
    if (acessos >= 8) return 3;
    if (acessos >= 4) return 2;
    if (acessos <= 4) return 1;
    return 0;

  }


  // Variáveis para contagem de módulos
  let humModAcesso = 4;
  let qtdModAcesso = 0; let qtdMod2x10 = 0;
  let qtdModRF = 0; let qtdModRFIP = 0;
  let qtdModPorta = 0; let qtdModPortaIP = 0;
  let qtdMod4x4 = 0; let qtdMod4x4IP = 0;
  let qtdModCatraca = 0; let qtdModCatracaIP = 0;


  // Função para resetar o valor das variáveis
  function resetarVariaveis() {
    humModAcesso = 4;
    qtdModAcesso = 0; qtdMod2x10 = 0;
    qtdModRF = 0; qtdModRFIP = 0;
    qtdModPorta = 0; qtdModPortaIP = 0;
    qtdMod4x4 = 0; qtdMod4x4IP = 0
    qtdModCatraca = 0; qtdModCatracaIP = 0;
  };


  // Botão Fechar Modal
  btnFecharModal.addEventListener("click", () => {
    modulosTotais.innerHTML = "";
    respostasUsuario.innerHTML = "";
    resetarVariaveis();
  });


  // Botão Calcular
  const btnCalcular = document.querySelector(".calcular");
  btnCalcular.addEventListener("click", () => {

    //Função para montar o LINK para colocar dentro do parágrafo
    function montaLink(url, codProduto) {
      const linkMontado = `<a href="${url}" class="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" target="_blank"><sup> ${codProduto}</sup></a>`
      return linkMontado;
    };

    //Função para concatenar o link criado e o texto para formar o parágrafo completo
    function paragrafoLinkavel(qtdModulos, tipoModulo, callback) {
      const link = callback();
      const linkavel = `${qtdModulos} un - ${tipoModulo} ${link}`
      return linkavel;

    };

    // Radios e Switches
    const tipoComunicacao = document.querySelector('input[name="rd_Comunicacao"]:checked').value;
    const vaiTerAcessoVeicular = document.querySelector('input[name="rd_checkAcessoVeicular"]:checked').value;
    const vaiTerAcessoVeicularRF = document.querySelector('input[name="rd_checkControleRemoto"]:checked').value;
    const vaiTerCatraca = document.querySelector('input[name="rd_checkCatraca"]:checked').value;
    const vaiTerAutomacao = document.querySelector('input[name="rd_checkAutomacao"]:checked').value;
    const automacaoElevadores = document.querySelector('input[id="elevador"]').checked;
    const automacaoAntiCarona = document.querySelector('input[id="antiCarona"]').checked;
    const automacaoControleVagas = document.querySelector('input[id="controleVaga"]').checked;
    const controleRemotoSim = document.querySelector("#rd_controleRemotoSim");

    // Text fields (inputaveis)
    const acessosTotais = document.querySelector(".tfAcessosTotais").value || 0;
    let acessosVeicularesTotais = document.querySelector(".tfAcessosVeicularesTotais").value || 0;
    let acessosVeicularesRF = document.querySelector(".tfAcessosVeicularesRF").value || 0;
    const acessosCatraca = document.querySelector(".tfAcessosCatraca").value || 0;
    const qtdElevadores = document.querySelector(".tfQtdElevadores").value || 0;
    const qtdAndares = document.querySelector(".tfQtdAndares").value || 0;
    const qtdAcessosAntiCarona = document.querySelector(".tfQtdAcessosAntiCarona").value || 0;
    const qtdControleVagasEntrada = document.querySelector(".tfQtdControleVagasEntrada").value || 0;
    const qtdControleVagasSaida = document.querySelector(".tfQtdControleVagasSaida").value || 0;


    //Considera se está marcado para somar os acessos veiculares
    if (vaiTerAcessoVeicular == "false") {
      acessosVeicularesTotais = 0;
      acessosVeicularesRF = 0;
    }

    if (controleRemotoSim.checked === false) {
      acessosVeicularesRF = 0;
    };

    //Quantidade de Módulos
    qtdModPorta = qtdModPortaIP = (acessosTotais - humModAcesso - acessosVeicularesRF);
    qtdModCatraca = qtdModCatracaIP = acessosCatraca;

    if (tipoComunicacao === "tcp") {
      //Quantidade de Módutos Porta IP
      if (qtdModPortaIP > 0 && automacaoElevadores === false) {
        const paragrafo = paragrafoLinkavel(`${qtdModPortaIP}`, `Módulo Porta IP`, () => montaLink("https://bravas.ind.br/Produtos/57/PRD0008-Modulo-Porta-IP", "(PRD0008)"));
        addParagrafoComModulo(paragrafo);

        // const texto = `${qtdModPortaIP} un - Módulo Porta IP (PRD0008)`;
        // modulosContabilizados.push(texto)
        // addParagrafoComModulo(texto);

      };

      //Quantidade de Módulos Catraca IP
      if (qtdModCatracaIP > 0) {
        const paragrafo = paragrafoLinkavel(`${qtdModCatracaIP}`, `Módulo Catraca IP`, () => montaLink("https://bravas.ind.br/Produtos/60/PRD0016-Modulo-Catraca-IP", "(PRD0016)"));
        addParagrafoComModulo(paragrafo);

        // const texto = `${qtdModCatracaIP} un - Módulo Catraca IP (PRD0016)`;
        // modulosContabilizados.push(texto);
        // addParagrafoComModulo(texto);

      };

      //Quantidade de Módulos RF IP

      if (acessosVeicularesRF > 0 && acessosVeicularesRF <= 4) {
        qtdModRFIP = 1;

      } else if (acessosVeicularesRF >= 5 && acessosVeicularesRF <= 8) {
        qtdModRFIP = 2;

      };
      if (qtdModRFIP > 0) {
        const paragrafo = paragrafoLinkavel(`${qtdModRFIP}`, `Módulo RF IP`, () => montaLink("https://bravas.ind.br/Produtos/58/PRD0009-Modulo-Receptor-RF-IP", "(PRD0009)"));
        addParagrafoComModulo(paragrafo);

        // const texto = `${qtdModRFIP} un - Módulo RF IP (PRD0009)`;
        // modulosContabilizados.push(texto);
        // addParagrafoComModulo(texto);
      };

      //Automações: Elevadores
      if (automacaoElevadores) {
        qtdMod4x4IP = Math.ceil(qtdAndares / 4) * (qtdElevadores);

          const qtdModPortaIPExtra = Number(qtdElevadores);
          qtdModPortaIP += qtdModPortaIPExtra;
        
          if (qtdModPortaIP > 0) {
            const paragrafo = paragrafoLinkavel(`${qtdModPortaIP}`, `Módulo Porta IP`, () => montaLink("https://bravas.ind.br/Produtos/57/PRD0008-Modulo-Porta-IP", "(PRD0008)"));
            addParagrafoComModulo(paragrafo);

            // const texto = `${qtdModPortaIP} un - Módulo Porta IP (PRD0008)`;
            // modulosContabilizados.push(texto)
            // addParagrafoComModulo(texto);

          };

        
      };

      //Automações: Anti-Carona
      if (automacaoAntiCarona) {
        qtdMod4x4IP += calcularModPGMAntiCarona(qtdAcessosAntiCarona);

      };

      //Automações: Controle de Vagas
      if (automacaoControleVagas) {
        qtdMod4x4IP += calcularModPGM(qtdControleVagasEntrada, qtdControleVagasSaida);
      };

      //Imprimir quantidade de Módulos PGM 4x4 IP
      if (qtdMod4x4IP > 0) {
        const paragrafo = paragrafoLinkavel(`${qtdMod4x4IP}`, `Módulo PGM 4x4 IP`, () => montaLink("https://bravas.ind.br/Produtos/59/PRD0013-Modulo-PGM-4-IP", "(PRD0013)"));
        addParagrafoComModulo(paragrafo);

        // const texto = `${qtdMod4x4IP} un - Módulo PGM 4x4 IP (PRD0013)`;
        // modulosContabilizados.push(texto);
        // addParagrafoComModulo(texto);
      };



      /////////////// SERIAL 485 /////////////// SERIAL 485 /////////////// SERIAL 485
    } else if (tipoComunicacao === "serial") {
      //Quantidade de Módulos Porta RS-485
      if (qtdModPorta > 0) {
        const paragrafo = paragrafoLinkavel(`${qtdModPorta}`, `Módulo Porta RS-485`, () => montaLink("https://bravas.ind.br/Produtos/29/PRD0011-Modulo-Porta", "(PRD0011)"));
        addParagrafoComModulo(paragrafo);

        // const texto = `${qtdModPorta} un - Módulo Porta RS-485 (PRD0011)`;
        // modulosContabilizados.push(texto)
        // addParagrafoComModulo(texto);
      };

      //Quantidade de Módulos Catraca RS-485
      if (qtdModCatraca > 0) {
        const paragrafo = paragrafoLinkavel(`${qtdModCatraca}`, `Módulo Catraca RS-485`, () => montaLink("https://bravas.ind.br/Produtos/28/PRD0010-Modulo-Catraca", "(PRD0010)"));
        addParagrafoComModulo(paragrafo);

        // const texto = `${qtdModCatraca} un - Módulo Catraca RS-485 (PRD0010)`;
        // modulosContabilizados.push(texto)
        // addParagrafoComModulo(texto);
      };

      //Quantidade de Módulos RF RS-485
      if (acessosVeicularesRF > 0 && acessosVeicularesRF <= 4) {
        qtdModRF = 1;

      } else if (acessosVeicularesRF >= 5 && acessosVeicularesRF <= 8) {
        qtdModRF = 2;

      };

      if (qtdModRF > 0) {
        const paragrafo = paragrafoLinkavel(`${qtdModRF}`, `Módulo RF RS-485`, () => montaLink("https://bravas.ind.br/Produtos/31/PRD0018-Modulo-Receptor-RF", "(PRD0018)"));
        addParagrafoComModulo(paragrafo);

        // const texto = `${qtdModRF} un - Módulo RF RS-485 (PRD0018)`;
        // modulosContabilizados.push(texto);
        // addParagrafoComModulo(texto);
      };

      //Automações: Elevadores RS-485
      if (automacaoElevadores) {
        qtdModAcesso += Number(qtdElevadores);
        qtdMod2x10 = Math.floor(qtdAndares / 10) * (qtdElevadores);

        if (qtdAndares % 10 >= 1 && qtdAndares % 10 <= 4) {
          qtdMod4x4 = (1 * qtdElevadores);

        } else if (qtdAndares % 10 >= 5 && qtdAndares % 10 <= 9) {
          qtdMod4x4 = 0;
          qtdMod2x10 += (1 * qtdElevadores);

        } else {
          qtdMod4x4 = 0;
        };

        const paragrafo = paragrafoLinkavel(`${qtdMod2x10}`, `Módulo PGM 2x10 RS-485`, () => montaLink("https://bravas.ind.br/Produtos/51/PRD0063-Modulo-PGM-2-IN-10-OUT", "(PRD0063)"));
        addParagrafoComModulo(paragrafo);

        // const texto = `${qtdMod2x10} un - Módulo PGM 2x10 RS-485 (PRD0063)`;
        // modulosContabilizados.push(texto);
        // addParagrafoComModulo(texto);
      };

      //Automações: Anti-Carona RS-485
      if (automacaoAntiCarona) {
        qtdMod4x4 += calcularModPGMAntiCarona(qtdAcessosAntiCarona);

      };

      //Automações: Controle de Vagas RS-485
      if (automacaoControleVagas) {
        qtdMod4x4 += calcularModPGM(qtdControleVagasEntrada, qtdControleVagasSaida);
      };

    };

    //Imprimir na tela a quantidade de Módulos PGM 4x4 RS-485 Totais
    if (qtdMod4x4 != 0) {

      const paragrafo = paragrafoLinkavel(`${qtdMod4x4}`, `Módulo PGM 4x4 RS-485`, () => montaLink("https://bravas.ind.br/Produtos/30/PRD0014-Modulo-PGM-4-in-4-out", "(PRD0014)"));
      addParagrafoComModulo(paragrafo);

      // const texto = `${qtdMod4x4} un - Módulo PGM 4x4 RS-485 <a href="https://bravas.ind.br/Produtos/32/PRD0028-Modulo-Acesso-Programavel" class="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" target="_blank"><sup> (PRD0014)</sup></a>`;
      // modulosContabilizados.push(texto);
      // addParagrafoComModulo(texto);
    };


    //Quantidade de Módulos Acesso Programável

    if (Math.ceil(qtdMod4x4IP / 40) > 1 && qtdModAcesso === 0) {
      qtdModAcesso += Math.ceil(qtdMod4x4IP / 40);
    };

    if (qtdModAcesso === 0) {
      ++qtdModAcesso;
      // addParagrafoComModulo(`${qtdModAcesso} un - Módulo Acesso Programável <a href="https://bravas.ind.br/Produtos/32/PRD0028-Modulo-Acesso-Programavel" class="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" target="_blank"><sup> (PRD0028)</sup></a>`);

      const paragrafo = paragrafoLinkavel(`${qtdModAcesso}`, `Módulo Acesso Programável`, () => montaLink("https://bravas.ind.br/Produtos/32/PRD0028-Modulo-Acesso-Programavel", "(PRD0028)"));
      addParagrafoComModulo(paragrafo);

    } else {
      qtdModAcesso += 1;
      // addParagrafoComModulo(`${qtdModAcesso} un - Módulo Acesso Programável <a href="https://bravas.ind.br/Produtos/32/PRD0028-Modulo-Acesso-Programavel" class="link-info link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover" target="_blank"><sup> (PRD0028)</sup></a>`);

      const paragrafo = paragrafoLinkavel(`${qtdModAcesso}`, `Módulo Acesso Programável`, () => montaLink("https://bravas.ind.br/Produtos/32/PRD0028-Modulo-Acesso-Programavel", "(PRD0028)"));
      addParagrafoComModulo(paragrafo);
    };


    addParagrafoComResposta(`Quantidade de acessos totais: ${acessosTotais}`);
    addParagrafoComResposta(`Tipo de comunicação: ${tipoComunicacao}`);
    addParagrafoComResposta(`Haverá acessos veiculares? ${vaiTerAcessoVeicular}`);
    addParagrafoComResposta(`Quantidade de acessos veiculares totais: ${acessosVeicularesTotais}`);
    addParagrafoComResposta(`Haverá acessos veiculares RF? ${vaiTerAcessoVeicularRF}`);
    addParagrafoComResposta(`Acessos veiculares RF: ${acessosVeicularesRF}`);
    addParagrafoComResposta(`Haverá acessos por catracas? ${vaiTerCatraca}`);
    addParagrafoComResposta(`Quantidade de acessos por catraca: ${acessosCatraca}`);
    addParagrafoComResposta(`Haverá automações? ${vaiTerAutomacao}`);
    addParagrafoComResposta(`Haverá automação de elevadores? ${automacaoElevadores}`);
    addParagrafoComResposta(`Quantidade de elevadores: ${qtdElevadores}`);
    addParagrafoComResposta(`Quantidade de andares: ${qtdAndares}`);
    addParagrafoComResposta(`Haverá automação de anti-carona? ${automacaoAntiCarona}`);
    addParagrafoComResposta(`Quantidade de acessos anti-caronas: ${qtdAcessosAntiCarona}`);
    addParagrafoComResposta(`Haverá automação de controle de cagas? ${automacaoControleVagas}`);
    addParagrafoComResposta(`Quantidade de acessos controle de vagas entrada: ${qtdControleVagasEntrada}`);
    addParagrafoComResposta(`Quantidade de acessos controle de vagas saída: ${qtdControleVagasSaida}`);
    resetarVariaveis();

  });


  // Saída para o usuário
  // =====> Lista de Módulos para completar o projeto <=====;
  // console.log(`${qtdModAcesso}UN - Módulo Acesso Programável (PRD0028)`);
  // console.log(`${qtdModRF}UN - Módulo RF RS-485 (PRD0018)`);
  // console.log(`${qtdModRFIP}UN - Módulo RF IP (PRD0009)`);
  // console.log(`${qtdModPorta}UN - Módulo Porta RS-485 (PRD0011)`);
  // console.log(`${qtdModPortaIP}UN - Módulo Porta IP (PRD0008)`);
  // console.log(`${qtdMod4x4}UN - Módulo PGM 4x4 RS-485 (PRD0014)`);
  // console.log(`${qtdMod4x4IP}UN - Módulo PGM 4x4 IP (PRD0013)`);
  // console.log(`${qtdModCatraca}UN - Módulo Catraca RS-485 (PRD0010)`);
  // console.log(`${qtdModCatracaIP}UN - Módulo Catraca IP (PRD0016)`);
  // console.log(`${qtdMod2x10}UN - Módulo PGM 2x10 RS-485 (PRD0063)`);
  // 

});