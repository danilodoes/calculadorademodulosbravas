document.addEventListener("DOMContentLoaded", function () {

    function monitorarRadios(nomeDoGrupo, callback) {
        const radios = document.querySelectorAll(`input[name="${nomeDoGrupo}"]`);
        radios.forEach(radio => {
            radio.addEventListener("change", () => {
                const selecionado = document.querySelector(`input[name="${nomeDoGrupo}"]:checked`);
                callback(selecionado.value);
            });
        });
    }

    // Tipo de Comunicação
    monitorarRadios("rd_Comunicacao", (valor) => {
        console.log("Comunicação selecionada:", valor);
    });

    // Radios: Acesso Veiculares
    monitorarRadios("rd_checkAcessoVeicular", (valor) => {
        const qtdAcessosVeiculares = document.getElementById("qtdAcessosVeiculares");
        if (valor === "true") {
            qtdAcessosVeiculares.classList.remove("d-none");
            console.log(`Acesso Veicular: ${valor}`);
        } else {
            qtdAcessosVeiculares.classList.add("d-none");
            console.log(`Acesso Veicular: ${valor}`);
        };
    });

    // Radios: Controle Remoto
    monitorarRadios("rd_checkControleRemoto", (valor) => {
        const qtdAcessosVeicularesRF = document.getElementById("qtdAcessosVeicularesRF");
        if (valor === "true") {
            qtdAcessosVeicularesRF.classList.remove("d-none");
            console.log(`Controle remoto: ${valor}`);
        } else {
            qtdAcessosVeicularesRF.classList.add("d-none");
            console.log(`Controle remoto: ${valor}`);
        };
    });

    // Radios: Catraca
    monitorarRadios("rd_checkCatraca", (valor) => {
        const qtdCatraca = document.getElementById("qtdCatraca");
        if (valor === "true") {
            qtdCatraca.classList.remove("d-none");
            console.log(`Catracas: ${valor}`);
        } else {
            qtdCatraca.classList.add("d-none");
            console.log(`Catracas: ${valor}`);
        };
        
    });

    // Radios: Automações
    monitorarRadios("rd_checkAutomacao", (valor) => {
        const quaisAutomacoes = document.getElementById("quaisAutomacoes");
        if (valor === "true") {
            quaisAutomacoes.classList.remove("d-none");
            console.log(`Automações: ${valor}`);
        } else {
            quaisAutomacoes.classList.add("d-none");
            console.log(`Automações: ${valor}`);
        };
        
    });


});