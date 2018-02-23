var usuario = {
  nombre: "Jairo Uriel Medrano Ramos"
}
onload = sesionactual();

function sesionactual(){
  document.getElementById('mostrar_sesion').innerHTML = "<table><tr><td>Sesión iniciada como: </td><td><i>"+usuario.nombre+"</i></td></tr></table>";
}
