// js/registro.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const feedback = document.getElementById("formFeedback");
  const registerBtn = document.getElementById("registerBtn");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombres = document.getElementById("nombres").value;
    const apellidoPaterno = document.getElementById("apellidoPaterno").value;
    const apellidoMaterno = document.getElementById("apellidoMaterno").value;
    const correo = document.getElementById("correo").value;
    const dni = document.getElementById("dni").value;
    const celular = document.getElementById("celular").value;
    const cursos = document.querySelector('select[name="cursos"]').value;
    const check = document.querySelector('input[name="check"]').checked;

    if (
      nombres &&
      apellidoPaterno &&
      apellidoMaterno &&
      correo &&
      dni &&
      celular &&
      cursos &&
      check
    ) {
      feedback.textContent = "Formulario enviado con éxito.";
      feedback.style.color = "white";

      setTimeout(() => {
        window.location.href = "./assets/index2.html";
      }, 1000);
    }
  });
});

//terminos y condiciones

document.getElementById("question").addEventListener("click", function (event) {
  event.preventDefault();
  const link = document.createElement("a");
  link.href = "./términos.pdf";
  link.download = "Terminos_y_Condiciones.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

//boton
