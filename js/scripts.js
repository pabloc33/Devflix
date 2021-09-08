// validar el formulario
const inputs = document.querySelectorAll("form .campo input");

// Listener a los input
inputs.forEach((input) => {
  input.addEventListener("blur", validarInput);
});

inputs.forEach((input) => {
  input.addEventListener("input", validarInput);
});

function validarInput(e) {
  const estados = ["valido", "no-valido"];
  let clase;
  if (e.target.value.length === 0) {
    clase = estados[1];
  } else {
    clase = estados[0];
  }

  e.target.classList.remove(...estados);
  e.target.nextElementSibling.classList.remove(...estados);
  e.target.classList.add(clase);
  e.target.nextElementSibling.classList.add(clase);

  // inyectar dinamicamente el div con el error
  if (clase === "no-valido") {
    if (e.target.parentElement.nextElementSibling.classList[0] !== "alerta") {
      // construir el mensaje de error
      const errDiv = document.createElement("div");
      errDiv.appendChild(document.createTextNode("Este campo es obligatorio"));
      errDiv.classList.add("alerta");
      // insertar el error
      e.target.parentElement.parentElement.insertBefore(
        errDiv,
        e.target.parentElement.nextElementSibling
      );
    }
  } else {
    // limpiar el mensaje de error si existe
    if (e.target.parentElement.nextElementSibling.classList[0] === "alerta") {
      e.target.parentElement.nextElementSibling.remove();
    }
  }
}

// Mostrar y ocultar password
const mostrarPasswordBtn = document.querySelector("form .campo span");
mostrarPasswordBtn.addEventListener("click", (e) => {
  const passwordInput = document.querySelector("#password");
  if (e.target.classList.contains("mostrar")) {
    // mostrar el texto
    e.target.classList.remove("mostrar");
    // cambiar el texto
    e.target.textContent = "Ocultar";
    // cambiamos a password
    passwordInput.type = "text";
  } else {
    // mostrar el password
    e.target.classList.add("mostrar");
    // cambiar el texto
    e.target.textContent = "Mostrar";
    // cambiamos a password
    passwordInput.type = "password";
  }
});
