import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { projects } from "../data";

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    <div className="border border-[#1f1f1f] rounded-xl overflow-hidden hover:border-[#3f3f3f] transition-colors group">
      {/* Preview */}
      <div className="h-48 bg-[#0f0f0f] relative overflow-hidden border-b border-[#1f1f1f]">
        {project.icon ? (
          <Image
            src={project.icon}
            alt={project.title}
            fill
            className="object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-[#2a2a2a]">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18M9 21V9"/>
            </svg>
            <span className="text-xs font-mono">{project.title}</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="text font-semibold text-lg">{project.title}</h3>
          <div className="flex gap-2 flex-shrink-0">
            {project.github && project.github !== "#" && (
              <a href={project.github} target="_blank" rel="noopener noreferrer"
                className="text-[#6b7280] hover:text-white transition-colors" title="GitHub">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
              </a>
            )}
            {project.live && project.live !== "#" && (
              <a href={project.live} target="_blank" rel="noopener noreferrer"
                className="text-[#6b7280] hover:text-white transition-colors" title="Ver online">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            )}
          </div>
        </div>
        <p className="text-[#9ca3af] text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tag) => (
            <span key={tag}
              className="text-xs text-[#9ca3af] border border-[#2a2a2a] rounded-sm px-2.5 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-8">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-4">O que já construí</h1>
          <p className="text-[#9ca3af] text-base max-w-xl mx-auto leading-relaxed">
            Cada projeto é um passo no aprendizado. Aqui estão alguns dos que mais me orgulho.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}