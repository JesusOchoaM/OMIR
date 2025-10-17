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
