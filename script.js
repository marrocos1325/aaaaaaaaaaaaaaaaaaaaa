document.addEventListener('DOMContentLoaded', () => {

    const formulario = document.querySelector('form');

    formulario.addEventListener('submit', function(event) {

        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const oQueEstaSentindo = document.getElementById('socorro').value;

        const conteudoTexto = `RELATÓRIO DE SOFRIMENTO\n` +
                              `=======================\n` +
                              `Nome: ${nome}\n` +
                              `O que está sentindo: ${oQueEstaSentindo}\n` +
                              `Data/Hora: ${new Date().toLocaleString('pt-BR')}\n`;

        const blob = new Blob([conteudoTexto], { type: 'text/plain;charset=utf-8' });
        
        const linkDownload = document.createElement('a');
        linkDownload.href = URL.createObjectURL(blob);

        linkDownload.download = 'sofrimento_registrado.txt';

        document.body.appendChild(linkDownload);
        linkDownload.click();

        document.body.removeChild(linkDownload);
    });
});
