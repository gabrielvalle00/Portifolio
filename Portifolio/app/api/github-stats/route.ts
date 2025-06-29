import { NextResponse } from 'next/server';

export async function GET() {
    const username = 'gabrielvalle00';
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    const userData = await userRes.json();

    // Buscar todos os repositórios do usuário
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
    const reposData = await reposRes.json();

    // Extrair linguagens únicas
    const languages = new Set<string>();
    reposData.forEach((repo: any) => {
        if (repo.language) languages.add(repo.language);
    });

    // Calcular anos de contribuição
    const createdYear = new Date(userData.created_at).getFullYear();
    const currentYear = new Date().getFullYear();
    const years = Math.max(1, currentYear - createdYear + 1);

    return NextResponse.json({
        publicRepos: userData.public_repos,
        years,
        languages: Array.from(languages),
        languagesCount: languages.size,
        githubCreatedAt: userData.created_at,
    });
} 