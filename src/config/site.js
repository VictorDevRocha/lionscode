// Configurações gerais do site
export const SITE_CONFIG = {
  company: {
    name: "LionsCode",
    slogan: "Strength in Code, Power in Solutions",
    description:
      "Sites modernos, design limpo, desempenho aprimorado, SEO, com o melhor custo-benefício e performance garantida!",
  },
  contact: {
    phone: "+5513982051521",
    phoneFormatted: "(13) 98205-1521",
    email: "contato@lioncode.com.br",
    emailDev: "victorrochadev0@gmail.com",
  },
  whatsapp: {
    number: "5513982051521",
    baseUrl: "https://wa.me/5513982051521",
    defaultMessage: "Olá, gostaria de saber mais sobre os tipos de site.",
    messages: {
      default: "Olá, gostaria de saber mais sobre os tipos de site.",
      models: "Gostaria de saber mais sobre os modelos!",
      institutional: "Gostaria de saber mais sobre os sites institucionais!",
      landing: "Gostaria de saber mais sobre Landing Page!",
      blog: "Gostaria de saber mais sobre Blogs!",
      portfolio: "Gostaria de saber mais sobre Portfólios!",
      system: "Gostaria de saber mais sobre Sistemas!",
    },
  },
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  seo: {
    title: "LionsCode - Desenvolvimento Web Profissional",
    description:
      "Sites modernos, design limpo, desempenho aprimorado, SEO, com o melhor custo-benefício e performance garantida!",
    keywords: "desenvolvimento web, sites profissionais, landing page, sistema web, blog, portfólio",
  },
};

// Função helper para criar links do WhatsApp
export const createWhatsAppLink = (messageKey = "default") => {
  const message = SITE_CONFIG.whatsapp.messages[messageKey] || SITE_CONFIG.whatsapp.defaultMessage;
  const encodedMessage = encodeURIComponent(message);
  return `${SITE_CONFIG.whatsapp.baseUrl}?text=${encodedMessage}`;
};

export default SITE_CONFIG;
