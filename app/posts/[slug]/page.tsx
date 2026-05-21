"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState, useEffect, type ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { posts } from "../../data";

type Theme = "dark" | "light";

function CodeBlock({
  code,
  language = "tsx",
}: {
  code: string;
  language?: string;
}) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme");

      if (currentTheme === "dark" || currentTheme === "light") {
        setTheme(currentTheme);
      }
    };

    updateTheme();

    const observer = new MutationObserver(updateTheme);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  const isDark = theme === "dark";

  return (
    <div
      className="my-5 overflow-hidden rounded-xl"
      style={{
        border: "1px solid var(--border)",
        backgroundColor: isDark ? "#0d1117" : "#ffffff",
      }}
    >
      <div
        className="flex items-center gap-2 px-4 py-2 text-xs"
        style={{
          backgroundColor: isDark ? "#161b22" : "#f6f8fa",
          color: "var(--text-dim)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />

        <span className="ml-2 font-medium uppercase tracking-wider">
          {language}
        </span>
      </div>

      <SyntaxHighlighter
        language={language}
        style={isDark ? oneDark : oneLight}
        showLineNumbers
        wrapLongLines
        customStyle={{
          margin: 0,
          padding: "1rem",
          background: isDark ? "#0d1117" : "#ffffff",
          fontSize: "0.875rem",
          lineHeight: "1.7",
        }}
        lineNumberStyle={{
          minWidth: "2.5em",
          paddingRight: "1em",
          color: isDark ? "#6e7681" : "#8c959f",
        }}
        codeTagProps={{
          style: {
            fontFamily:
              'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

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

function renderContent(content: string) {
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

export default function PostPage({ params }: { params: { slug: string } }) {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as "pt" | "en" | null;

    if (saved) {
      setLang(saved);
    }

    const handler = () => {
      const current = localStorage.getItem("lang") as "pt" | "en" | null;

      if (current) {
        setLang(current);
      }
    };

    window.addEventListener("langchange", handler);

    return () => window.removeEventListener("langchange", handler);
  }, []);

  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const title = lang === "en" && post.titleEn ? post.titleEn : post.title;

  const content =
    lang === "en" && post.contentEn ? post.contentEn : post.content;

  const backLabel = lang === "pt" ? "Voltar para posts" : "Back to posts";
  const readLabel = lang === "pt" ? "de leitura" : "read";

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-2xl px-6 pt-28 pb-16">
        <Link
          href="/posts"
          className="mb-10 inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
          style={{ color: "var(--text-dim)" }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>

          {backLabel}
        </Link>

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
      </main>

      <Footer />
    </>
  );
}