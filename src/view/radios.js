/**
 * * Mostra ou esconde o campo de "quantidade de acessos controlados por controle remoto"
 */

import { setTfAcessosVeicularesRF } from "../controller/utils/setFields.js"

document.addEventListener('DOMContentLoaded', function () {

    // Função para pegar o estado dos rádios
    function monitorarRadios(nomeDoGrupo, callback) {
        const radios = document.querySelectorAll(`input[name='${nomeDoGrupo}']`)
        radios.forEach(radio => {
            radio.addEventListener('change', () => {
                const selecionado = document.querySelector(`input[name='${nomeDoGrupo}']:checked`)
                callback(selecionado.value)
            })
        })
    }

    // Radios: Controle Remoto
    monitorarRadios('rd_checkControleRemoto', (valor) => {
        const divQtdAcessosVeicularesRF = document.getElementById('qtdAcessosVeicularesRF')
        if (valor === 'true') {
            divQtdAcessosVeicularesRF.classList.remove('d-none')
        } else {
            divQtdAcessosVeicularesRF.classList.add('d-none')
            setTfAcessosVeicularesRF()
        }
    })

})


