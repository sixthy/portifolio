# Gabriel Santos — Portfólio

Portfólio pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS.

🔗 **https://ferreirasantos.dev.br**

## Tecnologias

- **Next.js 14** — App Router
- **TypeScript**
- **Tailwind CSS**

## Funcionalidades

- Tema dark/light persistido entre páginas
- Suporte a PT/EN com troca de idioma em tempo real
- Currículo para download em PT e EN
- Página de projetos com preview
- Blog com posts em markdown simples
- Galeria de momentos com lightbox
- Menu responsivo com hamburguer em mobile

## Estrutura

```text
app/
├── page.tsx          # Início
├── work/             # Projetos
├── posts/            # Lista de posts
│   └── [slug]/       # Post individual
├── moments/          # Galeria
├── data.ts           # Todo o conteúdo do site
components/
├── Navbar.tsx
├── Footer.tsx
public/
├── avatar.jpg
├── cv-pt.pdf
├── cv-en.pdf
├── momentosft/       # Fotos
└── projects/         # Screenshots dos projetos
```
