const translations = {
    es: {
        // --- General ---
        "presupuesto": "Solicita tu presupuesto",
        "enviar": "Enviar Mensaje",
        "nombre_placeholder": "Tu nombre",
        "email_placeholder": "Tu email",
        "telefono_placeholder": "Tu número de teléfono (opcional)",
        "mensaje_placeholder": "Tu mensaje (por ejemplo, qué servicio necesitas)",

        // --- Header y Nav ---
        "nav_inicio": "Inicio",
        "nav_servicios": "Servicios",
        "nav_nosotros": "Nosotros",
        "nav_contacto": "Contacto",

        // --- Hero Section ---
        "hero_titulo": "OMIR",
        "hero_subtitulo": "Ochoa Meléndez - Innovación en Reparación",
        "hero_descripcion": "Reparaciones, pintura y fontanería con calidad y confianza.",

        // --- Servicios ---
        "servicios_titulo": "Nuestros Servicios",
        "fontaneria_titulo": "Fontanería",
        "fontaneria_desc": "Reparamos fugas, instalamos tuberías y arreglamos todo lo que gotea en tu hogar.",
        "pintura_titulo": "Pintura",
        "pintura_desc": "Pintamos interiores y exteriores con colores duraderos y acabados impecables.",
        "remodelacion_titulo": "Remodelación",
        "remodelacion_desc": "Transformamos espacios con renovaciones completas, desde cocinas hasta baños.",
        "electricidad_titulo": "Electricidad Básica",
        "electricidad_desc": "Conectamos enchufes, interruptores y circuitos seguros para tu día a día.",
        "camaras_titulo": "Cámaras de Seguridad",
        "camaras_desc": "Instalamos cámaras WiFi para proteger tu casa con conexión fácil y vigilancia 24/7.",

        // --- Nosotros ---
        "nosotros_titulo": "Sobre OMIR",
        "nosotros_subtitulo": "Innovando en reparaciones para tu hogar con dedicación familiar.",
        "nosotros_desc": "OMIR es más que una empresa: somos una familia dedicada a cuidar tu hogar. Fundada por los Ochoa Meléndez, nuestra pasión es resolver problemas y embellecer tus espacios. Aunque somos un equipo pequeño, nuestra fuerza radica en la atención al detalle y el compromiso con la calidad. Desde una fuga inesperada hasta la renovación de tus sueños, estamos aquí para ayudarte. Conectamos, reparamos y creamos con la misma dedicación que pondríamos en nuestra propia casa. Porque para nosotros, cada proyecto es personal.",
        "nosotros_equipo": "Equipo familiar dedicado",
        "nosotros_experiencia": "Más de 10 años de experiencia",
        "nosotros_elegirnos": "¿Por qué elegirnos?",
        "elegirnos_1": "Precios justos y transparentes",
        "elegirnos_2": "Llegamos rápido a tu puerta",
        "elegirnos_3": "Garantía en todos los trabajos",
        "elegirnos_4": "Atención personalizada",

        // --- Contacto ---
        "contacto_titulo": "Contacto",
        "contacto_email": "Envíanos un email",
        "contacto_facebook": "Síguenos en Facebook",
        "contacto_instagram": "Síguenos en Instagram",

        // --- Chatbot ---
        "chat_asistente": "Omi Asistente",
        "chat_placeholder": "Escribe tu consulta...",
        "chat_saludo_1": "¡Hola! Soy Omi, tu asistente virtual. 👋",
        "chat_saludo_2": "Puedo darte un presupuesto estimado de <strong>mano de obra</strong>. ¿Qué servicio te interesa?",
        "chat_reinicio_1": "¡Hola de nuevo! 👋 ¿En qué más puedo ayudarte?",
        "chat_reinicio_2": "Recuerda, estos son los servicios que puedo cotizar:",
        "chat_no_entiendo": "No entendí muy bien. Por favor, elige una de las siguientes opciones:",
        "chat_gracias_nombre": "¡Gracias, {name}! Ahora, por favor, bríndame tu <strong>correo electrónico</strong>.",
        "chat_pide_nombre": "Por favor, escribe tu nombre.",
        "chat_pide_telefono": "¡Genial! Por último, si deseas, puedes dejarme tu <strong>número de teléfono</strong> para un contacto más rápido. Si no, solo escribe 'no'.",
        "chat_email_invalido": "El correo no parece válido. Por favor, asegúrate de que tenga un formato como <strong>ejemplo@correo.com</strong>.",
        "chat_telefono_invalido": "El número de teléfono no parece válido. Debe tener 8 dígitos (ej: 77778888). Si no quieres darlo, escribe 'no'.",
        "chat_datos_guardados": "¡Listo, {name}! Tus datos se han guardado. 🎉",
        "chat_formulario_relleno": "He rellenado el formulario de contacto por ti. Por favor, revísalo y presiona \"Enviar Mensaje\" para confirmar.",
        "chat_entendido_servicio": "¡Entendido: {service}!",
        "chat_costo_base": "El costo de mano de obra es de ${price} por {unit}.",
        "chat_pide_cantidad": "¿Cuántos {unit}s necesitas cotizar?",
        "chat_pide_pintura": "Para darte un estimado, dime si es para un <strong>cuarto</strong>, una <strong>casa</strong>, o un <strong>local</strong>. O si prefieres, dame las medidas (ej: <strong>3x4</strong>).",
        "chat_pide_remodelacion": "¡Entendido: remodelación! Dime si es para un <strong>baño</strong>, una <strong>cocina</strong>, si es <strong>general</strong> o dame las medidas (ej: <strong>5x8</strong>).",
        "chat_entendido_area": "¡Entendido! Un área de {area} m².",
        "chat_entendido_cantidad": "¡Entendido! {quantity} {unit}(s) de {service}.",
        "chat_presupuesto_final": "¡Entendido! Para la zona de <strong>{location}</strong>, el presupuesto final estimado es de <strong>${total}</strong>.",
        "chat_aclaracion_materiales": "Este costo es por mano de obra y no incluye materiales.",
        "chat_pide_residencia": "Para ajustar el presupuesto final, por favor, dime tu <strong>lugar de residencia</strong> (ej: San Salvador, Santa Tecla).",
        "chat_error_medidas": "No entendí tu respuesta. Por favor, dime si es para un <strong>cuarto, casa, local</strong> o dame las medidas en formato <strong>alto x ancho</strong> (ej: 3x4).",
        "chat_error_numero": "Por favor, introduce un número válido (ej: 2, 5, 10.5).",
        "chat_error_remodelacion": "No entendí tu respuesta. Por favor, elige entre <strong>baño, cocina, general</strong> o dame las medidas (ej: <strong>5x8</strong>)."
    },
    en: {
        // --- General ---
        "presupuesto": "Request your quote",
        "enviar": "Send Message",
        "nombre_placeholder": "Your name",
        "email_placeholder": "Your email",
        "telefono_placeholder": "Your phone number (optional)",
        "mensaje_placeholder": "Your message (e.g., what service you need)",

        // --- Header y Nav ---
        "nav_inicio": "Home",
        "nav_servicios": "Services",
        "nav_nosotros": "About Us",
        "nav_contacto": "Contact",

        // --- Hero Section ---
        "hero_titulo": "OMIR",
        "hero_subtitulo": "Ochoa Meléndez - Innovation in Repair",
        "hero_descripcion": "Repairs, painting, and plumbing with quality and trust.",

        // --- Servicios ---
        "servicios_titulo": "Our Services",
        "fontaneria_titulo": "Plumbing",
        "fontaneria_desc": "We fix leaks, install pipes, and repair everything that drips in your home.",
        "pintura_titulo": "Painting",
        "pintura_desc": "We paint interiors and exteriors with durable colors and impeccable finishes.",
        "remodelacion_titulo": "Remodeling",
        "remodelacion_desc": "We transform spaces with complete renovations, from kitchens to bathrooms.",
        "electricidad_titulo": "Basic Electricity",
        "electricidad_desc": "We connect outlets, switches, and safe circuits for your daily life.",
        "camaras_titulo": "Security Cameras",
        "camaras_desc": "We install WiFi cameras to protect your home with easy connection and 24/7 surveillance.",

        // --- Nosotros ---
        "nosotros_titulo": "About OMIR",
        "nosotros_subtitulo": "Innovating in home repairs with family dedication.",
        "nosotros_desc": "OMIR is more than a company: we are a family dedicated to caring for your home. Founded by the Ochoa Meléndez family, our passion is to solve problems and beautify your spaces. Although we are a small team, our strength lies in attention to detail and commitment to quality. From an unexpected leak to the renovation of your dreams, we are here to help. We connect, repair, and create with the same dedication we would put into our own home. Because for us, every project is personal.",
        "nosotros_equipo": "Dedicated family team",
        "nosotros_experiencia": "More than 10 years of experience",
        "nosotros_elegirnos": "Why Choose Us?",
        "elegirnos_1": "Fair and transparent prices",
        "elegirnos_2": "We arrive quickly at your door",
        "elegirnos_3": "Warranty on all jobs",
        "elegirnos_4": "Personalized attention",

        // --- Contacto ---
        "contacto_titulo": "Contact",
        "contacto_email": "Send us an email",
        "contacto_facebook": "Follow us on Facebook",
        "contacto_instagram": "Follow us on Instagram",

        // --- Chatbot ---
        "chat_asistente": "Omi Assistant",
        "chat_placeholder": "Type your query...",
        "chat_saludo_1": "Hi! I'm Omi, your virtual assistant. 👋",
        "chat_saludo_2": "I can give you an estimated <strong>labor</strong> budget. What service are you interested in?",
        "chat_reinicio_1": "Hi again! 👋 How else can I help you?",
        "chat_reinicio_2": "Remember, these are the services I can quote:",
        "chat_no_entiendo": "I didn't quite understand. Please choose one of the following options:",
        "chat_gracias_nombre": "Thanks, {name}! Now, please provide your <strong>email address</strong>.",
        "chat_pide_nombre": "Please, type your name.",
        "chat_pide_telefono": "Great! Lastly, if you wish, you can leave me your <strong>phone number</strong> for faster contact. If not, just type 'no'.",
        "chat_email_invalido": "The email doesn't seem valid. Please make sure it has a format like <strong>example@email.com</strong>.",
        "chat_telefono_invalido": "The phone number doesn't seem valid. It must have 8 digits (e.g., 77778888). If you don't want to provide it, type 'no'.",
        "chat_datos_guardados": "All set, {name}! Your data has been saved. 🎉",
        "chat_formulario_relleno": "I have filled out the contact form for you. Please review it and press \"Send Message\" to confirm.",
        "chat_entendido_servicio": "Got it: {service}!",
        "chat_costo_base": "The labor cost is ${price} per {unit}.",
        "chat_pide_cantidad": "How many {unit}s do you need a quote for?",
        "chat_pide_pintura": "To give you an estimate, tell me if it's for a <strong>room</strong>, a <strong>house</strong>, or a <strong>shop</strong>. Or if you prefer, give me the measurements (e.g., <strong>3x4</strong>).",
        "chat_pide_remodelacion": "Got it: remodeling! Tell me if it's for a <strong>bathroom</strong>, a <strong>kitchen</strong>, if it's <strong>general</strong>, or give me the measurements (e.g., <strong>5x8</strong>).",
        "chat_entendido_area": "Got it! An area of {area} m².",
        "chat_entendido_cantidad": "Got it! {quantity} {unit}(s) of {service}.",
        "chat_presupuesto_final": "Understood! For the <strong>{location}</strong> area, the final estimated budget is <strong>${total}</strong>.",
        "chat_aclaracion_materiales": "This cost is for labor and does not include materials.",
        "chat_pide_residencia": "To adjust the final budget, please tell me your <strong>place of residence</strong> (e.g., San Salvador, Santa Tecla).",
        "chat_error_medidas": "I didn't understand your answer. Please tell me if it's for a <strong>room, house, shop</strong> or give me the measurements in <strong>height x width</strong> format (e.g., 3x4).",
        "chat_error_numero": "Please enter a valid number (e.g., 2, 5, 10.5).",
        "chat_error_remodelacion": "I didn't understand your answer. Please choose between <strong>bathroom, kitchen, general</strong> or give me the measurements (e.g., <strong>5x8</strong>)."
    }
};

let currentLang = 'es';
    
function setLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (t[key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = t[key];
      } else {
        element.innerHTML = t[key];
      }
    }
  });
  // Actualizar el idioma del documento para accesibilidad
  document.documentElement.lang = lang;
}

window.addEventListener('DOMContentLoaded', () => {
  const langEl = document.getElementById('langSelector');
  if (langEl) {
    langEl.addEventListener('change', (e) => setLanguage(e.target.value));
  }
  // Cargar idioma inicial
  setLanguage('es');
});

/// 📩 script.js - Validación mejorada del formulario de contacto

// 🔍 Selecciona el formulario y el área de resultado
const form = document.getElementById('contactForm');
const result = document.getElementById('formResult');

// 📧 Función para validar el formato del correo electrónico
function validarEmail(email) {
  const regex = /^[^@
]+@[^@
]+.[^@
]+$/;
  return regex.test(email);
}

// 🧠 Evento que se ejecuta al enviar el formulario
form.addEventListener('submit', function (e) {
  e.preventDefault(); // Evita el envío tradicional

  // 🧼 Obtiene y limpia los valores de los campos
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonText = submitButton.innerHTML;

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
  submitButton.disabled = true;
  submitButton.innerHTML = `
    <span class="spinner"></span>
    Enviando...
  `;

  // Envía el formulario usando Fetch a Formspree
  fetch("https://formspree.io/f/xjkakbdr", {
    method: 'POST',
    body: new FormData(form),
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      result.style.display = 'block';
      result.innerHTML = '✅ <strong>Gracias, ' + name + '.</strong> Tu mensaje ha sido recibido.';
      result.style.color = 'green';
      result.style.opacity = 1;
      form.reset(); // Limpia el formulario solo si el envío fue exitoso
    } else {
      result.style.display = 'block';
      result.innerHTML = '❌ <strong>Hubo un error al enviar.</strong> Inténtalo de nuevo.';
      result.style.color = 'red';
      result.style.opacity = 1;
    }
  }).catch(error => {
    result.style.display = 'block';
    result.innerHTML = '❌ <strong>Error de conexión.</strong> Verifica tu red.';
    result.style.color = 'red';
    result.style.opacity = 1;
  }).finally(() => {
    // Restaura el botón sin importar el resultado
    submitButton.disabled = false;
    submitButton.innerHTML = originalButtonText;
  });

  // ⏳ Oculta el mensaje después de 5 segundos
  setTimeout(() => {
    result.style.opacity = 0;
    setTimeout(() => { result.style.display = 'none'; }, 500); // Oculta después de la transición
  }, 5000);
});

/// 🤖 chatbot.js - Lógica para el Asistente Omi
 

document.addEventListener('DOMContentLoaded', () => {
    // Elementos para la animación del rodillo (global)
    const rollerImage = document.querySelector('.hero-roller-image');
    const chatbotIcon = document.getElementById('omi-chatbot-icon');
    const chatbotWindow = document.getElementById('omi-chatbot-window');
    const restartButton = document.getElementById('omi-chatbot-restart');
    const closeButton = document.getElementById('omi-chatbot-close');
    const messagesContainer = document.getElementById('omi-chatbot-messages');
    const input = document.getElementById('omi-chatbot-input');
    const sendButton = document.getElementById('omi-chatbot-send');
    const notificationSound = document.getElementById('omi-notification-sound');
 
    // Constantes para los estados del chatbot
    const STAGES = {
        LOCATION: 'location',
        NAME: 'name',
        EMAIL: 'email',
        PHONE: 'phone'
    };

    // Precios base para los servicios (puedes ajustarlos)
    const services = {
        'fontanería': { price: 80, unit: 'día', includesAssistant: true }, // Incluye ayudante
        'pintura': {
            price: 4.50, // Precio por metro cuadrado
            unit: 'metro cuadrado',
            predefined: { // Precios estimados para espacios comunes
                'cuarto': 150,
                'casa': 600,
                'local': 500
            },
            includesAssistant: true
        },
        'remodelación': {
            unit: 'metro cuadrado',
            includesAssistant: true,
            // Precios base por tipo de remodelación
            types: {
                'baño': 210,  // Actualizado
                'cocina': 260, // Actualizado
                'general': 105  // Actualizado
            }
        },
        'electricidad': { price: 75, unit: 'día', includesAssistant: true }, // Incluye ayudante
        'cámaras': { price: 170, unit: 'instalación base', includesAssistant: true } // Incluye ayudante
    };
 
    // Costos de transporte desde Tonacatepeque (puedes ajustarlos)
    const locationFees = {
        'san salvador': 10,
        'santa tecla': 15,
        'soyapango': 5,
        'apopa': 5,
        'mejicanos': 8,
        'ilopango': 7,
        'santa ana': 25,
        'san miguel': 40,
        'cojutepeque': 10,
    };
    const defaultFee = 20; // Tarifa para lugares no listados

    let awaitingQuantityFor = null; // Para saber qué servicio estamos cotizando.
    let awaitingContactInfo = null; // Para guardar el contexto del presupuesto y esperar datos de contacto.

    // --- Abrir automáticamente en la primera visita ---
    const hasVisited = localStorage.getItem('omiHasVisited');
    if (!hasVisited) {
        setTimeout(() => {
            // Abre el chat solo si no está ya abierto
            if (chatbotWindow.classList.contains('hidden')) {
                toggleChatbot();
            }
            localStorage.setItem('omiHasVisited', 'true');
        }, 3000); // Espera 3 segundos antes de abrir
    }
    
    // --- Funciones del Chatbot ---

    const getTranslation = (key, replacements = {}) => {
        let text = translations[currentLang]?.[key] || translations['es'][key] || key;
        for (const placeholder in replacements) {
            text = text.replace(`{${placeholder}}`, replacements[placeholder]);
        }
        return text;
    };

    const toggleChatbot = () => {
        chatbotWindow.classList.toggle('hidden');
        setLanguage(currentLang); // Sincroniza el idioma del chat al abrir
        if (!chatbotWindow.classList.contains('hidden')) {
            input.focus();
            if (messagesContainer.children.length === 0) {
                addBotMessage("¡Hola! Soy Omi, tu asistente virtual. 👋");
                setTimeout(() => {
                    addBotMessage("Puedo darte un presupuesto estimado de <strong>mano de obra</strong>. ¿Qué servicio te interesa? <br>• Fontanería<br>• Pintura<br>• Remodelación<br>• Electricidad<br>• Cámaras");
                }, 1000);
            }
        }
    };

    const restartChat = () => {
        messagesContainer.innerHTML = ''; // Limpia los mensajes
        awaitingQuantityFor = null;
        awaitingContactInfo = null;

        showTypingIndicator();
        setTimeout(() => {
            hideTypingIndicator();
            addBotMessage(getTranslation("chat_reinicio_1"));
            respondWithTyping(getTranslation("chat_reinicio_2"), 1000)
                .then(() => {
                    createQuickReplyButtons(Object.keys(services));
                });
        }, 800);
    };

    const addMessage = (text, sender) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('message-wrapper', sender === 'bot' ? 'bot-wrapper' : 'user-wrapper');

        const avatar = document.createElement('div');
        avatar.classList.add('avatar');
        if (sender === 'bot') {
            // Logo de Omi
            avatar.innerHTML = `<img src="images/omi.png" alt="Omi" style="width: 100%; height: 100%; border-radius: 50%;">`;
        } else {
            // Icono de Persona para el usuario
            avatar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`;
        }

        const messageElement = document.createElement('div');
        messageElement.classList.add(sender === 'bot' ? 'omi-message' : 'user-message');
        messageElement.innerHTML = text; // Usamos innerHTML para renderizar los <br>

        wrapper.appendChild(avatar);
        wrapper.appendChild(messageElement);
        messagesContainer.appendChild(wrapper);
        messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto-scroll
    };

    const createQuickReplyButtons = (options) => {
        const container = document.createElement('div');
        container.classList.add('quick-replies');

        options.forEach(optionText => {
            const button = document.createElement('button');
            // Usar la clave de traducción para el texto del botón
            button.textContent = getTranslation(`${optionText}_titulo`) || (optionText.charAt(0).toUpperCase() + optionText.slice(1));
            button.classList.add('quick-reply-btn');
            button.dataset.value = optionText; // Guardar valor original
            container.appendChild(button);
        });

        messagesContainer.appendChild(container);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        // Añadir event listener una sola vez usando delegación
        container.addEventListener('click', (e) => {
            if (e.target.classList.contains('quick-reply-btn')) {
                const value = e.target.dataset.value;
                addUserMessage(e.target.textContent); // Muestra el texto del botón como mensaje de usuario
                container.remove(); // Elimina los botones después de la selección
                processMessage(value);
            }
        });
    };

    const showTypingIndicator = () => {
        // Evita añadir múltiples indicadores
        if (document.querySelector('.typing-indicator')) return;

        const wrapper = document.createElement('div');
        wrapper.classList.add('message-wrapper', 'bot-wrapper', 'typing-indicator-wrapper');

        const avatar = document.createElement('div');
        avatar.classList.add('avatar');
        avatar.innerHTML = `<img src="images/omi.png" alt="Omi escribiendo" style="width: 100%; height: 100%; border-radius: 50%;">`;

        const messageElement = document.createElement('div');
        messageElement.classList.add('omi-message', 'typing-indicator');
        messageElement.innerHTML = '<span></span><span></span><span></span>';

        wrapper.appendChild(avatar);
        wrapper.appendChild(messageElement);
        messagesContainer.appendChild(wrapper);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    const hideTypingIndicator = () => {
        document.querySelector('.typing-indicator-wrapper')?.remove();
    };

    const addBotMessage = (text) => {
        addMessage(text, 'bot');
        // Reproduce el sonido solo si el chat está abierto
        if (!chatbotWindow.classList.contains('hidden') && notificationSound) {
            notificationSound.currentTime = 0; // Reinicia el sonido si ya está sonando
            notificationSound.play().catch(e => {
                console.warn("El sonido de notificación no se pudo reproducir. El usuario debe interactuar con la página primero.");
            });
        }
    };
    const addUserMessage = (text) => addMessage(text, 'user');

    const handleUserInput = () => {
        const text = input.value.trim().toLowerCase();
        if (!text) return;

        addUserMessage(input.value);
        // Deshabilitar y limpiar botones de respuesta rápida si existen
        document.querySelector('.quick-replies')?.remove();
        input.value = '';

        showTypingIndicator();
        setTimeout(() => {
            hideTypingIndicator();
            processMessage(text.toLowerCase());
        }, 1000); // Aumentamos el tiempo para que el indicador sea visible
    };

    /**
     * Calcula la distancia de Levenshtein para encontrar similitudes entre palabras.
     * Esto permite al chatbot entender palabras con errores de tipeo.
     */
    const levenshteinDistance = (s1, s2) => {
        s1 = s1.toLowerCase();
        s2 = s2.toLowerCase();
        const costs = [];
        for (let i = 0; i <= s1.length; i++) {
            let lastValue = i;
            for (let j = 0; j <= s2.length; j++) {
                if (i === 0) costs[j] = j;
                else if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                        newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    }
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
            if (i > 0) costs[s2.length] = lastValue;
        }
        return costs[s2.length];
    };

    const findBestMatch = (text, options) => {
        const words = text.toLowerCase().split(/\s+/);
        let bestMatch = null;
        let minDistance = Infinity;

        for (const word of words) {
            for (const option of options) {
                const distance = levenshteinDistance(word, option);
                const threshold = option.length > 5 ? 2 : 1; // Umbral más estricto para palabras cortas
                if (distance < minDistance && distance <= threshold) {
                    minDistance = distance;
                    bestMatch = option;
                }
            }
        }
        return bestMatch;
    };

    const giveFinalDisclaimer = (service, total) => {
         showTypingIndicator();
         respondWithTyping(getTranslation("chat_pide_residencia"), 1500);
         awaitingContactInfo = { stage: STAGES.LOCATION, service, total }; // Guardamos el contexto para rellenar el formulario
    };

    /**
     * Muestra el indicador de escritura, espera y luego envía un mensaje del bot.
     * @param {string} text - El mensaje a enviar.
     * @param {number} delay - El tiempo de espera en milisegundos.
     */
    const respondWithTyping = (text, delay = 1000) => {
        return new Promise(resolve => {
            showTypingIndicator();
            setTimeout(() => {
                hideTypingIndicator();
                addBotMessage(text);
                resolve();
            }, delay);
        });
    };

    const processMessage = (text) => {
        if (awaitingContactInfo) {
            // El error estaba aquí. Se ha corregido la estructura del `if`.
            // Ahora, si hay un `awaitingContactInfo`, siempre llamará a `processContactFlow`.
            processContactFlow(text);
            return;
        }

        if (awaitingQuantityFor) {
            processQuantityFlow(text);
            return;
        }

        // --- Lógica "Inteligente": Intenta procesar la frase completa ---
        processInitialQuery(text);
    };

    const processContactFlow = (text) => {
        const { stage, name, email } = awaitingContactInfo;

        switch (stage) {
            case STAGES.LOCATION:
                const location = text.toLowerCase();
                const matchedLocation = Object.keys(locationFees).find(loc => location.includes(loc));
                const travelFee = matchedLocation ? locationFees[matchedLocation] : defaultFee;
                const newTotal = awaitingContactInfo.total + travelFee;
                awaitingContactInfo.total = newTotal;

                addBotMessage(getTranslation("chat_presupuesto_final", { location: location, total: newTotal.toFixed(2) }));
                addBotMessage(getTranslation("chat_aclaracion_materiales"));
                respondWithTyping(getTranslation("chat_gracias_nombre", { name: '' }).replace('¡Gracias, !', 'Para guardar esta cotización y que un especialista te contacte, por favor, bríndame tu <strong>nombre completo</strong>'), 1500);
                awaitingContactInfo.stage = STAGES.NAME;
                break;

            case STAGES.NAME:
                const newName = text.trim();
                if (newName) {
                    addBotMessage(getTranslation("chat_gracias_nombre", { name: newName }));
                    awaitingContactInfo.stage = STAGES.EMAIL;
                    awaitingContactInfo.name = newName;
                } else {
                    addBotMessage(getTranslation("chat_pide_nombre"));
                }
                break;

            case STAGES.EMAIL:
                const newEmail = text.trim();
                if (newEmail.includes('@') && newEmail.includes('.')) {
                    addBotMessage(getTranslation("chat_pide_telefono"));
                    awaitingContactInfo.stage = STAGES.PHONE;
                    awaitingContactInfo.email = newEmail;
                } else {
                    addBotMessage(getTranslation("chat_email_invalido"));
                }
                break;

            case STAGES.PHONE:
                const phoneInput = text.trim();
                const phoneDigits = phoneInput.replace(/[-\s]/g, ''); // Limpiar guiones y espacios
                const isValidPhone = /^\d{8}$/.test(phoneDigits); // Validar 8 dígitos

                if (phoneInput.toLowerCase() !== 'no' && !isValidPhone) {
                    addBotMessage(getTranslation("chat_telefono_invalido"));
                    // No cambiamos de estado, esperamos de nuevo el teléfono
                    return;
                }

                const phone = isValidPhone ? phoneDigits : '';

                const leadData = {
                    name: name,
                    email: email,
                    phone: phone,
                    service: awaitingContactInfo.service,
                    total: awaitingContactInfo.total,
                    message: `Hola, estoy interesado en un presupuesto para ${awaitingContactInfo.service}. El chatbot Omi me dio un estimado final de $${awaitingContactInfo.total.toFixed(2)}. Quedo a la espera de su contacto para coordinar los detalles. Gracias.`
                };

                document.getElementById('name').value = name;
                document.getElementById('email').value = email;
                if (phone) {
                    document.getElementById('phone').value = phone;
                }
                document.getElementById('formReplyTo').value = email;
                document.getElementById('formSubject').value = `Nueva consulta de ${name} (vía Chatbot)`;
                document.getElementById('message').value = leadData.message;

                (async () => {
                    try {
                        await fetch('https://script.google.com/macros/s/AKfycbzlO-4dj0w7PY_9w33rHe7tbnfa2_OYt9X1WrgC75CtRZeMhvTdbNQUb_fEWR1Euqmv/exec', {
                            method: "POST",
                            body: JSON.stringify(leadData),
                            headers: { "Content-Type": "text/plain;charset=utf-8" },
                            mode: 'no-cors'
                        });
                        addBotMessage(getTranslation("chat_datos_guardados", { name: name }));
                        addBotMessage(getTranslation("chat_formulario_relleno"));
                    } finally {
                        awaitingContactInfo = null;
                        document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
                        setTimeout(toggleChatbot, 2000);
                    }
                })();
                break;
        }
    };

    const processQuantityFlow = (text) => {
        const serviceName = awaitingQuantityFor;
        const service = services[serviceName];
        awaitingQuantityFor = null;

        if (serviceName === 'pintura') {
            const predefinedOption = findBestMatch(text, Object.keys(service.predefined));
            if (predefinedOption) {
                const baseTotal = service.predefined[predefinedOption];
                giveFinalDisclaimer(`pintura de ${predefinedOption}`, baseTotal);
                return;
            }

            const parts = text.split('x').map(p => parseFloat(p.trim()));
            if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1]) && parts[0] > 0 && parts[1] > 0) {
                const [alto, ancho] = parts;
                const area = alto * ancho;
                const baseTotal = area * service.price;
                addBotMessage(getTranslation("chat_entendido_area", { area: area.toFixed(2) }));
                giveFinalDisclaimer(`pintura de ${area.toFixed(2)} m²`, baseTotal);
            } else {
                addBotMessage(getTranslation("chat_error_medidas"));
                awaitingQuantityFor = serviceName;
            }
        } else if (serviceName.startsWith('remodelación-')) {
            const type = serviceName.split('-')[1];
            const quantity = parseFloat(text);
            if (!isNaN(quantity) && quantity > 0) {
                const price = service.types[type];
                const baseTotal = price * quantity;
                addBotMessage(getTranslation("chat_entendido_cantidad", { quantity: quantity, unit: 'm²', service: `remodelación de ${type}` }));
                giveFinalDisclaimer(`remodelación de ${type}`, baseTotal);
            } else {
                addBotMessage(getTranslation("chat_error_numero"));
                awaitingQuantityFor = serviceName;
            }
        } else if (serviceName === 'remodelación') {
            const match = text.match(/(\d+(\.\d+)?)\s*x\s*(\d+(\.\d+)?)/);
            if (match) {
                const [, alto, , ancho] = match.map(parseFloat);
                const area = alto * ancho;
                const price = service.types['general'];
                const baseTotal = area * price;
                addBotMessage(getTranslation("chat_entendido_area", { area: area.toFixed(2) }));
                giveFinalDisclaimer(`remodelación de ${area.toFixed(2)} m²`, baseTotal);
                return;
            }
            const type = findBestMatch(text, Object.keys(service.types));
            if (type) {
                addBotMessage(getTranslation("chat_costo_base", { price: service.types[type], unit: 'm²' }));
                addBotMessage(getTranslation("chat_pide_cantidad", { unit: 'metros cuadrados' }));
                awaitingQuantityFor = `remodelación-${type}`;
            } else {
                addBotMessage(getTranslation("chat_error_remodelacion"));
                awaitingQuantityFor = 'remodelación';
            }
        } else {
            const quantity = parseFloat(text);
            if (!isNaN(quantity) && quantity > 0) {
                const baseTotal = service.price * quantity;
                addBotMessage(getTranslation("chat_entendido_cantidad", { quantity: quantity, unit: service.unit, service: serviceName }));
                giveFinalDisclaimer(serviceName, baseTotal);
            } else {
                addBotMessage(getTranslation("chat_error_numero"));
                awaitingQuantityFor = serviceName;
            }
        }
    };

    const processInitialQuery = (text) => {
        const selectedService = findBestMatch(text, Object.keys(services));

        if (selectedService) {
            const service = services[selectedService];

            // Caso especial: Cámaras (no necesita cantidad)
            if (selectedService === 'cámaras') {
                const baseTotal = service.price;
                giveFinalDisclaimer(selectedService, baseTotal);
                return;
            }

            // Caso especial: Pintura (busca "cuarto", "casa", "local" o "3x4")
            if (selectedService === 'pintura') {
                const predefined = findBestMatch(text, Object.keys(service.predefined));
                if (predefined) {
                    const baseTotal = service.predefined[predefined];
                    addBotMessage(getTranslation("chat_entendido_servicio", { service: `pintura de ${predefined}` }));
                    giveFinalDisclaimer(`pintura de ${predefined}`, baseTotal);
                    return;
                }
                const match = text.match(/(\d+(\.\d+)?)\s*x\s*(\d+(\.\d+)?)/); // Busca "3x4" o "3.5 x 4"
                if (match) {
                    const [, alto, , ancho] = match.map(parseFloat);
                    const area = alto * ancho;
                    const total = area * service.price;
                    addBotMessage(getTranslation("chat_entendido_area", { area: area.toFixed(2) }));
                    giveFinalDisclaimer(`pintura de ${area.toFixed(2)} m²`, total);
                    return;
                }
            }

            // Caso especial: Remodelación (no tiene precio general, debe preguntar tipo)
            if (selectedService === 'remodelación') {
                awaitingQuantityFor = 'remodelación';
                addBotMessage(getTranslation("chat_pide_remodelacion"));
                return;
            }

            // Busca una cantidad numérica en la frase (ej: "2 horas", "10 metros")
            const quantityMatch = text.match(/\d+(\.\d+)?/);
            if (quantityMatch) {
                const quantity = parseFloat(quantityMatch[0]);
                const baseTotal = service.price * quantity;
                addBotMessage(getTranslation("chat_entendido_cantidad", { quantity: quantity, unit: service.unit, service: selectedService }));
                giveFinalDisclaimer(selectedService, baseTotal);
                return;
            }

            // Si no encontró detalles, pregunta de forma específica
            awaitingQuantityFor = selectedService;
            addBotMessage(getTranslation("chat_costo_base", { price: service.price.toFixed(2), unit: service.unit }));
            if (selectedService === 'pintura') {
                addBotMessage(getTranslation("chat_pide_pintura"));
            } else {
                addBotMessage(getTranslation("chat_pide_cantidad", { unit: service.unit }));
            }
        } else {
            respondWithTyping(getTranslation("chat_no_entiendo"), 1000)
                .then(() => {
                    createQuickReplyButtons(Object.keys(services));
                });
        }
    }

    // --- Event Listeners ---

    chatbotIcon.addEventListener('click', toggleChatbot);
    restartButton.addEventListener('click', restartChat);
    closeButton.addEventListener('click', toggleChatbot);
    sendButton.addEventListener('click', handleUserInput);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });

    // --- Animación del Rodillo de Pintura al hacer scroll (global) ---
    if (rollerImage) { // Check if the roller image exists
        // La posición inicial (top: -100px) se establece en CSS para el contenedor.
        // Aplicaremos translateY y rotate relativos a esa posición fija.

        let animationRunning = false;

        const animateRoller = () => {
            const scrollY = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;
            const viewportHeight = window.innerHeight;

            const maxScroll = documentHeight - viewportHeight;
            let scrollProgress = maxScroll > 0 ? scrollY / maxScroll : 0;

            const translateY = scrollY * 0.8; // El rodillo se mueve hacia abajo el 80% de la distancia de scroll
            const rotate = scrollProgress * 1080; // Rota 3 vueltas completas sobre toda el área de scroll


            rollerImage.style.transform = `translateY(${translateY}px) rotate(${rotate}deg)`;
            if (animationRunning) {
                requestAnimationFrame(animateRoller);
            }
        };
        window.addEventListener('scroll', () => {
            if (!animationRunning) {
                animationRunning = true;
                animateRoller();
            }
        });

        let timeout;
        window.addEventListener('scroll', () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                animationRunning = false;
            }, 100); // Detiene la animación 100ms después de que el usuario deja de hacer scroll
        });
    };
});