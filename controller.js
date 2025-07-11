document.addEventListener("DOMContentLoaded", function () {

         // Função para monitorar os switches
        function monitorarSwitches(nomeDoSwitch, callback) {
            const switches = document.querySelectorAll(`input[id="${nomeDoSwitch}"]`);
            switches.forEach(switchElement => {
                switchElement.addEventListener("change", () => {
                callback(switchElement.checked);
                });
            });
        };

        
        // Função para pegar o estado dos rádios
        function monitorarRadios(nomeDoGrupo, callback) {
            const radios = document.querySelectorAll(`input[name="${nomeDoGrupo}"]`);
            radios.forEach(radio => {
                radio.addEventListener("change", () => {
                    const selecionado = document.querySelector(`input[name="${nomeDoGrupo}"]:checked`);
                    callback(selecionado.value);
                });
            });
        };

        // Tipo de Comunicação
        monitorarRadios("rd_Comunicacao", (valor) => {
            console.log("Comunicação selecionada:", valor);
        });

        // Radios: Acesso Veiculares
        monitorarRadios("rd_checkAcessoVeicular", (valor) => {
            const divQtdAcessosVeiculares = document.getElementById("qtdAcessosVeiculares");
            const divQtdAcessosVeicularesRF = document.getElementById("qtdAcessosVeicularesRF");
            if (valor === "true") {
                divQtdAcessosVeiculares.classList.remove("d-none");
                console.log(`Acesso Veicular: ${valor}`);
            } else {
                divQtdAcessosVeiculares.classList.add("d-none");
                divQtdAcessosVeicularesRF.classList.add("d-none");
                divQtdAcessosVeicularesRF.value = "false";
                console.log(`Acesso Veicular: ${valor}`);
            };
        });

        // Radios: Controle Remoto
        monitorarRadios("rd_checkControleRemoto", (valor) => {
            const divQtdAcessosVeicularesRF = document.getElementById("qtdAcessosVeicularesRF");
            if (valor === "true") {
                divQtdAcessosVeicularesRF.classList.remove("d-none");
                console.log(`Controle remoto: ${valor}`);
            } else {
                divQtdAcessosVeicularesRF.classList.add("d-none");
                console.log(`Controle remoto: ${valor}`);
            };
        });

        // Radios: Catraca
        monitorarRadios("rd_checkCatraca", (valor) => {
            const divQtdCatraca = document.getElementById("qtdCatraca");
            if (valor === "true") {
                divQtdCatraca.classList.remove("d-none");
                console.log(`Catracas: ${valor}`);
            } else {
                divQtdCatraca.classList.add("d-none");
                console.log(`Catracas: ${valor}`);
            };

        });

        // Radios: Automações
        monitorarRadios("rd_checkAutomacao", (valor) => {
            const divQuaisAutomacoes = document.getElementById("quaisAutomacoes");
            if (valor === "true") {
                divQuaisAutomacoes.classList.remove("d-none");
                console.log(`Automações: ${valor}`);
            } else {
                const switches = document.querySelectorAll(".form-check.form-switch");
                switches.forEach(switchElement => {
                    switchElement.querySelector("input").checked = false;
                });    
                divQuaisAutomacoes.classList.add("d-none"); 
                console.log(`Automações: ${valor}`);
            };
        });


        // Switches: Elevadores
        monitorarSwitches("elevador", (checked) => {
                
            if (checked) {
                const vaiTerElevadores = checked;
                const containerElevadores = document.querySelector(".containerElevadores");
                containerElevadores.classList.remove("d-none");
                console.log(`Vai ter automação nos elevadores: ${vaiTerElevadores}`);                       
            }else{
                const vaiTerElevadores = checked;
                const containerElevadores = document.querySelector(".containerElevadores");
                containerElevadores.classList.add("d-none");
                console.log(`Vai ter automação nos elevadores: ${vaiTerElevadores}`);
            };           
        });

        // Switches: Anti-Carona
        monitorarSwitches("antiCarona", (checked) => {
            
            if (checked) {
                const vaiTerAntiCarona = checked;
                const ContainerAntiCarona = document.querySelector(".containerAntiCarona");
                ContainerAntiCarona.classList.remove("d-none");
                console.log(`Vai ter automação de Anti Carona: ${vaiTerAntiCarona}`);
        
            } else {
                const vaiTerAntiCarona = checked;
                const ContainerAntiCarona = document.querySelector(".containerAntiCarona");
                ContainerAntiCarona.classList.add("d-none");
                console.log(`Vai ter automação de Anti Carona: ${vaiTerAntiCarona}`);
        
            };
        });

        // Switches: Controle de Vagas
        monitorarSwitches("controleVaga", (checked) => {
            
            if (checked) {
                const vaiTerControleVagas = checked;
                const containerControleVagas = document.querySelector(".containerControleVagas");
                containerControleVagas.classList.remove("d-none");
                console.log(`Vai ter automação de Controle de Vagas: ${vaiTerControleVagas}`);
            } else {
                const vaiTerControleVagas = checked;
                const containerControleVagas = document.querySelector(".containerControleVagas");
                containerControleVagas.classList.add("d-none");
                console.log(`Vai ter automação de Controle de Vagas: ${vaiTerControleVagas}`);
            };
        });

    });


