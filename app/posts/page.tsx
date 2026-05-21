"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";
import { posts } from "../data";

export default function PostsPage() {
  const [lang, setLang] = useState<"pt" | "en">("pt");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as "pt" | "en" | null;
    if (saved) setLang(saved);
    const handler = () => {
      const current = localStorage.getItem("lang") as "pt" | "en" | null;
      if (current) setLang(current);
    };
    window.addEventListener("langchange", handler);
    return () => window.removeEventListener("langchange", handler);
  }, []);

  const t = {
    title: lang === "pt" ? "Posts" : "Posts",
    subtitle: lang === "pt"
      ? "Comentando brevemente sobre a minha jornada."
      : "Briefly commenting on my journey.",
  };

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-8">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-4" style={{ color: "var(--text)" }}>{t.title}</h1>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {t.subtitle}
          </p>
        </div>
        <div className="space-y-0">
          {posts.map((post, i) => (
            <div key={post.slug}>
              <Link href={`/posts/${post.slug}`} className="block py-5 group">
                <p className="text-base font-medium mb-1 transition-opacity group-hover:opacity-60"
                  style={{ color: "var(--text)" }}>
                  {lang === "en" && post.titleEn ? post.titleEn : post.title}
                </p>
                <p className="text-sm" style={{ color: "var(--text-dim)" }}>
                  {post.date} • {post.readTime} • {post.tag}
                </p>
              </Link>
              {i < posts.length - 1 && (
                <div style={{ borderTop: "1px dashed var(--separator)" }} />
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}