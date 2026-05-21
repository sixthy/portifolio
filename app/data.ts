export const profile = {
  name: "Gabriel Santos",
  title: "Engenheiro de Soware & Desenvolvedor.",
  titleen: "Software Engineer & Developer.",
  github: "https://github.com/sixthy",
  linkedin: "https://linkedin.com/in/gabriel-ferreira7",
  githubHandle: "@Sixthy",
  email: "gabrielferreirasantos723@email.com",
  cvPt: "/cv-pt.pdf",
  cvEn: "/cv-en.pdf",
  bio: [
    "Sou Gabriel Santos, natural de Minas Gerais, Brasil. Atualmente estudante de Engenharia Informática e Aplicações na IPLUSO.",
    "Meu interesse por tecnologia começou ainda no ensino médio, quando tive contato com a área de telecomunicações e redes ao ajudar meus pais na empresa da família.",
    "Hoje, procuro oportunidades para aplicar meus conhecimentos em ambientes reais, aprender continuamente e desenvolver minha carreira na área de TI.",
  ],
  bioEn: [
    "I'm Gabriel Santos, from Minas Gerais, Brazil. Currently studying Computer Engineering and Applications at IPLUSO.",
    "My interest in technology started in high school, when I was exposed to telecommunications and networking while helping my parents in the family business.",
    "Today, I look for opportunities to apply my knowledge in real environments, learn continuously, and grow my career in IT.",
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
    icon: "/projects/tvicon.png",
  },
  {
    title: "AlgorithmsDS Station",
    description: "Simulador de uma estação em funcionamento.",
    tech: ["Python"],
    github: "https://github.com/sixthy/AlgorithmsDS-Station",
    live: "https://github.com/sixthy",
    icon: "/projects/Station.png",
  },
  {
    title: "Algorithm Huffman Compression",
    description: "Comprenssor e descompenssor de arquivos.",
    tech: ["Java"],
    github: "https://github.com/sixthy/Huffman-Compression ",
    live: "https://github.com/sixthy",
    icon: "/projects/Huffman.png",
  },
  {
    title: "WebScrapper ",
    description: "Estudo por conta propria para conhecer o funcionamento de um webscrapper.",
    tech: ["Python, BeautifulSoup, Pandas"],
    github: "https://github.com/sixthy/WebScrapper",
    live: "https://github.com/sixthy",
    icon: "/projects/Webscrapper.png",
  },
  {
    title: "To Do List",
    description: "uma To Do List feita bem no começo da minha jornada.",
    tech: ["JavaScript, Bulma, Node"],
    github: "https://github.com/sixthy/to-do-list",
    live: "https://github.com/sixthy",
    icon: "/projects/todolist.png",
  },
];

export const posts = [
  {
    slug: "construindo-meu-portfolio",
    title: "Como estou construindo meu portfólio.",
    date: "20 de maio de 2026",
    readTime: "5 min",
    tag: "Info",
    content: `
Construir um portfólio do zero é uma das melhores formas de aprender na prática.

Escolhi usar **Next.js** com **TypeScript** e **Tailwind CSS** porque queria algo rápido, moderno e fácil de manter. A ideia foi criar algo simples mas que refletisse minha identidade como desenvolvedor.

## O processo

Comecei pelo design: fui buscar referências de portfólios que eu admirava e tentei entender o que tornava cada um deles especial. No final, optei por um estilo minimalista, fundo escuro e tipografia limpa.

Depois partindo para o código. Criei as páginas principais: **Início**, **Projetos**, **Posts** e **Momentos**. Cada um com um propósito.

## O que aprendi

- Organizar bem os dados em um arquivo separado facilita muito a manutenção.
- Tailwind é incrível para prototipagem rápida.
- Next.js App Router tem uma curva de aprendizado, mas vale muito a pena.

Ainda tenho muita coisa para melhorar, mas estou satisfeito com o progresso que estou tendo.
    `,
  },
  {
    slug: "react-e-typescript",
    title: "O que aprendi com React e TypeScript",
    date: "20 de maio de 2025",
    readTime: "3 min",
    tag: "Info",
    content: `
Quando comecei a usar **TypeScript** com **React**, a minha primeira reação foi: "pra que tanto trabalho?". Depois de algumas linhas de codigo, entendi.

## Tipagem salva vidas

Com TypeScript, você descobre erros antes mesmo de rodar o código. Passar props erradas para um componente? O editor já avisa. Isso me poupou muito tempo de quebrar a cabeça.

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

Existe uma curva inicial no aprendizado, mas o ganho em produtividade e confiança no código compensa muito. Hoje já entendo melhor sobre o React com TypeScript e porque o usar.
    `,
  },
  {
    slug: "construindo-meu-barberapp",
    title: "Como estou construindo meu barberapp.",
    date: "21 de maio de 2026",
    readTime: "5 min",
    tag: "Info",
    content: `
Construir um App do zero foi desafiador mas também é uma das melhores formas de aprender na prática.

Escolhi usar **Next.js** com **TypeScript** e **Tailwind CSS** porque queria algo prático, moderno e fácil de modificar. 
Um dia estava cortando o cabelo e pensei "por que não um App que ajudaria meu barbeiro?". 
A ideia foi criar algo simples por enquanto como base mas com um sistema completamente funcional, sendo assim se eu tivesse um cliente um dia era só alterar o modelo.
Então veio a ideia de um front para o Cliente e para o Dono com um dashboard, um back com funcionalidade para o Dono ver/editar/remover a agenda.

## O processo

Comecei pelo design: pensei em uma barbearia e como deveria ficar a sua pagina inicial e o que seria interessante para o cliente visualmente. 
No final, optei por um estilo tematico de barbearia, fundo escuro e tipografia limpa, assim ja tendo uma base para algum cliente ver.

Depois indo para o código. Criei as páginas principais: **Início**, **Agendar**, **Dashboard**, **Editar**, **Remover**. 
Cada um com um propósito desde a interface do Cliente quanto a interface do Dono.

## O que aprendi

- Um projeto bem organizado sempre vai ser vantajoso tanto para mim quanto para quem for da minha equipe um dia.
- Tailwind é incrível e estou descobrindo aos poucos como deixar tudo do jeito que eu quero.
- Next.js App Router parece ser difícil quando você começa mas a medida que vamos utilizando vem se tornando algo intuitivo.

Sobre esse projeto percebo que ainda estou no começo, mas sinto que já dei meu primeiro passo.
    `,
  },
];

export const moments = [
  { src: "/moments/sevilla.jpg", alt: "Momento 1" },
  { src: "/moments/papas.jpg", alt: "Momento 2" },
  { src: "/moments/family.jpg", alt: "Momento 3" },
  { src: "/moments/kinos.jpg", alt: "Momento 4" },
  { src: "/moments/cec.jpg", alt: "Momento 5" },
  { src: "/moments/ghostshow.jpg", alt: "Momento 6" },
  { src: "/moments/barco.jpg", alt: "Momento 7" },
  { src: "/moments/friends.jpg", alt: "Momento 8" },
  { src: "/moments/ouropreto.jpg", alt: "Momento 9" },
  
];