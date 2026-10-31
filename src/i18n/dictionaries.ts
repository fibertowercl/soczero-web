import type { Locale } from "./config";

export type ServiceKey =
  | "soc"
  | "hacking"
  | "noc"
  | "awareness"
  | "devsecops"
  | "teams"
  | "ciso"
  | "management";

export const contacts = [
  { country: { es: "Chile", en: "Chile" }, phone: "+56 9 7995 8716", email: "contacto@soczero.com" },
  { country: { es: "Colombia", en: "Colombia" }, phone: "+57 310 446 5701", email: "contacto@soczero.com" },
  { country: { es: "Canadá", en: "Canada" }, phone: "+1 514 573 9260", email: "contact@soczero.ca" },
];

const es = {
  meta: {
    title: "SOCZERO Networks | Ciberseguridad 24/7",
    description:
      "SOC 24/7, Ethical Hacking, NOC, CISO virtual y gestión de ciberseguridad para organizaciones de cualquier tamaño.",
  },
  nav: {
    home: "Inicio",
    services: "Servicios",
    products: "Productos",
    contact: "Contacto",
    cta: "Solicitar servicio",
  },
  hero: {
    badge: "Centro de Operaciones de Seguridad 24/7",
    title1: "Protege tu información",
    title2: "en todo momento",
    subtitle:
      "Combinamos ciencia y tecnología para entregar protección continua a tu organización frente a amenazas e incidentes de ciberseguridad.",
    primary: "Solicitar servicio",
    secondary: "Ver servicios",
    stats: [
      { value: "24/7", label: "Monitoreo continuo" },
      { value: "3", label: "Países: Chile, Colombia y Canadá" },
      { value: "100%", label: "Gestión remota en la nube" },
    ],
  },
  intro: {
    eyebrow: "Seguridad ofensiva y defensiva",
    title: "Los ciberataques se pueden prevenir",
    body: "Somos un equipo de especialistas en ciberseguridad con amplia experiencia internacional. Nuestra misión es entregar soluciones efectivas y prácticas que fortalezcan rápidamente la postura de seguridad de tu organización, de forma costo-eficiente.",
    points: [
      "Gestión segura de contraseñas",
      "Canales de comunicación cifrados",
      "Seguridad de redes",
      "Evaluación de vulnerabilidades",
      "Capacitación de colaboradores",
      "Respuesta a incidentes",
    ],
  },
  services: {
    eyebrow: "Servicios",
    title: "Soluciones especializadas de ciberseguridad",
    subtitle:
      "Medidas proactivas, respuesta reactiva y soporte continuo. Elige un servicio o un paquete integral de protección.",
    more: "Más información",
    items: {
      soc: {
        title: "SOC 24/7",
        short: "Expertos monitoreando tu red y tus sistemas las 24 horas, los 7 días de la semana.",
        long: "Servicio 100% gestionado de forma remota, disponible para cualquier organización desde cinco activos o endpoints, a un costo muy accesible. No necesitas invertir en software ni hardware adicional: usamos tecnologías propias basadas en la nube.",
        bullets: [
          "Tranquilidad: detectamos y atendemos problemas antes de que impacten tu operación",
          "Herramientas avanzadas de detección de amenazas",
          "Solución escalable y adaptable",
          "Menos tiempo de inactividad",
        ],
      },
      hacking: {
        title: "Ethical Hacking",
        short: "Evaluaciones de seguridad mediante ataques simulados para medir la resiliencia de tus activos.",
        long: "Simulamos ataques reales sobre aplicaciones, infraestructura y personas para descubrir vulnerabilidades antes que los atacantes, con informes priorizados y recomendaciones accionables.",
        bullets: ["Pentesting web, móvil e infraestructura", "Ingeniería social", "Informe ejecutivo y técnico", "Re-test de verificación"],
      },
      noc: {
        title: "NOC",
        short: "Centro de Operaciones de Red para detectar, analizar y prevenir problemas en tu red.",
        long: "Monitoreo continuo y gestión de incidentes de red para mantener la disponibilidad y el rendimiento de tus servicios críticos.",
        bullets: ["Monitoreo de disponibilidad", "Gestión de incidentes", "Análisis de rendimiento"],
      },
      awareness: {
        title: "Security Awareness",
        short: "Construye una cultura de ciberseguridad: tus usuarios aprenden a reconocer amenazas reales.",
        long: "Programas de concientización y simulaciones de phishing que convierten a tus colaboradores en la primera línea de defensa.",
        bullets: ["Simulaciones de phishing", "Capacitación continua", "Métricas de riesgo humano"],
      },
      devsecops: {
        title: "DevSecOps",
        short: "Optimiza tus prácticas DevOps e integra la seguridad en todo el ciclo de desarrollo.",
        long: "Integramos controles de seguridad en tus pipelines CI/CD, revisión de código y gestión de dependencias, sin frenar a tu equipo.",
        bullets: ["Seguridad en CI/CD", "Análisis SAST / DAST / SCA", "Seguridad en la nube y contenedores"],
      },
      teams: {
        title: "Red, Blue & Purple Teams",
        short: "Servicios integrados de equipos ofensivos y defensivos para proteger tu información.",
        long: "Nuestros equipos Red, Blue y Purple trabajan juntos para identificar vulnerabilidades, prevenir ataques y simular amenazas reales en organizaciones de cualquier tamaño.",
        bullets: ["Simulación de adversarios", "Mejora de detección y respuesta", "Ejercicios colaborativos"],
      },
      ciso: {
        title: "CISO Virtual",
        short: "Liderazgo de seguridad de nivel senior alineado con los objetivos de tu negocio.",
        long: "Un CISO experimentado a tu disposición, sin el costo de una contratación a tiempo completo: estrategia, gobierno, cumplimiento y reporte a la dirección.",
        bullets: ["Estrategia y hoja de ruta", "Gobierno y cumplimiento", "Reporte a directorio"],
      },
      management: {
        title: "Gestión de Ciberseguridad",
        short: "Un enfoque integral y proactivo para fortalecer tu infraestructura digital.",
        long: "Combinamos la gestión operativa de expertos con procesos automatizados impulsados por inteligencia artificial, con soluciones a medida y cumplimiento normativo.",
        bullets: ["Políticas de ciberseguridad", "Auditorías de seguridad continuas", "Estrategias personalizadas", "Evaluación de vulnerabilidades y riesgos"],
      },
    } satisfies Record<ServiceKey, { title: string; short: string; long: string; bullets: string[] }>,
  },
  servicesPage: {
    title: "Servicios",
    subtitle: "Soluciones innovadoras y de vanguardia para empresas y personas.",
    cta: "Cotizar servicio",
  },
  products: {
    eyebrow: "Plataforma SaaS",
    title: "Herramientas de ciberseguridad como servicio",
    subtitle: "Aplicaciones desarrolladas por SOCZERO para que tu equipo esté siempre un paso adelante.",
    soon: "Próximamente",
    items: [
      {
        name: "SOCZERO CVE Alerts",
        desc: "Recibe cada día por email las nuevas vulnerabilidades y CVE relevantes para tu tecnología, filtradas y priorizadas.",
        features: ["Resumen diario por email", "Filtros por fabricante y producto", "Priorización por severidad (CVSS)"],
      },
    ],
    notify: "Quiero acceso anticipado",
  },
  partners: { title: "Algunos de nuestros partners" },
  cta: {
    title: "Déjanos protegerte",
    body: "Solicita el servicio que mejor se ajuste a tu negocio, o elige un paquete integral de protección entregado por profesionales de primer nivel.",
    button: "Solicitar servicio",
  },
  contact: {
    title: "Contacto",
    subtitle: "Cuéntanos qué necesitas y te contactaremos a la brevedad.",
    name: "Nombre",
    email: "Email",
    phone: "Teléfono (opcional)",
    company: "Empresa",
    service: "Servicio de interés",
    serviceOther: "Otro / No estoy seguro",
    message: "Mensaje",
    send: "Enviar",
    note: "Al enviar se abrirá tu cliente de correo con el mensaje listo.",
    offices: "Oficinas",
  },
  footer: {
    tagline: "Ciberseguridad 24/7 para organizaciones de cualquier tamaño.",
    privacy: "Política de privacidad",
    rights: "Todos los derechos reservados.",
  },
};

export type Dictionary = typeof es;

const en: Dictionary = {
  meta: {
    title: "SOCZERO Networks | 24/7 Cybersecurity",
    description:
      "24/7 SOC, Ethical Hacking, NOC, virtual CISO and cybersecurity management for organizations of any size.",
  },
  nav: {
    home: "Home",
    services: "Services",
    products: "Products",
    contact: "Contact",
    cta: "Request service",
  },
  hero: {
    badge: "24/7 Security Operations Center",
    title1: "Protect your information",
    title2: "at all times",
    subtitle:
      "We combine science and technology to deliver continuous protection for your organization against cybersecurity threats and incidents.",
    primary: "Request service",
    secondary: "View services",
    stats: [
      { value: "24/7", label: "Continuous monitoring" },
      { value: "3", label: "Countries: Chile, Colombia & Canada" },
      { value: "100%", label: "Remotely managed, cloud-based" },
    ],
  },
  intro: {
    eyebrow: "Offensive & defensive security",
    title: "Cyberattacks can be prevented",
    body: "We are a team of cybersecurity specialists with extensive international experience. Our mission is to deliver effective, practical solutions that quickly strengthen your organization's security posture in a cost-effective way.",
    points: [
      "Secure password management",
      "Encrypted communication channels",
      "Network security",
      "Vulnerability assessments",
      "Employee training",
      "Incident response",
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Specialized cybersecurity solutions",
    subtitle:
      "Proactive measures, reactive response and ongoing support. Choose a single service or a comprehensive protection package.",
    more: "Learn more",
    items: {
      soc: {
        title: "24/7 SOC",
        short: "Experts monitoring your network and systems around the clock, every day of the year.",
        long: "A 100% remotely managed service, available to any organization with at least five assets or endpoints, at a highly affordable cost. No additional software or hardware needed: we use proprietary cloud-based technologies.",
        bullets: [
          "Peace of mind: we detect and address issues before they impact operations",
          "Advanced threat detection tools",
          "Scalable and adaptable solution",
          "Minimized downtime",
        ],
      },
      hacking: {
        title: "Ethical Hacking",
        short: "Security assessments using simulated cyberattacks to evaluate the resilience of your assets.",
        long: "We simulate real attacks against applications, infrastructure and people to uncover vulnerabilities before attackers do, with prioritized reports and actionable recommendations.",
        bullets: ["Web, mobile and infrastructure pentesting", "Social engineering", "Executive and technical report", "Verification re-test"],
      },
      noc: {
        title: "NOC",
        short: "Network Operations Center to detect, analyze and prevent network issues.",
        long: "Continuous monitoring and network incident management to keep your critical services available and performing.",
        bullets: ["Availability monitoring", "Incident management", "Performance analysis"],
      },
      awareness: {
        title: "Security Awareness",
        short: "Build a cybersecurity culture: your users learn to recognize and respond to real threats.",
        long: "Awareness programs and phishing simulations that turn your employees into the first line of defense.",
        bullets: ["Phishing simulations", "Continuous training", "Human-risk metrics"],
      },
      devsecops: {
        title: "DevSecOps",
        short: "Optimize your DevOps practices and build security into the whole development lifecycle.",
        long: "We integrate security controls into your CI/CD pipelines, code review and dependency management without slowing your team down.",
        bullets: ["CI/CD security", "SAST / DAST / SCA analysis", "Cloud and container security"],
      },
      teams: {
        title: "Red, Blue & Purple Teams",
        short: "Integrated offensive and defensive team services to protect your information.",
        long: "Our Red, Blue and Purple Teams work together to identify vulnerabilities, prevent attacks and simulate real-world threats for organizations of any size.",
        bullets: ["Adversary simulation", "Improved detection and response", "Collaborative exercises"],
      },
      ciso: {
        title: "Virtual CISO",
        short: "Senior-level security leadership aligned with your business objectives.",
        long: "An experienced CISO at your service without the cost of a full-time hire: strategy, governance, compliance and board reporting.",
        bullets: ["Strategy and roadmap", "Governance and compliance", "Board reporting"],
      },
      management: {
        title: "Cybersecurity Management",
        short: "A comprehensive, proactive approach to strengthening your digital infrastructure.",
        long: "We combine hands-on operational management by experts with AI-powered automated processes, tailored solutions and regulatory compliance.",
        bullets: ["Cybersecurity policies", "Continuous security audits", "Customized strategies", "Vulnerability and risk assessment"],
      },
    },
  },
  servicesPage: {
    title: "Services",
    subtitle: "Innovative, cutting-edge solutions for businesses and individuals.",
    cta: "Get a quote",
  },
  products: {
    eyebrow: "SaaS platform",
    title: "Cybersecurity tools as a service",
    subtitle: "Applications built by SOCZERO to keep your team one step ahead.",
    soon: "Coming soon",
    items: [
      {
        name: "SOCZERO CVE Alerts",
        desc: "Get the new vulnerabilities and CVEs relevant to your technology stack by email every day, filtered and prioritized.",
        features: ["Daily email digest", "Vendor and product filters", "Severity prioritization (CVSS)"],
      },
    ],
    notify: "Request early access",
  },
  partners: { title: "Some of our partners" },
  cta: {
    title: "Let us protect you",
    body: "Request the service that best fits your business, or choose a comprehensive protection package delivered by top cybersecurity professionals.",
    button: "Request service",
  },
  contact: {
    title: "Contact",
    subtitle: "Tell us what you need and we will get back to you shortly.",
    name: "Name",
    email: "Email",
    phone: "Phone (optional)",
    company: "Company",
    service: "Service of interest",
    serviceOther: "Other / Not sure",
    message: "Message",
    send: "Send",
    note: "Submitting will open your email client with the message ready.",
    offices: "Offices",
  },
  footer: {
    tagline: "24/7 cybersecurity for organizations of any size.",
    privacy: "Privacy policy",
    rights: "All rights reserved.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
