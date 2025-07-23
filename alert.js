document.addEventListener("DOMContentLoaded", function () {
    const btnCalcular = document.querySelector(".calcular");

    btnCalcular.addEventListener("click", async () => {

        const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
        const appendAlert = (message, type) => {
            const wrapper = document.createElement('div')
            wrapper.innerHTML = [
                `<div class="alert alert-${type} alert-dismissible vh-100 d-flex flex-column text-center justify-content-center align-items-center p-0 m-0" role="alert">`,
                `<p class="fw-bold">Importante ❗</p>`,
                `<p>As automações que mostramos aqui são apenas algumas das mais utilizadas com o nosso Módulo de Acesso Programável.</p>`,
                `<p>Mas fique tranquilo: ele vai muito além disso! 🚀</p>`,
                `<p>Se você tem uma necessidade específica ou pensou em uma automação que não encontrou na lista, fale com a gente!</p>`,
                `<p>👨🏻‍💻 Nosso time de suporte está à disposição para entender a sua demanda e te ajudar a colocar a solução ideal em prática.</p>`,
                `<p>${message}</p>`,
                '   <button type="button" class="btn btn-success" data-bs-dismiss="alert" aria-label="Close">Voltar</button>',
                '</div>'
            ].join('')

            alertPlaceholder.append(wrapper)
        };

        appendAlert(`💡 Conte com a gente! `, 'primary')
    });

});