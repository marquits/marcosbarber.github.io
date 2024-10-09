var nombre = "Marcos "; // tipo de variable
let apellido = "Barber "; // tipo de variable
console.log(apellido);
alert("Bienvenido a" + nombre + apellido);
var look = prompt("¿Estas en buscas de un buen look?");

if ((look = si)) {
  // if = si para preguntar
  alert("Perfecto!");
} else {
  // else = si es falso
  alert("Lo siento..");
  // Bloquear el acceso a la página
  document.body.innerHTML =
    "<h1>ERROR DE SITIO</h1><p>Lo sentimos, debes responder afirmativamente para acceder a esta página.</p>";
  // Opcionalmente, puedes ocultar el contenido original
  document.body.style.backgroundColor = "red"; // Cambia el color de fondo si lo deseas
}
