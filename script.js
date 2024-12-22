const boton = document.getElementById("botoncito");

boton.onclick = (e) => {
  e.preventDefault(); //PARA EVITAR QUE EL FORMULARIO SE ENVIE

  const nombre_apellido = document
    .getElementById("nombre_apellido")
    .value.trim();
  const contacto = document.getElementById("contacto").value.trim();
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;

  if (nombre_apellido && contacto && fecha && hora) {
    document.getElementById("nombre_apellido").value = "";
    document.getElementById("contacto").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("hora").value = "";
    alert("Solicitud de Turno Enviada");
  } else {
    alert("Falta Completar");
  }
};

//EJEMPLOS DE LAS CLASES
// var nombre = "Marcos "; // tipo de variable
// let apellido = "Barber "; // tipo de variable
// console.log(apellido);
// //if (nombre && apellido)
// alert("Solicitud de Turno enviada");

// var look = prompt("¿Estas en buscas de un buen look? ¿Si? o ¿No?");
// if ((look = Si)) {
//   // if = Si para preguntar
//   alert("Perfecto, este es el lugar correcto!");
// } else {
//   // else = si es falso
//   alert("Espero que pronto cambies de opinión. Adíos");
//   // Bloquear el acceso a la página
//   document.body.innerHTML =
//     "<h1>ERROR DE SITIO</h1><p>Lo sentimos, debes responder afirmativamente para acceder a esta página.</p>";
//   // Opcionalmente, oculta el contenido original
//   document.body.style.backgroundColor = "red"; // Color de fondo
// }
