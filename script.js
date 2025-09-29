/// 📩 script.js - Validación mejorada del formulario de contacto

// 🔍 Selecciona el formulario y el área de resultado
const form = document.getElementById('contactForm');
const result = document.getElementById('formResult');

// 📧 Función para validar el formato del correo electrónico
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// 🧠 Evento que se ejecuta al enviar el formulario
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita el envío tradicional

  // 🧼 Obtiene y limpia los valores de los campos
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const phone = document.getElementById('phone').value.trim(); // Añadido para consistencia

  // 🔄 Reinicia estilos del resultado
  result.style.opacity = 0;
  result.style.transition = 'opacity 0.5s ease';
  result.style.display = 'block'; // Asegura que el mensaje esté visible

  // ⚠️ Validación: campos vacíos
  if (!name || !email || !message) {
    result.innerHTML = '⚠️ <strong>Por favor completa los campos de nombre, email y mensaje.</strong>';
    result.style.color = 'red';
    result.style.opacity = 1;
    return;
  }

  // 📧 Validación: formato de correo
  if (!validarEmail(email)) {
    result.innerHTML = '📧 <strong>El correo electrónico no es válido.</strong>';
    result.style.color = 'orange';
    result.style.opacity = 1;
    return;
  }

  // Muestra un mensaje de "Enviando..."
  result.innerHTML = '⏳ <strong>Enviando tu mensaje...</strong>';
  result.style.color = '#1565c0'; // Azul
  result.style.opacity = 1;

  // Envía el formulario usando Fetch a Formspree
  fetch("https://formspree.io/f/xjkakbdr", {
    method: 'POST',
    body: new FormData(form),
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      // ✅ Éxito: mensaje enviado
      result.innerHTML = '✅ <strong>Gracias, ' + name + '.</strong> Tu mensaje ha sido recibido.';
      result.style.color = 'green';
      form.reset(); // Limpia el formulario solo si el envío fue exitoso
    } else {
      // ❌ Error en el envío
      result.innerHTML = '❌ <strong>Hubo un error al enviar.</strong> Inténtalo de nuevo.';
      result.style.color = 'red';
    }
  }).catch(error => {
    result.innerHTML = '❌ <strong>Error de conexión.</strong> Verifica tu red.';
    result.style.color = 'red';
  });

  // ⏳ Oculta el mensaje después de 5 segundos
  setTimeout(() => {
    result.style.opacity = 0;
  }, 5000);
});
