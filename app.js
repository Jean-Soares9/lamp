/**
 *  Simples simulador de uma lâmpada
 *  @author Jean Andrade
 */

// variáveis de apoio lógica

let onoff = false // o interruptor inicia desligado
let lampada = true // a lâmpada está OK

// Pré carregamento do arquivo de áudio
let som = new Audio("sound/breaking-glass.mp3")
//som.src="sound/glassbreaking.wav"

// lanterna (pré carregamento)
let stream, track // variaveis de apoio
inicializarLanterna()

function quebrar() {
    if (lampada === true) {
        document.getElementById('lamp').src="img/broken.jpg"
    // reproduzindo um arquivo de áudio no JS
    // Passo 1: Copiar o arquivo de áudio para o projeto
    // Passo 2: Usar a classe Audio(biblioteca interna do JS)
    // Passo 3: Pré carregar o arquivo de áudia para sincronizar com a troca de imagen (Experiencia do Usuário)
    
    som.play()
    // apoio a logica para o JS identificar a lâmpada quebrada
    lampada = false
    }
    
}

function chave() {
    if (onoff === false) {
        document.getElementById('interruptor').src = "img/swon.png"
        onoff = true // o JS agora sabe que a chave está ligada
        //verificar se a lampada esta intacta antes de acender
        if (lampada === true) {
            document.getElementById('lamp').src = "img/on.jpg"
        }
    } else {
    document.getElementById('interruptor').src = "img/swoff.png"
    //desligar a lampada
    onoff = false
    //verificar se a lampada esta intacta antes de apagar
    if (lampada === true) {
        document.getElementById('lamp').src = "img/off.jpg"
    }
 
    }
}


// Estudo de eventos relacionado a click do mouse (pressionado ou não pressionado) e telas touch
// Passo 1: Capturar os elementos do html (DOM)

const botao = document.getElementById('button')
const lampadaImg = document.getElementById('lamp')

// Passo 2: Manipular o evento mouse pressionado
// addEventListener ("escuta de evento em tempo real")
// mousedown (mouse pressionado constantemente)
// mouseup (soltar o botao do mouse)
// touchstart (tocar na tela e manter)
// touchend (deixar de pressionar a tela)

// pressionar o botão do mouse e manter
botao.addEventListener('mousedown', (Event) => {
    Event.preventDefault() // ignorar o comportamento padrão
    //console.log("botão do mouse pressionado")
    // Se a lampada estiver intacta e o interruptor principal estiver desligado
    if (lampada === true && onoff === false){
        lampadaImg.src = "img/on.jpg" // trocar a imagem
    }
})

// soltar o botão do mouse
botao.addEventListener('mouseup', (Event) => {
    Event.preventDefault() // ignorar o comportamento padrão
    //console.log("botão do mouse solto")
    // Se a lampada estiver intacta e o interruptor principal estiver desligado
    if (lampada === true && onoff === false){
        lampadaImg.src = "img/off.jpg" // trocar a imagem
    }
})

// pressionar a tela touch e manter
botao.addEventListener('touchstart', (Event) => {
    Event.preventDefault() // ignorar o comportamento padrão
    //console.log("tela pressionada")
    // Se a lampada estiver intacta e o interruptor principal estiver desligado
    if (lampada === true && onoff === false){
        lampadaImg.src = "img/on.jpg" // trocar a imagem
    }
})

// soltar o botão do mouse
botao.addEventListener('touchend', (Event) => {
    Event.preventDefault() // ignorar o comportamento padrão
    //console.log("a tela não está sendo pressionada")
    // Se a lampada estiver intacta e o interruptor principal estiver desligado
    if (lampada === true && onoff === false){
        lampadaImg.src = "img/off.jpg" // trocar a imagem
    }
})

//lanterna (torch)
async function inicializarLanterna() {
    // try-catch (tratamento de exceções)
    try {
        // Solicita acesso à câmera traseira sem exibir o vídeo
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" }
        })
        
        // Obtém o track do vídeo para controlar a lanterna
        track = stream.getVideoTracks()[0]
        
        // Verifica se o dispositivo suporta o uso da lanterna
        const capabilities = track.getCapabilities()
        if (!capabilities.torch) {
            console.log("Lanterna não suportada no dispositivo.")
            return
        }
    } catch (error) {
        console.error(`Erro ao inicializar a lanterna: ${error}`)
    }
}
 
async function ligar(){
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: true }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
 
}
 
async function desligar(){
    if (track) {
        try {
            await track.applyConstraints({ advanced: [{ torch: false }] })
        } catch (error) {
            console.error(`Erro ao inicializar a lanterna: ${error}`)
        }
    }
   
}