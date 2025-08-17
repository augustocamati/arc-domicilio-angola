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