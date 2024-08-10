// js/registro.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evita el envío predeterminado del formulario

        // Obtén los valores de los campos
        const nombres = document.getElementById('nombres').value;
        const apellidoPaterno = document.getElementById('apellidoPaterno').value;
        const apellidoMaterno = document.getElementById('apellidoMaterno').value;
        const correo = document.getElementById('correo').value;
        const dni = document.getElementById('dni').value;
        const celular = document.getElementById('celular').value;
        const cursos = document.querySelector('select[name="cursos"]').value;
        const check = document.querySelector('input[name="check"]').checked;

        // Validación simple
        if (nombres && apellidoPaterno && apellidoMaterno && correo && dni && celular && cursos && check) {
            feedback.textContent = 'Formulario enviado con éxito.';
            feedback.style.color = 'green';
            // Aquí puedes manejar el envío del formulario, por ejemplo, enviarlo a un servidor
            // Ejemplo de solicitud con fetch (descomentarlo si es necesario):
            // fetch('/submit', {
            //     method: 'POST',
            //     body: JSON.stringify({ nombres, apellidoPaterno, apellidoMaterno, correo, dni, celular, cursos }),
            //     headers: { 'Content-Type': 'application/json' }
            // }).then(response => response.json())
            //   .then(data => console.log(data))
            //   .catch(error => console.error('Error:', error));
        } else {
            feedback.textContent = 'Por favor, completa todos los campos y acepta los términos.';
            feedback.style.color = 'red';
        }
    });
});
