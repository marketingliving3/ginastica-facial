document.addEventListener('DOMContentLoaded', function() {
    const elementoDaContagemRegressivaUm = document.getElementById('contadorUm')
    const elementoDaContagemRegressivaDois = document.getElementById('contadorDois')
    const tempoInicial = 15 * 60
    let tempoRestante = tempoInicial
  
    function atualizaContagemRegressiva() {
      if (tempoRestante > 0) {
        tempoRestante--
      } else {
        tempoRestante = tempoInicial
      }
  
      const minutos = Math.floor(tempoRestante / 60)
  
      const segundos = tempoRestante % 60
  
      elementoDaContagemRegressivaUm.innerText = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`
      elementoDaContagemRegressivaDois.innerText = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`
    }
  
    setInterval(atualizaContagemRegressiva, 1000)
  })