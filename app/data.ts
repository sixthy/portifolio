export const profile = {
  name: "Gabriel Santos",
  title: "Engenheiro de Soware & Desenvolvedor.",
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
  "Pandas", "BeautifulSoup", "API", "Web Scrapping", "Data Flow", "OOP",
  "Data Processing",
];

export const projects = [
  {
    title: "Portfólio Website",
    description: "Portfólio pessoal desenvolvido com React, TypeScript, Tailwind e animações.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "https://github.com/sixthy/portifolio",
    live: "github.com/sixthy",
    icon: "/projects/PortifolioIcon.png",
  },
  {
    title: "BarberApp Dashboard",
    description: "Aplicação web com dashboard, autenticação e visualização de dados.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/sixthy/BarberApp",
    live: "https://github.com/sixthy",
    icon: "/projects/BarberIcon.png",
  },
  {
    title: "Connect4 Game",
    description: "Simulador do jogo Connect4.",
    tech: ["Java"],
    github: "https://github.com/sixthy/ConnectFour",
    live: "https://github.com/sixthy",
    icon: "/projects/Connect4.png",
  },
  {
    title: "TV Simulator",
    description: "Simulador de TV em Java.",
    tech: ["Java"],
    github: "https://github.com/sixthy/JavaTVsimulator",
    live: "https://github.com/sixthy",
    icon: "/projects/#.png",
  },
  {
    title: "AlgorithmsDS Station",
    description: "Simulador de uma estação em funcionamento.",
    tech: ["Python"],
    github: "https://github.com/sixthy/AlgorithmsDS-Station",
    live: "https://github.com/sixthy",
    icon: "/projects/#.png",
  },
  {
    title: "Algorithm Huffman Compression",
    description: "Comprenssor e descompenssor de arquivos.",
    tech: ["Java"],
    github: "https://github.com/sixthy/Huffman-Compression ",
    live: "https://github.com/sixthy",
    icon: "/projects/#.png",
  },
  {
    title: "WebScrapper ",
    description: "Estudo por conta propria para conhecer o funcionamento de um webscrapper.",
    tech: ["Python, BeautifulSoup, Pandas"],
    github: "https://github.com/sixthy/WebScrapper",
    live: "https://github.com/sixthy",
    icon: "/projects/#.png",
  },
  {
    title: "To Do List",
    description: "uma To Do List feita bem no começo da minha jornada.",
    tech: ["JavaScript, Bulma, Node"],
    github: "https://github.com/sixthy/to-do-list",
    live: "https://github.com/sixthy",
    icon: "/projects/#.png",
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

export const moments = [
  { src: "/moments/ghostshow.jpg", alt: "Momento 1" },
  { src: "/moments/#.jpg", alt: "Momento 2" },
  { src: "/moments/#.jpg", alt: "Momento 3" },
  { src: "/moments/#.jpg", alt: "Momento 4" },
  { src: "/moments/#.jpg", alt: "Momento 5" },
  { src: "/moments/#.jpg", alt: "Momento 6" },
  { src: "/moments/#.jpg", alt: "Momento 7" },
  { src: "/moments/#.jpg", alt: "Momento 8" },
  { src: "/moments/#.jpg", alt: "Momento 9" },
];