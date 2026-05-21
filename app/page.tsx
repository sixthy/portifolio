import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { profile, workExperience, education, skills, posts } from "./data";

// Ícones SVG inline para cada tecnologia
const skillIcons: Record<string, React.ReactNode> = {
  "React": <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="#61DAFB" strokeWidth="1.2"><circle cx="12" cy="12" r="2.5" fill="#61DAFB" stroke="none" /><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" /><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" transform="rotate(120 12 12)" /></svg>,
  "TypeScript": <svg viewBox="0 0 24 24" className="w-4 h-4"><rect width="24" height="24" rx="3" fill="#3178C6" /><path d="M13.5 15.5v1.9c.4.2.9.4 1.5.4 1.8 0 2.9-1 2.9-2.5 0-1.3-.7-2-2.1-2.6-.9-.4-1.2-.6-1.2-1.1 0-.4.3-.7.9-.7.5 0 1 .2 1.5.5l.5-1.7c-.5-.3-1.2-.5-2-.5-1.7 0-2.8 1-2.8 2.5 0 1.2.7 2 2 2.5.9.4 1.2.6 1.2 1.1 0 .5-.3.8-1 .8-.6 0-1.2-.3-1.7-.6zm-3.5-4.5H8V9.5H4.5v1.5H3V13h1.5v5h2V13H8v-2z" fill="white" /></svg>,
  "JavaScript": <svg viewBox="0 0 24 24" className="w-4 h-4"><rect width="24" height="24" rx="3" fill="#F7DF1E" /><path d="M6 17.5c.4.7 1 1.2 2 1.2 1 0 1.7-.5 1.7-1.5V12h2v5.2c0 2.2-1.3 3.3-3.2 3.3-1.7 0-2.7-.9-3.2-1.9L6 17.5zm7.5.2c.5.8 1.2 1.4 2.4 1.4 1.2 0 2-.6 2-1.5 0-1-.7-1.4-1.9-1.9l-.7-.3c-1.9-.8-3.1-1.8-3.1-3.9 0-1.9 1.5-3.4 3.7-3.4 1.6 0 2.8.6 3.6 2l-1.9 1.2c-.4-.8-1-.9-1.7-.9-.8 0-1.3.5-1.3 1.1 0 .8.5 1.1 1.6 1.6l.7.3c2.2.9 3.4 1.9 3.4 4 0 2.3-1.8 3.6-4.2 3.6-2.3 0-3.8-1.1-4.5-2.6l2-.8z" fill="#333" /></svg>,
  "Node.js": <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#339933"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.3l7.7 3.9-7.7 3.8-7.7-3.8L12 4.3zM4 8.9l7 3.5v6.9L4 15.8V8.9zm9 10.4v-6.9l7-3.5v6.9l-7 3.5z" /></svg>,
  "Next.js": <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.52 0 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l7 4.5-7 4.5z" /></svg>,
  "Tailwind CSS": <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#38BDF8"><path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C13.27 10.8 14.33 12 16.5 12c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.23 7.2 14.17 6 12 6zm-5 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35C8.27 16.8 9.33 18 11.5 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.23 13.2 9.17 12 7 12z" /></svg>,
  "PostgreSQL": <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#336791"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" /></svg>,
  "Git": <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#F05032"><path d="M23.5 11.5l-11-11c-.6-.6-1.5-.6-2.1 0L8 3l2.7 2.7c.6-.2 1.3-.1 1.8.4.5.5.6 1.2.4 1.8L16 11c.6-.2 1.3-.1 1.8.4.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.5-.5-.6-1.3-.3-1.9L12 9v6.2c.4.2.8.5 1 .9.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.7-.7-.7-1.8 0-2.5.3-.3.7-.5 1.1-.5V9c-.4-.2-.8-.5-1.1-.9-.5-.5-.6-1.3-.3-1.9L7.5 3.5l-7 7c-.6.6-.6 1.5 0 2.1l11 11c.6.6 1.5.6 2.1 0l9.9-9.9c.6-.6.6-1.6 0-2.2z" /></svg>,
  "Java": <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#ED8B00"><path d="M8.85 17.3s-.9.5.63.7c1.85.2 2.8.18 4.83-.2 0 0 .54.33 1.28.62-4.55 1.95-10.3-.11-6.74-1.12zm-.56-2.56s-1 .74.53.9c2 .2 3.57.22 6.3-.3 0 0 .37.38 1 .58-5.58 1.63-11.8.14-7.83-1.18zm4.85-4.55c1.14 1.3-.3 2.47-.3 2.47s2.9-1.5 1.57-3.37c-1.24-1.75-2.2-2.62 2.97-5.6 0 0-8.1 2.02-4.24 6.5z" /><path d="M16.1 19.35s.66.55-.73.97c-2.66.8-11.1 1.05-13.44.03-.84-.37.74-.88 1.23-.98.52-.12.81-.1.81-.1-.93-.65-6 1.29-2.58 1.84 9.33 1.5 17.02-.68 14.71-1.76zm-8.47-6.1s-4.26 1.01-1.51 1.38c1.16.16 3.48.12 5.63-.06 1.76-.15 3.54-.47 3.54-.47s-.62.27-1.08.58c-4.34 1.14-12.72.61-10.3-.56 2.05-1 3.72-.87 3.72-.87zm7.68 4.29c4.41-2.3 2.37-4.5.95-4.2-.35.07-.5.14-.5.14s.13-.2.37-.28c2.76-1 4.9 2.87-.9 4.39 0 0 .07-.06.08-.05z" /><path d="M14.3 3S16.6 5.28 12 7.93c-3.7 2.12-1.85 3.85-.02 5.29-1.5-.87-2.35-1.95-1.63-2.82.95-1.27 3.63-1.88 3.95-4.4z" /></svg>,
  "Python": <svg viewBox="0 0 24 24" className="w-4 h-4"><path d="M12 2c-1.9 0-3.5.3-4.7.8C5.8 3.4 5 4.3 5 5.5v2h7v1H4.5C3 8.5 2 9.8 2 11.5v3c0 1.7 1 3 2.5 3.5l1.5.5v-2.5c0-1.7 1.3-3 3-3h6c1.7 0 3-1.3 3-3v-5c0-1.2-.8-2.1-2.3-2.7C14.5 2.3 13.3 2 12 2zm-1.5 1.5c.5 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="#3776AB" /><path d="M12 22c1.9 0 3.5-.3 4.7-.8 1.5-.6 2.3-1.5 2.3-2.7v-2h-7v-1h9.5c1.5 0 2.5-1.3 2.5-3v-3c0-1.7-1-3-2.5-3.5L20 5.5V8c0 1.7-1.3 3-3 3H11c-1.7 0-3 1.3-3 3v5c0 1.2.8 2.1 2.3 2.7 1.2.5 2.4.8 3.7.8v-1zm1.5-1.5c-.5 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#FFD43B" /></svg>,
  "MongoDB": <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#47A248"><path d="M12 2C7 2 3.5 6 3.5 10.5c0 4 2.7 7.4 6.5 8.8V22h2v-2.7c3.8-1.4 6.5-4.8 6.5-8.8C18.5 6 15 2 12 2zm0 2c2.8 0 4.5 2.5 4.5 6.5 0 1.2-.5 4-4 5.7V6.5C12.5 4.5 12 4 12 4zm0 0c0 0-.5.5-.5 2.5v7.7C8 12.5 7.5 9.7 7.5 8.5 7.5 4.5 9.2 4 12 4z" /></svg>,
  "Vercel": <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M12 2L2 19.8h20L12 2z" /></svg>,
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-8">

        {/* Hero */}
        <section className="flex items-start gap-8 mb-16">
          <div className="w-24 h-24 rounded-full flex-shrink-0 overflow-hidden"
            style={{ border: "1px solid var(--border2)" }}>
            <Image src="/avatar.jpg" alt="Gabriel" width={96} height={96} className="object-cover w-full h-full" />
          </div>
          <div>
            <h1 className="text-5xl font-bold mb-2" style={{ color: "var(--text)" }}>{profile.name}</h1>
            <p className="text-base mb-5" style={{ color: "var(--text-muted)" }}>{profile.title}</p>
            <div className="flex items-center gap-5 text-sm">
              <a href={profile.github} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:opacity-70"
                style={{ color: "var(--text)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors hover:opacity-70"
                style={{ color: "var(--accent)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Sobre Mim */}
        <section className="mb-14">
          <h2 className="text-base font-semibold mb-4" style={{ color: "var(--text)" }}>Sobre Mim</h2>
          {profile.bio.map((para, i) => (
            <p key={i} className="text-base leading-relaxed mb-3" style={{ color: "var(--text-muted)" }}>{para}</p>
          ))}
        </section>

        {/* Experiência */}
        <section className="mb-14">
          <h2 className="text-base font-semibold mb-6" style={{ color: "var(--text)" }}>Experiência</h2>
          <div className="space-y-5">
            {workExperience.map((job) => (
              <div key={job.company} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-lg flex items-center justify-center font-bold flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${job.logoColor}44, ${job.logoColor}22)`, border: `1px solid ${job.logoColor}44` }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={job.logoColor} strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-base font-medium" style={{ color: "var(--text)" }}>{job.company}</p>
                  <p className="text-sm" style={{ color: "var(--text-dim)" }}>{job.role}</p>
                </div>
                <span className="text-sm" style={{ color: "var(--text-dim)" }}>{job.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Educação */}
        <section className="mb-14">
          <h2 className="text-base font-semibold mb-6" style={{ color: "var(--text)" }}>Educação</h2>
          <div className="space-y-5">
            {education.map((edu) => (
              <div key={edu.institution} className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full flex-shrink-0 overflow-hidden"
                  style={{ border: "1px solid var(--border2)" }}>
                  <Image src={edu.logo} alt={edu.institution} width={44} height={44} className="object-cover w-full h-full" />
                </div>
                <div className="flex-1">
                  <p className="text-base font-medium" style={{ color: "var(--text)" }}>{edu.institution}</p>
                  <p className="text-sm" style={{ color: "var(--text-dim)" }}>{edu.degree}</p>
                </div>
                <span className="text-sm" style={{ color: "var(--text-dim)" }}>{edu.period}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Skills com ícones */}
        <section className="mb-14">
          <h2
            className="text-base font-semibold mb-4"
            style={{ color: "var(--text)" }}
          >
            Tecnologias que uso
          </h2>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="
          flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm
          cursor-default border transition-colors
          text-[var(--text-muted)] border-[var(--border2)]
          hover:text-[var(--text)] hover:border-[var(--text-dim)]
        "
              >
                {skillIcons[skill] ?? null}
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Vamos fazer algo juntos? */}
        <section className="mb-14">
          <div className="rounded-2xl p-10 text-center" style={{ border: "1px solid var(--border)" }}>
            <h2 className="text-3xl font-bold mb-3" style={{ color: "var(--text)" }}>Vamos fazer algo juntos?</h2>
            <p className="text-base max-w-lg mx-auto leading-relaxed mb-8" style={{ color: "var(--text-muted)" }}>
              Tenho muita vontade de aprender e crescer colaborando em projetos reais.
              Se você tem uma ideia, um problema para resolver ou só quer trocar experiências —
              me manda uma mensagem!
            </p>
            <a href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 font-medium text-base px-7 py-3 rounded-full transition-colors"
              style={{ backgroundColor: "var(--text)", color: "var(--bg)" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              {profile.email}
            </a>
          </div>
        </section>

        {/* Posts Recentes */}
        <section className="mb-14">
          <h2 className="text-base font-semibold mb-6" style={{ color: "var(--text)" }}>Posts Recentes</h2>
          <div className="space-y-0">
            {posts.slice(0, 3).map((post, i) => (
              <div key={i}>
                <Link href={`/posts/${post.slug}`} className="block py-5 group">
                  <p className="text-base font-medium mb-1 transition-colors group-hover:opacity-70"
                    style={{ color: "var(--text)" }}>{post.title}</p>
                  <p className="text-sm" style={{ color: "var(--text-dim)" }}>{post.date} • {post.readTime} • {post.tag}</p>
                </Link>
                {i < posts.slice(0, 3).length - 1 && (
                  <div style={{ borderTop: "1px dashed var(--separator)" }} />
                )}
              </div>
            ))}
          </div>
          <Link href="/posts" className="text-base transition-colors mt-4 inline-flex items-center gap-1 hover:opacity-70"
            style={{ color: "var(--accent)" }}>
            Ver todos os posts <span>›</span>
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}