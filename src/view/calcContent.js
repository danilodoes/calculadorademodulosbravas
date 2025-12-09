/**
 * * Mostrar ou esconder o formulário da calculadora
 */
export function showContent(){
    const calcContent = document.querySelector('.calcContent')
    calcContent.classList.remove('d-none')
}

export function hiddenContent() {
    const calcContent = document.querySelector('.calcContent')
    calcContent.classList.add('d-none')
}

