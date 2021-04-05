const  botaoOcultar  =  documento . getElementById ( 'ocultar' )
const  botaoMostrar  =  document . getElementById ( 'mostrar' )
const  imagem  =  documento . getElementById ( 'imagem' )
botaoMostrar . estilo . display  =  'nenhum'

function  ocultarImagem ( )  {
    imagem . estilo . display  =  'nenhum'
    botaoOcultar . estilo . display  =  'nenhum'
    botaoMostrar . estilo . display  =  'bloquear'
}

function  mostrarImagem ( )  {
    imagem . estilo . display  =  'bloquear'
    botaoOcultar . estilo . display  =  'bloquear'
    botaoMostrar . estilo . display  =  'nenhum'
}
