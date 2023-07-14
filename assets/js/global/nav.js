(function (){
    // Variables
    const sectionEtapas = document.querySelector('section.etapas');
    // ADICIONAR CLASSE AO SCROLLAR
    function adicionarClasse (){
      window.addEventListener('scroll', () => {
        const alturaPagina = window.scrollY;
        if (alturaPagina < 10) {
            sectionEtapas.classList.remove('scroll');
        }else{
            sectionEtapas.classList.add('scroll');
        }
      })
    }
    adicionarClasse()
  }())
  