import Image from "next/image";
import React from "react";

interface Props {
  src: string; // Caminho do vídeo ou da imagem
  title: string;
  description: string;
}

const ProjectCard = ({ src, title, description }: Props) => {
  // Verifica se o arquivo é um vídeo baseado na extensão
  const isVideo = src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".ogg");

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      {isVideo ? (
        <video
          src={src}
          className="w-full object-contain"
          controls
          loop
          muted
          autoPlay 
        />
      ) : (
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
      )}

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
