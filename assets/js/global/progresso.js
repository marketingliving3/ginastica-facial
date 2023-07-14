function progresso() {
    const divs = document.querySelectorAll('.item')
    const loading = document.querySelector('.loading')
    let percentual = 0
    let interval
  
    interval = setInterval(() => {
      percentual += 1
  
      if (percentual <= 100) {
        loading.querySelector('p').textContent = `${percentual}%`
  
        const index = percentual / 20 - 1
        if (index >= 0 && index < divs.length) {
          divs[index].classList.add('ativo')
        }
      }
  
      if (percentual >= 100) {
        clearInterval(interval)
        window.location.href = './planos.html'
      }
    }, 100)
  }
  
  progresso()
  