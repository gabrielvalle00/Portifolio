// Mock data for Gabriel Valle Portfolio

export const personalInfo = {
  name: "GABRIEL VALLE",
  fullName: "Gabriel Eduardo do Valle Gomes",
  title: "Fullstack Developer & Data Analyst",
  location: "Sumaré, SP, Brasil",
  email: "gabrivalle8@gmail.com",
  phone: "(19) 98143-3894",
  github: "https://github.com/gabrielvalle00",
  linkedin: "https://www.linkedin.com/in/gabriel-valle-159170242/",
  bio: "Profissional com experiência em Desenvolvimento Full Stack e Análise de Dados em ambiente corporativo na indústria farmacêutica. Especializado em criar soluções web e mobile robustas, desenvolver dashboards analíticos no Power BI e automatizar processos. Combinando habilidades técnicas em JavaScript, React, Node.js, Python e SQL para transformar dados em insights estratégicos e construir aplicações escaláveis."
};

export const stats = [
  { label: "Anos de Experiência", value: "2+" },
  { label: "Projetos Concluídos", value: "15+" },
  { label: "Certificações", value: "16+" },
  { label: "Tecnologias", value: "20+" }
];

export const experience = [
  {
    id: 1,
    company: "EMS Pharma",
    role: "Analista e Desenvolvedor de Dados",
    period: "Dez 2023 - Nov 2025",
    location: "Hortolândia, SP",
    description: "Desenvolvimento de soluções inteligentes e inovação tecnológica na indústria farmacêutica.",
    achievements: [
      "Desenvolvimento de dashboards analíticos no Power BI para apoio à tomada de decisão",
      "Criação de aplicações corporativas com Power Apps e automação com Power Automate",
      "Análise de dados com SQL, Python (Pandas, NumPy) e Excel para insights estratégicos",
      "Participação em projetos de Inteligência Artificial e Machine Learning",
      "Automação de processos resultando em ganho de produtividade operacional"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "UNIP",
    period: "2024 - 2026",
    status: "Em andamento"
  },
  {
    id: 2,
    degree: "Técnico em Desenvolvimento de Sistemas",
    institution: "SENAI Celso Charuri",
    period: "2023 - 2024",
    status: "Concluído"
  },
  {
    id: 3,
    degree: "Técnico em Eletroeletrônica",
    institution: "SENAI Celso Charuri",
    period: "2022 - 2023",
    status: "Concluído"
  }
];

export const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "React Native", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "HTML5 & CSS3", level: 95 },
    { name: "Tailwind CSS", level: 88 },
    { name: "Next.js", level: 80 },
    { name: "Framer Motion", level: 75 }
  ],
  backend: [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 88 },
    { name: "Python", level: 85 },
    { name: "Java", level: 80 },
    { name: "Spring Boot", level: 75 },
    { name: "RESTful APIs", level: 90 },
    { name: "GraphQL", level: 70 },
    { name: "JWT Auth", level: 85 }
  ],
  database: [
    { name: "MySQL", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "Firebase", level: 85 },
    { name: "SQL Server", level: 88 },
    { name: "SQLite", level: 85 },
    { name: "Prisma ORM", level: 75 }
  ],
  dataAnalysis: [
    { name: "Power BI", level: 90 },
    { name: "SQL Avançado", level: 92 },
    { name: "Python (Pandas, NumPy)", level: 85 },
    { name: "Excel Avançado", level: 90 },
    { name: "ETL/ELT", level: 80 },
    { name: "Data Visualization", level: 88 },
    { name: "Databricks", level: 70 }
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Power Apps", level: 85 },
    { name: "Power Automate", level: 85 },
    { name: "Postman", level: 90 },
    { name: "Android Studio", level: 80 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Patinhas do Bem",
    category: "fullstack",
    description: "Plataforma web e app mobile (React Native) para facilitar adoção e doação de animais. Sistema completo com chat, autenticação JWT, integração Firebase e MySQL.",
    image: "/patinhas-do-bem.png",
    tags: ["React", "React Native", "Node.js", "MySQL", "Firebase", "JWT"],
    github: "https://github.com/gabrielvalle00/PatinhasDoBem",
    demo: "https://lucasmanrick.github.io/Front-end-Patinhas-do-bem/Pages/Login.html",
    featured: true
  },
  {
    id: 2,
    title: "Portfolio Profissional",
    category: "frontend",
    description: "Portfolio moderno com Next.js 13, TypeScript e Framer Motion. Design responsivo com animações suaves e tema claro.",
    image: "/portifolio.png",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/gabrielvalle00/Portifolio",
    demo: "https://gv-portifolio.vercel.app/",
    featured: true
  },
  {
    id: 3,
    title: "App Mobile CRUD MySQL",
    category: "mobile",
    description: "Aplicativo mobile com 4 telas para registro, visualização e pesquisa de dados em banco MySQL remoto.",
    image: "/app-mobile-crud.png",
    tags: ["React Native", "Node.js", "MySQL", "Express"],
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7176006312609124352/",
    featured: false
  },
  {
    id: 4,
    title: "Mundo Literário",
    category: "fullstack",
    description: "E-commerce completo para livraria virtual com carrinho de compras, gestão de produtos, autenticação e painel administrativo.",
    image: "/mundo-literario-preview.png",
    tags: ["Node.js", "Express", "Handlebars", "MySQL"],
    github: "https://github.com/gabrielvalle00/MundoLiterario",
    featured: false
  },
  {
    id: 5,
    title: "APP Filme SQLite",
    category: "mobile",
    description: "Aplicativo para gerenciamento de filmes com SQLite. Cadastro, listagem e busca com interface intuitiva.",
    image: "/app-filme.png",
    tags: ["React Native", "SQLite", "JavaScript"],
    github: "https://github.com/gabrielvalle00/APP-Fimel-SQLite",
    featured: false
  },
  {
    id: 6,
    title: "API de Consulta",
    category: "backend",
    description: "API REST com sistema de autenticação, endpoints organizados e validação de dados.",
    image: "/api-consulta.png",
    tags: ["Node.js", "Express", "JavaScript", "REST API"],
    github: "https://github.com/gabrielvalle00/Cria-o-de-API-consulta",
    featured: false
  }
];

export const certifications = [
  {
    id: 1,
    title: "Build and Secure Networks in Google Cloud",
    issuer: "Google Cloud",
    date: "Mai 2023",
    category: "cloud",
    logo: "/cert-google.png",
    credentialUrl: "https://www.cloudskillsboost.google/public_profiles/da885b0a-2a77-42ca-96af-fccf3df39b56/badges/3701447"
  },
  {
    id: 2,
    title: "Create and Manage Cloud Resources",
    issuer: "Google Cloud",
    date: "Jul 2022",
    category: "cloud",
    logo: "/cert-google.png",
    credentialUrl: "https://www.cloudskillsboost.google/public_profiles/da885b0a-2a77-42ca-96af-fccf3df39b56/badges/2429300"
  },
  {
    id: 3,
    title: "Perform Foundational Data, ML, and AI Tasks",
    issuer: "Google Cloud",
    date: "Jul 2022",
    category: "cloud",
    logo: "/cert-google.png",
    credentialUrl: "https://www.cloudskillsboost.google/public_profiles/da885b0a-2a77-42ca-96af-fccf3df39b56/badges/2467931"
  },
  {
    id: 4,
    title: "Perform Foundational Infrastructure Tasks",
    issuer: "Google Cloud",
    date: "Jul 2022",
    category: "cloud",
    logo: "/cert-google.png",
    credentialUrl: "https://www.cloudskillsboost.google/public_profiles/da885b0a-2a77-42ca-96af-fccf3df39b56/badges/2449328"
  },
  {
    id: 5,
    title: "Java Programming",
    issuer: "SENAI São Paulo",
    date: "Dez 2024",
    category: "development",
    logo: "/cert-senai.png"
  },
  {
    id: 6,
    title: "Python Programming",
    issuer: "SENAI São Paulo",
    date: "Mar 2024",
    category: "development",
    logo: "/cert-senai.png"
  },
  {
    id: 7,
    title: "Dynamics 365 + Power Platform Solution Architect",
    issuer: "Microsoft",
    date: "Jan 2024",
    category: "cloud",
    logo: "/cert-microsoft.png"
  },
  {
    id: 8,
    title: "AWS Solutions Architect Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    category: "cloud",
    logo: "/cert-aws.png"
  },
  {
    id: 9,
    title: "MongoDB Database Administrator",
    issuer: "MongoDB",
    date: "2024",
    category: "database",
    logo: "/cert-mongodb.png"
  },
  {
    id: 10,
    title: "Apache Spark",
    issuer: "Apache Software Foundation",
    date: "2024",
    category: "database",
    logo: "/cert-apache.png"
  }
];
