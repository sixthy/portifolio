"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  // Lê o tema salvo ao montar
  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  // Aplica e salva sempre que muda
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const links = [
    { href: "/", label: "Início" },
    { href: "/work", label: "Projetos" },
    { href: "/moments", label: "Momentos" },
    { href: "/posts", label: "Posts" },
  ];

  const isDark = theme === "dark";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm"
      style={{ backgroundColor: "var(--nav-bg)", borderBottom: "1px solid var(--nav-border)" }}>
      <div className="max-w-4xl mx-auto px-6 h-12 flex items-center justify-between">
        <div className="flex items-center gap-1">
          {links.map((link, i) => {
            const isActive = pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <div key={link.href} className="flex items-center">
                <Link href={link.href} className="px-3 py-1 text-sm transition-colors"
                  style={{ color: isActive ? "var(--text)" : "var(--text-dim)", fontWeight: isActive ? 500 : 400 }}>
                  {link.label}
                </Link>
                {i < links.length - 1 && (
                  <span style={{ color: "var(--border2)" }} className="text-sm">|</span>
                )}
              </div>
            );
          })}
        </div>
        <button
          onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
          className="transition-colors text-lg"
          style={{ color: "var(--text-dim)" }}
          aria-label="Alternar tema"
          title={isDark ? "Modo claro" : "Modo escuro"}
        >
          {isDark ? "✦" : "✧"}
        </button>
      </div>
    </nav>
  );
}