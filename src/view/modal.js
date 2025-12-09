/**
 * * Fecha o modal quando o motão "Fechar" é clicado
 */

const modulosTotais = document.querySelector(".modulosTotais")
const respostasUsuario = document.querySelector(".respotasUsuario")
const btnFecharModal = document.querySelector(".btnFecharModal")

// Botão Fechar Modal
btnFecharModal.addEventListener("click", () => {
    modulosTotais.innerHTML = ""
    respostasUsuario.innerHTML = ""
});
