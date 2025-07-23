document.addEventListener("DOMContentLoaded", function () {
    const btnBaixar = document.querySelector(".btnBaixar");

    btnBaixar.addEventListener("click", async () => {
        const { jsPDF } = window.jspdf;

        // Cria uma nova instância do PDF
        const doc = new jsPDF();

        const modulosTotais = document.querySelector(".modulosTotais");
        const respostasUsuario = document.querySelector(".respotasUsuario");

        // Pega o conteúdo dos parágrafos
        const modulos = [...modulosTotais.querySelectorAll("p")].map(p => p.textContent);
        const respostas = [...respostasUsuario.querySelectorAll("p")].map(p => p.textContent);

        // Adiciona Data e Hora
        const dataHora = new Date().toLocaleString();
        doc.setFontSize(12);
        doc.text(`Relatório gerado em: ${dataHora}`, 10, 10);

        let y = 20;



        // Seção: Módulos Contabilizados
        doc.setFont(undefined, 'bold');
        doc.text("Módulos Contabilizados:", 10, y);
        y += 8;

        doc.setFont(undefined, 'normal');
        modulos.forEach(mod => {
            doc.text(mod, 10, y);
            y += 7;
            if (y > 280) {
                doc.addPage();
                y = 10;
            }
        });

        y += 5;

        // Seção: Respostas do usuário
        doc.setFont(undefined, 'bold');
        doc.text("Respostas do Usuário:", 10, y);
        y += 8;

        doc.setFont(undefined, 'normal');
        respostas.forEach(resp => {
            doc.text(resp, 10, y);
            y += 7;
            if (y > 280) { // quebra de página
                doc.addPage();
                y = 10;
            }
        });

        y += 10;

        // Adiciona instrução para enviar ao suporte
        doc.setFont(undefined, 'bold');
        doc.text("Envie este relatório ao suporte:", 10, y);
        y += 7;

        doc.setFont(undefined, 'normal');
        doc.text("Whatsapp: (11) 2924-7613", 10, y);
        y += 7;

        // Link para envio via WhatsApp
        const linkTexto = "Clique aqui para enviar o seu relatório ao suporte";
        const linkURL = "https://api.whatsapp.com/send/?phone=551129247613&text=Ol%C3%A1%20suporte%2C%20gostaria%20da%20aprova%C3%A7%C3%A3o%20do%20c%C3%A1lculo%20de%20m%C3%B3dulos%20para%20o%20meu%20projeto.&type=phone_number&app_absent=0";

        doc.setTextColor(0, 0, 255); // azul para indicar link
        doc.textWithLink(linkTexto, 10, y, { url: linkURL });
        doc.setTextColor(0, 0, 0); // volta para preto



        // Salva o PDF
        doc.save(`relatorio_modulos_${new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')}.pdf`);
    });
});
