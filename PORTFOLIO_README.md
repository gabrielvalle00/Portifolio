# 🚀 Gabriel Valle - Portfolio

Um portfólio moderno e impactante inspirado no estilo cinematográfico do Spiderman Launch Website, com efeitos parallax de vídeo, design em modo claro (branco, preto e roxo) e animações suaves.

## ✨ Características

### 🎬 Design Cinematográfico
- **Parallax Video Effects**: Vídeos de background (blackhole.webm e cards-video.webm) com efeitos parallax
- **Hero Section Impactante**: Nome em grande escala com animações suaves
- **Animações Fluídas**: Framer Motion para transições e micro-interações
- **Scroll Animations**: Seções aparecem com fade-in e slide-up ao rolar a página

### 🎨 Esquema de Cores
- **Modo Claro**: Background branco para contraste máximo
- **Accent Color**: Roxo moderno (#7c3aed, #6b46c1) para destaques
- **Tipografia**: Space Grotesk (headings) + Inter (body) para look profissional

### 📱 Seções

1. **Hero**: Introdução cinematográfica com vídeo parallax
2. **Sobre**: Bio profissional com stats e highlights
3. **Experiência & Educação**: Timeline com detalhes de trabalho e formação
4. **Skills**: Tabs interativas com progress bars (Frontend, Backend, Database, Data Analysis, Tools)
5. **Projetos**: Grid filtrable com 6+ projetos (Full Stack, Mobile, Web Apps)
6. **Certificações**: Grid de certificações (Google Cloud, AWS, MongoDB, etc.)
7. **Contato**: Formulário funcional + links sociais
8. **Footer**: Navegação rápida e botão "voltar ao topo"

### 🛠️ Stack Tecnológica

**Frontend:**
- React 19
- Framer Motion (animações)
- React Intersection Observer (scroll detection)
- Tailwind CSS (styling)
- Lucide React (ícones)
- Shadcn/ui components

**Backend:**
- FastAPI (Python)
- MongoDB (database)
- Motor (async MongoDB driver)

## 🚀 Como Executar

### Desenvolvimento Local

```bash
# Frontend
cd /app/frontend
yarn install
yarn start

# Backend  
cd /app/backend
pip install -r requirements.txt
uvicorn server:app --reload --host 0.0.0.0 --port 8001
```

### Com Supervisor (Produção)

```bash
# Restart todos os serviços
sudo supervisorctl restart all

# Status
sudo supervisorctl status

# Logs
tail -f /var/log/supervisor/frontend.*.log
tail -f /var/log/supervisor/backend.*.log
```

## 📁 Estrutura de Arquivos

```
/app/
├── frontend/
│   ├── public/
│   │   └── videos/
│   │       ├── blackhole.webm
│   │       └── cards-video.webm
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx (parallax video)
│   │   │   ├── About.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Skills.jsx (tabs + video parallax)
│   │   │   ├── Projects.jsx (filterable grid)
│   │   │   ├── Certifications.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── data/
│   │   │   └── mock.js (dados mockados)
│   │   ├── App.js
│   │   └── index.css
│   └── package.json
└── backend/
    ├── server.py
    └── requirements.txt
```

## 🎯 Destaques do Currículo

### Gabriel Eduardo do Valle Gomes
- **Email**: gabrivalle8@gmail.com
- **Telefone**: (19) 98143-3894
- **Localização**: Sumaré, SP

### Experiência
- **EMS Pharma** - Analista e Desenvolvedor de Dados (Dez 2023 - Nov 2025)
  - Dashboards no Power BI
  - Automação com Power Apps e Power Automate
  - Análise de dados com SQL, Python (Pandas, NumPy)
  - Projetos de IA e Machine Learning

### Educação
- Análise e Desenvolvimento de Sistemas - UNIP (2024-2026)
- Técnico em Desenvolvimento de Sistemas - SENAI (2023-2024)
- Técnico em Eletroeletrônica - SENAI (2022-2023)

### Skills
- **Frontend**: React, React Native, JavaScript, TypeScript, Next.js, Tailwind CSS
- **Backend**: Node.js, Express, Python, Java, Spring Boot
- **Database**: MySQL, PostgreSQL, MongoDB, Firebase, SQL Server
- **Data Analysis**: Power BI, SQL Avançado, Python (Pandas, NumPy), Excel Avançado, ETL/ELT
- **Tools**: Git, Docker, AWS, Power Apps, Power Automate

### Certificações (16+)
- Google Cloud (5 certificações)
- AWS Solutions Architect Associate
- MongoDB Database Administrator
- Microsoft Dynamics 365 + Power Platform Solution Architect
- Apache Spark, Java, Python

## 🔗 Links

- **GitHub**: [gabrielvalle00](https://github.com/gabrielvalle00)
- **LinkedIn**: [gabriel-valle](https://linkedin.com/in/gabriel-valle)

## 📝 Notas

- Os dados são **mockados** no arquivo `mock.js`
- O formulário de contato exibe um toast de confirmação (sem backend)
- Vídeos em formato `.webm` para performance otimizada
- Design responsivo para mobile, tablet e desktop

---

**Desenvolvido com ❤️ usando React + Framer Motion + Tailwind CSS**
