function mostrarOcultarElementos() {
    var imagen = document.getElementById('imagen');
    var textoOculto = document.getElementById('textoOculto');
  
    if (imagen.style.display === 'none') {
      imagen.style.display = 'block';
      textoOculto.style.display = 'none';
    } else {
      imagen.style.display = 'none';
      textoOculto.style.display = 'block';
    }
}