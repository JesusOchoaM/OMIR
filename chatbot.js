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

    const toTitleCase = (str) => {
        // Palabras que usualmente no se capitalizan en nombres (en español)
        const lowerCaseWords = ['de', 'del', 'la', 'los', 'las', 'y', 'e', 'en'];
        return str.toLowerCase().split(' ').map((word, index) => {
            if (index > 0 && lowerCaseWords.includes(word)) {
                return word;
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(' ');
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
                const newName = toTitleCase(text.trim()); // Formatear el nombre
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
                    name: awaitingContactInfo.name,
                    email: awaitingContactInfo.email,
                    phone: phone,
                    service: awaitingContactInfo.service,
                    total: awaitingContactInfo.total,
                    message: `Hola, estoy interesado en un presupuesto para ${awaitingContactInfo.service}. El chatbot Omi me dio un estimado final de ${awaitingContactInfo.total.toFixed(2)}. Quedo a la espera de su contacto para coordinar los detalles. Gracias.`
                };

                // Generar y mostrar la factura en el chat
                const invoiceHTML = generarFacturaHTML(leadData);
                addBotMessage(invoiceHTML);

                // Agregar el event listener para el botón de descarga
                const downloadButton = document.getElementById('download-invoice');
                if (downloadButton) {
                    downloadButton.addEventListener('click', () => {
                        descargarPDF(leadData);
                    });
                }

                // Rellenar el formulario principal y desplazar la vista
                const invoiceForEmail = generarFacturaHTML(leadData);
                document.getElementById('formInvoiceHtml').value = invoiceForEmail;

                document.getElementById('name').value = leadData.name;
                document.getElementById('email').value = leadData.email;
                if (leadData.phone) {
                    document.getElementById('phone').value = leadData.phone;
                }
                document.getElementById('formReplyTo').value = leadData.email;
                document.getElementById('formSubject').value = `Nueva consulta de ${leadData.name} (vía Chatbot)`;
                document.getElementById('message').value = leadData.message;

                // Enviar datos a Google Sheets en segundo plano
                (async () => {
                    try {
                        await fetch('https://script.google.com/macros/s/AKfycbzlO-4dj0w7PY_9w33rHe7tbnfa2_OYt9X1WrgC75CtRZeMhvTdbNQUb_fEWR1Euqmv/exec', {
                            method: "POST",
                            body: JSON.stringify(leadData),
                            headers: { "Content-Type": "text/plain;charset=utf-8" },
                            mode: 'no-cors'
                        });
                        // Mensaje final para guiar al usuario
                        await respondWithTyping(getTranslation("chat_formulario_relleno"), 1500);
                    } finally {
                        awaitingContactInfo = null;
                        document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
                        setTimeout(toggleChatbot, 4000); // Dar tiempo para leer antes de cerrar
                    }
                })();
                break;
        }
    };

    const generarFacturaHTML = (data) => {
        const invoiceId = `OMI-${Date.now()}`;
        const today = new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });

        return `
            <div id="invoice-container">
                <div class="header">
                    <img src="images/logo2.png" alt="OMIR Logo">
                    <h2>Presupuesto Estimado</h2>
                </div>
                <div class="details">
                    <div>
                        <p><strong>Presupuesto #:</strong> ${invoiceId}</p>
                        <p><strong>Fecha:</strong> ${today}</p>
                    </div>
                    <div class="client">
                        <h3>Cliente:</h3>
                        <p>${data.name}</p>
                        <p>${data.email}</p>
                        ${data.phone ? `<p>${data.phone}</p>` : ''}
                    </div>
                </div>
                <div class="body">
                    <h3>Detalles del Servicio</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Servicio (Mano de Obra)</th>
                                <th>Total Estimado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${data.service}</td>
                                <td class="total">${data.total.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="total-section">
                    <h3>Total: ${data.total.toFixed(2)}</h3>
                </div>
                <div class="footer">
                    <p><strong>Nota Importante:</strong> Este es un presupuesto estimado y solo cubre la mano de obra. El costo de los materiales no está incluido y será detallado por el especialista. El precio final puede variar según la complejidad del trabajo y las condiciones encontradas en el sitio.</p>
                </div>
                <div class="download-button">
                    <button id="download-invoice" class="btn-pro">Descargar Presupuesto en PDF</button>
                </div>
            </div>
        `;
    };

    const descargarPDF = (data) => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        const invoiceHTML = generarFacturaHTML(data);

        if (isMobile) {
            addBotMessage("Generando su presupuesto en formato PDF...");

            const element = document.createElement('html');
            const head = document.createElement('head');
            const style = document.createElement('style');
            style.innerHTML = `
body {
    font-family: Arial, sans-serif;
    font-size: 11pt;
    line-height: 1.5;
    color: #000;
    background: #fff;
    margin: 0;
    padding: 0;
}

#invoice-container {
    max-width: 8.5in;
    margin: auto;
    padding: 1in;
    box-sizing: border-box;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    border-bottom: 2px solid #000;
    padding-bottom: 10px;
}

.header img {
    max-width: 200px;
}

.header h2 {
    margin: 0;
    font-size: 18pt;
    text-align: right;
}

.details {
    margin-top: 0.5in;
    display: flex;
    justify-content: space-between;
}

.details p {
    margin: 5px 0;
}

.details .client {
    text-align: right;
}

.details .client h3 {
    margin: 0 0 5px 0;
}

.body {
    margin-top: 0.5in;
}

.body h3 {
    border-bottom: 1px solid #ccc;
    padding-bottom: 8px;
}

.body table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 15px;
    font-size: 11pt;
}

.body table th,
.body table td {
    padding: 10px;
    border: 1px solid #000;
}

.body table th {
    text-align: left;
    background-color: #f2f2f2;
}

.body table td.total {
    text-align: right;
    font-weight: bold;
}

.total-section {
    margin-top: 0.5in;
    text-align: right;
}

.total-section h3 {
    margin: 0;
    font-size: 14pt;
}

.footer {
    margin-top: 0.5in;
    font-size: 9pt;
    color: #333;
    border-top: 1px solid #ccc;
    padding-top: 15px;
}

.download-button {
    text-align: center;
    margin-top: 0.5in;
}

.btn-pro {
    background-color: #1565c0;
    color: white;
    padding: 12px 25px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 11pt;
    text-decoration: none;
}
`;
            head.appendChild(style);
            const body = document.createElement('body');
            body.innerHTML = invoiceHTML;
            
            const downloadButtonInPdf = body.querySelector('#download-invoice');
            if (downloadButtonInPdf) {
                downloadButtonInPdf.style.display = 'none';
            }

            element.appendChild(head);
            element.appendChild(body);

            const opt = {
                margin: 0,
                filename: `Presupuesto-OMIR-${data.name.replace(/\s+/g, '-')}.pdf`,
                image: { type: 'jpeg', quality: 1.0 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };

            html2pdf().from(element).set(opt).save();

        } else {
            addBotMessage("Preparando la vista de impresión de su presupuesto...");

            const newWindow = window.open('', '_blank');
            newWindow.document.write(`
                <html>
                    <head>
                        <title>Presupuesto OMIR - ${data.name}</title>
                        <link rel="stylesheet" href="invoice.css">
                        <style>
                            @media print {
                                .download-button {
                                    display: none;
                                }
                            }
                        </style>
                    </head>
                    <body>
                        ${invoiceHTML}
                        <script>
                            window.onload = function() {
                                setTimeout(function() {
                                    window.print();
                                    window.close();
                                }, 250);
                            }
                        </script>
                    </body>
                </html>
            `);
            newWindow.document.close();
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
    }
});