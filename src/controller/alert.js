/**
 * * Mostra o alerta depois que o botão "calcular" é clicado
 */

import { showContent, hiddenContent } from '../view/calcContent.js'

document.addEventListener("DOMContentLoaded", function () {
    const btnCalcular = document.querySelector(".calcular")

    btnCalcular.addEventListener("click", () => {
        const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
        alertPlaceholder.innerHTML = ''; // Limpa alertas anteriores se existirem

        const appendAlert = (message, type) => {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<div class="custom-modern-alert p-4 p-md-5 mx-auto text-center" role="alert" style="max-width: 650px;">`,
                `   <div class="mb-3">`,
                `       <i class="bi bi-info-circle-fill" style="font-size: 2.5rem; color: var(--bravas-blue);"></i>`,
                `   </div>`,
                `   <h4 class="fw-bold mb-4">Importante ❗</h4>`,
                `   <p>As automações que mostramos aqui são apenas algumas das mais utilizadas com o nosso <a href="https://www.youtube.com/watch?v=Wb5Zu7FCx_M" target="_blank" class="fw-bold text-decoration-none" style="color: var(--bravas-blue);">Módulo de Acesso Programável.</a></p>`,
                `   <p>Mas fique tranquilo: ele vai muito além disso! 🚀</p>`,
                `   <p>Se você tem uma necessidade específica ou pensou em uma automação que não encontrou na lista, fale com a gente!</p>`,
                `   <p class="mb-5">👨🏻‍💻 Nosso time de suporte está à disposição para entender a sua demanda e te ajudar a colocar a solução ideal em prática.</p>`,
                `   <div class="d-flex justify-content-center gap-3 flex-wrap">`,
                // O data-bs-dismiss foi REMOVIDO para que o JS puro feche sem acionar eventos faltantes do Bootstrap
                `       <button type="button" class="btn-success-modern btnVoltar"><i class="bi bi-arrow-left me-2"></i>Voltar</button>`,
                `       <button type="button" class="btn-warning-modern btnReset"><i class="bi bi-arrow-counterclockwise me-2"></i>Limpar Respostas</button>`,
                `   </div>`,
                `</div>`
            ].join('')

            hiddenContent()
            alertPlaceholder.append(wrapper)
        }
        
        appendAlert(`💡 Conte com a gente! `, 'primary')

        // Controle via JS PURO (Resolve o Uncaught TypeError de 'defaultPrevented')
        const btnVoltar = document.querySelector('.btnVoltar')
        if (btnVoltar) {
            btnVoltar.addEventListener('click', () => {
                alertPlaceholder.innerHTML = ''; // Limpa do DOM
                showContent(); // Reexibe a calculadora
            })
        }

        const btnReset = document.querySelector('.btnReset')
        if (btnReset) {
            btnReset.addEventListener('click', () => location.reload())
        }
    })
})