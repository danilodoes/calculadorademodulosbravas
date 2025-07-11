document.addEventListener("DOMContentLoaded", function () {

  const btnCalcular = document.querySelector(".calcular");
  btnCalcular.addEventListener("click", () => {
    const acessosTotais = document.querySelector(".tfAcessosTotais").value || 0;
    const acessosVeicularesTotais = document.querySelector(".tfAcessosVeicularesTotais").value || 0;
    const acessosVeicularesRF = document.querySelector(".tfAcessosVeicularesRF").value || 0;
    const acessosCatraca = document.querySelector(".tfAcessosCatraca").value || 0;
    const qtdElevadores = document.querySelector(".tfQtdElevadores").value || 0;
    const qtdAndares = document.querySelector(".tfQtdAndares").value || 0;
    const qtdAcessosAntiCarona = document.querySelector(".tfQtdAcessosAntiCarona").value || 0;
    const qtdControleVagasEntrada = document.querySelector(".tfQtdControleVagasEntrada").value || 0;
    const qtdControleVagasSaida = document.querySelector(".tfQtdControleVagasSaida").value || 0;

  
    console.log(`Acessos Totais: ${acessosTotais}`);
    console.log(`Acessos Veiculares Totais: ${acessosVeicularesTotais}`);
    console.log(`Acessos Veiculares RF: ${acessosVeicularesRF}`);    
    console.log(`Acessos por Catraca: ${acessosCatraca}`);
    console.log(`Quantidade de Elevadores: ${qtdElevadores}`);
    console.log(`Quantidade de Andares: ${qtdAndares}`);
    console.log(`Quantidade de Acessos Anti-Caronas: ${qtdAcessosAntiCarona}`);
    console.log(`Quantidade de Acessos Controle de Vagas Entrada: ${qtdControleVagasEntrada}`);
    console.log(`Quantidade de Acessos Controle de Vagas Saída: ${qtdControleVagasSaida}`);



  });

  // Dados inputaveis: Tipos de acessos
  const veicular = false;

  // Dados inputaveis: Automações
  const automacoes = true;
  const elevador = true;
  const anticarona = false;
  const controleVagas = false;

  // Dados inputaveis: Tipos de Conexão
  const tcp = true;
  const serial = false;

  // Dados inputaveis: Gerais
  let qtdElevadores = 4;
  let qtdAndares = 12;
  let qtdAcessosTotais = 0;
  let qtdAcessoRF = 0;
  let qtdAcessoCatraca = 0;
  // ===============================================


  // Quantidade de Módulos
  let qtdModAcesso = 0; let qtdMod2x10 = 0;
  let qtdModRF = 0; let qtdModRFIP = 0;
  let qtdModPorta = 0; let qtdModPortaIP = 0;
  let qtdMod4x4 = 0; let qtdMod4x4IP = 0;
  let qtdModCatraca = 0; let qtdModCatracaIP = 0;
  // ===============================================


  // Definindo quantos módulos serão utilizados para automação de elevadores
  if (elevador) {
    if (tcp) {
      qtdMod4x4IP = Math.ceil(qtdAndares / 4) * (qtdElevadores);
      qtdModAcesso = Math.ceil((qtdMod4x4IP / 40));
    };

    if (serial) {
      qtdModAcesso += qtdElevadores;
      qtdMod2x10 = Math.floor(qtdAndares / 10) * (qtdElevadores);

      if (qtdAndares % 10 >= 1 && qtdAndares % 10 <= 4) {
        qtdMod4x4 = (1 * qtdElevadores);

      } else if (qtdAndares % 10 >= 5 && qtdAndares % 10 <= 7) {
        qtdMod4x4 = (2 * qtdElevadores);

      } else if (qtdAndares % 10 >= 8 && qtdAndares % 10 <= 9) {
        qtdMod4x4 = 0;
        qtdMod2x10 += (1 * qtdElevadores);

      } else {
        qtdMod4x4 = 0;
      }
    };
  };
  // ===============================================

  // Definindo quantos módulos catracas
  if (qtdAcessoCatraca > 0) {
    if (tcp) {
      qtdModCatracaIP += qtdAcessoCatraca;
      qtdModAcesso += 1;

    } else if (serial) {
      qtdModCatraca += qtdAcessoCatraca;
      qtdModAcesso += 1;
    };
  };
  // ===============================================


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