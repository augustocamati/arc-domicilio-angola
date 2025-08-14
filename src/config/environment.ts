// Configurações globais da aplicação e da academia
export const APP_CONFIG = {
  // Informações da Academia
  academy: {
    name: "Academia ARC",
    email: "academiaarc@gmail.com",
    phone: "+244 123 456 789",
    whatsapp: "+244987654321", // Número do WhatsApp (sem espaços)
    address: "Luanda, Angola",
    description: "Centro de formação especializado em tecnologia e desenvolvimento profissional",
    social: {
      facebook: "https://facebook.com/academiaarc",
      instagram: "https://instagram.com/academiaarc",
      linkedin: "https://linkedin.com/company/academiaarc"
    }
  },
  
  // URLs e Links
  urls: {
    baseUrl: "https://academiaarc.com",
    adminPanel: "/admin",
    courses: "/cursos",
    services: "/servicos"
  },
  
  // Configurações de WhatsApp
  whatsapp: {
    baseUrl: "https://wa.me",
    messages: {
      budget: "Olá! Gostaria de solicitar um orçamento para um dos vossos serviços técnicos. Podem me ajudar?",
      enrollment: "Olá! Tenho interesse em me inscrever num dos vossos cursos. Podem me dar mais informações?",
      general: "Olá! Tenho uma questão sobre a Academia ARC. Podem me ajudar?"
    }
  },
  
  // Configurações dos cursos
  courses: {
    maxStudentsPerClass: 20,
    defaultDuration: "3 meses",
    schedules: ["Manhã (8h-12h)", "Tarde (14h-18h)", "Noite (18h-22h)"]
  },
  
  // Configurações do sistema
  system: {
    fileUpload: {
      maxSize: 5 * 1024 * 1024, // 5MB
      allowedTypes: ["application/pdf", "image/jpeg", "image/png"]
    },
    toast: {
      duration: 4000
    }
  }
} as const;

// Função helper para gerar link do WhatsApp
export const generateWhatsAppLink = (message: string = APP_CONFIG.whatsapp.messages.general) => {
  const phone = APP_CONFIG.academy.whatsapp.replace(/\s+/g, '');
  const encodedMessage = encodeURIComponent(message);
  return `${APP_CONFIG.whatsapp.baseUrl}/${phone}?text=${encodedMessage}`;
};

// Função helper para gerar link de orçamento
export const generateBudgetWhatsAppLink = () => {
  return generateWhatsAppLink(APP_CONFIG.whatsapp.messages.budget);
};

// Função helper para gerar link de inscrição
export const generateEnrollmentWhatsAppLink = () => {
  return generateWhatsAppLink(APP_CONFIG.whatsapp.messages.enrollment);
};