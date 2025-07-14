document.addEventListener("DOMContentLoaded", function () {
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
    const acessosVeicularesTotais = document.querySelector(".tfAcessosVeicularesTotais").value || 0;
    const acessosVeicularesRF = document.querySelector(".tfAcessosVeicularesRF").value || 0;
    const acessosCatraca = document.querySelector(".tfAcessosCatraca").value || 0;
    const qtdElevadores = document.querySelector(".tfQtdElevadores").value || 0;
    const qtdAndares = document.querySelector(".tfQtdAndares").value || 0;
    const qtdAcessosAntiCarona = document.querySelector(".tfQtdAcessosAntiCarona").value || 0;
    const qtdControleVagasEntrada = document.querySelector(".tfQtdControleVagasEntrada").value || 0;
    const qtdControleVagasSaida = document.querySelector(".tfQtdControleVagasSaida").value || 0;



    //Quantidade de Módulos
    qtdModPorta = qtdModPortaIP = (acessosTotais - acessosCatraca - humModAcesso - acessosVeicularesRF);
    qtdModCatraca = qtdModCatracaIP = acessosCatraca;


    if (tipoComunicacao === "tcp") {
      //Quantidade de Módutos Porta IP
      if (qtdModPortaIP > 0) {
        console.log(`${qtdModPortaIP} UN - Módulo Porta IP (PRD0008)`);
      };

      //Quantidade de Módulos Catraca IP
      if (qtdModCatracaIP > 0) {
        console.log(`${qtdModCatracaIP} UN - Módulo Catraca IP (PRD0016)`);
      };

      //Quantidade de Módulos RF IP
      if (acessosVeicularesRF > 0 && acessosVeicularesRF <= 4) {
        qtdModRFIP = 1;
        console.log(`${qtdModRFIP} UN - Módulo RF IP (PRD0009)`);
      } else if (acessosVeicularesRF >= 5 && acessosVeicularesRF <= 8) {
        qtdModRFIP = 2;
        console.log(`${qtdModRFIP} UN - Módulo RF IP (PRD0009)`);
      };

      //Automações: Elevadores
      if (vaiTerAutomacao) {
        qtdMod4x4IP = Math.ceil(qtdAndares / 4) * (qtdElevadores);
        qtdModAcesso += Math.ceil(qtdMod4x4IP / 40);
        console.log(`${qtdMod4x4IP} UN - Módulo PGM 4x4 IP (PRD0013)`);
      };

      //Automações: Anti-Carona
      if (automacaoAntiCarona) {
      }

      //Automações: Controle de Vagas
      if (automacaoControleVagas) {
      }


      console.log(`${qtdModAcesso} UN - Módulo Acesso Programável (PRD0028)`);

      /////////////// SERIAL 485 /////////////// SERIAL 485 /////////////// SERIAL 485
    } else if (tipoComunicacao === "serial") {
      //Quantidade de Módulos Porta RS-485
      if (qtdModPorta > 0) {
        console.log(`${qtdModPorta} UN - Módulo Porta RS-485 (PRD0011)`);
      };

      //Quantidade de Módulos Catraca RS-485
      if (qtdModCatraca > 0) {
        console.log(`${qtdModCatraca} UN - Módulo Catraca RS-485 (PRD0010)`);
      };

      //Quantidade de Módulos RF RS-485
      if (acessosVeicularesRF > 0 && acessosVeicularesRF <= 4) {
        qtdModRF = 1;
        console.log(`${qtdModRF} UN - Módulo RF RS-485 (PRD0018)`);
      } else if (acessosVeicularesRF >= 5 && acessosVeicularesRF <= 8) {
        qtdModRF = 2;
        console.log(`${qtdModRF} UN - Módulo RF RS-485 (PRD0018)`);
      };

      //Automações: Elevadores
      if (vaiTerAutomacao) {
        qtdModAcesso += qtdElevadores;
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

          console.log(`${qtdMod4x4} UN - Módulo PGM 4x4 RS-485 (PRD0014)`);
        };

        console.log(`${qtdMod2x10} UN - Módulo PGM 2x10 RS-485 (PRD0063)`);


      };

      //Automações: Anti-Carona
      if (automacaoAntiCarona) {
      }

      //Automações: Controle de Vagas
      if (automacaoControleVagas) {
      }

      console.log(`${qtdModAcesso} UN - Módulo Acesso Programável (PRD0028)`);



    };









    console.log(`Quantidade de acessos totais: ${acessosTotais}`);
    console.log(`Tipo de comunicação: ${tipoComunicacao}`);
    console.log(`Haverá acessos veiculares? ${vaiTerAcessoVeicular}`);
    console.log(`Quantidade de acessos veiculares totais: ${acessosVeicularesTotais}`);
    console.log(`Haverá acessos veiculares RF? ${vaiTerAcessoVeicularRF}`);
    console.log(`Acessos veiculares RF: ${acessosVeicularesRF}`);
    console.log(`Haverá acessos por catracas? ${vaiTerCatraca}`);
    console.log(`Quantidade de acessos por catraca: ${acessosCatraca}`);
    console.log(`Haverá automações? ${vaiTerAutomacao}`);
    console.log(`Haverá automação de elevadores? ${automacaoElevadores}`);
    console.log(`Quantidade de elevadores: ${qtdElevadores}`);
    console.log(`Quantidade de andares: ${qtdAndares}`);
    console.log(`Haverá automação de anti-carona? ${automacaoAntiCarona}`);
    console.log(`Quantidade de acessos anti-caronas: ${qtdAcessosAntiCarona}`);
    console.log(`Haverá automação de controle de cagas? ${automacaoControleVagas}`);
    console.log(`Quantidade de acessos controle de vagas entrada: ${qtdControleVagasEntrada}`);
    console.log(`Quantidade de acessos controle de vagas saída: ${qtdControleVagasSaida}`);

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