document.addEventListener('DOMContentLoaded', () => {
    const encriptarBtn = document.querySelector('.btn-encriptar');
    const desencriptarBtn = document.querySelector('.btn-desencriptar');
    const copiarBtn = document.querySelector('.copiar');
    const textArea = document.querySelector('.text-area');
    const mensaje = document.querySelector('.mensaje');

    // Función para encriptar el texto
    function encriptar(texto) {
        return texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }

    // Función para desencriptar el texto
    function desencriptar(texto) {
        return texto
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }

    // Evento para encriptar el texto
    encriptarBtn.addEventListener('click', () => {
        mensaje.style.backgroundImage = "none";
        const texto = textArea.value;
        if (/^[a-z\s]*$/.test(texto)) {
            mensaje.value = encriptar(texto);
        } else {
            textArea.value="Solo letras minusculas y sin acentos";
            mensaje.value="Solo letras minusculas y sin acentos";
        }
    });

    // Evento para desencriptar el texto
    desencriptarBtn.addEventListener('click', () => {
        mensaje.style.backgroundImage = "none";
        const texto = textArea.value;
        mensaje.value = desencriptar(texto);
    });

    // Evento para copiar el texto al portapapeles
    copiarBtn.addEventListener('click', () => {
        mensaje.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });
});
