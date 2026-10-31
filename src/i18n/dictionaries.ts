import type { Locale } from "./config";

export type IconName =
  | "search"
  | "cloud"
  | "eye"
  | "siren"
  | "refresh"
  | "bug"
  | "globe"
  | "radar"
  | "target"
  | "code"
  | "briefcase"
  | "users"
  | "bell"
  | "shield";

export type Pillar = "tech" | "people" | "threats";

export type Service = {
  id: string;
  icon: IconName;
  title: string;
  desc: string;
  deliverable: string;
  note?: string;
};

export type ServiceLine = {
  id: string;
  icon: IconName;
  name: string;
  tagline: string;
  pillar: Pillar;
  /** Página dedicada (si existe) */
  page?: "human-security" | "intelligence";
  items: Service[];
};

export type Solution = {
  id: string;
  name: string;
  audience: string;
  desc: string;
  includes: string[];
  featured?: boolean;
};

export const BLACKMIRA_URL = "https://www.blackmira.com/";

export const contacts = [
  { country: { es: "Chile", en: "Chile" }, phone: "+56 9 7995 8716", email: "contacto@soczero.com" },
  { country: { es: "Colombia", en: "Colombia" }, phone: "+57 310 446 5701", email: "contacto@soczero.com" },
  { country: { es: "Canadá", en: "Canada" }, phone: "+1 514 573 9260", email: "contact@soczero.ca" },
];

export const technologies = [
  "Microsoft Azure",
  "Microsoft Entra ID",
  "Microsoft 365",
  "Microsoft Defender",
  "Linux",
  "Windows Server",
  "Wazuh",
  "Security Onion",
  "Suricata",
  "Wireshark",
  "Nmap",
  "OWASP",
];

const es = {
  meta: {
    title: "SOCZERO Networks | Protegemos tu tecnología, preparamos a tus personas y anticipamos las amenazas",
    description:
      "Seguridad de infraestructura, pruebas de penetración, monitoreo y respuesta a incidentes, inteligencia de vulnerabilidades y formación en ciberseguridad con BlackMira.",
  },
  nav: {
    home: "Inicio",
    services: "Servicios",
    solutions: "Soluciones",
    human: "Concientización",
    intelligence: "Inteligencia",
    about: "Nosotros",
    contact: "Contacto",
    cta: "Evaluación inicial",
  },
  hero: {
    eyebrow: "SOCZERO Networks",
    lines: ["Protegemos tu tecnología.", "Preparamos a tus personas.", "Anticipamos las amenazas."],
    subtitle:
      "Ayudamos a empresas a fortalecer la seguridad de sus servidores, redes, aplicaciones y servicios en la nube, y a preparar a sus equipos frente a las amenazas digitales.",
    primary: "Solicita una evaluación inicial de seguridad",
    secondary: "Ver servicios",
    highlights: ["Informes con evidencia y recomendaciones", "Proyectos puntuales o contratos mensuales", "Alcance y niveles de servicio definidos por escrito"],
  },
  pillars: {
    eyebrow: "Un enfoque completo",
    title: "Tecnología, personas y amenazas",
    items: [
      { id: "tech" as Pillar, title: "Tecnología", desc: "Protección de infraestructura, redes y aplicaciones." },
      { id: "people" as Pillar, title: "Personas", desc: "Formación y reducción del riesgo humano." },
      { id: "threats" as Pillar, title: "Amenazas", desc: "Inteligencia, detección y respuesta." },
    ],
  },
  services: {
    eyebrow: "Líneas de servicio",
    title: "Seis áreas, un mismo objetivo: reducir tu riesgo",
    subtitle:
      "Cada servicio tiene un alcance claro y un entregable concreto. Puedes contratarlo como proyecto puntual o como servicio recurrente.",
    deliverable: "Entregable",
    quote: "Cotizar",
    viewAll: "Ver todos los servicios",
    explore: "Ver detalle",
    lines: [
      {
        id: "offensive",
        icon: "target",
        name: "SOCZERO Seguridad Ofensiva",
        tagline: "Evaluaciones de vulnerabilidades y pruebas de penetración autorizadas.",
        pillar: "tech",
        items: [
          {
            id: "vulnerabilidades",
            icon: "search",
            title: "Evaluación de vulnerabilidades",
            desc: "Revisión de servidores Linux y Windows, sitios web, aplicaciones, puertos expuestos, versiones vulnerables y configuraciones inseguras.",
            deliverable: "Informe con vulnerabilidades, nivel de riesgo, evidencias y recomendaciones de corrección.",
          },
          {
            id: "pentesting",
            icon: "target",
            title: "Pruebas de penetración (hacking ético)",
            desc: "Pruebas de intrusión manuales y autorizadas sobre aplicaciones e infraestructura. Un pentest profesional va más allá de un escaneo automatizado.",
            deliverable: "Informe ejecutivo y técnico con hallazgos explotados y re-test de verificación.",
          },
          {
            id: "waf",
            icon: "globe",
            title: "Seguridad de aplicaciones web y firewall de aplicaciones (WAF)",
            desc: "Revisión de reglas WAF, OWASP Top 10, SQL injection, XSS, límites de solicitudes, falsos positivos, logs y protección de aplicaciones públicas.",
            deliverable: "Diagnóstico de la protección actual y ajustes recomendados de reglas.",
          },
        ],
      },
      {
        id: "infrastructure",
        icon: "cloud",
        name: "SOCZERO Seguridad de Infraestructura",
        tagline: "Auditorías, endurecimiento, servidores, redes, Azure y Microsoft 365.",
        pillar: "tech",
        items: [
          {
            id: "nube",
            icon: "cloud",
            title: "Seguridad de infraestructura y nube",
            desc: "Auditorías de Azure, Microsoft 365, Entra ID, redes, VPN, NSG, firewalls, MFA, servidores y controles de acceso.",
            deliverable: "Diagnóstico de configuración y plan de endurecimiento.",
          },
          {
            id: "devsecops",
            icon: "code",
            title: "Seguridad en el desarrollo (DevSecOps)",
            desc: "Integración de controles de seguridad en pipelines CI/CD, revisión de dependencias y buenas prácticas de desarrollo seguro.",
            deliverable: "Diagnóstico del pipeline y controles implementados.",
          },
        ],
      },
      {
        id: "detection",
        icon: "eye",
        name: "SOCZERO Detección y Respuesta",
        tagline: "Monitoreo, detección de amenazas, análisis de logs y respuesta a incidentes.",
        pillar: "threats",
        items: [
          {
            id: "monitoreo",
            icon: "eye",
            title: "Monitoreo y detección de amenazas",
            desc: "Centralización y revisión de logs, eventos de autenticación, intentos de intrusión, tráfico sospechoso y alertas de seguridad.",
            deliverable: "Alertas, informes periódicos y recomendaciones de respuesta.",
            note: "Monitoreo gestionado con horario de cobertura y niveles de servicio definidos en el contrato.",
          },
          {
            id: "incidentes",
            icon: "siren",
            title: "Respuesta a incidentes",
            desc: "Investigación de actividad sospechosa, revisión de logs, identificación de indicadores de compromiso y apoyo en contención y recuperación.",
            deliverable: "Informe técnico del incidente, cronología, hallazgos y medidas correctivas.",
          },
          {
            id: "malware",
            icon: "bug",
            title: "Análisis de malware",
            desc: "Análisis estático y dinámico de archivos sospechosos: comportamiento de procesos, persistencia, modificaciones del registro y comunicaciones de red.",
            deliverable: "Informe técnico de primer nivel con indicadores de compromiso y recomendaciones.",
          },
          {
            id: "ids",
            icon: "radar",
            title: "Detección de intrusiones y señuelos (honeypots)",
            desc: "Sensores y señuelos, monitoreo con herramientas como Security Onion y Suricata, y análisis de intentos de acceso no autorizado.",
            deliverable: "Piloto de detección con informe de actividad observada.",
          },
        ],
      },
      {
        id: "intelligence",
        icon: "bell",
        name: "SOCZERO Inteligencia de Amenazas",
        tagline: "Vigilancia de CVE, alertas de vulnerabilidades e inteligencia de amenazas.",
        pillar: "threats",
        page: "intelligence",
        items: [
          {
            id: "cve",
            icon: "bell",
            title: "Vigilancia de CVE",
            desc: "Seguimiento diario de las vulnerabilidades publicadas que afectan a las tecnologías que usa tu organización.",
            deliverable: "Alertas filtradas por tus tecnologías, con severidad y recomendaciones de actualización.",
          },
          {
            id: "threat-intel",
            icon: "radar",
            title: "Inteligencia de amenazas",
            desc: "Información sobre campañas y amenazas activas relevantes para tu sector y tu infraestructura.",
            deliverable: "Boletines periódicos con recomendaciones accionables.",
          },
        ],
      },
      {
        id: "human",
        icon: "users",
        name: "SOCZERO Concientización",
        tagline: "Formación, simulaciones de phishing y evaluación del riesgo humano con BlackMira.",
        pillar: "people",
        page: "human-security",
        items: [
          {
            id: "formacion",
            icon: "users",
            title: "Formación en ciberseguridad",
            desc: "Cursos, videos, escenarios interactivos y actividades sobre phishing, contraseñas, protección de datos, ingeniería social y amenazas actuales.",
            deliverable: "Rutas de formación asignadas y progreso por persona.",
          },
          {
            id: "phishing",
            icon: "target",
            title: "Simulaciones de phishing",
            desc: "Campañas controladas para evaluar cómo reaccionan los colaboradores ante correos fraudulentos y detectar oportunidades de mejora.",
            deliverable: "Resultados por campaña: interacción, reportes y reincidencia.",
          },
          {
            id: "riesgo-humano",
            icon: "eye",
            title: "Evaluación del riesgo humano",
            desc: "Indicadores por área, seguimiento de interacciones, reportes de phishing y detección de comportamientos recurrentes.",
            deliverable: "Indicadores de riesgo por área y recomendaciones.",
          },
          {
            id: "evidencias",
            icon: "shield",
            title: "Seguimiento y evidencias",
            desc: "Registro del aprendizaje, constancias de formación, evolución de los participantes e informes para la organización.",
            deliverable: "Constancias individuales e informes para la gerencia.",
          },
        ],
      },
      {
        id: "resilience",
        icon: "refresh",
        name: "SOCZERO Resiliencia",
        tagline: "Continuidad operativa, respaldos, BCP y recuperación ante desastres.",
        pillar: "tech",
        items: [
          {
            id: "continuidad",
            icon: "refresh",
            title: "Continuidad operativa y recuperación ante desastres",
            desc: "Planes BCP y DRP, revisión de respaldos, definición de RTO/RPO y pruebas de recuperación. Ideal para pymes con infraestructura pero sin un plan real para recuperarse de un incidente.",
            deliverable: "Plan documentado y procedimientos de recuperación.",
          },
          {
            id: "ciso",
            icon: "briefcase",
            title: "CISO Virtual",
            desc: "Liderazgo de seguridad de nivel senior a tiempo parcial: estrategia, políticas, cumplimiento y reporte a la dirección.",
            deliverable: "Hoja de ruta de seguridad y reportes periódicos a la gerencia.",
          },
        ],
      },
    ] as ServiceLine[],
  },
  human: {
    eyebrow: "SOCZERO Concientización",
    title: "La seguridad comienza con las personas.",
    body: "Fortalecemos la cultura de ciberseguridad de tu organización mediante formación continua, simulaciones de phishing y evaluación del riesgo humano. Transformamos los resultados en acciones concretas para reducir los incidentes provocados por errores humanos.",
    teaser: {
      title: "Tu tecnología puede estar protegida. ¿Tu equipo también?",
      body: "Un correo fraudulento puede comprometer una organización incluso cuando existen controles técnicos de seguridad. Prepara a tus colaboradores para reconocer amenazas digitales mediante formación interactiva, simulaciones de phishing y seguimiento continuo de su aprendizaje.",
      motto: "Capacita. Simula. Evalúa. Mejora.",
      more: "Conoce el servicio",
    },
    demo: "Solicitar una demostración",
    platform: "Con la plataforma",
    visit: "Visitar blackmira.com",
    demoNote: "Vista ilustrativa de la plataforma · Datos de demostración",
    offer: { title: "Qué incluye" },
    views: {
      title: "Una plataforma. Dos experiencias conectadas.",
      subtitle: "Visibilidad para tu organización. Un camino claro para cada persona.",
      org: {
        tab: "Para tu organización",
        title: "Gestiona y acompaña.",
        desc: "Visualiza el estado de tu organización y enfoca el seguimiento donde más se necesita.",
        points: ["Avance por área y por persona", "Resultados de cada campaña", "Reportes listos para la gerencia"],
      },
      person: {
        tab: "Para cada persona",
        title: "Aprende a tu ritmo.",
        desc: "Cada colaborador ve su ruta de aprendizaje, su progreso y sus próximos pasos.",
        points: ["Rutas cortas y prácticas", "Progreso y logros visibles", "Constancias descargables"],
      },
    },
    loop: {
      title: "Aprender. Practicar. Detectar. Mejorar.",
      subtitle: "Formación, simulaciones, seguimiento y evidencias conectados en una sola plataforma.",
      learning: {
        tag: "Aprendizaje",
        title: "Aprendizaje que invita a continuar",
        desc: "Videos, escenarios, actividades interactivas, progreso y logros.",
        chips: ["Video + escenario + actividad", "Rutas y próximos pasos", "Progreso y logros"],
        next: "Tu próxima formación",
        course: "Detecta el phishing",
        progress: "completado",
        start: "Comenzar",
      },
      sims: {
        tag: "Simulaciones",
        title: "Simulaciones con seguimiento",
        desc: "Entiende cómo interactúa tu equipo con las campañas simuladas y quién las reporta.",
        caption: "Resultado de una campaña simulada de demostración",
        results: [
          { label: "Reincidente", value: 1, tone: "critical" },
          { label: "Interactuó", value: 2, tone: "high" },
          { label: "Solo clic", value: 0, tone: "medium" },
          { label: "Reportó", value: 0, tone: "good" },
          { label: "No interactuó", value: 9, tone: "neutral" },
        ],
      },
      risk: {
        tag: "Riesgo humano",
        title: "Visibilidad del riesgo humano",
        desc: "Identifica dónde hace falta apoyo y orienta el seguimiento.",
        caption: "Interacción en simulaciones por área · Datos de demostración",
        areas: [
          { label: "Equipo de Finanzas", value: 67 },
          { label: "Equipo de Operaciones", value: 42 },
          { label: "Equipo de Tecnología", value: 25 },
        ],
      },
      evidence: {
        tag: "Evidencias",
        title: "Evidencias del aprendizaje",
        desc: "Constancias individuales y registro de las formaciones completadas.",
        items: ["Deepfakes y suplantación", "Protección de datos", "Detecta el phishing"],
        done: "Completado",
        download: "Descargar PDF",
      },
    },
    program: {
      eyebrow: "Servicio gestionado",
      title: "Programa de Concientización SOCZERO",
      subtitle: "Programa anual de formación y evaluación continua, por cantidad de usuarios. Nosotros lo implementamos y le damos seguimiento.",
      steps: [
        "Configuración inicial de la organización y sus usuarios",
        "Asignación de contenidos de formación",
        "Campañas periódicas de phishing simulado",
        "Evaluación de indicadores de riesgo por área",
        "Informes mensuales y recomendaciones de mejora",
        "Seguimiento del progreso y constancias de formación",
      ],
      cta: "Cotizar el programa",
    },
  },
  solutions: {
    eyebrow: "Soluciones para empresas",
    title: "Paquetes pensados para tu etapa",
    subtitle: "Combinaciones de servicios listas para cotizar, como proyecto puntual o contrato mensual.",
    includes: "Incluye",
    quote: "Solicitar cotización",
    custom: "¿Necesitas algo distinto? Armamos un alcance a medida.",
    items: [
      {
        id: "essential",
        name: "SOCZERO Esencial",
        audience: "Para pequeñas empresas",
        desc: "El primer paso para saber dónde estás y qué corregir primero.",
        includes: ["Diagnóstico inicial de seguridad", "Revisión de vulnerabilidades", "Revisión de MFA y accesos", "Revisión de respaldos", "Informe con recomendaciones priorizadas"],
      },
      {
        id: "protect",
        name: "SOCZERO Protección",
        audience: "Protección recurrente",
        desc: "Seguimiento continuo para que la seguridad no se quede en una auditoría.",
        includes: ["Evaluaciones periódicas de vulnerabilidades", "Seguimiento de CVE de tus tecnologías", "Revisión de configuraciones", "Reporte mensual"],
        featured: true,
      },
      {
        id: "monitor",
        name: "SOCZERO Monitoreo",
        audience: "Detección gestionada",
        desc: "Visibilidad sobre lo que ocurre en tus sistemas y escalamiento cuando importa.",
        includes: ["Recopilación centralizada de logs", "Reglas de detección", "Alertas y escalamiento", "Cobertura y niveles de servicio según contrato"],
      },
      {
        id: "cloud",
        name: "SOCZERO Nube",
        audience: "Infraestructura y nube",
        desc: "Auditoría enfocada en tu entorno Microsoft y tu infraestructura.",
        includes: ["Auditoría de Azure y Microsoft 365", "Identidades y Entra ID", "Redes, NSG y firewalls", "Servidores y controles de acceso", "Plan de endurecimiento"],
      },
    ] as Solution[],
  },
  process: {
    eyebrow: "Cómo trabajamos",
    title: "Del diagnóstico a la verificación",
    subtitle: "Un proceso simple y medible, el mismo en cada proyecto.",
    steps: [
      { title: "Evaluamos", desc: "Revisamos tus sistemas, configuraciones y exposición para entender el estado real de tu seguridad." },
      { title: "Priorizamos", desc: "Clasificamos los hallazgos por riesgo e impacto para que sepas qué corregir primero." },
      { title: "Protegemos", desc: "Aplicamos o acompañamos las correcciones, el endurecimiento y los controles acordados." },
      { title: "Verificamos", desc: "Comprobamos que las medidas funcionan y documentamos el resultado." },
    ],
  },
  reports: {
    eyebrow: "Ejemplos de informes",
    title: "Sabes exactamente qué vas a recibir",
    subtitle: "Cada informe incluye resumen ejecutivo, hallazgos, severidad, evidencia y recomendaciones.",
    note: "Informes de demostración con datos ficticios, disponibles a solicitud.",
    cta: "Solicitar un informe de ejemplo",
    items: [
      { title: "Evaluación de vulnerabilidades", sections: ["Resumen ejecutivo", "Activos evaluados", "Hallazgos por severidad", "Evidencias", "Plan de corrección"] },
      { title: "Incidentes y análisis de logs", sections: ["Resumen del incidente", "Cronología", "Indicadores de compromiso", "Impacto", "Medidas correctivas"] },
      { title: "Auditoría de seguridad Azure", sections: ["Resumen ejecutivo", "Identidades y MFA", "Redes y NSG", "Configuración de recursos", "Plan de endurecimiento"] },
    ],
  },
  tech: {
    eyebrow: "Tecnologías",
    title: "Plataformas y herramientas con las que trabajamos",
    note: "Marcas de sus respectivos dueños. No implica alianza oficial.",
  },
  intelligence: {
    eyebrow: "SOCZERO Inteligencia de Amenazas",
    title: "Inteligencia de vulnerabilidades y recursos técnicos",
    subtitle: "Alertas de CVE relevantes para tus sistemas y publicaciones técnicas sobre vulnerabilidades, endurecimiento y seguridad en la nube.",
    product: {
      name: "SOCZERO Alertas CVE",
      badge: "En desarrollo",
      desc: "Registra las tecnologías que usas y recibe solo las vulnerabilidades que te afectan, con enlaces a los avisos oficiales, información de explotación conocida y recomendaciones de actualización.",
      features: [
        "Alertas diarias por email filtradas por tus tecnologías",
        "Filtros por fabricante, producto y severidad (CVSS)",
        "Indicador de explotación conocida",
        "Panel con el estado de cada vulnerabilidad",
      ],
      cta: "Quiero acceso anticipado",
      panel: {
        title: "Panel de vulnerabilidades",
        stats: [
          { value: "12", label: "CVE detectadas" },
          { value: "3", label: "Críticas" },
          { value: "5", label: "Pendientes" },
        ],
        cols: ["Activo", "Riesgo", "Estado"],
        rows: [
          { asset: "Ubuntu Server", risk: "Crítico", level: "critical", status: "Revisar" },
          { asset: "Apache HTTP Server", risk: "Alto", level: "high", status: "Pendiente" },
          { asset: "OpenJDK", risk: "Medio", level: "medium", status: "En análisis" },
        ],
        disclaimer: "Datos ilustrativos, no corresponden a vulnerabilidades reales detectadas.",
      },
    },
    posts: {
      title: "Publicaciones técnicas",
      subtitle: "Muy pronto: guías y análisis escritos por nuestro equipo.",
      soon: "Próximamente",
      topics: [
        { tag: "Vulnerabilidades", title: "Cómo verificar si tu servidor Ubuntu está afectado por una vulnerabilidad de PHP" },
        { tag: "Endurecimiento", title: "Lista de verificación para endurecer un servidor Linux expuesto a Internet" },
        { tag: "Azure", title: "Errores comunes de configuración en Entra ID y cómo detectarlos" },
        { tag: "Incidentes", title: "Qué revisar en los logs durante las primeras horas de un incidente" },
      ],
    },
  },
  about: {
    title: "Nosotros",
    subtitle: "Protegemos tu tecnología, preparamos a tus personas y anticipamos las amenazas.",
    mission: {
      title: "Nuestra misión",
      body: "Ayudar a empresas de todos los tamaños a reducir su riesgo de ciberseguridad con soluciones prácticas, alcances claros y entregables concretos. Preferimos prometer menos y demostrar más.",
    },
    principles: {
      title: "Cómo entendemos la seguridad",
      items: [
        { title: "Evidencia antes que promesas", desc: "Cada hallazgo viene con evidencia y una recomendación que se puede ejecutar." },
        { title: "Alcance claro", desc: "Sabes qué se revisa, qué se entrega, con qué cobertura y en qué plazo." },
        { title: "Confidencialidad", desc: "Tratamos tu información con acuerdos de confidencialidad y acceso mínimo necesario." },
        { title: "Las personas importan", desc: "La tecnología no basta: preparamos a tu equipo para reconocer y reportar amenazas." },
      ],
    },
    coverage: {
      title: "Cobertura",
      body: "Atendemos clientes en Chile, Colombia y Canadá, con servicios entregados de forma remota y visitas presenciales según el proyecto.",
    },
  },
  cta: {
    title: "Empieza con una evaluación inicial",
    body: "Cuéntanos sobre tu infraestructura y tu equipo, y te proponemos un alcance concreto con entregables y plazos definidos.",
    button: "Solicitar evaluación inicial",
  },
  contact: {
    title: "Solicitud de diagnóstico y cotización",
    subtitle: "Cuéntanos qué necesitas. Te responderemos con una propuesta de alcance.",
    requestType: "Tipo de solicitud",
    requestTypes: {
      evaluation: "Evaluación inicial de seguridad",
      quote: "Cotización de un servicio o paquete",
      demo: "Demostración de Concientización (BlackMira)",
      incident: "Tengo un incidente en curso",
      cve: "Acceso anticipado a Alertas CVE",
      report: "Informe de ejemplo",
      other: "Otra consulta",
    },
    interest: "Servicio o paquete de interés",
    interestNone: "No estoy seguro",
    size: "Tamaño de la empresa",
    sizes: ["1–10 personas", "11–50 personas", "51–200 personas", "Más de 200 personas"],
    name: "Nombre",
    email: "Email corporativo",
    phone: "Teléfono (opcional)",
    company: "Empresa",
    message: "Mensaje",
    messageHint: "Ej.: cantidad de servidores o de colaboradores, uso de Azure / Microsoft 365, sitios web públicos…",
    send: "Enviar solicitud",
    note: "Al enviar se abrirá tu cliente de correo con la solicitud lista.",
    confidential:
      "No incluyas contraseñas ni datos sensibles en este formulario. La información que compartas será tratada de forma confidencial y usada solo para responder tu solicitud.",
    incidentTitle: "¿Incidente en curso?",
    incidentBody: "Llámanos directamente para una respuesta más rápida.",
    offices: "Contacto por país",
  },
  partners: { title: "Algunos de nuestros aliados" },
  footer: {
    tagline: "Protegemos tu tecnología, preparamos a tus personas y anticipamos las amenazas.",
    lines: "Líneas de servicio",
    privacy: "Política de privacidad",
    rights: "Todos los derechos reservados.",
  },
};

export type Dictionary = typeof es;

const en: Dictionary = {
  meta: {
    title: "SOCZERO Networks | We protect your technology, prepare your people and anticipate threats",
    description:
      "Infrastructure security, penetration testing, monitoring and incident response, vulnerability intelligence and cybersecurity awareness training with BlackMira.",
  },
  nav: {
    home: "Home",
    services: "Services",
    solutions: "Solutions",
    human: "Awareness",
    intelligence: "Intelligence",
    about: "About",
    contact: "Contact",
    cta: "Initial assessment",
  },
  hero: {
    eyebrow: "SOCZERO Networks",
    lines: ["We protect your technology.", "We prepare your people.", "We anticipate threats."],
    subtitle:
      "We help companies strengthen the security of their servers, networks, applications and cloud services, and prepare their teams against digital threats.",
    primary: "Request an initial security assessment",
    secondary: "View services",
    highlights: ["Reports with evidence and recommendations", "One-off projects or monthly contracts", "Scope and SLA defined in writing"],
  },
  pillars: {
    eyebrow: "A complete approach",
    title: "Technology, people and threats",
    items: [
      { id: "tech", title: "Technology", desc: "Protecting infrastructure, networks and applications." },
      { id: "people", title: "People", desc: "Training and human-risk reduction." },
      { id: "threats", title: "Threats", desc: "Intelligence, detection and response." },
    ],
  },
  services: {
    eyebrow: "Service lines",
    title: "Six areas, one goal: reducing your risk",
    subtitle:
      "Every service has a clear scope and a concrete deliverable. Hire it as a one-off project or as a recurring service.",
    deliverable: "Deliverable",
    quote: "Get a quote",
    viewAll: "View all services",
    explore: "Learn more",
    lines: [
      {
        id: "offensive",
        icon: "target",
        name: "SOCZERO Offensive Security",
        tagline: "Vulnerability assessments and authorized penetration testing.",
        pillar: "tech",
        items: [
          {
            id: "vulnerabilidades",
            icon: "search",
            title: "Vulnerability assessment",
            desc: "Review of Linux and Windows servers, websites, applications, exposed ports, vulnerable versions and insecure configurations.",
            deliverable: "Report with vulnerabilities, risk level, evidence and remediation recommendations.",
          },
          {
            id: "pentesting",
            icon: "target",
            title: "Penetration testing (Ethical Hacking)",
            desc: "Manual, authorized penetration testing of applications and infrastructure. A professional pentest goes beyond an automated scan.",
            deliverable: "Executive and technical report with exploited findings and verification re-test.",
          },
          {
            id: "waf",
            icon: "globe",
            title: "Web application security and WAF",
            desc: "Review of WAF rules, OWASP Top 10, SQL injection, XSS, rate limiting, false positives, logs and protection of public applications.",
            deliverable: "Assessment of current protection and recommended rule tuning.",
          },
        ],
      },
      {
        id: "infrastructure",
        icon: "cloud",
        name: "SOCZERO Infrastructure Security",
        tagline: "Audits, hardening, servers, networks, Azure and Microsoft 365.",
        pillar: "tech",
        items: [
          {
            id: "nube",
            icon: "cloud",
            title: "Infrastructure and cloud security",
            desc: "Audits of Azure, Microsoft 365, Entra ID, networks, VPN, NSG, firewalls, MFA, servers and access controls.",
            deliverable: "Configuration assessment and hardening plan.",
          },
          {
            id: "devsecops",
            icon: "code",
            title: "DevSecOps",
            desc: "Security controls built into CI/CD pipelines, dependency review and secure development practices.",
            deliverable: "Pipeline assessment and implemented controls.",
          },
        ],
      },
      {
        id: "detection",
        icon: "eye",
        name: "SOCZERO Detection & Response",
        tagline: "Monitoring, threat detection, log analysis and incident response.",
        pillar: "threats",
        items: [
          {
            id: "monitoreo",
            icon: "eye",
            title: "Threat monitoring and detection",
            desc: "Centralization and review of logs, authentication events, intrusion attempts, suspicious traffic and security alerts.",
            deliverable: "Alerts, periodic reports and response recommendations.",
            note: "Managed monitoring with coverage hours and SLA defined in the contract.",
          },
          {
            id: "incidentes",
            icon: "siren",
            title: "Incident response",
            desc: "Investigation of suspicious activity, log review, identification of indicators of compromise and support with containment and recovery.",
            deliverable: "Technical incident report, timeline, findings and corrective actions.",
          },
          {
            id: "malware",
            icon: "bug",
            title: "Malware analysis",
            desc: "Static and dynamic analysis of suspicious files: process behavior, persistence, registry changes and network communications.",
            deliverable: "First-level technical report with indicators of compromise and recommendations.",
          },
          {
            id: "ids",
            icon: "radar",
            title: "Intrusion detection and honeypots",
            desc: "Sensors and honeypots, monitoring with tools such as Security Onion and Suricata, and analysis of unauthorized access attempts.",
            deliverable: "Detection pilot with a report of observed activity.",
          },
        ],
      },
      {
        id: "intelligence",
        icon: "bell",
        name: "SOCZERO Threat Intelligence",
        tagline: "CVE monitoring, vulnerability alerts and threat intelligence.",
        pillar: "threats",
        page: "intelligence",
        items: [
          {
            id: "cve",
            icon: "bell",
            title: "CVE monitoring",
            desc: "Daily tracking of newly published vulnerabilities affecting the technologies your organization uses.",
            deliverable: "Alerts filtered by your technologies, with severity and update recommendations.",
          },
          {
            id: "threat-intel",
            icon: "radar",
            title: "Threat intelligence",
            desc: "Information on active campaigns and threats relevant to your industry and infrastructure.",
            deliverable: "Periodic bulletins with actionable recommendations.",
          },
        ],
      },
      {
        id: "human",
        icon: "users",
        name: "SOCZERO Security Awareness",
        tagline: "Training, phishing simulations and human-risk assessment with BlackMira.",
        pillar: "people",
        page: "human-security",
        items: [
          {
            id: "formacion",
            icon: "users",
            title: "Cybersecurity training",
            desc: "Courses, videos, interactive scenarios and activities on phishing, passwords, data protection, social engineering and current threats.",
            deliverable: "Assigned learning paths and per-person progress.",
          },
          {
            id: "phishing",
            icon: "target",
            title: "Phishing simulations",
            desc: "Controlled campaigns to assess how employees react to fraudulent emails and find opportunities to improve.",
            deliverable: "Per-campaign results: interaction, reports and repeat behavior.",
          },
          {
            id: "riesgo-humano",
            icon: "eye",
            title: "Human-risk assessment",
            desc: "Indicators by department, interaction tracking, phishing reports and detection of recurring behavior.",
            deliverable: "Risk indicators by department and recommendations.",
          },
          {
            id: "evidencias",
            icon: "shield",
            title: "Tracking and evidence",
            desc: "Learning records, training certificates, participant progress and reports for the organization.",
            deliverable: "Individual certificates and management reports.",
          },
        ],
      },
      {
        id: "resilience",
        icon: "refresh",
        name: "SOCZERO Resilience",
        tagline: "Business continuity, backups, BCP and disaster recovery.",
        pillar: "tech",
        items: [
          {
            id: "continuidad",
            icon: "refresh",
            title: "Business continuity and disaster recovery",
            desc: "BCP and DRP plans, backup review, RTO/RPO definition and recovery testing. Ideal for SMBs that have infrastructure but no real plan to recover from an incident.",
            deliverable: "Documented plan and recovery procedures.",
          },
          {
            id: "ciso",
            icon: "briefcase",
            title: "Virtual CISO",
            desc: "Part-time senior security leadership: strategy, policies, compliance and management reporting.",
            deliverable: "Security roadmap and periodic management reports.",
          },
        ],
      },
    ] as ServiceLine[],
  },
  human: {
    eyebrow: "SOCZERO Security Awareness",
    title: "Security starts with people.",
    body: "We strengthen your organization's cybersecurity culture through continuous training, phishing simulations and human-risk assessment. We turn the results into concrete actions to reduce incidents caused by human error.",
    teaser: {
      title: "Your technology may be protected. Is your team?",
      body: "A single fraudulent email can compromise an organization even when technical security controls are in place. Prepare your employees to recognize digital threats through interactive training, phishing simulations and continuous follow-up of their learning.",
      motto: "Train. Simulate. Assess. Improve.",
      more: "Explore the service",
    },
    demo: "Request a demo",
    platform: "Powered by",
    visit: "Visit blackmira.com",
    demoNote: "Illustrative view of the platform · Demo data",
    offer: { title: "What's included" },
    views: {
      title: "One platform. Two connected experiences.",
      subtitle: "Visibility for your organization. A clear path for every person.",
      org: {
        tab: "For your organization",
        title: "Manage and support.",
        desc: "See where your organization stands and focus follow-up where it's needed most.",
        points: ["Progress by department and person", "Results of every campaign", "Management-ready reports"],
      },
      person: {
        tab: "For every person",
        title: "Learn at your own pace.",
        desc: "Every employee sees their learning path, progress and next steps.",
        points: ["Short, practical paths", "Visible progress and achievements", "Downloadable certificates"],
      },
    },
    loop: {
      title: "Learn. Practice. Detect. Improve.",
      subtitle: "Training, simulations, follow-up and evidence connected in a single platform.",
      learning: {
        tag: "Learning",
        title: "Learning people want to continue",
        desc: "Videos, scenarios, interactive activities, progress and achievements.",
        chips: ["Video + scenario + activity", "Paths and next steps", "Progress and achievements"],
        next: "Your next training",
        course: "Spot the phish",
        progress: "complete",
        start: "Start",
      },
      sims: {
        tag: "Simulations",
        title: "Simulations with follow-up",
        desc: "Understand how your team interacts with simulated campaigns and who reports them.",
        caption: "Result of a demo simulated campaign",
        results: [
          { label: "Repeat offender", value: 1, tone: "critical" },
          { label: "Interacted", value: 2, tone: "high" },
          { label: "Clicked only", value: 0, tone: "medium" },
          { label: "Reported", value: 0, tone: "good" },
          { label: "No interaction", value: 9, tone: "neutral" },
        ],
      },
      risk: {
        tag: "Human risk",
        title: "Human-risk visibility",
        desc: "Identify where support is needed and focus your follow-up.",
        caption: "Simulation interaction by department · Demo data",
        areas: [
          { label: "Finance team", value: 67 },
          { label: "Operations team", value: 42 },
          { label: "Technology team", value: 25 },
        ],
      },
      evidence: {
        tag: "Evidence",
        title: "Evidence of learning",
        desc: "Individual certificates and records of completed training.",
        items: ["Deepfakes and impersonation", "Data protection", "Spot the phish"],
        done: "Completed",
        download: "Download PDF",
      },
    },
    program: {
      eyebrow: "Managed service",
      title: "SOCZERO Awareness Program",
      subtitle: "An annual training and continuous assessment program, priced per user. We implement it and handle the follow-up.",
      steps: [
        "Initial setup of the organization and its users",
        "Assignment of training content",
        "Periodic simulated phishing campaigns",
        "Assessment of risk indicators by department",
        "Monthly reports and improvement recommendations",
        "Progress tracking and training certificates",
      ],
      cta: "Get a quote for the program",
    },
  },
  solutions: {
    eyebrow: "Business solutions",
    title: "Packages designed for your stage",
    subtitle: "Ready-to-quote service bundles, as a one-off project or a monthly contract.",
    includes: "Includes",
    quote: "Request a quote",
    custom: "Need something different? We'll build a custom scope.",
    items: [
      {
        id: "essential",
        name: "SOCZERO Essential",
        audience: "For small businesses",
        desc: "The first step to know where you stand and what to fix first.",
        includes: ["Initial security assessment", "Vulnerability review", "MFA and access review", "Backup review", "Report with prioritized recommendations"],
      },
      {
        id: "protect",
        name: "SOCZERO Protect",
        audience: "Recurring protection",
        desc: "Ongoing follow-up so security doesn't stop at a single audit.",
        includes: ["Periodic vulnerability assessments", "CVE tracking for your technologies", "Configuration review", "Monthly report"],
        featured: true,
      },
      {
        id: "monitor",
        name: "SOCZERO Monitor",
        audience: "Managed detection",
        desc: "Visibility into what happens in your systems, and escalation when it matters.",
        includes: ["Centralized log collection", "Detection rules", "Alerts and escalation", "Coverage and SLA per contract"],
      },
      {
        id: "cloud",
        name: "SOCZERO Cloud",
        audience: "Infrastructure and cloud",
        desc: "An audit focused on your Microsoft environment and infrastructure.",
        includes: ["Azure and Microsoft 365 audit", "Identities and Entra ID", "Networks, NSG and firewalls", "Servers and access controls", "Hardening plan"],
      },
    ] as Solution[],
  },
  process: {
    eyebrow: "How we work",
    title: "From assessment to verification",
    subtitle: "A simple, measurable process, the same on every project.",
    steps: [
      { title: "Assess", desc: "We review your systems, configurations and exposure to understand your actual security posture." },
      { title: "Prioritize", desc: "We rank findings by risk and impact so you know what to fix first." },
      { title: "Protect", desc: "We apply or guide the agreed remediation, hardening and controls." },
      { title: "Verify", desc: "We confirm the measures work and document the outcome." },
    ],
  },
  reports: {
    eyebrow: "Sample reports",
    title: "You know exactly what you'll receive",
    subtitle: "Every report includes an executive summary, findings, severity, evidence and recommendations.",
    note: "Demo reports with fictitious data, available on request.",
    cta: "Request a sample report",
    items: [
      { title: "Vulnerability assessment", sections: ["Executive summary", "Assets in scope", "Findings by severity", "Evidence", "Remediation plan"] },
      { title: "Incident and log analysis", sections: ["Incident summary", "Timeline", "Indicators of compromise", "Impact", "Corrective actions"] },
      { title: "Azure security audit", sections: ["Executive summary", "Identities and MFA", "Networks and NSG", "Resource configuration", "Hardening plan"] },
    ],
  },
  tech: {
    eyebrow: "Technologies",
    title: "Platforms and tools we work with",
    note: "Trademarks of their respective owners. No official partnership implied.",
  },
  intelligence: {
    eyebrow: "SOCZERO Threat Intelligence",
    title: "Vulnerability intelligence and technical resources",
    subtitle: "CVE alerts relevant to your systems and technical articles on vulnerabilities, hardening and cloud security.",
    product: {
      name: "SOCZERO CVE Alerts",
      badge: "In development",
      desc: "Register the technologies you use and receive only the vulnerabilities that affect you, with links to official advisories, known-exploitation information and update recommendations.",
      features: [
        "Daily email alerts filtered by your technologies",
        "Vendor, product and severity (CVSS) filters",
        "Known-exploitation indicator",
        "Dashboard with the status of each vulnerability",
      ],
      cta: "Request early access",
      panel: {
        title: "Vulnerability dashboard",
        stats: [
          { value: "12", label: "CVEs detected" },
          { value: "3", label: "Critical" },
          { value: "5", label: "Pending" },
        ],
        cols: ["Asset", "Risk", "Status"],
        rows: [
          { asset: "Ubuntu Server", risk: "Critical", level: "critical", status: "Review" },
          { asset: "Apache HTTP Server", risk: "High", level: "high", status: "Pending" },
          { asset: "OpenJDK", risk: "Medium", level: "medium", status: "Analyzing" },
        ],
        disclaimer: "Illustrative data; does not reflect real detected vulnerabilities.",
      },
    },
    posts: {
      title: "Technical articles",
      subtitle: "Coming soon: guides and analysis written by our team.",
      soon: "Coming soon",
      topics: [
        { tag: "Vulnerabilities", title: "How to check whether your Ubuntu server is affected by a PHP vulnerability" },
        { tag: "Hardening", title: "Checklist for hardening an Internet-facing Linux server" },
        { tag: "Azure", title: "Common Entra ID misconfigurations and how to detect them" },
        { tag: "Incidents", title: "What to check in your logs during the first hours of an incident" },
      ],
    },
  },
  about: {
    title: "About us",
    subtitle: "We protect your technology, prepare your people and anticipate threats.",
    mission: {
      title: "Our mission",
      body: "Help companies of every size reduce their cybersecurity risk with practical solutions, clear scopes and concrete deliverables. We'd rather promise less and prove more.",
    },
    principles: {
      title: "How we approach security",
      items: [
        { title: "Evidence over promises", desc: "Every finding comes with evidence and an actionable recommendation." },
        { title: "Clear scope", desc: "You know what is reviewed, what is delivered, with what coverage and by when." },
        { title: "Confidentiality", desc: "We handle your information under confidentiality agreements and least-privilege access." },
        { title: "People matter", desc: "Technology isn't enough: we prepare your team to recognize and report threats." },
      ],
    },
    coverage: {
      title: "Coverage",
      body: "We serve clients in Chile, Colombia and Canada, with services delivered remotely and on-site visits depending on the project.",
    },
  },
  cta: {
    title: "Start with an initial assessment",
    body: "Tell us about your infrastructure and your team, and we'll propose a concrete scope with defined deliverables and timelines.",
    button: "Request initial assessment",
  },
  contact: {
    title: "Assessment and quote request",
    subtitle: "Tell us what you need. We'll reply with a proposed scope.",
    requestType: "Request type",
    requestTypes: {
      evaluation: "Initial security assessment",
      quote: "Quote for a service or package",
      demo: "Security Awareness demo (BlackMira)",
      incident: "I have an ongoing incident",
      cve: "Early access to CVE Alerts",
      report: "Sample report",
      other: "Other inquiry",
    },
    interest: "Service or package of interest",
    interestNone: "Not sure",
    size: "Company size",
    sizes: ["1–10 people", "11–50 people", "51–200 people", "200+ people"],
    name: "Name",
    email: "Work email",
    phone: "Phone (optional)",
    company: "Company",
    message: "Message",
    messageHint: "E.g. number of servers or employees, Azure / Microsoft 365 usage, public websites…",
    send: "Send request",
    note: "Submitting will open your email client with the request ready.",
    confidential:
      "Do not include passwords or sensitive data in this form. The information you share will be treated confidentially and used only to respond to your request.",
    incidentTitle: "Ongoing incident?",
    incidentBody: "Call us directly for a faster response.",
    offices: "Contact by country",
  },
  partners: { title: "Some of our partners" },
  footer: {
    tagline: "We protect your technology, prepare your people and anticipate threats.",
    lines: "Service lines",
    privacy: "Privacy policy",
    rights: "All rights reserved.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
