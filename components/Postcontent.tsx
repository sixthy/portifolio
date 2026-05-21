"use client";

import { useEffect, useState, type ReactNode } from "react";
import CodeBlock from "@/components/Codeblock";

type Lang = "pt" | "en";

type Post = {
  slug: string;
  title: string;
  titleEn?: string;
  date: string;
  readTime: string;
  tag: string;
  content: string;
  contentEn?: string;
};

type PostContentProps = {
  post: Post;
};

function renderInlineBold(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);

  return parts.map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} style={{ color: "var(--text)" }}>
        {part}
      </strong>
    ) : (
      part
    )
  );
}

function renderContent(content: string): ReactNode[] {
  const lines = content.trim().split("\n");
  const elements: ReactNode[] = [];

  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("```")) {
      const language = line.replace("```", "").trim() || "tsx";
      const codeLines: string[] = [];

      i++;

      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }

      elements.push(
        <CodeBlock
          key={`code-${i}`}
          language={language}
          code={codeLines.join("\n")}
        />
      );

      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={`heading-${i}`}
          className="mt-8 mb-3 text-xl font-bold"
          style={{ color: "var(--text)" }}
        >
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
        <ul
          key={`list-${i}`}
          className="my-3 list-inside list-disc space-y-1"
          style={{ color: "var(--text-muted)" }}
        >
          {items.map((item, index) => (
            <li key={index} className="text-base leading-relaxed">
              {renderInlineBold(item)}
            </li>
          ))}
        </ul>
      );

      continue;
    }

    if (line.trim() === "") {
      elements.push(<div key={`space-${i}`} className="h-2" />);
      i++;
      continue;
    }

    elements.push(
      <p
        key={`paragraph-${i}`}
        className="text-base leading-relaxed"
        style={{ color: "var(--text-muted)" }}
      >
        {renderInlineBold(line)}
      </p>
    );

    i++;
  }

  return elements;
}

export default function PostContent({ post }: PostContentProps) {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;

    if (saved) {
      setLang(saved);
    }

    const handler = () => {
      const current = localStorage.getItem("lang") as Lang | null;

      if (current) {
        setLang(current);
      }
    };

    window.addEventListener("langchange", handler);

    return () => window.removeEventListener("langchange", handler);
  }, []);

  const title = lang === "en" && post.titleEn ? post.titleEn : post.title;
  const content =
    lang === "en" && post.contentEn ? post.contentEn : post.content;

  const readLabel = lang === "pt" ? "de leitura" : "read";

  return (
    <>
      <div className="mb-10">
        <span
          className="text-xs font-medium uppercase tracking-wider"
          style={{ color: "var(--accent)" }}
        >
          {post.tag}
        </span>

        <h1
          className="mt-2 mb-4 text-4xl font-bold leading-tight"
          style={{ color: "var(--text)" }}
        >
          {title}
        </h1>

        <p className="text-sm" style={{ color: "var(--text-dim)" }}>
          {post.date} • {post.readTime} {readLabel}
        </p>
      </div>

      <div className="pt-10" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="space-y-1">{renderContent(content)}</div>
      </div>
    </>
  );
}