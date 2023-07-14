document.addEventListener('DOMContentLoaded', function() {
    const botaoContinuar = document.querySelectorAll('.continuar')
    const nenhumItemSelecionado = document.querySelectorAll('.item.selecionada').length === 0
  
    if (nenhumItemSelecionado) botaoContinuar.forEach(continuar => continuar.classList.add('bloqueado'))
    else botaoContinuar.forEach(continuar => continuar.classList.remove('bloqueado'))
  })
  
  function opcaoSelecionada(elemento) {
    const botaoContinuar = document.querySelectorAll('.continuar')
  
    if (elemento.classList.contains('selecionada')) elemento.classList.remove('selecionada')
    else elemento.classList.add('selecionada')
  
    const nenhumItemSelecionado = document.querySelectorAll('.item.selecionada').length === 0
  
    if (nenhumItemSelecionado) botaoContinuar.forEach(continuar => continuar.classList.add('bloqueado'))
    else botaoContinuar.forEach(continuar => continuar.classList.remove('bloqueado'))
  }
  