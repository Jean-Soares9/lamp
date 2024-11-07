/**
 *  Simples simulador de uma lâmpada
 *  @author Jean Andrade
 */

function quebrar() {
    document.getElementById('lamp').src="img/broken.jpg"
    // reproduzindo um arquivo de áudio no JS
    // Passo 1: Copiar o arquivo de áudio para o projeto
    // Passo 2: Usar a classe Audio(biblioteca interna do JS)
    let som = new Audio()
    som.src="sound/glassbreaking.waw"
    som.play()
}