document.addEventListener("DOMContentLoaded", function() {
    formulario = document.getElementById("formularioVehiculo");
      formulario.addEventListener('submit', validarFormulario); 
    });
  
    
    
    function validarFormulario(evento) {
      evento.preventDefault();
      var marca = document.getElementById('marca').value;
      if(marca.length == 0) {
        alert('No has escrito nada en la marca');
        return;
      }
      var color = document.getElementById('color').value;
      if (color.length == 0) {
        alert('No has escrito nada en el color');
        return;
      }
      var modelo = document.getElementById('modelo').value;
      if(modelo.length == 0) {
        alert('No has escrito nada en el modelo');
        return;
      }
      this.submit();
    }
