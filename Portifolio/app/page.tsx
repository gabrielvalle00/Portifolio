import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Certificates from "@/components/main/Certificates";
import ContactForm from "@/components/sub/ContactForm";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Hero Section - Primeira seção */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-label="Página inicial"
      >
        <Hero />
      </section>
      
      {/* Skills Section - Segunda seção */}
      <section 
        id="skills" 
        className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-transparent via-background/50 to-background"
        aria-label="Habilidades e tecnologias"
      >
        <div className="container mx-auto px-4">
          <Skills />
        </div>
      </section>
      
      {/* Certificates Section - Terceira seção */}
      <section 
        id="certificates" 
        className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-background via-surface/30 to-background"
        aria-label="Certificações técnicas"
      >
        <div className="container mx-auto px-4">
          <Certificates />
        </div>
      </section>
      
      {/* Encryption Section - Quarta seção */}
      <section 
        id="performance" 
        className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-background via-surface/30 to-background"
        aria-label="Performance e segurança"
      >
        <div className="container mx-auto px-4">
          <Encryption />
        </div>
      </section>
      
      {/* Projects Section - Quinta seção */}
      <section 
        id="projects" 
        className="relative min-h-screen flex items-center justify-center py-20 bg-gradient-to-b from-background via-background/50 to-surface/20"
        aria-label="Projetos realizados"
      >
        <div className="container mx-auto px-4">
          <Projects />
        </div>
      </section>

      {/* Contact Section - Sexta seção */}
      <section 
        id="contact" 
        className="relative min-h-screen flex flex-col items-center justify-center py-20 bg-gradient-to-b from-surface/20 via-surface/40 to-background"
        aria-label="Informações de contato"
      >
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-12">
          <div className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent leading-tight">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
              Estou sempre aberto a novas oportunidades e parcerias. 
              Entre em contato para discutirmos como posso ajudar no seu projeto.
            </p>
          </div>
          <div className="flex-1 flex justify-center lg:justify-start w-full">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
