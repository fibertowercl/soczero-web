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
  | "briefcase";

export type Service = {
  id: string;
  icon: IconName;
  title: string;
  desc: string;
  deliverable: string;
  note?: string;
};

export type Solution = {
  id: string;
  name: string;
  audience: string;
  desc: string;
  includes: string[];
  featured?: boolean;
};

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
    title: "SOCZERO Networks | Evaluación de vulnerabilidades, seguridad en la nube y monitoreo",
    description:
      "Ayudamos a empresas a fortalecer la seguridad de sus servidores, redes, aplicaciones y servicios en la nube mediante evaluaciones técnicas, monitoreo y gestión de amenazas.",
  },
  nav: {
    home: "Inicio",
    services: "Servicios",
    solutions: "Soluciones",
    intelligence: "Security Intelligence",
    about: "Nosotros",
    contact: "Contacto",
    cta: "Evaluación inicial",
  },
  hero: {
    eyebrow: "SOCZERO Networks",
    lines: ["Identificamos vulnerabilidades.", "Protegemos tu infraestructura.", "Reducimos tus riesgos."],
    subtitle:
      "Ayudamos a empresas a fortalecer la seguridad de sus servidores, redes, aplicaciones y servicios en la nube mediante evaluaciones técnicas, monitoreo y gestión de amenazas.",
    primary: "Solicita una evaluación inicial de seguridad",
    secondary: "Ver servicios",
    highlights: ["Informes con evidencia y recomendaciones", "Proyectos puntuales o contratos mensuales", "Alcance y SLA definidos por escrito"],
  },
  services: {
    eyebrow: "Servicios",
    title: "Qué problema resolvemos y qué recibes",
    subtitle:
      "Cada servicio tiene un alcance claro y un entregable concreto. Puedes contratarlo como proyecto puntual o como servicio recurrente.",
    deliverable: "Entregable",
    quote: "Cotizar",
    viewAll: "Ver todos los servicios",
    core: {
      title: "Servicios principales",
      subtitle: "El punto de partida para la mayoría de las empresas.",
      items: [
        {
          id: "vulnerabilidades",
          icon: "search",
          title: "Evaluación de vulnerabilidades",
          desc: "Revisión de servidores Linux y Windows, sitios web, aplicaciones, puertos expuestos, versiones vulnerables y configuraciones inseguras.",
          deliverable: "Informe con vulnerabilidades, nivel de riesgo, evidencias y recomendaciones de corrección.",
        },
        {
          id: "nube",
          icon: "cloud",
          title: "Seguridad de infraestructura y nube",
          desc: "Auditorías de Azure, Microsoft 365, Entra ID, redes, VPN, NSG, firewalls, MFA, servidores y controles de acceso.",
          deliverable: "Diagnóstico de configuración y plan de endurecimiento (hardening).",
        },
        {
          id: "monitoreo",
          icon: "eye",
          title: "Monitoreo y detección de amenazas",
          desc: "Centralización y revisión de logs, eventos de autenticación, intentos de intrusión, tráfico sospechoso y alertas de seguridad.",
          deliverable: "Alertas, informes periódicos y recomendaciones de respuesta.",
          note: "Monitoreo gestionado con horario de cobertura y SLA definidos en el contrato.",
        },
        {
          id: "incidentes",
          icon: "siren",
          title: "Respuesta a incidentes",
          desc: "Investigación de actividad sospechosa, revisión de logs, análisis inicial de malware, identificación de indicadores de compromiso y apoyo en contención y recuperación.",
          deliverable: "Informe técnico del incidente, cronología, hallazgos y medidas correctivas.",
        },
        {
          id: "continuidad",
          icon: "refresh",
          title: "Continuidad operativa y recuperación ante desastres",
          desc: "Planes BCP y DRP, revisión de respaldos, definición de RTO/RPO y pruebas de recuperación. Ideal para pymes con infraestructura pero sin un plan real para recuperarse de un incidente.",
          deliverable: "Plan documentado y procedimientos de recuperación.",
        },
      ] as Service[],
    },
    specialized: {
      title: "Servicios especializados",
      subtitle: "Capacidades técnicas para necesidades concretas.",
      items: [
        {
          id: "malware",
          icon: "bug",
          title: "Análisis de malware y amenazas",
          desc: "Análisis estático y dinámico de archivos sospechosos: comportamiento de procesos, persistencia, modificaciones del registro y comunicaciones de red.",
          deliverable: "Informe técnico de primer nivel con indicadores de compromiso y recomendaciones.",
        },
        {
          id: "waf",
          icon: "globe",
          title: "Seguridad de aplicaciones web y WAF",
          desc: "Revisión de reglas WAF, OWASP Top 10, SQL injection, XSS, rate limiting, falsos positivos, logs y protección de aplicaciones públicas.",
          deliverable: "Diagnóstico de la protección actual y ajustes recomendados de reglas.",
        },
        {
          id: "ids",
          icon: "radar",
          title: "Detección de intrusiones y honeypots",
          desc: "Implementación de sensores y honeypots, monitoreo con herramientas como Security Onion y Suricata, y análisis de intentos de acceso no autorizado.",
          deliverable: "Piloto de detección con informe de actividad observada.",
        },
      ] as Service[],
    },
    advanced: {
      title: "Servicios complementarios",
      subtitle: "Con alcance definido según cada proyecto, ejecutados por nuestro equipo o especialistas asociados.",
      items: [
        {
          id: "ethical-hacking",
          icon: "target",
          title: "Ethical Hacking / Pentesting",
          desc: "Pruebas de intrusión manuales sobre aplicaciones e infraestructura. Un pentest profesional va más allá de un escaneo automatizado.",
          deliverable: "Informe ejecutivo y técnico con hallazgos explotados y re-test de verificación.",
        },
        {
          id: "devsecops",
          icon: "code",
          title: "DevSecOps",
          desc: "Integración de controles de seguridad en pipelines CI/CD, revisión de dependencias y buenas prácticas de desarrollo seguro.",
          deliverable: "Diagnóstico del pipeline y controles implementados.",
        },
        {
          id: "ciso",
          icon: "briefcase",
          title: "CISO Virtual",
          desc: "Liderazgo de seguridad de nivel senior a tiempo parcial: estrategia, políticas, cumplimiento y reporte a la dirección.",
          deliverable: "Hoja de ruta de seguridad y reportes periódicos a la gerencia.",
        },
      ] as Service[],
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
        name: "SOCZERO Essential",
        audience: "Para pequeñas empresas",
        desc: "El primer paso para saber dónde estás y qué corregir primero.",
        includes: ["Diagnóstico inicial de seguridad", "Revisión de vulnerabilidades", "Revisión de MFA y accesos", "Revisión de respaldos", "Informe con recomendaciones priorizadas"],
      },
      {
        id: "protect",
        name: "SOCZERO Protect",
        audience: "Protección recurrente",
        desc: "Seguimiento continuo para que la seguridad no se quede en una auditoría.",
        includes: ["Evaluaciones periódicas de vulnerabilidades", "Seguimiento de CVE de tus tecnologías", "Revisión de configuraciones", "Reporte mensual"],
        featured: true,
      },
      {
        id: "monitor",
        name: "SOCZERO Monitor",
        audience: "Detección gestionada",
        desc: "Visibilidad sobre lo que ocurre en tus sistemas y escalamiento cuando importa.",
        includes: ["Recopilación centralizada de logs", "Reglas de detección", "Alertas y escalamiento", "Cobertura y SLA según contrato"],
      },
      {
        id: "cloud",
        name: "SOCZERO Cloud",
        audience: "Infraestructura y nube",
        desc: "Auditoría enfocada en tu entorno Microsoft y tu infraestructura.",
        includes: ["Auditoría de Azure y Microsoft 365", "Identidades y Entra ID", "Redes, NSG y firewalls", "Servidores y controles de acceso", "Plan de hardening"],
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
      { title: "Auditoría de seguridad Azure", sections: ["Resumen ejecutivo", "Identidades y MFA", "Redes y NSG", "Configuración de recursos", "Plan de hardening"] },
    ],
  },
  tech: {
    eyebrow: "Tecnologías",
    title: "Plataformas y herramientas con las que trabajamos",
    note: "Marcas de sus respectivos dueños. No implica alianza oficial.",
  },
  intelligence: {
    eyebrow: "SOCZERO Security Intelligence",
    title: "Inteligencia de vulnerabilidades y recursos técnicos",
    subtitle: "Alertas de CVE relevantes para tus sistemas y publicaciones técnicas sobre vulnerabilidades, hardening y seguridad en la nube.",
    product: {
      name: "SOCZERO CVE Intelligence",
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
        { tag: "Hardening", title: "Lista de verificación para endurecer un servidor Linux expuesto a Internet" },
        { tag: "Azure", title: "Errores comunes de configuración en Entra ID y cómo detectarlos" },
        { tag: "Incidentes", title: "Qué revisar en los logs durante las primeras horas de un incidente" },
      ],
    },
  },
  about: {
    title: "Nosotros",
    subtitle: "Especialistas en ciberseguridad enfocados en resultados verificables.",
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
        { title: "Seguridad práctica", desc: "Priorizamos lo que más reduce tu riesgo con los recursos que tienes." },
      ],
    },
    coverage: {
      title: "Cobertura",
      body: "Atendemos clientes en Chile, Colombia y Canadá, con servicios entregados de forma remota y visitas presenciales según el proyecto.",
    },
  },
  cta: {
    title: "Empieza con una evaluación inicial",
    body: "Cuéntanos sobre tu infraestructura y te proponemos un alcance concreto, con entregables y plazos definidos.",
    button: "Solicitar evaluación inicial",
  },
  contact: {
    title: "Solicitud de diagnóstico y cotización",
    subtitle: "Cuéntanos qué necesitas. Te responderemos con una propuesta de alcance.",
    requestType: "Tipo de solicitud",
    requestTypes: {
      evaluation: "Evaluación inicial de seguridad",
      quote: "Cotización de un servicio o paquete",
      incident: "Tengo un incidente en curso",
      cve: "Acceso anticipado a CVE Intelligence",
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
    messageHint: "Ej.: cantidad de servidores, uso de Azure / Microsoft 365, sitios web públicos…",
    send: "Enviar solicitud",
    note: "Al enviar se abrirá tu cliente de correo con la solicitud lista.",
    confidential:
      "No incluyas contraseñas ni datos sensibles en este formulario. La información que compartas será tratada de forma confidencial y usada solo para responder tu solicitud.",
    incidentTitle: "¿Incidente en curso?",
    incidentBody: "Llámanos directamente para una respuesta más rápida.",
    offices: "Contacto por país",
  },
  partners: { title: "Algunos de nuestros partners" },
  footer: {
    tagline: "Evaluación de vulnerabilidades, seguridad en la nube, monitoreo y respuesta a incidentes.",
    privacy: "Política de privacidad",
    rights: "Todos los derechos reservados.",
  },
};

export type Dictionary = typeof es;

const en: Dictionary = {
  meta: {
    title: "SOCZERO Networks | Vulnerability assessment, cloud security and monitoring",
    description:
      "We help companies strengthen the security of their servers, networks, applications and cloud services through technical assessments, monitoring and threat management.",
  },
  nav: {
    home: "Home",
    services: "Services",
    solutions: "Solutions",
    intelligence: "Security Intelligence",
    about: "About",
    contact: "Contact",
    cta: "Initial assessment",
  },
  hero: {
    eyebrow: "SOCZERO Networks",
    lines: ["We identify vulnerabilities.", "We protect your infrastructure.", "We reduce your risk."],
    subtitle:
      "We help companies strengthen the security of their servers, networks, applications and cloud services through technical assessments, monitoring and threat management.",
    primary: "Request an initial security assessment",
    secondary: "View services",
    highlights: ["Reports with evidence and recommendations", "One-off projects or monthly contracts", "Scope and SLA defined in writing"],
  },
  services: {
    eyebrow: "Services",
    title: "The problem we solve and what you get",
    subtitle:
      "Every service has a clear scope and a concrete deliverable. Hire it as a one-off project or as a recurring service.",
    deliverable: "Deliverable",
    quote: "Get a quote",
    viewAll: "View all services",
    core: {
      title: "Core services",
      subtitle: "The starting point for most companies.",
      items: [
        {
          id: "vulnerabilidades",
          icon: "search",
          title: "Vulnerability assessment",
          desc: "Review of Linux and Windows servers, websites, applications, exposed ports, vulnerable versions and insecure configurations.",
          deliverable: "Report with vulnerabilities, risk level, evidence and remediation recommendations.",
        },
        {
          id: "nube",
          icon: "cloud",
          title: "Infrastructure and cloud security",
          desc: "Audits of Azure, Microsoft 365, Entra ID, networks, VPN, NSG, firewalls, MFA, servers and access controls.",
          deliverable: "Configuration assessment and hardening plan.",
        },
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
          desc: "Investigation of suspicious activity, log review, initial malware analysis, identification of indicators of compromise and support with containment and recovery.",
          deliverable: "Technical incident report, timeline, findings and corrective actions.",
        },
        {
          id: "continuidad",
          icon: "refresh",
          title: "Business continuity and disaster recovery",
          desc: "BCP and DRP plans, backup review, RTO/RPO definition and recovery testing. Ideal for SMBs that have infrastructure but no real plan to recover from an incident.",
          deliverable: "Documented plan and recovery procedures.",
        },
      ] as Service[],
    },
    specialized: {
      title: "Specialized services",
      subtitle: "Technical capabilities for specific needs.",
      items: [
        {
          id: "malware",
          icon: "bug",
          title: "Malware and threat analysis",
          desc: "Static and dynamic analysis of suspicious files: process behavior, persistence, registry changes and network communications.",
          deliverable: "First-level technical report with indicators of compromise and recommendations.",
        },
        {
          id: "waf",
          icon: "globe",
          title: "Web application security and WAF",
          desc: "Review of WAF rules, OWASP Top 10, SQL injection, XSS, rate limiting, false positives, logs and protection of public applications.",
          deliverable: "Assessment of current protection and recommended rule tuning.",
        },
        {
          id: "ids",
          icon: "radar",
          title: "Intrusion detection and honeypots",
          desc: "Deployment of sensors and honeypots, monitoring with tools such as Security Onion and Suricata, and analysis of unauthorized access attempts.",
          deliverable: "Detection pilot with a report of observed activity.",
        },
      ] as Service[],
    },
    advanced: {
      title: "Complementary services",
      subtitle: "Scope defined per project, delivered by our team or partner specialists.",
      items: [
        {
          id: "ethical-hacking",
          icon: "target",
          title: "Ethical Hacking / Pentesting",
          desc: "Manual penetration testing of applications and infrastructure. A professional pentest goes beyond an automated scan.",
          deliverable: "Executive and technical report with exploited findings and verification re-test.",
        },
        {
          id: "devsecops",
          icon: "code",
          title: "DevSecOps",
          desc: "Security controls built into CI/CD pipelines, dependency review and secure development practices.",
          deliverable: "Pipeline assessment and implemented controls.",
        },
        {
          id: "ciso",
          icon: "briefcase",
          title: "Virtual CISO",
          desc: "Part-time senior security leadership: strategy, policies, compliance and management reporting.",
          deliverable: "Security roadmap and periodic management reports.",
        },
      ] as Service[],
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
    eyebrow: "SOCZERO Security Intelligence",
    title: "Vulnerability intelligence and technical resources",
    subtitle: "CVE alerts relevant to your systems and technical articles on vulnerabilities, hardening and cloud security.",
    product: {
      name: "SOCZERO CVE Intelligence",
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
    subtitle: "Cybersecurity specialists focused on verifiable results.",
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
        { title: "Practical security", desc: "We prioritize what reduces your risk the most with the resources you have." },
      ],
    },
    coverage: {
      title: "Coverage",
      body: "We serve clients in Chile, Colombia and Canada, with services delivered remotely and on-site visits depending on the project.",
    },
  },
  cta: {
    title: "Start with an initial assessment",
    body: "Tell us about your infrastructure and we'll propose a concrete scope with defined deliverables and timelines.",
    button: "Request initial assessment",
  },
  contact: {
    title: "Assessment and quote request",
    subtitle: "Tell us what you need. We'll reply with a proposed scope.",
    requestType: "Request type",
    requestTypes: {
      evaluation: "Initial security assessment",
      quote: "Quote for a service or package",
      incident: "I have an ongoing incident",
      cve: "Early access to CVE Intelligence",
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
    messageHint: "E.g. number of servers, Azure / Microsoft 365 usage, public websites…",
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
    tagline: "Vulnerability assessment, cloud security, monitoring and incident response.",
    privacy: "Privacy policy",
    rights: "All rights reserved.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
