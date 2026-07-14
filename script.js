// Interactive script for theme management, mobile navigation menu, and scroll animations

// Comprehensive dictionary for English & Spanish translation
const translations = {
    es: {
        "nav-about": "Sobre Mí",
        "nav-experience": "Experiencia",
        "nav-skills": "Habilidades",
        "nav-projects": "Proyectos",
        "nav-contact": "Contacto",
        "hero-badge": "Disponible para trabajar",
        "hero-subtitle": "Desarrollador Web Fullstack / Backend",
        "hero-desc": "Especializado en el desarrollo de arquitecturas robustas y escalables con <strong>PHP (Symfony, Laravel)</strong> y desarrollo frontend con <strong>React</strong>. Titulado en DAW con sólida experiencia en entornos de desarrollo ágiles y contenedorización con <strong>Docker</strong>.",
        "hero-btn-contact": "Contáctame",
        "hero-btn-projects": "Ver Proyectos",
        "code-loc": "'Córdoba, España'",
        "about-title": "Sobre Mí",
        "about-subtitle": "Desarrollador Web Fullstack con enfoque Backend",
        "about-p1": "Soy un desarrollador web con una pasión por el backend bien estructurado y la automatización. Mi formación oficial como <strong>Técnico Superior en Desarrollo de Aplicaciones Web (DAW)</strong> me ha proporcionado bases sólidas en metodologías ágiles, bases de datos y arquitectura de software.",
        "about-p2": "Destaco por mi capacidad para analizar y resolver problemas lógicos complejos, una rápida curva de aprendizaje al incorporar nuevas herramientas, y una total autonomía para trabajar con rigor técnico. Me siento muy cómodo configurando y optimizando entornos locales contenedorizados con Docker, garantizando un despliegue ágil desde el primer día.",
        "about-hl-time": "+1 año",
        "about-hl-time-desc": "Formación y Prácticas Reales",
        "about-hl-autonomy": "100%",
        "about-hl-autonomy-desc": "Autonomía y Rigor",
        "about-hl-tech-desc": "Symfony & Laravel",
        "exp-title": "Experiencia Laboral",
        "exp-studio-date": "Feb 2026 - Jun 2026",
        "exp-studio-role": "Desarrollador Web Fullstack",
        "exp-studio-desc1": "<strong>Desarrollo de ERP:</strong> Análisis, diseño e implementación integral de un sistema de gestión interna mediante Symfony y Twig con total autonomía funcional.",
        "exp-studio-desc2": "<strong>Integración de Módulos:</strong> Creación de componentes dinámicos integrando interfaces en React con lógica de negocio sólida en el backend con Symfony.",
        "exp-studio-desc3": "<strong>Mantenimiento y DevOps:</strong> Corrección de bugs, optimización de código y gestión de entornos locales aislados con Docker y automatización mediante Makefile.",
        "exp-studio-desc4": "<strong>Documentación:</strong> Redacción de especificaciones técnicas para el equipo de desarrollo y manuales de usuario funcionales para clientes finales.",
        "exp-abp-date": "Ene 2025 - Abr 2025",
        "exp-abp-role": "Desarrollador Web",
        "exp-abp-desc1": "<strong>Desarrollo de Software:</strong> Diseño e implementación de un sistema de control horario automatizado utilizando el framework Laravel.",
        "exp-abp-desc2": "<strong>Gestión de Bases de Datos:</strong> Planificación y ejecución de la migración completa de una base de datos relacional de MySQL a PostgreSQL, asegurando la integridad de la información.",
        "exp-other-trigger": "Otras Experiencias Laborales (Camarero, Monitor)",
        "exp-other-waiter-date": "Mar 2025 - Actualidad",
        "exp-other-waiter-role": "Camarero",
        "exp-other-waiter-desc": "Desarrollo de habilidades de atención al cliente, gestión del estrés, resolución de conflictos y trabajo en equipo rápido bajo presión.",
        "exp-other-judo-date": "Oct 2018 - May 2024",
        "exp-other-judo-role": "Monitor de Judo",
        "exp-other-judo-desc": "Liderazgo de grupos, planificación de sesiones formativas, fomento de valores deportivos, autodisciplina y comunicación efectiva con niños y familias.",
        "skills-title": "Habilidades y Stack Técnico",
        "skills-backend-desc": "Lógica de servidor robusta, APIs RESTful y patrones de diseño estructurados.",
        "skills-backend-list": "PHP (Laravel, Symfony)",
        "skills-backend-list2": "Programación Orientada a Objetos",
        "skills-backend-list3": "Patrón MVC",
        "skills-frontend-desc": "Interfaces interactivas, semánticas y optimizadas para móviles.",
        "skills-frontend-list": "React",
        "skills-frontend-list2": "JavaScript (ES6+)",
        "skills-frontend-list3": "Twig (Motor de plantillas)",
        "skills-frontend-list4": "HTML5 / CSS3 (Vanilla)",
        "skills-devops-title": "Bases de Datos & DevOps",
        "skills-devops-desc": "Contenedores aislados de desarrollo y gestión relacional de datos.",
        "skills-devops-list": "Docker",
        "skills-devops-list2": "PostgreSQL & MySQL",
        "skills-devops-list3": "Makefile (Automatización)",
        "skills-devops-list4": "Git / GitHub",
        "skills-devops-list5": "Postman (Testing API)",
        "skills-devops-list6": "Linux / Servidores",
        "skills-soft-title": "Competencias Profesionales",
        "skills-soft-desc": "Habilidades metodológicas para la integración fluida en equipos ágiles.",
        "skills-soft-list": "Autonomía operativa",
        "skills-soft-list2": "Orientación al detalle",
        "skills-soft-list3": "Resolución de problemas lógicos",
        "skills-soft-list4": "Proactividad técnica",
        "skills-soft-list5": "Orden metodológico",
        "projects-title": "Proyectos Destacados",
        "projects-subtitle": "Una muestra de las soluciones técnicas que he desarrollado.",
        "project-coreerp-meta": "Estudio 128k (Proyecto Real)",
        "project-coreerp-title": "CoreERP - Módulo de Gestión Interna",
        "project-coreerp-desc": "Diseño e implementación integral de un sistema ERP de gestión empresarial interna. Creación de APIs robustas en Symfony y vistas dinámicas en React e integración clásica con Twig.",
        "project-timetrack-meta": "ABP Tecnológica (Proyecto Real)",
        "project-timetrack-title": "TimeTrack - Registro Horario Automatizado",
        "project-timetrack-desc": "Diseño e implementación de un sistema de control horario de empleados. Desarrollo en Laravel y migración exitosa de MySQL a PostgreSQL, garantizando la consistencia e integridad de datos.",
        "project-devenv-meta": "Proyecto Personal / DevOps",
        "project-devenv-title": "Dockerized Local Stack Generator",
        "project-devenv-desc": "Automatización de entornos locales para proyectos Symfony/Laravel. Genera con un solo comando en Makefile contenedores aislados con PHP-FPM, Nginx, PostgreSQL/MySQL y Redis listos para producción local.",
        "edu-title": "Formación Académica",
        "edu-date": "Sep 2024 - Jun 2026",
        "edu-degree": "Grado Superior en Desarrollo de Aplicaciones Web (DAW)",
        "edu-desc": "Enfoque práctico en lenguajes estructurados y POO, bases de datos SQL y NoSQL, desarrollo frontend reactivo, diseño de APIs y despliegue continuo.",
        "other-title": "Idiomas y Cursos",
        "lang-title": "Idiomas",
        "lang-es": "<strong>Español:</strong> Nativo",
        "lang-en": "<strong>Inglés Técnico:</strong> Nivel fluido enfocado a la lectura, comprensión y consumo de documentación oficial, APIs y arquitecturas de software.",
        "courses-title": "Cursos y Otros Datos",
        "courses-list1": "Cursos de especialización en <strong>OpenWebinars</strong> (Symfony Avanzado, Despliegue con Docker y Entornos Linux).",
        "courses-list2": "Permiso de conducir B y vehículo propio.",
        "contact-title": "Contacto",
        "contact-subtitle": "¿Interesado en mi perfil? Estoy disponible para entrevistas y nuevos retos.",
        "contact-talk": "¡Hablemos!",
        "contact-desc": "Escríbeme o llámame para concertar una entrevista. Responderé lo antes posible.",
        "contact-phone-label": "Teléfono",
        "contact-location-label": "Ubicación",
        "contact-location-value": "Córdoba, España",
        "form-label-name": "Nombre Completo",
        "form-placeholder-name": "Tu nombre y apellido",
        "form-label-email": "Correo Electrónico",
        "form-placeholder-email": "ejemplo@correo.com",
        "form-label-msg": "Mensaje",
        "form-placeholder-msg": "Escribe tu propuesta o mensaje aquí...",
        "form-submit": "Enviar Mensaje",
        "footer-text": "&copy; 2026 Alejandro Caballero Luque. Desarrollado con HTML, CSS y JS.",
        "footer-top": "Volver Arriba"
    },
    en: {
        "nav-about": "About Me",
        "nav-experience": "Experience",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "hero-badge": "Available to work",
        "hero-subtitle": "Fullstack / Backend Web Developer",
        "hero-desc": "Specialized in developing robust and scalable architectures using <strong>PHP (Symfony, Laravel)</strong> and frontend development with <strong>React</strong>. Graduated in DAW with solid experience in agile development environments and containerization with <strong>Docker</strong>.",
        "hero-btn-contact": "Contact Me",
        "hero-btn-projects": "View Projects",
        "code-loc": "'Córdoba, Spain'",
        "about-title": "About Me",
        "about-subtitle": "Fullstack Web Developer with a Backend Focus",
        "about-p1": "I am a web developer passionate about structured backend and automation. My official degree as a <strong>Higher Technical Specialist in Web Application Development (DAW)</strong> has provided me with solid foundations in agile methodologies, databases, and software architecture.",
        "about-p2": "I stand out for my ability to analyze and solve complex logical problems, a rapid learning curve when adopting new tools, and total autonomy to work with technical rigor. I feel very comfortable configuring and optimizing local containerized environments with Docker, ensuring agile deployment from day one.",
        "about-hl-time": "+1 year",
        "about-hl-time-desc": "Training & Real Internships",
        "about-hl-autonomy": "100%",
        "about-hl-autonomy-desc": "Autonomy & Rigor",
        "about-hl-tech-desc": "Symfony & Laravel",
        "exp-title": "Work Experience",
        "exp-studio-date": "Feb 2026 - Jun 2026",
        "exp-studio-role": "Fullstack Web Developer",
        "exp-studio-desc1": "<strong>ERP Development:</strong> Full analysis, design, and implementation of an internal management system using Symfony and Twig with complete functional autonomy.",
        "exp-studio-desc2": "<strong>Module Integration:</strong> Creation of dynamic UI components integrating React interfaces with solid backend business logic in Symfony.",
        "exp-studio-desc3": "<strong>Maintenance & DevOps:</strong> Bug fixing, code optimization, and local isolated environment management with Docker and Makefile automation.",
        "exp-studio-desc4": "<strong>Documentation:</strong> Writing technical specifications for the dev team and functional user manuals for end clients.",
        "exp-abp-date": "Jan 2025 - Apr 2025",
        "exp-abp-role": "Web Developer",
        "exp-abp-desc1": "<strong>Software Development:</strong> Design and implementation of an automated time-tracking registry system using the Laravel framework.",
        "exp-abp-desc2": "<strong>Database Management:</strong> Planning and execution of the complete migration of a relational MySQL database to PostgreSQL, ensuring data integrity.",
        "exp-other-trigger": "Other Work Experiences (Waiter, Judo Instructor)",
        "exp-other-waiter-date": "Mar 2025 - Present",
        "exp-other-waiter-role": "Waiter",
        "exp-other-waiter-desc": "Development of customer service, stress management, conflict resolution, and fast-paced teamwork skills under pressure.",
        "exp-other-judo-date": "Oct 2018 - May 2024",
        "exp-other-judo-role": "Judo Instructor",
        "exp-other-judo-desc": "Group leadership, scheduling training sessions, promoting sports values, self-discipline, and effective communication with children and families.",
        "skills-title": "Skills & Tech Stack",
        "skills-backend-desc": "Robust server-side logic, RESTful APIs, and structured design patterns.",
        "skills-backend-list": "PHP (Laravel, Symfony)",
        "skills-backend-list2": "Object-Oriented Programming",
        "skills-backend-list3": "MVC Pattern",
        "skills-frontend-desc": "Interactive, semantic, and mobile-optimized interfaces.",
        "skills-frontend-list": "React",
        "skills-frontend-list2": "JavaScript (ES6+)",
        "skills-frontend-list3": "Twig (Template Engine)",
        "skills-frontend-list4": "HTML5 / CSS3 (Vanilla)",
        "skills-devops-title": "Databases & DevOps",
        "skills-devops-desc": "Isolated development containers and relational database management.",
        "skills-devops-list": "Docker",
        "skills-devops-list2": "PostgreSQL & MySQL",
        "skills-devops-list3": "Makefile (Automation)",
        "skills-devops-list4": "Git / GitHub",
        "skills-devops-list5": "Postman (API Testing)",
        "skills-devops-list6": "Linux / Servers",
        "skills-soft-title": "Soft Skills",
        "skills-soft-desc": "Methodological skills for seamless integration into agile teams.",
        "skills-soft-list": "Operational autonomy",
        "skills-soft-list2": "Detail-oriented",
        "skills-soft-list3": "Logical problem solving",
        "skills-soft-list4": "Technical proactivity",
        "skills-soft-list5": "Methodological order",
        "projects-title": "Featured Projects",
        "projects-subtitle": "A sample of the technical solutions I have developed.",
        "project-coreerp-meta": "Studio 128k (Real Project)",
        "project-coreerp-title": "CoreERP - Internal Management Module",
        "project-coreerp-desc": "End-to-end design and implementation of an internal ERP system. Creation of robust APIs in Symfony and reactive dynamic views in React, with classic Twig integration.",
        "project-timetrack-meta": "ABP Tecnológica (Real Project)",
        "project-timetrack-title": "TimeTrack - Automated Attendance Tracker",
        "project-timetrack-desc": "Design and implementation of an employee time tracking system. Developed in Laravel with a successful migration from MySQL to PostgreSQL, ensuring data integrity.",
        "project-devenv-meta": "Personal Project / DevOps",
        "project-devenv-title": "Dockerized Local Stack Generator",
        "project-devenv-desc": "Local development environment automation for Symfony/Laravel. Spin up isolated containers (PHP-FPM, Nginx, PostgreSQL/MySQL, Redis) using a single Makefile command.",
        "edu-title": "Academic Education",
        "edu-date": "Sep 2024 - Jun 2026",
        "edu-degree": "Higher Technical Degree in Web Application Development (DAW)",
        "edu-desc": "Practical focus on OOP and structured programming, SQL and NoSQL databases, reactive frontend, API design, and continuous deployment.",
        "other-title": "Languages & Courses",
        "lang-title": "Languages",
        "lang-es": "<strong>Spanish:</strong> Native",
        "lang-en": "<strong>Technical English:</strong> Fluent level in reading, understanding, and consuming official documentation, APIs, and software architecture.",
        "courses-title": "Courses & Other Certifications",
        "courses-list1": "Specialization courses on <strong>OpenWebinars</strong> (Advanced Symfony, Docker Deployment, and Linux Environments).",
        "courses-list2": "Driver's License B and personal vehicle.",
        "contact-title": "Contact",
        "contact-subtitle": "Interested in my profile? I am available for interviews and new challenges.",
        "contact-talk": "Let's Talk!",
        "contact-desc": "Write or call me to schedule an interview. I will respond as soon as possible.",
        "contact-phone-label": "Phone",
        "contact-location-label": "Location",
        "contact-location-value": "Córdoba, Spain",
        "form-label-name": "Full Name",
        "form-placeholder-name": "Your full name",
        "form-label-email": "Email Address",
        "form-placeholder-email": "example@email.com",
        "form-label-msg": "Message",
        "form-placeholder-msg": "Write your proposal or message here...",
        "form-submit": "Send Message",
        "footer-text": "&copy; 2026 Alejandro Caballero Luque. Built with HTML, CSS, and JS.",
        "footer-top": "Back to Top"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. THEME INITIALIZATION & SWITCHER (LIGHT/DARK) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Initialize theme (default to light mode if no preference is saved)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
    }

    // Event listener for theme toggle button
    themeToggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    });


    // --- 2. LANGUAGE SWITCHER LOGIC ---
    const langToggleBtn = document.getElementById('lang-toggle');
    
    // Check saved language preference or default to Spanish ('es')
    let currentLang = localStorage.getItem('lang') || 'es';

    // Apply translations function
    function applyTranslations(lang) {
        // Update text nodes and innerHTML
        const translatableElements = document.querySelectorAll('[data-i18n]');
        translatableElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update placeholders
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang] && translations[lang][key]) {
                el.setAttribute('placeholder', translations[lang][key]);
            }
        });

        // Update document lang attribute
        document.documentElement.setAttribute('lang', lang);

        // Update toggle button text to show the NEXT language
        langToggleBtn.textContent = lang === 'es' ? 'EN' : 'ES';
    }

    // Initial translation apply on load
    applyTranslations(currentLang);

    // Event listener for language toggle click
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('lang', currentLang);
        applyTranslations(currentLang);
    });


    // --- 3. RESPONSIVE MOBILE MENU ---
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Open/close mobile menu on toggle click
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('open');
    });

    // Close mobile menu automatically when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('open');
        });
    });


    // --- 4. OTHER EXPERIENCE ACCORDION ---
    const accordionTrigger = document.getElementById('accordion-trigger');
    const accordionContent = document.getElementById('accordion-content');

    if (accordionTrigger && accordionContent) {
        accordionTrigger.addEventListener('click', () => {
            accordionTrigger.classList.toggle('active');
            accordionContent.classList.toggle('open');
        });
    }


    // --- 5. SCROLL ANIMATIONS (INTERSECTION OBSERVER) ---
    const fadeElements = document.querySelectorAll('.fade-in-up');
    
    const fadeObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Unobserve element once it is animated to optimize performance
                observer.unobserve(entry.target);
            }
        });
    }, fadeObserverOptions);

    fadeElements.forEach(el => {
        fadeObserver.observe(el);
    });


    // --- 6. ACTIVE NAV LINK ON SCROLL ---
    const sections = document.querySelectorAll('section[id]');
    
    const navObserverOptions = {
        threshold: 0.2,
        rootMargin: '-80px 0px -50% 0px' // Negative top margin to offset the fixed navbar height
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, navObserverOptions);

    sections.forEach(section => {
        navObserver.observe(section);
    });


    // Visual hover micro-interaction for the interactive code card
    const codeCard = document.querySelector('.code-card');
    if (codeCard) {
        codeCard.addEventListener('mouseenter', () => {
            codeCard.style.transform = 'translateY(-5px) scale(1.01)';
            codeCard.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.35)';
            codeCard.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
        });
        
        codeCard.addEventListener('mouseleave', () => {
            codeCard.style.transform = 'none';
            codeCard.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.25)';
        });
    }

});
