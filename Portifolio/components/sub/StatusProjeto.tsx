"use client";
import React, { useEffect, useState } from "react";
import { Skill_data, Frontend_skill, Backend_skill, Full_stack } from "@/constants";

function getUniqueSkills() {
  const allSkills = [
    ...Skill_data,
    ...Frontend_skill,
    ...Backend_skill,
    ...Full_stack,
  ];
  const unique = new Map();
  allSkills.forEach((s) => {
    unique.set(s.skill_name.toLowerCase().replace(/\s+/g, ""), s);
  });
  return Array.from(unique.values());
}

function useCountUp(target: number | null, duration = 1000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (target === null) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [target, duration]);
  return target === null ? '-' : count;
}

// SVGs modernos e minimalistas
const GithubSVG = (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-400 drop-shadow-xl" style={{filter: 'drop-shadow(0 0 12px #818cf8)'}}>
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0 1 12 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" fill="currentColor"/>
  </svg>
);

const TrophySVG = (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-pink-400 drop-shadow-xl" style={{filter: 'drop-shadow(0 0 12px #f472b6)'}}>
    <path d="M8 21h8M12 17v4M17 5V3H7v2M17 5a5 5 0 0 1-10 0M21 5h-4M3 5h4" />
    <path d="M21 5a7 7 0 0 1-14 0" fill="currentColor"/>
  </svg>
);

const ToolsSVG = (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400 drop-shadow-xl" style={{filter: 'drop-shadow(0 0 12px #34d399)'}}>
    <path d="M14.7 6.3a4 4 0 0 1 5 5l-7.4 7.4a2 2 0 0 1-2.8 0l-2.3-2.3a2 2 0 0 1 0-2.8l7.4-7.4Z" fill="currentColor"/>
    <path d="M8.5 8.5l7 7" />
  </svg>
);

export default function StatusProjeto() {
  const [repoCount, setRepoCount] = useState<number | null>(null);
  const [yearsCount, setYearsCount] = useState<number | null>(null);
  const [toolsCount, setToolsCount] = useState<number>(getUniqueSkills().length);

  const repoCountUp = useCountUp(repoCount);
  const yearsCountUp = useCountUp(yearsCount);
  const toolsCountUp = useCountUp(toolsCount);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        // Busca da API interna do Next.js
        const res = await fetch('/api/github-stats');
        const data = await res.json();
        setRepoCount(data.publicRepos ?? null);
        setYearsCount(data.years ?? null);
        setToolsCount(data.languagesCount ?? getUniqueSkills().length);
      } catch (e) {
        setRepoCount(null);
        setYearsCount(null);
        setToolsCount(getUniqueSkills().length);
      }
    }
    fetchGitHubData();
  }, []);

  const cards = [
    {
      icon: GithubSVG, label: "Projetos no GitHub", value: repoCountUp, glow: "from-indigo-400/60 to-purple-500/30" },
    {
      icon: TrophySVG, label: "Anos de contribuição", value: yearsCountUp, glow: "from-pink-400/60 to-fuchsia-500/30" },
    {
      icon: ToolsSVG, label: "Ferramentas utilizadas", value: toolsCountUp, glow: "from-emerald-400/60 to-cyan-400/30" },
  ];

  return (
    <section className="w-full flex flex-row items-center justify-center gap-12 mt-4 mb-2 px-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className={
            `relative flex flex-col items-center group select-none transition-transform duration-300 hover:-translate-y-2` +
            ` before:content-[''] before:absolute before:inset-0 before:rounded-full before:blur-2xl before:opacity-60 before:scale-110 before:z-0` +
            ` before:bg-gradient-to-br before:${card.glow}`
          }
        >
          <div className="relative z-10 flex flex-col items-center">
            <span className="block mb-2 group-hover:scale-110 transition-transform duration-300">
              {card.icon}
            </span>
            <span className="text-5xl font-extrabold text-white mb-1 drop-shadow-lg animate-fade-in group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-400 transition-colors duration-300">
              {card.value}
            </span>
            <span className="text-base text-gray-200 font-medium tracking-wide animate-fade-in-slow text-center mt-1">
              {card.label}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}

// Animations (Tailwind CSS custom classes):
// .animate-bounce-slow { animation: bounce 2.5s infinite; }
// .animate-fade-in { animation: fadeIn 0.8s ease; }
// .animate-fade-in-slow { animation: fadeIn 1.5s ease; } 