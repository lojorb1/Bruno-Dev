
export type Locale = 'en' | 'pt' | 'es';

const legalCommon = {
  en: {
    contact: 'contact@brunodev.eu',
    lastUpdated: 'Last updated: June 2024',
    links: { linkedin: 'https://www.linkedin.com/in/brunodeveu/', github: 'https://github.com/lojorb1' }
  },
  pt: {
    contact: 'contact@brunodev.eu',
    lastUpdated: 'Última atualização: Junho 2024',
    links: { linkedin: 'https://www.linkedin.com/in/brunodeveu/', github: 'https://github.com/lojorb1' }
  },
  es: {
    contact: 'contact@brunodev.eu',
    lastUpdated: 'Última actualización: Junio 2024',
    links: { linkedin: 'https://www.linkedin.com/in/brunodeveu/', github: 'https://github.com/lojorb1' }
  }
};

export const translations = {
  en: {
    meta: {
      title: "Hire Senior Software Developer | Custom SaaS & Web Solutions | BrunoDev",
      description: "Looking to hire a senior software developer? Expert custom software development, SaaS engineering, and cybersecurity services with 10+ years of experience."
    },
    nav: { about: 'About', services: 'Services', expertise: 'Expertise', contact: 'Contact', getStarted: 'Hire Me' },
    hero: {
      badge: 'Available for Global Hire',
      title1: 'Hire a Senior Developer for',
      title2: 'Custom SaaS & Software Solutions',
      subtitle: 'Expert full-stack engineering and infrastructure consulting. I help startups and enterprises build secure, high-intent digital products that scale.',
      ctaPrimary: 'Hire Me Now',
      ctaSecondary: 'WhatsApp Consultation',
      stats: { years: 'Years Exp', projects: 'Client Results', uptime: 'Uptime Focus', monitoring: 'Reliability' }
    },
    about: {
      badge: 'Hire Me',
      tag: 'Experience & Trust',
      title: 'Multilingual Senior Developer bridging the gap between code and business ROI.',
      p1: "I'm Bruno, a Senior Software Developer fluent in English, Portuguese, and Spanish. For a decade, I've worked with international clients to deliver enterprise-grade software and secure server environments.",
      p2: "My methodology focuses on high-intent technical solutions. I don't just write code; I architect systems that solve real-world scalability and security challenges.",
      features: {
        security: { title: 'Advanced Security', desc: 'Implementing B2B-grade defensive architectures.' },
        performance: { title: 'Extreme Speed', desc: 'Optimizing for high-conversion performance metrics.' },
        mastery: { title: 'Cross-Stack Mastery', desc: 'Deep expertise in modern frontend and backend frameworks.' }
      }
    },
    services: {
      tag: 'How I Can Help',
      title: 'Strategic Software Services',
      subtitle: 'Hire a reliable technical partner for your high-stakes software development and infrastructure projects.',
      items: [
        { title: 'Custom Software Development', desc: 'End-to-end bespoke software engineering designed for specific business workflows and scalability.' },
        { title: 'SaaS Platform Engineering', desc: 'Building multi-tenant SaaS products from the ground up, focusing on performance and recurring revenue logic.' },
        { title: 'API & Systems Integration', desc: 'Developing robust API architectures and connecting disparate business systems (Stripe, CRMs, ERPs).' },
        { title: 'Secure Cloud Infrastructure', desc: 'Managing AWS/GCP environments with Docker, CI/CD, and high-availability protocols.' },
        { title: 'Cybersecurity Auditing', desc: 'Professional vulnerability assessments and secure code audits to protect enterprise data assets.' },
        { title: 'Performance Engineering', desc: 'Rescuing slow systems, optimizing database logic, and scaling legacy platforms.' }
      ]
    },
    expertise: {
      tag: 'Technical Stack',
      title: 'Specialized Technologies',
      version: 'Verified Portfolio',
      categories: {
        frontend: 'Frontend Engineering',
        backend: 'Backend & Systems',
        infra: 'Cloud & Infrastructure',
        security: 'Cybersecurity'
      },
      ctaTitle: 'Ready to build with a Senior Pro?',
      ctaDesc: "Let's discuss your project goals. I offer professional consulting and development in three languages.",
      ctaButton: 'Start a Project'
    },
    contact: {
      tag: 'Hire Today',
      title: 'Ready for a technical partner?',
      subtitle: "Available for international projects. Contact me to discuss how we can scale your software infrastructure.",
      locationLabel: 'Base of Operations',
      form: {
        successTitle: 'Inquiry Sent!',
        successDesc: "Thanks for your inquiry. I will review your project details and respond within 24 hours.",
        successButton: 'Send another message',
        nameLabel: 'Full Name',
        emailLabel: 'Business Email',
        messageLabel: 'Project Requirements',
        placeholderName: 'John Doe',
        placeholderEmail: 'john@company.com',
        placeholderMessage: 'Briefly describe the software or infrastructure challenge you need solved...',
        submit: 'Send Project Inquiry',
        sending: 'Processing...',
        error: 'Network error. Please try again or contact via LinkedIn.',
        validation: {
          name: "Name is required (min 2 characters).",
          email: "Please enter a valid business email.",
          message: "Please describe your project needs (min 10 characters)."
        }
      }
    },
    footer: { privacy: 'Privacy Policy', terms: 'Terms of Service', rights: 'All rights reserved.' },
    cookies: {
      title: 'SEO & Privacy',
      desc: 'We use cookies to improve your browsing experience and analyze site traffic.',
      acceptAll: 'Accept All',
      rejectAll: 'Reject Non-Essential',
      settings: 'Settings',
      save: 'Save Preferences',
      essential: { title: 'Essential', desc: 'Required for core site functions.' },
      analytics: { title: 'Analytics', desc: 'Help us improve our service delivery.' },
      marketing: { title: 'Marketing', desc: 'Relevant professional notifications.' }
    },
    legal: {
      back: 'Return to Home',
      footerNote: 'Professional inquiries only. Confidentiality guaranteed.',
      privacy: {
        title: 'Privacy Policy',
        lastUpdated: legalCommon.en.lastUpdated,
        sections: [
          { h: '1. Introduction', p: 'This Privacy Policy explains how BrunoDev ("we", "us", or "our") collects, uses, and shares your personal information. We are committed to protecting your privacy in compliance with GDPR (EU), LGPD (Brazil), and CCPA (USA).' },
          { h: '2. Data Collection', p: 'We collect information you provide directly through our contact form (Name, Email, Message) and technical data collected automatically via cookies (IP address, browser type).' },
          { h: '3. Data Usage', p: 'Your data is used solely to respond to inquiries, provide services, and improve website performance. We do not sell your personal data to third parties.' },
          { h: '4. Your Rights', p: 'Under GDPR and LGPD, you have the right to access, correct, or delete your data. CCPA provides similar rights to California residents. To exercise these, email ' + legalCommon.en.contact },
          { h: '5. Security', p: 'We implement industry-standard security measures to protect your data from unauthorized access or disclosure.' }
        ]
      },
      terms: {
        title: 'Terms of Service',
        lastUpdated: legalCommon.en.lastUpdated,
        sections: [
          { h: '1. Agreement', p: 'By accessing this website, you agree to be bound by these Terms of Service and all applicable laws and regulations.' },
          { h: '2. Intellectual Property', p: 'All content on this site, including code, design, and text, is the intellectual property of BrunoDev unless otherwise stated.' },
          { h: '3. Professional Reference', p: 'Our official profiles are located at LinkedIn (' + legalCommon.en.links.linkedin + ') and GitHub (' + legalCommon.en.links.github + ').' },
          { h: '4. Liability', p: 'We are not liable for any damages arising from the use or inability to use the materials on this website.' }
        ]
      }
    }
  },
  pt: {
    meta: {
      title: "Contratar Desenvolvedor de Software Sênior | Software Sob Medida e SaaS | BrunoDev",
      description: "Procurando contratar um programador sênior? Desenvolvimento de software sob medida, engenharia SaaS e cibersegurança com 10+ anos de experiência."
    },
    nav: { about: 'Sobre', services: 'Serviços', expertise: 'Especialidade', contact: 'Contato', getStarted: 'Contrate-me' },
    hero: {
      badge: 'Disponível para Projetos Internacionais',
      title1: 'Contrate um Desenvolvedor Sênior para',
      title2: 'Software Sob Medida e Soluções SaaS',
      subtitle: 'Engenharia full-stack e consultoria de infraestrutura. Ajudo startups e empresas a construir produtos digitais seguros e escaláveis.',
      ctaPrimary: 'Contrate Agora',
      ctaSecondary: 'Consultoria via WhatsApp',
      stats: { years: 'Anos de Exp', projects: 'Resultados', uptime: 'Foco em Uptime', monitoring: 'Confiabilidade' }
    },
    about: {
      badge: 'Contrate',
      tag: 'Experiência e Confiança',
      title: 'Desenvolvedor Sênior Multilingue focando em ROI e performance técnica.',
      p1: "Sou o Bruno, Desenvolvedor Sênior fluente em Inglês, Português e Espanhol. Há uma década trabalho com clientes internacionais entregando software de nível corporativo e servidores seguros.",
      p2: "Minha metodologia foca em soluções de alto impacto. Não apenas escrevo código; arquivo sistemas que resolvem desafios reais de escalabilidade e segurança.",
      features: {
        security: { title: 'Segurança Avançada', desc: 'Implementando arquiteturas defensivas B2B.' },
        performance: { title: 'Velocidade Extrema', desc: 'Otimização para métricas de alta conversão.' },
        mastery: { title: 'Domínio Cross-Stack', desc: 'Expertise profunda em frameworks modernos frontend e backend.' }
      }
    },
    services: {
      tag: 'Como Posso Ajudar',
      title: 'Serviços de Software Estratégicos',
      subtitle: 'Contrate um parceiro técnico confiável para seus projetos críticos de desenvolvimento de software e infraestrutura.',
      items: [
        { title: 'Desenvolvimento Sob Medida', desc: 'Engenharia de software personalizada desenhada para fluxos de negócio específicos e escalabilidade.' },
        { title: 'Engenharia de Plataformas SaaS', desc: 'Criação de produtos SaaS multi-tenant do zero, focando em performance e lógica de receita recorrente.' },
        { title: 'Integração de APIs e Sistemas', desc: 'Desenvolvimento de arquiteturas de API robustas e conexão de sistemas de negócio (Stripe, CRMs, ERPs).' },
        { title: 'Infraestrutura Cloud Segura', desc: 'Gestão de ambientes AWS/GCP com Docker, CI/CD e protocolos de alta disponibilidade.' },
        { title: 'Auditoria de Cibersegurança', desc: 'Avaliações de vulnerabilidade profissionais e auditorias de código para proteger ativos de dados corporativos.' },
        { title: 'Engenharia de Performance', desc: 'Recuperação de sistemas lentos, otimização de lógica de banco de dados e escalonamento de plataformas legadas.' }
      ]
    },
    expertise: {
      tag: 'Stack Técnica',
      title: 'Tecnologias Especializadas',
      version: 'Portfólio Verificado',
      categories: {
        frontend: 'Engenharia Frontend',
        backend: 'Backend e Sistemas',
        infra: 'Nuvem e Infraestrutura',
        security: 'Cibersegurança'
      },
      ctaTitle: 'Pronto para construir com um Pro Sênior?',
      ctaDesc: "Vamos discutir os objetivos do seu projeto. Ofereço consultoria profissional e desenvolvimento em três idiomas.",
      ctaButton: 'Iniciar Projeto'
    },
    contact: {
      tag: 'Contrate Hoje',
      title: 'Pronto para um parceiro técnico?',
      subtitle: "Disponível para projetos internacionais. Entre em contato para discutirmos como escalar sua infraestrutura de software.",
      locationLabel: 'Base de Operações',
      form: {
        successTitle: 'Solicitação Enviada!',
        successDesc: "Obrigado pelo contato. Analisarei os detalhes do seu projeto e responderei em até 24 horas.",
        successButton: 'Enviar outra mensagem',
        nameLabel: 'Nome Completo',
        emailLabel: 'E-mail Corporativo',
        messageLabel: 'Requisitos do Projeto',
        placeholderName: 'João Silva',
        placeholderEmail: 'joao@empresa.com',
        placeholderMessage: 'Descreva brevemente o desafio de software ou infraestrutura que você precisa resolver...',
        submit: 'Enviar Solicitação de Projeto',
        sending: 'Processando...',
        error: 'Erro de rede. Tente novamente ou entre em contato via LinkedIn.',
        validation: {
          name: "Nome é obrigatório (mín. 2 caracteres).",
          email: "Por favor, insira um e-mail corporativo válido.",
          message: "Por favor, descreva as necessidades do projeto (mín. 10 caracteres)."
        }
      }
    },
    footer: { privacy: 'Privacidade', terms: 'Termos', rights: 'Todos os direitos reservados.' },
    cookies: {
      title: 'SEO e Privacidade',
      desc: 'Usamos cookies para melhorar sua experiência e analisar o tráfego do site.',
      acceptAll: 'Aceitar Todos',
      rejectAll: 'Rejeitar Não Essenciais',
      settings: 'Configurar',
      save: 'Salvar Preferências',
      essential: { title: 'Essenciais', desc: 'Necessários para funções básicas.' },
      analytics: { title: 'Analíticos', desc: 'Ajudam a melhorar a entrega dos serviços.' },
      marketing: { title: 'Marketing', desc: 'Notificações profissionais relevantes.' }
    },
    legal: {
      back: 'Voltar ao Início',
      footerNote: 'Apenas consultas profissionais. Sigilo garantido.',
      privacy: {
        title: 'Política de Privacidade',
        lastUpdated: legalCommon.pt.lastUpdated,
        sections: [
          { h: '1. Introdução', p: 'Esta Política explica como coletamos e usamos seus dados, seguindo o RGPD (UE) e LGPD (Brasil).' },
          { h: '2. Coleta de Dados', p: 'Coletamos Nome, E-mail e Mensagem via formulário para fins de prestação de serviços.' },
          { h: '3. Uso dos Dados', p: 'Usados apenas para responder orçamentos e melhorar a performance do site.' }
        ]
      },
      terms: {
        title: 'Termos de Serviço',
        lastUpdated: legalCommon.pt.lastUpdated,
        sections: [
          { h: '1. Acordo', p: 'Ao acessar este site, você concorda com os termos aqui listados.' }
        ]
      }
    }
  },
  es: {
    meta: {
      title: "Contratar Programador Senior | Software a Medida y SaaS | BrunoDev",
      description: "¿Busca contratar a un programador senior? Experto en desarrollo de software a medida, ingeniería SaaS y ciberseguridad con 10+ años de experiencia."
    },
    nav: { about: 'Sobre mí', services: 'Servicios', expertise: 'Especialidad', contact: 'Contacto', getStarted: 'Contrátame' },
    hero: {
      badge: 'Disponible para Proyectos Internacionales',
      title1: 'Contrate a un Desarrollador Senior para',
      title2: 'Software a Medida y Soluciones SaaS',
      subtitle: 'Ingeniería full-stack y consultoría de infraestructura. Ayudo a startups y empresas a construir productos digitales seguros y escalables.',
      ctaPrimary: 'Contratar Ahora',
      ctaSecondary: 'Consultoría por WhatsApp',
      stats: { years: 'Años Exp', projects: 'Resultados', uptime: 'Foco en Uptime', monitoring: 'Confiabilidad' }
    },
    about: {
      badge: 'Contrate',
      tag: 'Experiencia y Confianza',
      title: 'Desarrollador Senior Multilingüe enfocado en el ROI y el rendimiento técnico.',
      p1: "Soy Bruno, Desarrollador Senior fluido en Inglés, Portugués y Español. Durante una década he trabajado con clientes internacionales entregando software de nivel empresarial.",
      p2: "Mi metodología se centra en soluciones de alto impacto. No solo escribo código; diseño sistemas que resuelven retos reales de escalabilidad y seguridad.",
      features: {
        security: { title: 'Seguridad Avanzada', desc: 'Implementando arquitecturas defensivas de grado B2B.' },
        performance: { title: 'Velocidad Extrema', desc: 'Optimización para métricas de alta conversión.' },
        mastery: { title: 'Dominio Cross-Stack', desc: 'Experiencia profunda en frameworks modernos de frontend y backend.' }
      }
    },
    services: {
      tag: 'Cómo Puedo Ayudar',
      title: 'Servicios de Software Estratégicos',
      subtitle: 'Contrate a un socio técnico confiable para sus proyectos críticos de desarrollo de software e infraestructura.',
      items: [
        { title: 'Desarrollo de Software a Medida', desc: 'Ingeniería de software personalizada diseñada para flujos de negocio específicos y escalabilidad.' },
        { title: 'Ingeniería de Plataformas SaaS', desc: 'Creación de productos SaaS multi-inquilino desde cero, centrada en el rendimiento y lógica de ingresos.' },
        { title: 'Integración de APIs y Sistemas', desc: 'Desarrollo de arquitecturas de API robustas y conexión de sistemas de negocio (Stripe, CRMs, ERPs).' },
        { title: 'Infraestructura Cloud Segura', desc: 'Gestión de entornos AWS/GCP con Docker, CI/CD y protocolos de alta disponibilidad.' },
        { title: 'Auditoría de Ciberseguridad', desc: 'Evaluaciones de vulnerabilidad profesionales y auditorías de código para proteger activos corporativos.' },
        { title: 'Ingeniería de Rendimiento', desc: 'Rescate de sistemas lentos, optimización de lógica de bases de datos y escalado de plataformas legadas.' }
      ]
    },
    expertise: {
      tag: 'Stack Técnico',
      title: 'Tecnologías Especializadas',
      version: 'Portafolio Verificado',
      categories: {
        frontend: 'Ingeniería Frontend',
        backend: 'Backend y Sistemas',
        infra: 'Nube e Infraestructura',
        security: 'Ciberseguridad'
      },
      ctaTitle: '¿Listo para construir con un Pro Senior?',
      ctaDesc: "Hablemos de los objetivos de su proyecto. Ofrezco consultoría profesional y desarrollo en tres idiomas.",
      ctaButton: 'Iniciar Proyecto'
    },
    contact: {
      tag: 'Contrate Hoy',
      title: '¿Listo para un socio técnico?',
      subtitle: "Disponible para proyectos internacionales. Contácteme para discutir cómo escalar su infraestructura de software.",
      locationLabel: 'Base de Operaciones',
      form: {
        successTitle: '¡Solicitud Enviada!',
        successDesc: "Gracias por su consulta. Revisaré los detalles de su proyecto y responderé en menos de 24 horas.",
        successButton: 'Enviar otro mensaje',
        nameLabel: 'Nombre Completo',
        emailLabel: 'Email Corporativo',
        messageLabel: 'Requisitos del Proyecto',
        placeholderName: 'Juan Pérez',
        placeholderEmail: 'juan@empresa.com',
        placeholderMessage: 'Describa brevemente el desafío de software o infraestructura que necesita resolver...',
        submit: 'Enviar Solicitud de Proyecto',
        sending: 'Procesando...',
        error: 'Error de red. Inténtelo de nuevo o contacte vía LinkedIn.',
        validation: {
          name: "El nombre es obligatorio (mín. 2 caracteres).",
          email: "Por favor, introduzca un email corporativo válido.",
          message: "Por favor, describa las necesidades del proyecto (mín. 10 caracteres)."
        }
      }
    },
    footer: { privacy: 'Privacidad', terms: 'Términos', rights: 'Todos los derechos reservados.' },
    cookies: {
      title: 'SEO y Privacidad',
      desc: 'Usamos cookies para mejorar su experiencia y analizar el tráfico del sitio.',
      acceptAll: 'Aceptar Todas',
      rejectAll: 'Rechazar No Esenciales',
      settings: 'Configurar',
      save: 'Guardar Preferencias',
      essential: { title: 'Esenciales', desc: 'Necesarios para funciones básicas.' },
      analytics: { title: 'Analíticas', desc: 'Ayudan a mejorar la entrega de servicios.' },
      marketing: { title: 'Marketing', desc: 'Notificaciones profesionales relevantes.' }
    },
    legal: {
      back: 'Volver al Inicio',
      footerNote: 'Solo consultas profesionales. Confidencialidad garantizada.',
      privacy: {
        title: 'Política de Privacidad',
        lastUpdated: legalCommon.es.lastUpdated,
        sections: [
          { h: '1. Introducción', p: 'Esta Política explica cómo tratamos sus datos personales según el RGPD (UE).' }
        ]
      },
      terms: {
        title: 'Términos de Servicio',
        lastUpdated: legalCommon.es.lastUpdated,
        sections: [
          { h: '1. Acuerdo', p: 'Al acceder a este sitio, acepta estos términos y condiciones.' }
        ]
      }
    }
  }
};
