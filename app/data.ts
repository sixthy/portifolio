export const profile = {
  name: "Gabriel Santos",
  title: "Engenheiro de Software & Desenvolvedor.",
  github: "https://github.com/sixthy",
  linkedin: "https://linkedin.com/in/gabriel-ferreira7",
  githubHandle: "@Sixthy",
  email: "gabrielferreirasantos723@email.com",
  bio: [
    "Sou Gabriel Santos, natural de Minas Gerais, Brasil. Atualmente estudante de Engenharia Informática e Aplicações na IPLUSO.",
    "Meu interesse por tecnologia começou ainda no ensino médio, quando tive contato com a área de telecomunicações e redes ao ajudar meus pais na empresa da família.",
    "Hoje, procuro oportunidades para aplicar meus conhecimentos em ambientes reais, aprender continuamente e desenvolver minha carreira na área de TI.",
  ],
};

export const workExperience = [
  {
    company: "notFound",
    role: "notFound",
    period: "notFound",
    logo: "P",
    logoColor: "#10b981",
  },
];

export const education = [
  {
    institution: "IPLUSO",
    degree: "Licenciatura em Engenharia Informática",
    period: "2025 - 2028",
    logo: "/icons/edu.jpg",
    logoColor: "#ef4444",
  },
];

export const skills = [
  "React", "TypeScript", "JavaScript", "Node.js", "Next.js",
  "Tailwind CSS", "PostgreSQL", "Git", "Java", "Python", "MongoDB", "Vercel",
];

export const projects = [
  {
    title: "Portfólio Website",
    description: "Portfólio pessoal desenvolvido com React, TypeScript, Tailwind e animações.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "github.com/sixthy",
    live: "github.com/sixthy",
    icon: "/projects/PortifolioIcon.png",
  },
  {
    title: "BarberApp Dashboard",
    description: "Aplicação web com dashboard, autenticação e visualização de dados.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
    icon: "/projects/porttest.jpg",
  },
  {
    title: "Connect4 Game",
    description: "Simulador do jogo Connect4.",
    tech: ["Java"],
    github: "#",
    live: "#",
    icon: null,
  },
];

export const posts = [
  {
    slug: "construindo-meu-portfolio",
    title: "Como estou construindo meu portfólio.",
    date: "20 de maio de 2026",
    readTime: "3 min",
    tag: "Info",
    content: `
Construir um portfólio do zero é uma das melhores formas de aprender na prática.

Escolhi usar **Next.js** com **TypeScript** e **Tailwind CSS** porque queria algo rápido, moderno e fácil de manter. A ideia foi criar algo simples mas que refletisse minha identidade como desenvolvedor.

## O processo

Comecei pelo design: fui buscar referências de portfólios que eu admirava e tentei entender o que tornava cada um deles especial. No final, optei por um estilo minimalista, fundo escuro e tipografia limpa.

Depois partiu para o código. Criei as páginas principais: **Início**, **Projetos**, **Posts** e **Momentos**. Cada uma com um propósito claro.

## O que aprendi

- Organizar bem os dados em um arquivo separado facilita muito a manutenção
- Tailwind é incrível para prototipagem rápida
- Next.js App Router tem uma curva de aprendizado, mas vale muito a pena

Ainda tem muita coisa para melhorar, mas estou satisfeito com o progresso.
    `,
  },
  {
    slug: "react-e-typescript",
    title: "O que aprendi com React e TypeScript",
    date: "20 de maio de 2025",
    readTime: "3 min",
    tag: "Info",
    content: `
Quando comecei a usar **TypeScript** com **React**, a primeira reação foi: "por que tanto trabalho?". Depois de alguns projetos, entendi.

## Tipagem salva vidas

Com TypeScript, você descobre erros antes mesmo de rodar o código. Passar props erradas para um componente? O editor já avisa. Isso economiza horas de debug.

## Componentes mais previsíveis

Tipar suas props torna os componentes autodocumentados. Qualquer pessoa que ler o código sabe exatamente o que cada componente espera receber.

\`\`\`tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}
\`\`\`

## Conclusão

A curva inicial existe, mas o ganho em produtividade e confiança no código compensa muito. Hoje não consigo imaginar trabalhar em React sem TypeScript.
    `,
  },
];