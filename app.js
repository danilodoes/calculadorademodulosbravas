document.addEventListener("DOMContentLoaded", function () {
  //Modal

  const modalBody = document.querySelector(".modulosTotais");
  const respostasUsuario = document.querySelector(".respotasUsuario");
  const btnFecharModal = document.querySelector(".btnFecharModal");
  const modulosContabilizados = [];

  function addParagrafoComResposta(resposta) {
    const paragrafo = document.createElement("p");
    paragrafo.textContent = resposta;
    respostasUsuario.appendChild(paragrafo);
  }


  function addParagrafoComModulo(moduloTexto) {
    const paragrafo = document.createElement("p");
    paragrafo.textContent = moduloTexto;
    modalBody.appendChild(paragrafo);
  }


  //Quantidade de Módulos
  let humModAcesso = 4;
  let qtdModAcesso = 0; let qtdMod2x10 = 0;
  let qtdModRF = 0; let qtdModRFIP = 0;
  let qtdModPorta = 0; let qtdModPortaIP = 0;
  let qtdMod4x4 = 0; let qtdMod4x4IP = 0;
  let qtdModCatraca = 0; let qtdModCatracaIP = 0;


  //Função para resetar o valor das variáveis

  function resetarVariaveis() {
    humModAcesso = 4;
    qtdModAcesso = 0; qtdMod2x10 = 0;
    qtdModRF = 0; qtdModRFIP = 0;
    qtdModPorta = 0; qtdModPortaIP = 0;
    qtdMod4x4 = 0; qtdMod4x4IP = 0
    qtdModCatraca = 0; qtdModCatracaIP = 0;
  };

  btnFecharModal.addEventListener("click", () => {
    modalBody.innerHTML = "";
    resetarVariaveis();
  });


  // Botão Calcular
  const btnCalcular = document.querySelector(".calcular");
  btnCalcular.addEventListener("click", () => {

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




    //Considera se está está marcado para somar os acessos veiculares
    if (vaiTerAcessoVeicular == "false") {
      acessosVeicularesTotais = 0;
      acessosVeicularesRF = 0;
    }

    if (controleRemotoSim.checked === false) {
      acessosVeicularesRF = 0;
    };

    //Quantidade de Módulos
    qtdModPorta = qtdModPortaIP = (acessosTotais - acessosCatraca - humModAcesso - acessosVeicularesRF);
    qtdModCatraca = qtdModCatracaIP = acessosCatraca;



    if (tipoComunicacao === "tcp") {
      //Quantidade de Módutos Porta IP
      if (qtdModPortaIP > 0) {
        const texto = `${qtdModPortaIP} un - Módulo Porta IP (PRD0008)`;
        modulosContabilizados.push(texto)
        addParagrafoComModulo(texto);

      };

      //Quantidade de Módulos Catraca IP
      if (qtdModCatracaIP > 0) {
        const texto = `${qtdModCatracaIP} un - Módulo Catraca IP (PRD0016)`;
        modulosContabilizados.push(texto);
        addParagrafoComModulo(texto);

      };

      //Quantidade de Módulos RF IP

      if (acessosVeicularesRF > 0 && acessosVeicularesRF <= 4) {
        qtdModRFIP = 1;

      } else if (acessosVeicularesRF >= 5 && acessosVeicularesRF <= 8) {
        qtdModRFIP = 2;

      };
      if (qtdModRFIP > 0) {
        const texto = `${qtdModRFIP} un - Módulo RF IP (PRD0009)`;
        modulosContabilizados.push(texto);
        addParagrafoComModulo(texto);
      };

      //Automações: Elevadores
      if (automacaoElevadores) {
        qtdMod4x4IP = Math.ceil(qtdAndares / 4) * (qtdElevadores);

        if (Math.ceil(qtdMod4x4IP / 40) > 1 && qtdModAcesso === 0) {
          qtdModAcesso += Math.ceil(qtdMod4x4IP / 40);
        }
      };

      //Automações: Anti-Carona
      if (automacaoAntiCarona) {
      };

      //Automações: Controle de Vagas
      if (automacaoControleVagas) {
      };

      //Quantidade de Módulos PGM 4x4 IP
      if (qtdMod4x4IP > 0) {
        const texto = `${qtdMod4x4IP} un - Módulo PGM 4x4 IP (PRD0013)`;
        modulosContabilizados.push(texto);
        addParagrafoComModulo(texto);
      }

      //Quantidade de Módulos Acesso Programável
      if (qtdModAcesso === 0) {
        ++qtdModAcesso
        addParagrafoComModulo(`${qtdModAcesso} un - Módulo Acesso Programável (PRD0028)`);
      } else {
        qtdModAcesso += qtdModAcesso;
        addParagrafoComModulo(`${qtdModAcesso} un - Módulo Acesso Programável (PRD0028)`);
      };;


      /////////////// SERIAL 485 /////////////// SERIAL 485 /////////////// SERIAL 485
    } else if (tipoComunicacao === "serial") {
      //Quantidade de Módulos Porta RS-485
      if (qtdModPorta > 0) {
        const texto = `${qtdModPorta} un - Módulo Porta RS-485 (PRD0011)`;
        modulosContabilizados.push(texto)
        addParagrafoComModulo(texto);
      };

      //Quantidade de Módulos Catraca RS-485
      if (qtdModCatraca > 0) {
        const texto = `${qtdModCatraca} un - Módulo Catraca RS-485 (PRD0010)`;
        modulosContabilizados.push(texto)
        addParagrafoComModulo(texto);
      };

      //Quantidade de Módulos RF RS-485
      if (acessosVeicularesRF > 0 && acessosVeicularesRF <= 4) {
        qtdModRF = 1;

      } else if (acessosVeicularesRF >= 5 && acessosVeicularesRF <= 8) {
        qtdModRF = 2;

      };

      if (qtdModRF > 0) {
        const texto = `${qtdModRF} un - Módulo RF RS-485 (PRD0018)`;
        modulosContabilizados.push(texto);
        addParagrafoComModulo(texto);
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

        if (qtdMod4x4 != 0) {

          const texto = `${qtdMod4x4} un - Módulo PGM 4x4 RS-485 (PRD0014)`;
          modulosContabilizados.push(texto);
          addParagrafoComModulo(texto);
          console.log(`Quatidade de modulo acesso: ${qtdModAcesso}`);
        };

        const texto = `${qtdMod2x10} un - Módulo PGM 2x10 RS-485 (PRD0063)`;
        modulosContabilizados.push(texto);
        addParagrafoComModulo(texto);

        console.log(`Quatidade de modulo acesso: ${qtdModAcesso}`);

      };

      //Automações: Anti-Carona RS-485
      if (automacaoAntiCarona) {
      };

      //Automações: Controle de Vagas RS-485
      if (automacaoControleVagas) {
      };

      //Quantidade de Módulos Acesso Programável
      if (qtdModAcesso === 0) {
        ++qtdModAcesso;
        addParagrafoComModulo(`${qtdModAcesso} un - Módulo Acesso Programável (PRD0028)`);
      } else {
        qtdModAcesso += qtdModAcesso;
        addParagrafoComModulo(`${qtdModAcesso} un - Módulo Acesso Programável (PRD0028)`);
      };

      if (vaiTerAutomacao) {

      }
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