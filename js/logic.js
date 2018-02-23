var usuarios = {
    nombre: "jairouriel1998",
    contrasena: "0512199802616"
}
document.getElementById('autenticar').onclick = function(){
  var usuario = document.getElementById('usuario').value;
  var contrasena = document.getElementById('contrasena').value;
    verificar(usuario, contrasena);
}

function verificar(nombre,contrasena){
      document.getElementById('alerta').style.color = "white";
      document.getElementById('alerta').innerHTML = "<h3><b>Autenticando por favor espere.....<b></h3><br>";
      setTimeout(function(){autenticado(nombre, contrasena)},3000);
}
function autenticado(nombre, contrasena){
  if (nombre === usuarios.nombre) {
    if (contrasena === usuarios.contrasena) {
      document.getElementById('alerta').style.color = "white";
      document.getElementById('alerta').innerHTML = "<h3><b>Usuario autenticado con éxito.<b></h3><p>Presione continuar.</p><br>";
      document.getElementById('autenticar').style.display = "none";
      document.getElementById('ingresar').style.display = "block";
    }else{
      console.log('La contraseña es incorrecta');
      document.getElementById('alerta').innerHTML = "<h4><b>La contraseña ingresada es incorrecta. Ingrese su contraseña nuevamente</b></h4><br>";
      document.getElementById('alerta').style.color = "red";
    }
  }else{
    console.log('El usuario ingresado no existe');
    document.getElementById('alerta').innerHTML = "<h4><b>El usuario es invalido o no existe. Ingrese un nombre de usuario válido.<b></h4><br>";
    document.getElementById('alerta').style.color = "red";
  }
}

function trasladar(){
  window.open("html/home.html");
  setTimeout(function(){recargar()},60000);
}
function recargar(){
  location.reload();
}


/******************* Estilos aplicados con javascript   -   Styles using js       ********/
onload = cambiar_color(3); //load change color
function cambiar_color (n){ //change color function
    if (n === 1) {
      document.getElementById('panel').style.boxShadow =  "rgb(200, 80, 80) 5px 5px 15px 15px";
      document.getElementById('panel').style.textShadow = "rgb(200,80,80) 5px 5px 5px";
      document.getElementById('ingresar').style.textShadow = "rgb(200, 80, 80) 5px 5px 5px";
      document.getElementById('ingresar').style.boxShadow =  "rgb(200, 80, 80) 5px 5px 5px 5px";
      document.getElementById('autenticar').style.textShadow = "rgb(200, 80, 80) 5px 5px 5px";
      document.getElementById('autenticar').style.boxShadow =  "rgb(200, 80, 80) 5px 5px 5px 5px";
      document.getElementById('usuario').style.boxShadow =  "rgb(200, 80, 80) 5px 5px 5px 5px";
      document.getElementById('usuario').style.textShadow = "rgb(200, 80, 80) 5px 5px 5px";
      document.getElementById('contrasena').style.boxShadow =  "rgb(200, 80, 80) 5px 5px 5px 5px";
      document.getElementById('contrasena').style.textShadow = "rgb(200, 80, 80) 5px 5px 5px";
      n++;
      setTimeout(function(){cambiar_color(n)},2000);
    }else if (n === 2) {
      document.getElementById('panel').style.boxShadow = "rgb(80, 200, 80) 5px 5px 15px 15px";
      document.getElementById('panel').style.textShadow = "rgb(80, 200, 80) 5px 5px 5px";
      document.getElementById('ingresar').style.textShadow = "rgb(80, 200, 80) 5px 5px 5px";
      document.getElementById('ingresar').style.boxShadow =  "rgb(80, 200, 80) 5px 5px 5px 5px";
      document.getElementById('autenticar').style.textShadow = "rgb(80, 200, 80) 5px 5px 5px";
      document.getElementById('autenticar').style.boxShadow =  "rgb(80, 200, 80) 5px 5px 5px 5px";
      document.getElementById('usuario').style.boxShadow =  "rgb(80, 200, 80) 5px 5px 5px 5px";
      document.getElementById('usuario').style.textShadow = "rgb(80, 200, 80) 5px 5px 5px";
      document.getElementById('contrasena').style.boxShadow =  "rgb(80, 200, 80) 5px 5px 5px 5px";
      document.getElementById('contrasena').style.textShadow = "rgb(80, 200, 80) 5px 5px 5px";
      n++;
      setTimeout(function(){cambiar_color(n)},2000);
    }else if (n === 3) {
      document.getElementById('panel').style.boxShadow = "rgb(80, 80, 200) 5px 5px 15px 15px";
      document.getElementById('panel').style.textShadow = "rgb(80, 80,200) 5px 5px 5px";
      document.getElementById('ingresar').style.textShadow = "rgb(80, 80, 200) 5px 5px 5px";
      document.getElementById('ingresar').style.boxShadow =  "rgb(80, 80, 200) 5px 5px 5px 5px";
      document.getElementById('autenticar').style.textShadow = "rgb(80, 80, 200) 5px 5px 5px";
      document.getElementById('autenticar').style.boxShadow =  "rgb(80, 80, 200) 5px 5px 5px 5px";
      document.getElementById('usuario').style.boxShadow =  "rgb(80, 80, 200) 5px 5px 5px 5px";
      document.getElementById('usuario').style.textShadow = "rgb(80, 80, 200) 5px 5px 5px";
      document.getElementById('contrasena').style.boxShadow =  "rgb(80, 80, 200) 5px 5px 5px 5px";
      document.getElementById('contrasena').style.textShadow = "rgb(80, 80, 200) 5px 5px 5px";
      n++;
      setTimeout(function(){cambiar_color(n)},2000);
    }else if (n === 4) {
      document.getElementById('panel').style.boxShadow = "rgb(80, 200, 200) 5px 5px 15px 15px";
      document.getElementById('panel').style.textShadow = "rgb(80, 200,200) 5px 5px 5px";
      document.getElementById('ingresar').style.textShadow = "rgb(80, 200, 200) 5px 5px 5px";
      document.getElementById('ingresar').style.boxShadow =  "rgb(80, 200, 200) 5px 5px 5px 5px";
      document.getElementById('autenticar').style.textShadow = "rgb(80, 200, 200) 5px 5px 5px";
      document.getElementById('autenticar').style.boxShadow =  "rgb(80, 200, 200) 5px 5px 5px 5px";
      document.getElementById('usuario').style.boxShadow =  "rgb(80, 200, 200) 5px 5px 5px 5px";
      document.getElementById('usuario').style.textShadow = "rgb(80, 200, 200) 5px 5px 5px";
      document.getElementById('contrasena').style.boxShadow =  "rgb(80, 200, 200) 5px 5px 5px 5px";
      document.getElementById('contrasena').style.textShadow = "rgb(80, 200, 200) 5px 5px 5px";
      n++;
      setTimeout(function(){cambiar_color(n)},2000);
    }else if (n === 5) {
      document.getElementById('panel').style.boxShadow = "rgb(200, 80, 200) 5px 5px 15px 15px";
      document.getElementById('panel').style.textShadow = "rgb(200, 80,200) 5px 5px 5px";
      document.getElementById('ingresar').style.textShadow = "rgb(200, 80, 200) 5px 5px 5px";
      document.getElementById('ingresar').style.boxShadow =  "rgb(200, 80, 200) 5px 5px 5px 5px";
      document.getElementById('autenticar').style.textShadow = "rgb(200, 80, 200) 5px 5px 5px";
      document.getElementById('autenticar').style.boxShadow =  "rgb(200, 80, 200) 5px 5px 5px 5px";
      document.getElementById('usuario').style.boxShadow =  "rgb(200, 80, 200) 5px 5px 5px 5px";
      document.getElementById('usuario').style.textShadow = "rgb(200, 80, 200) 5px 5px 5px";
      document.getElementById('contrasena').style.boxShadow =  "rgb(200, 80, 200) 5px 5px 5px 5px";
      document.getElementById('contrasena').style.textShadow = "rgb(200, 80, 200) 5px 5px 5px";
      n++;
      setTimeout(function(){cambiar_color(n)},2000);
    }else if (n === 6) {
      document.getElementById('panel').style.boxShadow = "rgb(200, 200, 80) 5px 5px 15px 15px";
      document.getElementById('panel').style.textShadow = "rgb(200, 200, 80) 5px 5px 5px";
      document.getElementById('ingresar').style.textShadow = "rgb(200, 200, 80) 5px 5px 5px";
      document.getElementById('ingresar').style.boxShadow =  "rgb(200, 200, 80) 5px 5px 5px 5px";
      document.getElementById('autenticar').style.textShadow = "rgb(200, 200, 80) 5px 5px 5px";
      document.getElementById('autenticar').style.boxShadow =  "rgb(200, 200, 80) 5px 5px 5px 5px";
      document.getElementById('usuario').style.boxShadow =  "rgb(200, 200, 80) 5px 5px 5px 5px";
      document.getElementById('usuario').style.textShadow = "rgb(200, 200, 80) 5px 5px 5px";
      document.getElementById('contrasena').style.boxShadow =  "rgb(200, 200, 80) 5px 5px 5px 5px";
      document.getElementById('contrasena').style.textShadow = "rgb(200, 200, 80) 5px 5px 5px";
      n=1;
      setTimeout(function(){cambiar_color(n)},2000);
    }
    /*Transiciones*/
    document.getElementById('alerta').style.WebkitTransition = "all 2s";
    document.getElementById('panel').style.WebkitTransition = "all 2s";
    document.getElementById('ingresar').style.WebkitTransition = "all 2s";
    document.getElementById('autenticar').style.WebkitTransition = "all 2s";
    document.getElementById('usuario').style.WebkitTransition = "all 2s";
    document.getElementById('contrasena').style.WebkitTransition = "all 2s";
    /*Fin de las transiciones*/
}
