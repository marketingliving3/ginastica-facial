document.addEventListener('DOMContentLoaded', function() {
    const botaoContinuar = document.querySelectorAll('.continuar')
    const nenhumItemSelecionado = document.querySelectorAll('.item.selecionada').length === 0
    const nenhumaFotoSelecionada = document.querySelectorAll('.foto.selecionada').length === 0
  
    if (nenhumItemSelecionado && nenhumaFotoSelecionada) botaoContinuar.forEach(continuar => continuar.classList.add('bloqueado'))
    else botaoContinuar.forEach(continuar => continuar.classList.remove('bloqueado'))
  })
  
  function opcaoSelecionada(elemento) {
    const divs = document.querySelectorAll('.item')
    const divsFotos = document.querySelectorAll('.foto')
    const botaoContinuar = document.querySelectorAll('.continuar')
  
    divsFotos.forEach(div => {
      if (div !== elemento) div.classList.remove('selecionada')
    })
  
    divs.forEach(div => {
      if (div !== elemento) div.classList.remove('selecionada')
    })
  
    if (elemento.classList.contains('selecionada')) elemento.classList.remove('selecionada')
    else elemento.classList.add('selecionada')
  
    const nenhumItemSelecionado = document.querySelectorAll('.item.selecionada').length === 0
    const nenhumaFotoSelecionada = document.querySelectorAll('.foto.selecionada').length === 0
  
    if (nenhumItemSelecionado && nenhumaFotoSelecionada) botaoContinuar.forEach(continuar => continuar.classList.add('bloqueado'))
    else botaoContinuar.forEach(continuar => continuar.classList.remove('bloqueado'))
  }
  