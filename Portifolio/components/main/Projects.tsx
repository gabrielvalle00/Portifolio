import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">       
        Meus Projetos
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/tcc.mp4"
          title="Patinhas Do Bem"
          description="A plataforma foi projetada para facilitar a adoção e doação de animais, promovendo conexões entre pessoas interessadas em oferecer um novo lar para os pets e aquelas que precisam encontrar famílias acolhedoras para seus animais. Através de um desenvolvimento completo e complexo, conseguimos entregar um produto funcional, que reflete os conhecimentos adquiridos ao longo do curso e a dedicação em transformar uma ideia em uma solução tecnológica."
        />
        <ProjectCard
          src="/mund.mp4"
          title="Mundo Literario"
          description="Uma loja virtual para seus clientes. Este projeto foi desenvolvido como parte de uma atividade de grupo para criar uma aplicação de loja virtual em Node.js. Utilizamos tecnologias como Express, Express Handlebars, Body Parser, CSS, JavaScript, entre outras para criar uma plataforma interativa e funcional."
        />
      </div>
    </div>
  );
};

export default Projects;
