(() => {
  
    const forms = document.querySelectorAll('.validacao')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

  $(document).ready(function () {
    $('#tel').mask('(00) 00000-0000')
})