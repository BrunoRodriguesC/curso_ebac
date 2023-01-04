const form = document.getElementById('form-deposito');

form.addEventListener('submit', function(evento) {
  evento.preventDefault();

  
  validarFormulario = function(){
    if (Botao_Direito.value >= 100) {
      alert('O valor maximo é 99') 
    }
    
    if (Botao_Direito.value > Botao_Esquerdo.value ) {
      Bloco.style.background = 'green'
      Botao_Enviar.style.background = 'green'
      Sucesso.style.display = 'block'
    } else {
      Bloco.style.background = 'red'
      Botao_Enviar.style.background = 'red'
      Erro.style.display = 'block'
    }
  }
  
})

