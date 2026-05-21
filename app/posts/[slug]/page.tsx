import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "../../data";

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    
    if (line.startsWith("```")) {
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre key={i} className="rounded-lg p-4 text-sm overflow-x-auto my-4"
          style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)", color: "var(--text-muted)", fontFamily: "monospace" }}>
          <code>{codeLines.join("\n")}</code>
        </pre>
      );
      i++;
      continue;
    }

    
    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-xl font-bold mt-8 mb-3" style={{ color: "var(--text)" }}>
          {line.replace("## ", "")}
        </h2>
      );
      i++;
      continue;
    }

    
    if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].replace("- ", ""));
        i++;
      }
      elements.push(
        <ul key={i} className="list-disc list-inside space-y-1 my-3" style={{ color: "var(--text-muted)" }}>
          {items.map((item, j) => {
            const parts = item.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={j} className="text-base leading-relaxed">
                {parts.map((p, k) =>
                  k % 2 === 1 ? <strong key={k} style={{ color: "var(--text)" }}>{p}</strong> : p
                )}
              </li>
            );
          })}
        </ul>
      );
      continue;
    }

    
    if (line.trim() === "") {
      elements.push(<div key={i} className="h-2" />);
      i++;
      continue;
    }

    
    const parts = line.split(/\*\*(.*?)\*\*/g);
    elements.push(
      <p key={i} className="text-base leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {parts.map((part, j) =>
          j % 2 === 1 ? <strong key={j} style={{ color: "var(--text)" }}>{part}</strong> : part
        )}
      </p>
    );
    i++;
  }

  return elements;
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 pt-28 pb-16">

        <Link href="/posts"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors hover:opacity-70"
          style={{ color: "var(--text-dim)" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Voltar para posts
        </Link>

        <div className="mb-10">
          <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--accent)" }}>
            {post.tag}
          </span>
          <h1 className="text-4xl font-bold mt-2 mb-4 leading-tight" style={{ color: "var(--text)" }}>
            {post.title}
          </h1>
          <p className="text-sm" style={{ color: "var(--text-dim)" }}>
            {post.date} • {post.readTime} de leitura
          </p>
        </div>

        <div className="pt-10" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="space-y-1">
            {renderContent(post.content)}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}