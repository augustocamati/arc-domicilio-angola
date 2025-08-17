// Configurações globais da aplicação e da academia
export const APP_CONFIG = {
  // Informações da Academia
  academy: {
    name: "Academia ARC",
    email: "academiaarc@gmail.com",
    phone: "+244 929 325 402",
    schedule: "Segunda a Sexta, 8h às 18h",
    whatsapp: "+244929325402", // Número do WhatsApp (sem espaços)
    address: "Luanda, Angola",
    description:
      "Formação técnica especializada e serviços personalizados em Angola. Levamos conhecimento de qualidade directamente até si.",

    social: {
      facebook: "https://facebook.com/academiaarc",
      instagram: "https://instagram.com/academiaarc",
      linkedin: "https://linkedin.com/company/academiaarc",
    },
  },

  // URLs e Links
  urls: {
    baseUrl: "https://academia-arc.co.ao",
    adminPanel: "/admin",

    links: [
      { label: "Início", href: "/" },
      { label: "Sobre", href: "/sobre" },
      { label: "Cursos", href: "/cursos" },
      { label: "Serviços", href: "/servicos" },
      { label: "Contacto", href: "/contacto" },
    ],
  },

  // Configurações de WhatsApp
  whatsapp: {
    baseUrl: "https://wa.me",
    messages: {
      budget:
        "Olá! Gostaria de solicitar um orçamento para um dos vossos serviços técnicos. Podem me ajudar?",
      enrollment:
        "Olá! Tenho interesse em me inscrever num dos vossos cursos. Podem me dar mais informações?",
      general: "Olá! Tenho uma questão sobre a Academia ARC. Podem me ajudar?",
    },
  },

  // Configurações dos cursos
  courses: {
    maxStudentsPerClass: 20,
    defaultDuration: "3 meses",
    schedules: ["Manhã (8h-12h)", "Tarde (14h-18h)", "Noite (18h-22h)"],
    list: [
      {
        title: "Desenvolvimento Web FullStack",
        description: "Aprenda a criar aplicações web completas, desde o front-end até ao back-end, utilizando as tecnologias mais actuais do mercado.",
        duration: "6-8 semanas",
        level: "Iniciante a Avançado",
        topics: ["HTML, CSS, JavaScript", "React/Vue.js", "Node.js", "Bases de dados", "APIs REST"],
        popular: true,
        category: "professional",
        icon: "Code"
      },
      {
        title: "Front-End & Web Designer",
        description: "Domine as técnicas de design e desenvolvimento de interfaces modernas, responsivas e centradas no utilizador.",
        duration: "4-6 semanas",
        level: "Iniciante",
        topics: ["Design UI/UX", "CSS Avançado", "JavaScript", "Frameworks CSS", "Prototipagem"],
        category: "professional",
        icon: "Monitor",
        popular: false
      },
      {
        title: "Programação de Microcontroladores",
        description: "Desenvolva projectos de automação e IoT utilizando Arduino, ESP32 e outras plataformas de desenvolvimento.",
        duration: "5-7 semanas",
        level: "Intermediário",
        topics: ["Arduino Programming", "ESP32/ESP8266", "Sensores e Actuadores", "IoT", "Automação"],
        category: "professional",
        icon: "Cpu",
        popular: false
      },
      {
        title: "Explicações - Curso Médio de Informática",
        description: "Apoio pedagógico especializado nas disciplinas do curso médio técnico de informática.",
        duration: "Flexível",
        level: "Médio Técnico",
        topics: ["Programação", "Redes", "Hardware", "Sistemas Operacionais", "Bases de Dados"],
        category: "explicacao",
        icon: "Code",
        popular: false
      },
      {
        title: "Explicações - Curso Médio de Electrónica",
        description: "Explicações nas disciplinas técnicas de electrónica e sistemas de telecomunicações.",
        duration: "Flexível",
        level: "Médio Técnico",
        topics: ["Circuitos Eletrónicos", "Telecomunicações", "Sinais e Sistemas", "Automação", "Instrumentação"],
        category: "explicacao",
        icon: "Server",
        popular: false
      }
    ]
  },

  // Configurações dos serviços
  services: {
    list: [
      {
        title: "Criação de Sites e Lojas Virtuais",
        description: "Desenvolvemos sites profissionais, blogs e lojas online completas, optimizadas para motores de busca e dispositivos móveis.",
        features: ["Design responsivo", "SEO optimizado", "Integração com pagamentos", "Painel administrativo"],
        category: "Web Development",
        icon: "Globe"
      },
      {
        title: "Automação com Microcontroladores",
        description: "Projectos de automação residencial e empresarial utilizando Arduino, ESP32 e outras tecnologias IoT.",
        features: ["Domótica inteligente", "Monitorização remota", "Sensores personalizados", "Aplicações móveis"],
        category: "IoT & Automation",
        icon: "Cpu"
      },
      {
        title: "Consultoria em Redes e Infraestrutura",
        description: "Análise, design e implementação de redes empresariais seguras e eficientes para o seu negócio.",
        features: ["Auditoria de redes", "Configuração de segurança", "Monitorização 24/7", "Documentação técnica"],
        category: "Network Solutions",
        icon: "Network"
      },
      {
        title: "Servidores e Ambientes Corporativos",
        description: "Implantação e gestão de servidores Linux, configuração de ambientes de desenvolvimento e produção.",
        features: ["Instalação e configuração", "Backup automático", "Monitorização", "Manutenção preventiva"],
        category: "Infrastructure",
        icon: "Server"
      },
      {
        title: "Sistemas Empresariais Personalizados",
        description: "Desenvolvimento de software sob medida para gestão empresarial, CRM, ERP e painéis administrativos.",
        features: ["Análise de requisitos", "Interface intuitiva", "Integração com APIs", "Suporte técnico"],
        category: "Custom Software",
        icon: "Code"
      }
    ]
  },

  // Configurações do sistema
  system: {
    fileUpload: {
      maxSize: 5 * 1024 * 1024, // 5MB
      allowedTypes: ["application/pdf", "image/jpeg", "image/png"],
    },
    toast: {
      duration: 4000,
    },
  },
} as const

// Função helper para gerar link do WhatsApp
export const generateWhatsAppLink = (message: string = APP_CONFIG.whatsapp.messages.general) => {
  const phone = APP_CONFIG.academy.whatsapp.replace(/\s+/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `${APP_CONFIG.whatsapp.baseUrl}/${phone}?text=${encodedMessage}`;
};

// Função helper para gerar link de orçamento
export const generateBudgetWhatsAppLink = (service: string = " ") => {
  return generateWhatsAppLink(APP_CONFIG.whatsapp.messages.budget + `\n ${service}`);
}


// Função helper para gerar link de inscrição
export const generateEnrollmentWhatsAppLink = () => {
  return generateWhatsAppLink(APP_CONFIG.whatsapp.messages.enrollment );
};