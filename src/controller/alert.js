/**
 * * Mostra o alerta depois que o botão "calcular é clicado"
 */

import { showContent, hiddenContent } from '../view/calcContent.js'

document.addEventListener("DOMContentLoaded", function () {
    const btnCalcular = document.querySelector(".calcular")

    btnCalcular.addEventListener("click", () => {

        const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
        const appendAlert = (message, type) => {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<div class="alert alert-${type} alert-dismissible text-center p-2 mx-auto" role="alert" style="width: 500px;">`,
                `<p class="fw-bold">Importante ❗</p>`,
                `<p>As automações que mostramos aqui são apenas algumas das mais utilizadas com o nosso <a href="https://www.youtube.com/watch?v=Wb5Zu7FCx_M" target="_blank" style="text-decoration: none">Módulo de Acesso Programável.</a></p>`,
                `<p>Mas fique tranquilo: ele vai muito além disso! 🚀</p>`,
                `<p>Se você tem uma necessidade específica ou pensou em uma automação que não encontrou na lista, fale com a gente!</p>`,
                `<p>👨🏻‍💻 Nosso time de suporte está à disposição para entender a sua demanda e te ajudar a colocar a solução ideal em prática.</p>`,
                `<p>${message}</p>`,
                `<div class="d-flex justify-content-evenly">
                    <button type="button" class="btn btn-success btnVoltar" data-bs-dismiss="alert" aria-label="Close">Voltar</button>
                    <button type="button" class="btn btn-warning btnReset">Limpar Respostas</button>
                </div>`,

                '</div>'
            ].join('')

            hiddenContent()
            alertPlaceholder.append(wrapper)
        }
        appendAlert(`💡 Conte com a gente! `, 'primary')

        const btnVoltar = document.querySelector('.btnVoltar')
        btnVoltar.addEventListener('click', showContent)
    })
})
