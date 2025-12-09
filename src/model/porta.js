/**
 * *Calcula a quantidade de módulos portas ip
 */


export function calcPortaIP(qtdPortas) {
    const humModAcesso = 4
    const portasTotais = (qtdPortas - humModAcesso)
    
    if (portasTotais > 4) {
        return Number(portasTotais)
    }
}