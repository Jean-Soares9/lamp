/**
 *  Simples simulador de uma lâmpada
 *  @author Jean Andrade
 */

// variáveis de apoio lógica

let onoff = false // o interruptor inicia desligado
let lampada = true // a lâmpada está OK

function quebrar() {
    if (lampada === true) {
        document.getElementById('lamp').src="img/broken.jpg"
    // reproduzindo um arquivo de áudio no JS
    // Passo 1: Copiar o arquivo de áudio para o projeto
    // Passo 2: Usar a classe Audio(biblioteca interna do JS)
    let som = new Audio()
    som.src="sound/glassbreaking.wav"
    som.play()
    // apoio a logica para o JS identificar a lâmpada quebrada
    lampada = false
    }
    
}

function chave() {
    if (onoff === false && lampada === true) {
        // ligar a chave
        document.getElementById('interruptor').src="img/swon.png"
        onoff = true // O JS agora sabe que a chave está ligada
        // ligar a lâmpada
        document.getElementById('lamp').src="img/on.jpg"

    }else if (lampada === true) {
        // desligar a chave
        document.getElementById('interruptor').src="img/swoff.png"
        onoff = false
        // desligar a lâmpada
        document.getElementById('lamp').src="img/off.jpg"
    }else if (lampada === false) {
        document.getElementById('interruptor').src="img/swon.png"
        //document.getElementById('interruptor').src="img/swoff.png"
    }
}

