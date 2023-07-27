document.addEventListener("DOMContentLoaded", function() {
  formulario = document.getElementById("formularioMecanico");
    formulario.addEventListener('submit', validarFormulario); 
  });

  
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito nada en el nombre');
      return;
    }
    var apellido = document.getElementById('apellido').value;
    if (apellido.length == 0) {
      alert('No has escrito nada en el apellido');
      return;
    }
    var correo = document.getElementById('correo').value;
    if(correo.length == 0) {
      alert('No has escrito nada en el correo');
      return;
    }
    this.submit();
  }
