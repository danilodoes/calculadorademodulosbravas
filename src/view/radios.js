document.addEventListener("DOMContentLoaded", function () {

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

    // Radios: Controle Remoto
    monitorarRadios("rd_checkControleRemoto", (valor) => {
        const divQtdAcessosVeicularesRF = document.getElementById("qtdAcessosVeicularesRF");
        if (valor === "true") {
            divQtdAcessosVeicularesRF.classList.remove("d-none");
            // console.log(`Controle remoto: ${valor}`);
        } else {
            divQtdAcessosVeicularesRF.classList.add("d-none");
            // console.log(`Controle remoto: ${valor}`);
        };
    });

});


