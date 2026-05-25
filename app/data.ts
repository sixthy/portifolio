export const profile = {
  name: "Gabriel Santos",
  title: "Engenheiro de Software & Desenvolvedor.",
  titleEn: "Software Engineer & Developer.",
  github: "https://github.com/sixthy",
  linkedin: "https://linkedin.com/in/gabriel-ferreira7",
  githubHandle: "@Sixthy",
  email: "gabrielferreirasantos723@email.com",
  cvPt: "/CVPT.pdf",
  cvEn: "/CVEN.pdf",
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
    company: "Searching",
    role: "Searching",
    period: "Searching",
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
    live: "https://ferreirasantos.dev.br",
    icon: "/projects/PortifolioIcon.png",
  },
  {
    title: "BarberApp Dashboard",
    description: "Aplicação web com dashboard, autenticação e visualização de dados.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/sixthy/BarberApp",
    live: "https://barber-app-two-lilac.vercel.app",
    icon: "/projects/BarberIcon.png",
  },
  {
    title: "Connect4 Game",
    description: "Simulador do jogo Connect4.",
    tech: ["Java"],
    github: "https://github.com/sixthy/ConnectFour",
    live: "https://github.com/sixthy/ConnectFour",
    icon: "/projects/Connect4.png",
  },
  {
    title: "TV Simulator",
    description: "Simulador de TV em Java.",
    tech: ["Java"],
    github: "https://github.com/sixthy/JavaTVsimulator",
    live: "https://github.com/sixthy/JavaTVsimulator",
    icon: "/projects/tvicon.png",
  },
  {
    title: "AlgorithmsDS Station",
    description: "Simulador de uma estação em funcionamento.",
    tech: ["Python"],
    github: "https://github.com/sixthy/AlgorithmsDS-Station",
    live: "https://github.com/AlgorithmsDS-Station",
    icon: "/projects/Station.png",
  },
  {
    title: "Algorithm Huffman Compression",
    description: "Comprenssor e descompenssor de arquivos.",
    tech: ["Java"],
    github: "https://github.com/sixthy/Huffman-Compression",
    live: "https://github.com/Huffman-Compression",
    icon: "/projects/Huffman.png",
  },
  {
    title: "WebScrapper ",
    description: "Estudo por conta propria para conhecer o funcionamento de um webscrapper.",
    tech: ["Python, BeautifulSoup, Pandas"],
    github: "https://github.com/sixthy/WebScrapper",
    live: "https://github.com/WebScrapper",
    icon: "/projects/Webscrapper.png",
  },
  {
    title: "To Do List",
    description: "uma To Do List feita bem no começo da minha jornada.",
    tech: ["JavaScript, Bulma, Node"],
    github: "https://github.com/sixthy/to-do-list",
    live: "https://github.com/to-do-list",
    icon: "/projects/todolist.png",
  },
];

export const posts = [
  {
    slug: "construindo-meu-portfolio",
    title: "Como estou construindo meu portfólio.",
    titleEn: "How I'm building my portfolio.",
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
    contentEn: `
    Building a portfolio from scratch is one of the best ways to learn by doing.

I chose to use **Next.js** with **TypeScript** and **Tailwind CSS** because I wanted something fast, modern, and easy to maintain. The idea was to create something simple, yet reflective of my identity as a developer.

## The process

I started with the design: I went looking for references of portfolios I admired and tried to understand what made each of them special. In the end, I opted for a minimalist style, with a dark background and clean typography.

After that, I moved on to the code. I created the main pages: **Home**, **Projects**, **Posts**, and **Moments**. Each one with a purpose.

## What I learned

- Organizing data well in a separate file makes maintenance much easier.
- Tailwind is amazing for rapid prototyping.
- Next.js App Router has a learning curve, but it's totally worth it.

I still have a lot of things to improve, but I'm satisfied with the progress I'm making.
    `,
  },
  {
    slug: "react-e-typescript",
    title: "O que aprendi com React e TypeScript",
    titleEn: "What i've learned with React and TypeScript.",
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
    contentEn: `When I started using **TypeScript** with **React**, my first reaction was: "why all this extra work?". After a few lines of code, I got it.

## Typing saves lives
With TypeScript, you catch errors before you even run the code. Passing the wrong props to a component? The editor warns you right away. This saved me a lot of time and headaches.

## More predictable components
Typing your props makes your components self-documenting. Anyone reading the code knows exactly what each component expects to receive.


\`\`\`tsx
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}
\`\`\`

## Conclusion
There is an initial learning curve, but the boost in productivity and code confidence is totally worth it. Today I better understand React with TypeScript and why to use it.`,
  },
  {
    slug: "construindo-meu-barberapp",
    title: "Como estou construindo meu barberapp.",
    titleEn: "How I'm building my barberapp.",
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
    contentEn: `
    Building an app from scratch was challenging, but it's also one of the best ways to learn by doing.

I chose to use Next.js with **TypeScript** and **Tailwind CSS** because I wanted something practical, modern, and easy to modify.
One day, while getting a haircut, I thought, "Why not build an app to help my barber?".
The idea was to create something simple as a foundation for now, but with a fully functional system—that way, if I ever get a client in the future, I just need to tweak the template.
So, I came up with the idea of a frontend for both the Client and the Owner (complete with a dashboard), and a backend featuring tools for the Owner to view, edit, and remove appointments.

## The process
I started with the design: I pictured a barbershop, what its homepage should look like, and what would be visually appealing to a client.
In the end, I went with a barbershop-themed style, featuring a dark background and clean typography, so Id already have a solid base to show a potential client.

After that, I jumped into the code. I created the main pages: **Home**, **Book Appointment**, **Dashboard**, **Edit**, and **Remove**.
Each one serves a specific purpose, covering both the Client and Owner interfaces.

## What I learned
- A well-organized project will always be an advantage, both for me and for anyone who might be on my team one day.

- Tailwind is awesome, and I'm gradually figuring out how to get everything looking exactly the way I want.

- Next.js App Router seems difficult when you first start, but as you keep using it, it becomes quite intuitive.

Looking at this project, I realize I'm still at the beginning, but I feel like I've already taken my first big step.
    `,
  },
  {
  slug: "do-localhost-para-producao",
  title: "Do localhost para produção: o que ninguém te conta.",
  titleEn: "From localhost to production: what nobody tells you.",
  date: "25 de maio de 2026",
  readTime: "4 min",
  tag: "Info",
  content: `
Tem uma sensação muito específica quando o seu projeto funciona perfeitamente no localhost e você sobe para produção pela primeira vez.

Spoiler: raramente funciona de primeira.

## O que aconteceu

Estava desenvolvendo uma aplicação de agendamentos para uma barbearia (teste) — frontend em Next.js na Vercel, backend em NestJS no Render, base de dados no MongoDB Atlas. Parecia simples no papel.

O primeiro deploy falhou com **"Command npm run build exited with 1"**. Sem stack trace claro, sem mensagem de erro útil. Só esse código frio e indiferente.

## Variáveis de ambiente

O primeiro culpado foi clássico: a variável **NEXT_PUBLIC_API_URL** não estava configurada na Vercel. O frontend estava a fazer fetch para http://localhost:3333 em produção. Claro que não funcionava.

A lição aqui é simples mas fácil de esquecer: tudo que é local precisa de ser explicitamente configurado no ambiente de produção. O que funciona na sua máquina não viaja automaticamente para os servidores.

## O problema do cache

Depois de resolver as variáveis, surgiu outro problema mais subtil. Os dados dos serviços da barbearia apareciam desatualizados para novos visitantes — como se o site estivesse a mostrar uma fotografia antiga da base de dados.

O problema era que o **Services** era um Server Component assíncrono no Next.js, e o framework fazia cache agressivo do resultado por padrão. A solução foi adicionar **cache: "no-store"** nas chamadas à API, forçando sempre dados frescos.

## O Render adormece

O plano gratuito do Render hiberna o servidor após 15 minutos sem uso. Quando alguém acessa o site após esse período, a primeira requisição pode demorar 30 a 60 segundos enquanto o servidor "acorda".

Não é um bug — é uma limitação do plano gratuito. Mas parece um bug para quem não sabe. Documentar isso para os utilizadores finais faz parte do trabalho.

## O que aprendi

Deployar não é só fazer push. É pensar no ambiente, nas variáveis, no comportamento de cache, nas limitações da infraestrutura. Cada erro é uma camada da realidade que o localhost escondia.
  `,
  contentEn: `
There's a very specific feeling when your project works perfectly on localhost and you deploy to production for the first time.

Spoiler: it rarely works on the first try.

## What happened

I was building a booking app for a barbershop — Next.js frontend on Vercel, NestJS backend on Render, MongoDB Atlas as the database. Simple on paper.

The first deploy failed with **"Command npm run build exited with 1"**. No useful stack trace. Just that cold, indifferent error code.

## Environment variables

The first culprit was classic: the **NEXT_PUBLIC_API_URL** variable wasn't set on Vercel. The frontend was fetching from http://localhost:3333 in production. Of course it didn't work.

The lesson is simple but easy to forget: everything local needs to be explicitly configured in the production environment. What works on your machine doesn't travel automatically to the servers.

## The cache problem

After fixing the variables, a subtler problem appeared. The barbershop service data was showing as stale for new visitors — as if the site was showing an old snapshot of the database.

The issue was that **Services** was an async Server Component in Next.js, and the framework aggressively cached the result by default. The fix was adding **cache: "no-store"** to the API calls, always forcing fresh data.

## Render goes to sleep

The free tier of Render hibernates the server after 15 minutes of inactivity. When someone accesses the site after that period, the first request can take 30 to 60 seconds while the server "wakes up".

It's not a bug — it's a free tier limitation. But it looks like a bug to someone who doesn't know. Documenting this for end users is part of the job.

## What I learned

Deploying isn't just pushing code. It's thinking about the environment, variables, cache behavior, and infrastructure limitations. Each error is a layer of reality that localhost was hiding.
  `,
},
{
  slug: "reconstruindo-o-dashboard",
  title: "Reconstruindo o dashboard: de tabela confusa a um painel funcional.",
  titleEn: "Rebuilding the dashboard: from messy table to a functional panel.",
  date: "25 de maio de 2026",
  readTime: "4 min",
  tag: "Info",
  content: `
O primeiro dashboard que construí para o painel admin da barbearia funcionava. Todos os dados estavam lá. Mas era difícil de usar/ver — especialmente em mobile, onde as colunas da tabela se sobrepunham e os botões ficavam inacessíveis.

Era hora de reconstruir!

## O problema com tabelas em mobile

Tabelas com muitas colunas são inimigas do mobile. O projeto tinha uma grade com 9 colunas — cliente, serviços, data, horário, duração, total, status e ações. Num ecrã de 375px, isso é simplesmente ilegível.

A solução não foi esconder colunas. Foi criar **duas vistas diferentes** para o mesmo dado: uma tabela completa para desktop, e cards individuais para mobile. Cada card agrupa a informação de um agendamento de forma legível e com os botões acessíveis.

## Sidebar em vez de botões soltos

O design original tinha botões de navegação espalhados pelo topo da página — BLACKLIST, FECHAMENTO, HOME, SAIR. Funcionava, mas não escalava.

Troquei por uma **sidebar lateral** com ícones e labels claros, igual ao padrão que qualquer dashboard moderno usa. Em mobile a sidebar fica escondida e abre com um botão hamburguer no topo.

## Stats cards

Adicionei um conjunto de cards de estatísticas no topo: agendamentos hoje, total, confirmados, cancelados e faltas. São calculados diretamente dos dados já carregados — sem chamadas extra à API.

É informação que o admin quer ver imediatamente ao abrir o dashboard, sem precisar de contar linhas na tabela.

## Filtros por status

Em vez de mostrar todos os agendamentos em bloco, adicionei botões de filtro — Todos, Confirmados, Cancelados, Faltas, Pendentes. O filtro é apenas client-side, sem re-fetch.

Pequeno detalhe, grande diferença na usabilidade.

## O que fica para mim

Essa mudança é sobre reduzir o esforço cognitivo de quem usa. Um dashboard bem construído faz o admin tomar decisões mais rápido, com menos erros. Isso tem valor real.
  `,
  contentEn: `
The first dashboard I've builted for the barbershop admin panel worked. All the data was there. But it was hard to use/see — especially on mobile, where table columns overlapped and buttons became inaccessible.

Time to rebuild.

## The problem with tables on mobile

Tables with many columns are enemies of mobile. The project had a 9-column grid — client, services, date, time, duration, total, status, and actions. On a 375px screen, that's simply unreadable.

The solution wasn't hiding columns. It was creating **two different views** for the same data: a full table for desktop, and individual cards for mobile. Each card groups a booking's information in a readable way with accessible buttons.

## Sidebar instead of scattered buttons

The original design had navigation buttons scattered across the top of the page — BLACKLIST, CLOSURE, HOME, LOGOUT. It worked, but didn't scale.

I replaced it with a **sidebar** with clear icons and labels, following the pattern any modern dashboard uses. On mobile the sidebar stays hidden and opens with a hamburger button at the top.

## Stats cards

I added a set of stat cards at the top: bookings today, total, confirmed, cancelled, and no-shows. They're calculated directly from already-loaded data — no extra API calls.

It's information the admin wants to see immediately upon opening the dashboard, without having to count rows in a table.

## Status filters

Instead of showing all bookings in one block, I added filter buttons — All, Confirmed, Cancelled, No-shows, Pending. The filter is client-side only, no re-fetch needed.

Small detail, big difference in usability.

## What stays with me

That change it's about reducing the cognitive effort of the people using it. A well-built dashboard helps the admin make decisions faster, with fewer errors. That has real value.
  `,
},
{
  slug: "seguranca-que-eu-ignorei",
  title: "A falha de segurança que eu mesmo coloquei no código.",
  titleEn: "The security flaw I put in the code myself.",
  date: "25 de maio de 2026",
  readTime: "3 min",
  tag: "TIP",
  content: `
Durante uma revisão do projeto da barbearia, encontrei algo que me fez parar.

No arquivo de login, os campos de email e senha tinham valores padrão definidos em código:

**email: "gabriel@email.com"**
**password: "123456"**

Eram dados de teste que ficaram esquecidos. Mas em produção, qualquer pessoa que abrisse o DevTools do browser e inspecionasse o JavaScript compilado conseguia ver essas credenciais.

## Por que isso é grave

O Next.js compila o código do cliente e serve via JavaScript estático. Qualquer string hardcoded num componente React fica exposta no bundle — incluindo credenciais.

Não é necessário acesso ao repositório. Basta abrir o browser, ir às ferramentas de desenvolvimento e procurar no source.

## A correção é simples

\`\`\`tsx
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
\`\`\`

Duas strings vazias. Isso é tudo que era preciso.

## A lição maior

Dados de teste não devem existir em produção. Parece óbvio, mas quando estás a desenvolver rápido e a iterar, é fácil esquecer o que ficou para trás.

Um processo que ajuda: antes de qualquer deploy, fazer uma busca simples no código por termos como **"password"**, **"secret"**, **"token"**, **"123"**. Não é infalível, mas apanha os casos mais comuns.

Às vezes é sobre não deixar a porta da frente aberta por descuido.
  `,
  contentEn: `
During a project review for the barbershop app, I found something that made me stop.

In the login file, the email and password fields had default values hardcoded:

**email: "gabriel@email.com"**
**password: "123456"**

They were test credentials left behind. But in production, anyone who opened the browser's DevTools and inspected the compiled JavaScript could see those credentials.

## Why this is serious

Next.js compiles client code and serves it as static JavaScript. Any string hardcoded in a React component ends up exposed in the bundle — including credentials.

No repository access is needed. Just open the browser, go to developer tools, and search the source.

## The fix is simple

\`\`\`tsx
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
\`\`\`

Two empty strings. That's all it took.

## The bigger lesson

Test data should not exist in production. It seems obvious, but when you're developing fast and iterating, it's easy to forget what was left behind.

A process that helps: before any deploy, do a simple search in the code for terms like **"password"**, **"secret"**, **"token"**, **"123"**. It's not foolproof, but it catches the most common cases.

Sometimes it's about not leaving the front door open by accident.
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