// Configurações globais da aplicação e da academia
export const APP_CONFIG = {
  // Informações da Academia
  academy: {
    name: "Academia ARC",
    email: "academiaarc@gmail.com",
    phone: "+244 936 160 772",
    schedule: "Segunda a Sexta, 8h às 18h",
    whatsapp: "+244936160772", // Número do WhatsApp (sem espaços)
    address:
      "Luanda,Rangel - Bairro dos CTT, entre o ITEL e o Salão do Magnólia",
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
      { label: "Aulas e Cursos", href: "/cursos" },
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
    schedules: ["Manhã (8h-12h)", "Tarde (14h-18h)", "Noite (online)"],
    list: [
      {
        title: "Desenvolvimento Web FullStack",
        description:
          "Aprenda a criar aplicações web completas, desde o front-end até ao back-end, utilizando as tecnologias mais actuais do mercado.",
        duration: "12 semanas (48 aulas de 1h)",
        level: "Iniciante a Avançado",
        topics: [
          "HTML e CSS Avançado",
          "JavaScript",
          "Node.js e Express",
          "Banco de Dados (MySQL e MongoDB)",
          "React.js",
          "Integração e Deploy",
        ],
        popular: true,
        modalidade: ["Presencial", "Online"],
        category: "professional",
        icon: "Code",
        tecnologias: [
          "HTML",
          "CSS",
          "JavaScript",
          "Node.js",
          "React",
          "MySQL",
          "MongoDB",
          "Tailwind CSS",
          "Git",
          "GitHub",
          "Heroku/Vercel",
        ],
      },
      {
        title: "Front-end & Web Designer",
        description:
          "Domine as técnicas de design e desenvolvimento de interfaces modernas, responsivas e centradas no utilizador.",
        duration: "8 semanas (32 aulas de 1h)",
        level: "Iniciante",
        topics: [
          "Design Gráfico e UI/UX",
          "HTML e CSS",
          "JavaScript Básico",
          "Tailwind CSS",
          "Responsividade e Acessibilidade",
        ],
        popular: false,
        category: "professional",
        icon: "Monitor",
        modalidade: ["Presencial", "Online"],
        tecnologias: [
          "HTML",
          "CSS",
          "JavaScript",
          "Tailwind CSS",
          "Figma",
          "Canva",
        ],
      },
      {
        title: "Programação de Microcontroladores",
        description:
          "Desenvolva projectos de automação e IoT utilizando Arduino, ESP32 e outras plataformas de desenvolvimento.",
        duration: "10 semanas (40 aulas de 1h)",
        level: "Intermediário",
        topics: [
          "Eletrônica e Microcontroladores",
          "Programação com Arduino IDE",
          "Sensores e Atuadores",
          "Comunicação e Integração",
          "Projetos Práticos",
        ],
        popular: false,
        category: "professional",
        icon: "Cpu",
        modalidade: ["Presencial", "Online"],
        tecnologias: [
          "Arduino",
          "ESP8266",
          "ESP32",
          "sensores variados",
          "MQTT",
        ],
      },
      {
        title: "Desenvolvimento de Blogs e Lojas Virtuais (WordPress)",
        description:
          "Capacitar o aluno a criar e manter sites e lojas virtuais usando WordPress e WooCommerce.",
        duration: "6 semanas (24 aulas de 1h)",
        level: "Iniciante",
        topics: [
          "Instalação e Configuração",
          "Criação de Conteúdo",
          "WooCommerce",
          "SEO Básico e Segurança",
        ],
        popular: false,
        modalidade: ["Presencial", "Online"],
        category: "professional",
        icon: "ShoppingCart",
        tecnologias: ["WordPress", "Elementor", "WooCommerce", "Yoast SEO"],
      },
      {
        title: "SEO e Marketing Digital para Websites",
        description:
          "Ensinar técnicas de otimização para buscadores e estratégias de marketing digital para aumentar o tráfego e conversões.",
        duration: "6 semanas (24 aulas de 1h)",
        level: "Iniciante a Intermediário",
        topics: [
          "Fundamentos de SEO",
          "Ferramentas de SEO",
          "Marketing de Conteúdo",
          "Redes Sociais e Campanhas",
        ],
        popular: false,
        category: "marketing",
        icon: "TrendingUp",
        modalidade: ["Presencial", "Online"],
        tecnologias: [
          "Google Analytics",
          "Search Console",
          "Canva",
          "Meta Business Suite",
        ],
      },
      {
        title: "Redes de Computadores (Básico a Avançado)",
        description:
          "Capacitar o aluno para compreender, configurar e gerenciar redes de computadores locais e corporativas.",
        duration: "10 semanas (40 aulas de 1h)",
        level: "Iniciante a Avançado",
        topics: [
          "Conceitos de Redes",
          "Enderecamento IP e Sub-redes",
          "Equipamentos de Rede e VLANs",
          "Protocolos e Serviços de Rede",
          "Práticas com Switches e Roteadores",
        ],
        popular: false,
        category: "infrastructure",
        icon: "Network",
        modalidade: ["Presencial", "Online"],
        tecnologias: [
          "TCP/IP",
          "Subnetting",
          "VLANs",
          "Roteadores",
          "Switches",
          "Packet Tracer",
        ],
      },
      {
        title: "Administração de Servidores Linux",
        description:
          "Ensinar a configurar, administrar e proteger servidores Linux para ambientes corporativos.",
        duration: "8 semanas (32 aulas de 1h)",
        level: "Intermediário a Avançado",
        topics: [
          "Instalação e Shell",
          "Configuração de Serviços",
          "Segurança e Permissões",
          "Automação e Backups",
          "Gerenciamento de Rede",
        ],
        popular: false,
        category: "infrastructure",
        icon: "Server",
        modalidade: ["Presencial", "Online"],
        tecnologias: [
          "Ubuntu Server",
          "Apache/Nginx",
          "SSH",
          "cron",
          "firewalld",
        ],
      },
      {
        title: "Desenvolvimento Seguro (Web Security)",
        description:
          "Capacitar desenvolvedores a implementar práticas de segurança em aplicações web.",
        duration: "6 semanas (24 aulas de 1h)",
        level: "Intermediário a Avançado",
        topics: [
          "Introdução à Segurança Web",
          "Tipos de Ataques",
          "Autenticação e Criptografia",
          "Boas Práticas de Código Seguro",
        ],
        popular: false,
        category: "professional",
        icon: "Shield",
        modalidade: ["Presencial", "Online"],
        tecnologias: ["OWASP", "JWT", "HTTPS", "Helmet.js", "bcrypt"],
      },
      {
        title: "Engenharia de Software para Sistemas Empresariais",
        description:
          "Formar desenvolvedores capazes de planejar, projetar e implementar sistemas empresariais robustos e escaláveis.",
        duration: "12 semanas (48 aulas de 1h)",
        level: "Avançado",
        topics: [
          "Fundamentos da Engenharia de Software",
          "Arquitetura e Padrões de Projeto",
          "Planejamento e Requisitos",
          "Integração Contínua e DevOps",
          "Desenvolvimento em Equipe e Gestão",
          "Documentação e Entregáveis",
        ],
        popular: false,
        modalidade: ["Presencial", "Online"],
        category: "professional",
        icon: "Settings",
        tecnologias: ["Git", "Docker", "Trello", "Notion", "UML", "CI/CD"],
      },
      {
        title: "Explicações - Curso Médio de Informática",
        description:
          "Apoio pedagógico especializado nas disciplinas do curso médio técnico de informática.",
        duration: "Flexível",
        level: "Médio Técnico",
        topics: [
          "Programação",
          "Redes",
          "Hardware",
          "Sistemas Operacionais",
          "Bases de Dados",
        ],
        popular: false,
        category: "explicacao",
        icon: "Book",
        modalidade: ["Presencial", "Online"],
        tecnologias: [],
      },
      {
        title: "Explicações - Curso Médio de Electrónica",
        description:
          "Explicações nas disciplinas técnicas de electrónica e sistemas de telecomunicações.",
        duration: "Flexível",
        level: "Médio Técnico",
        topics: [
          "Circuitos Eletrónicos",
          "Telecomunicações",
          "Sinais e Sistemas",
          "Automação",
          "Instrumentação",
        ],
        popular: false,
        category: "explicacao",
        icon: "Server",
        modalidade: ["Presencial", "Online"],
        tecnologias: [],
      },
      {
        title: "Explicações - Curso Médio de Informática e Multimédia",
        description:
          "Explicação nas disciplinas técnicas dos cursos de informática e multimédia.",
        duration: "Flexível",
        level: "Médio Técnico",
        topics: [
          "Programação Web",
          "Design Gráfico",
          "Edição de Áudio e Vídeo",
          "Animação Digital",
          "Projectos Multimédia",
        ],
        popular: false,
        category: "explicacao",
        icon: "Film",
        modalidade: ["Presencial", "Online"],
        tecnologias: [
          "HTML/CSS",
          "JavaScript",
          "Adobe Photoshop",
          "Adobe Premiere",
          "Blender",
        ],
      },
      {
        title: "Explicações - Ensino Primário (5º ao 6º ano)",
        description:
          "Apoio pedagógico especializado para alunos do ensino primário, com acompanhamento individualizado respeitando o ritmo de aprendizagem de cada criança.",
        duration: "Flexível",
        level: "Primário",
        topics: [
          "Matemática",
          "Estudo do Meio",
          "Língua Portuguesa",
          "Língua Inglesa",
        ],
        popular: true,
        category: "explicacao",
        icon: "GraduationCap",
        preco: {
          inscricao: "3000 Kz",
          mensalidadePorDisciplina: "2500 Kz",
        },
        modalidade: ["Presencial", "Online"],
      },
      {
        title: "Explicações - Ensino Médio de Economia e Contabilidade",
        description:
          "Apoio especializado nas disciplinas do curso médio de economia e contabilidade, com professores que trabalham de forma individualizada respeitando o ritmo de aprendizagem.",
        duration: "Flexível",
        level: "Médio Técnico",
        topics: [
          "Matemática",
          "Estatística",
          "Contabilidade Geral",
          "Contabilidade Financeira",
          "Economia",
          "Língua Portuguesa",
          "Língua Inglesa",
        ],
        popular: false,
        category: "explicacao",
        icon: "Calculator",
        preco: {
          inscricao: "3000 Kz",
          mensalidadePorDisciplina: "4000 Kz",
        },
        modalidade: ["Presencial", "Online"],
      },
      {
        title: "Explicações - Ensino Médio PUNIV (Ciências Exactas)",
        description:
          "Apoio especializado nas disciplinas do ensino médio de ciências exactas (PUNIV), com metodologia personalizada que respeita o ritmo individual de aprendizagem.",
        duration: "Flexível",
        level: "Médio",
        topics: [
          "Matemática",
          "Física",
          "Química",
          "Biologia",
          "Geometria Descritiva",
          "Língua Portuguesa",
          "Língua Inglesa",
        ],
        popular: false,
        category: "explicacao",
        icon: "Flask",
        preco: {
          inscricao: "3000 Kz",
          mensalidadePorDisciplina: "4000 Kz",
        },
        modalidade: ["Presencial", "Online"],
      },
    ],
  },

  // Configurações dos serviços
  services: {
    list: [
      {
        title: "Criação de Sites e Lojas Virtuais",
        description:
          "Desenvolvemos sites profissionais, blogs e lojas online completas, optimizadas para motores de busca e dispositivos móveis.",
        features: [
          "Design responsivo",
          "SEO optimizado",
          "Integração com pagamentos",
          "Painel administrativo",
        ],
        category: "Web Development",
        icon: "Globe",
      },
      {
        title: "Automação com Microcontroladores",
        description:
          "Projectos de automação residencial e empresarial utilizando Arduino, ESP32 e outras tecnologias IoT.",
        features: [
          "Domótica inteligente",
          "Monitorização remota",
          "Sensores personalizados",
          "Aplicações móveis",
        ],
        category: "IoT & Automation",
        icon: "Cpu",
      },
      {
        title: "Consultoria em Redes e Infraestrutura",
        description:
          "Análise, design e implementação de redes empresariais seguras e eficientes para o seu negócio.",
        features: [
          "Auditoria de redes",
          "Configuração de segurança",
          "Monitorização 24/7",
          "Documentação técnica",
        ],
        category: "Network Solutions",
        icon: "Network",
      },
      {
        title: "Servidores e Ambientes Corporativos",
        description:
          "Implantação e gestão de servidores Linux, configuração de ambientes de desenvolvimento e produção.",
        features: [
          "Instalação e configuração",
          "Backup automático",
          "Monitorização",
          "Manutenção preventiva",
        ],
        category: "Infrastructure",
        icon: "Server",
      },
      {
        title: "Sistemas Empresariais Personalizados",
        description:
          "Desenvolvimento de software sob medida para gestão empresarial, CRM, ERP e painéis administrativos.",
        features: [
          "Análise de requisitos",
          "Interface intuitiva",
          "Integração com APIs",
          "Suporte técnico",
        ],
        category: "Custom Software",
        icon: "Code",
      },
    ],
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