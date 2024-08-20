function agregarALaPantalla(value) {
    document.getElementById('pantalla').value += value;
  }
  
  function calcular() {
    const valorPantalla = document.getElementById('pantalla').value;
    const result = eval(valorPantalla);
    document.getElementById('pantalla').value = result;
  }
  
  function limpiarPantalla() {
    document.getElementById('pantalla').value = '';
  }
  
function deshacer(){
  let valorIngresado = document.getElementById('pantalla').value;
  let anchoValor = valorIngresado.length;

  if(anchoValor !=0)
  {
    valorIngresado = valorIngresado.substring(0,anchoValor-1)
    document.getElementById('pantalla').value = valorIngresado;
  }
  else 
  {
    limpiarPantalla();
  }

}
