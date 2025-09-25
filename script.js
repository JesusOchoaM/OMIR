// 📩 script.js - Validación mejorada del formulario de contacto

// Selecciona el formulario y el elemento donde se mostrará el resultado
const form = document.getElementById('contactForm');
const result = document.getElementById('formResult');

// 📧 Función para validar el formato del correo electrónico
function validarEmail(email) {
  // Expresión regular que verifica que el correo tenga formato válido
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// 🧠 Evento que se ejecuta al enviar el formulario
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita que el formulario se envíe de forma tradicional

  // Obtiene y limpia los valores de los campos
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // 🔄 Reinicia estilos del resultado antes de mostrar nuevo mensaje
  result.style.opacity = 0; // Oculta temporalmente el mensaje
  result.style.transition = 'opacity 0.5s ease'; // Transición suave

  // ⚠️ Validación: Verifica que todos los campos estén llenos
  if (!name || !email || !message) {
    result.innerHTML = '⚠️ <strong>Por favor completa todos los campos.</strong>';
    result.style.color = 'red'; // Color de advertencia
    result.style.opacity = 1; // Muestra el mensaje
    return; // Detiene el envío
  }

  // 📧 Validación: Verifica que el correo tenga formato válido
  if (!validarEmail(email)) {
    result.innerHTML = '📧 <strong>El correo electrónico no es válido.</strong>';
    result.style.color = 'orange'; // Color de advertencia suave
    result.style.opacity = 1;
    return;
  }

  // ✅ Si todo está correcto, muestra mensaje de éxito
  result.innerHTML = '✅ <strong>Gracias, ' + name + '.</strong> Tu mensaje ha sido recibido.';
  result.style.color = 'green'; // Color de confirmación
  result.style.opacity = 1;

  // 🧹 Limpia los campos del formulario
  form.reset();
});
