const botaoOcultar = document.getElementById('ocultar')
const botaoMostrar = document.getElementById('mostrar')
const imagem = document.getElementById('imagem')
botaoMostrar.style.display = 'none'

function ocultarImagem() {
    imagem.style.display = 'none'
    botaoOcultar.style.display = 'none'
    botaoMostrar.style.display = 'block'
}

function mostrarImagem() {
    imagem.style.display = 'block'
    botaoOcultar.style.display = 'block'
    botaoMostrar.style.display = 'none'
}
