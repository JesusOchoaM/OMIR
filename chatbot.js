/// 🤖 chatbot.js - Lógica para el Asistente Omi
 
document.addEventListener('DOMContentLoaded', () => {
    const chatbotIcon = document.getElementById('omi-chatbot-icon');
    const chatbotWindow = document.getElementById('omi-chatbot-window');
    const closeButton = document.getElementById('omi-chatbot-close');
    const messagesContainer = document.getElementById('omi-chatbot-messages');
    const input = document.getElementById('omi-chatbot-input');
    const sendButton = document.getElementById('omi-chatbot-send');
 
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
                'baño': 250,
                'cocina': 220,
                'general': 100
            }
        },
        'electricidad': { price: 75, unit: 'día', includesAssistant: true }, // Incluye ayudante
        'cámaras': { price: 170, unit: 'instalación base', includesAssistant: true } // Incluye ayudante
    };
 
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

    const toggleChatbot = () => {
        chatbotWindow.classList.toggle('hidden');
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

    const addMessage = (text, sender) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('message-wrapper', sender === 'bot' ? 'bot-wrapper' : 'user-wrapper');

        const avatar = document.createElement('div');
        avatar.classList.add('avatar');
        if (sender === 'bot') {
            // Icono de Robot para Omi
            avatar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 4.03a2.5 2.5 0 0 0-2.2-1.03h-3.6A2.5 2.5 0 0 0 8 4.03v3.94h8V4.03zM4 9v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V9H4zm9 7h-2v-4h2v4z"/></svg>`;
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

    const addBotMessage = (text) => addMessage(text, 'bot');
    const addUserMessage = (text) => addMessage(text, 'user');

    const handleUserInput = () => {
        const text = input.value.trim().toLowerCase();
        if (!text) return;

        addUserMessage(input.value);
        input.value = '';

        setTimeout(() => processMessage(text), 500);
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
        addBotMessage("Recuerda que este es un costo aproximado de <strong>mano de obra</strong> y no incluye materiales.");
        setTimeout(() => {
            addBotMessage("Para guardar esta cotización y que un especialista te contacte, por favor, bríndame tu <strong>nombre completo</strong>.");
            awaitingContactInfo = { stage: 'name', service, total }; // Guardamos el contexto para rellenar el formulario
        }, 1200);
    };

    const processMessage = (text) => {
        if (awaitingContactInfo) {
            if (awaitingContactInfo.stage === 'name') {
                const name = text.trim();
                if (name) {
                    addBotMessage(`¡Gracias, ${name}! Ahora, por favor, bríndame tu <strong>correo electrónico</strong>.`);
                    awaitingContactInfo.stage = 'email';
                    awaitingContactInfo.name = name;
                } else {
                    addBotMessage("Por favor, escribe tu nombre.");
                }
            } else if (awaitingContactInfo.stage === 'email') {
                const email = text.trim();
                if (email.includes('@') && email.includes('.')) {
                    addBotMessage("¡Genial! Por último, si deseas, puedes dejarme tu <strong>número de teléfono</strong> para un contacto más rápido. Si no, solo escribe 'no'.");
                    awaitingContactInfo.stage = 'phone';
                    awaitingContactInfo.email = email;
                } else {
                    addBotMessage("El correo no parece válido. Por favor, asegúrate de que tenga un formato como <strong>ejemplo@correo.com</strong>.");
                }
            } else if (awaitingContactInfo.stage === 'phone') {
                const phone = text.trim();
                const name = awaitingContactInfo.name;
                const email = awaitingContactInfo.email;

                // Prepara los datos para la base de datos y el formulario
                const leadData = {
                    name: name,
                    email: email,
                    phone: (phone.toLowerCase() !== 'no' && phone.length > 5) ? phone : '',
                    service: awaitingContactInfo.service,
                    total: awaitingContactInfo.total,
                    message: `Hola, estoy interesado en un presupuesto para ${awaitingContactInfo.service}. El chatbot Omi me dio un estimado de $${awaitingContactInfo.total.toFixed(2)}. Gracias.`
                };

                document.getElementById('name').value = name;
                document.getElementById('email').value = email;
                if (phone.toLowerCase() !== 'no' && phone.length > 5) {
                    document.getElementById('phone').value = phone;
                }
                // Rellenar campos ocultos de Formspree para mejorar la entrega
                document.getElementById('formReplyTo').value = email;
                document.getElementById('formSubject').value = `Nueva consulta de ${name} (vía Chatbot)`;

                document.getElementById('message').value = leadData.message;

                // Envía los datos a la base de datos de Google Sheets
                // Usamos una función anónima para poder usar async/await y esperar la respuesta
                (async () => {
                    try {
                        // Enviamos los datos y esperamos la confirmación
                        await fetch('https://script.google.com/macros/s/AKfycbzlO-4dj0w7PY_9w33rHe7tbnfa2_OYt9X1WrgC75CtRZeMhvTdbNQUb_fEWR1Euqmv/exec', {
                            method: "POST",
                            body: JSON.stringify(leadData),
                            headers: { "Content-Type": "text/plain;charset=utf-8" },
                            mode: 'no-cors' // Mantenemos no-cors para evitar errores de navegador
                        });
                        addBotMessage(`¡Listo, ${name}! Tus datos se han guardado. 🎉`);
                        addBotMessage(`He rellenado el formulario de contacto por ti. Por favor, revísalo y presiona "Enviar Mensaje" para confirmar.`);
                    } finally {
                        awaitingContactInfo = null;
                        document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
                        setTimeout(toggleChatbot, 2000); // Cierra el chat para mostrar el formulario
                    }
                })();
            }
            return;
        }

        if (awaitingQuantityFor) {
            const serviceName = awaitingQuantityFor;
            const service = services[serviceName];
            awaitingQuantityFor = null; // Reiniciar para la siguiente consulta

            if (serviceName === 'pintura') {
                const predefinedOption = findBestMatch(text, Object.keys(service.predefined));
                if (predefinedOption) {
                    const total = service.predefined[predefinedOption];
                    addBotMessage(`El presupuesto de mano de obra para pintar un <strong>${predefinedOption}</strong> es de aproximadamente <strong>$${total.toFixed(2)}</strong>.`);
                    giveFinalDisclaimer(`pintura de ${predefinedOption}`, total);
                    return;
                }

                const parts = text.split('x').map(p => parseFloat(p.trim()));
                if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1]) && parts[0] > 0 && parts[1] > 0) {
                    const [alto, ancho] = parts;
                    const area = alto * ancho;
                    const total = area * service.price;
                    addBotMessage(`Calculando: ${alto}m de alto × ${ancho}m de ancho = <strong>${area.toFixed(2)} m²</strong>.`);
                    addBotMessage(`El presupuesto de mano de obra para pintar esa área es de <strong>$${total.toFixed(2)}</strong>.`);
                    giveFinalDisclaimer('pintura', total);
                } else {
                    addBotMessage("No entendí tu respuesta. Por favor, dime si es para un <strong>cuarto, casa, local</strong> o dame las medidas en formato <strong>alto x ancho</strong> (ej: 3x4).");
                    awaitingQuantityFor = serviceName; // Volver a esperar respuesta para el mismo servicio
                }
            } else if (serviceName.startsWith('remodelación-')) {
                const type = serviceName.split('-')[1];
                const quantity = parseFloat(text);
                if (!isNaN(quantity) && quantity > 0) {
                    const price = service.types[type];
                    const total = price * quantity;
                    addBotMessage(`Perfecto. Para ${quantity} m² de remodelación de <strong>${type}</strong>, el presupuesto de mano de obra comienza desde <strong>$${total.toFixed(2)}</strong>.`);
                    giveFinalDisclaimer(`remodelación de ${type}`, total);
                } else {
                    addBotMessage("Por favor, introduce un número válido para los metros cuadrados (ej: 8, 15.5).");
                    awaitingQuantityFor = serviceName; // Volver a esperar respuesta
                }
            } else if (serviceName === 'remodelación') {
                const type = findBestMatch(text, Object.keys(service.types));
                addBotMessage(`¡Entendido, remodelación de <strong>${type}</strong>! El costo base de mano de obra es de <strong>$${service.types[type]}/m²</strong>.`);
                addBotMessage("Ahora, por favor, dime cuántos metros cuadrados tiene el área a remodelar.");
                awaitingQuantityFor = `remodelación-${type}`; // Espera la cantidad para el tipo específico
            } else {
                const quantity = parseFloat(text);
                if (!isNaN(quantity) && quantity > 0) {
                    const total = service.price * quantity;
                    addBotMessage(`Perfecto. Para ${quantity} ${service.unit}(s) de ${serviceName}, el presupuesto de mano de obra es de <strong>$${total.toFixed(2)}</strong>.`);
                    giveFinalDisclaimer(serviceName, total);
                } else {
                    addBotMessage("Por favor, introduce un número válido (ej: 2, 5, 10.5).");
                    awaitingQuantityFor = serviceName; // Volver a esperar respuesta
                }
            }
            return;
        }

        // --- Lógica "Inteligente": Intenta procesar la frase completa ---
        const selectedService = findBestMatch(text, Object.keys(services));

        if (selectedService) {
            const service = services[selectedService];

            // Caso especial: Cámaras (no necesita cantidad)
            if (selectedService === 'cámaras') {
                const total = service.price;
                addBotMessage(`El costo de mano de obra para la <strong>${service.unit}</strong> de cámaras es de <strong>$${service.price.toFixed(2)}</strong>.`);
                giveFinalDisclaimer(selectedService, total);
                return;
            }

            // Caso especial: Pintura (busca "cuarto", "casa", "local" o "3x4")
            if (selectedService === 'pintura') {
                const predefined = findBestMatch(text, Object.keys(service.predefined));
                if (predefined) {
                    const total = service.predefined[predefined];
                    addBotMessage(`El presupuesto de mano de obra para pintar un <strong>${predefined}</strong> es de aproximadamente <strong>$${total.toFixed(2)}</strong>.`);
                    giveFinalDisclaimer(`pintura de ${predefined}`, total);
                    return;
                }
                const match = text.match(/(\d+(\.\d+)?)\s*x\s*(\d+(\.\d+)?)/); // Busca "3x4" o "3.5 x 4"
                if (match) {
                    const [, alto, , ancho] = match.map(parseFloat);
                    const area = alto * ancho;
                    const total = area * service.price;
                    addBotMessage(`Calculando: ${alto}m × ${ancho}m = <strong>${area.toFixed(2)} m²</strong>.`);
                    addBotMessage(`El presupuesto de mano de obra para pintar esa área es de <strong>$${total.toFixed(2)}</strong>.`);
                    giveFinalDisclaimer('pintura', total);
                    return;
                }
            }

            // Busca una cantidad numérica en la frase (ej: "2 horas", "10 metros")
            const quantityMatch = text.match(/\d+(\.\d+)?/);
            if (quantityMatch) {
                const quantity = parseFloat(quantityMatch[0]);
                const total = service.price * quantity;
                addBotMessage(`Perfecto. Para ${quantity} ${service.unit}(s) de ${selectedService}, el presupuesto de mano de obra es de <strong>$${total.toFixed(2)}</strong>.`);
                giveFinalDisclaimer(selectedService, total);
                return;
            }

            // Si no encontró detalles, pregunta de forma específica
            awaitingQuantityFor = selectedService;
            addBotMessage(`¡Entendido: ${selectedService}! El costo de mano de obra es de $${service.price.toFixed(2)} por ${service.unit}.`);
            if (selectedService === 'pintura') {
                addBotMessage("Para darte un estimado, dime si es para un <strong>cuarto</strong>, una <strong>casa</strong>, o un <strong>local</strong>. O si prefieres, dame las medidas (ej: <strong>3x4</strong>).");
            } else {
                addBotMessage(`¿Cuántos ${service.unit}s necesitas cotizar?`);
            }
        } else {
            addBotMessage("No entendí muy bien. Por favor, elige uno de los servicios de la lista: <br>• Fontanería<br>• Pintura<br>• Remodelación<br>• Electricidad<br>• Cámaras");
        }
    };

    // --- Event Listeners ---

    chatbotIcon.addEventListener('click', toggleChatbot);
    closeButton.addEventListener('click', toggleChatbot);
    sendButton.addEventListener('click', handleUserInput);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
});