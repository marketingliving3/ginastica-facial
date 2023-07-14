(function () {
  /* ---- State ---- */

  const STATE = {
    seletor: '',
    umMes: {
      urlCheckout: 'https://go.perfectpay.com.br/PPU38CMIO3H'
    },
    tresMeses: {
      urlCheckout: 'https://go.perfectpay.com.br/PPU38CMIO3J'
    },
    seisMeses: {
      urlCheckout: 'https://go.perfectpay.com.br/PPU38CMIO3L'
    },
  }

  /* ---- Elements ---- */

  const sectionQuadro = document.querySelector('section[name="quadro"]')

  const botaoUm = sectionQuadro.querySelector('button[name="umMes"]')
  const botaoTres = sectionQuadro.querySelector('button[name="tresMeses"]')
  const botaoSeis = sectionQuadro.querySelector('button[name="seisMeses"]')
  const botaoAssinar = sectionQuadro.querySelector('a[name="assinar"]')

  /* ---- Methods ---- */

  function habilitarEventos () {
    clicouAssinar()

    clicouBotaoUm()
    clicouBotaoTres()
    clicouBotaoSeis()
  }

  document.addEventListener("DOMContentLoaded", function() {
    STATE.seletor = 'tresMeses'

    limpar()
    importarPlano(STATE.tresMeses)
    ativarBotaoPlano(botaoTres)
  })

  /* ---- Events ---- */

  function clicouAssinar () {
    botaoAssinar.addEventListener('click', callbackClicouAssinar)
  }

  // Planos

  function clicouBotaoUm () {
    botaoUm.addEventListener('click', callbackClicouBotaoUm)
  }

  function clicouBotaoTres () {
    botaoTres.addEventListener('click', callbackClicouBotaoTres)
  }

  function clicouBotaoSeis () {
    botaoSeis.addEventListener('click', callbackClicouBotaoSeis)
  }

  /* ---- Callbacks ---- */

  function callbackClicouAssinar () {
    const url = botaoAssinar.getAttribute('href')
    window.location.assign(url)
  }

  // Planos

  function callbackClicouBotaoUm () {
    STATE.seletor = 'umMes'

    limpar()
    importarPlano(STATE.umMes)
    ativarBotaoPlano(botaoUm)
  }

  function callbackClicouBotaoTres () {
    STATE.seletor = 'tresMeses'

    limpar()
    importarPlano(STATE.tresMeses)
    ativarBotaoPlano(botaoTres)
  }

  function callbackClicouBotaoSeis () {
    STATE.seletor = 'seisMeses'

    limpar()
    importarPlano(STATE.seisMeses)
    ativarBotaoPlano(botaoSeis)
  }

  /* ---- View ---- */

  function limpar () {
    botaoAssinar.removeAttribute('href')
    desativarBotoesPlanos()
  }

  function importarPlano (dados) {
    botaoAssinar.setAttribute('href', dados.urlCheckout)
  }

  // Botao do Plano

  function ativarBotaoPlano (button) {
    desativarBotoesPlanos()
    button.classList.add('ativo')
  }

  function desativarBotoesPlanos () {
    botaoUm.classList.remove('ativo')
    botaoTres.classList.remove('ativo')
    botaoSeis.classList.remove('ativo')
  }

  /* ---- Start ---- */

  habilitarEventos()
}())
