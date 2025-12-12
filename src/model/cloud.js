/**
 * * 1 - Calcula a quantidade de licença cloud
 */

import { addParagrafoComModulo, montaLink, paragrafoLinkavel } from "../controller/feedbackData.js"
import { avisoCloud } from "../view/avisoCloud.js"

export function handleCloud() {
        avisoCloud()
        const paragrafo = paragrafoLinkavel(`1`, `Licença BRAVAS Cloud`, () => montaLink("", "(PRD00??)"))
        addParagrafoComModulo(paragrafo)
}
