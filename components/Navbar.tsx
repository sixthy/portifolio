"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Theme = "dark" | "light";
type Lang = "pt" | "en";

export function useLang() {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved) setLangState(saved);

    const handler = () => {
      const current = localStorage.getItem("lang") as Lang | null;
      if (current) setLangState(current);
    };

    window.addEventListener("langchange", handler);
    return () => window.removeEventListener("langchange", handler);
  }, []);

  return lang;
}

export default function Navbar() {
  const pathname = usePathname();
  const currentPath = pathname ?? "/";

  const [theme, setTheme] = useState<Theme | null>(null);
  const [lang, setLangState] = useState<Lang>("pt");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    const initialTheme = savedTheme ?? "dark";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
    document.documentElement.style.colorScheme = initialTheme;

    const savedLang = localStorage.getItem("lang") as Lang | null;
    if (savedLang) setLangState(savedLang);
  }, []);

  useEffect(() => {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e: MouseEvent) => {
      const nav = document.getElementById("main-nav");
      if (nav && !nav.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  const toggleLang = () => {
    const next = lang === "pt" ? "en" : "pt";
    setLangState(next);
    localStorage.setItem("lang", next);
    window.dispatchEvent(new Event("langchange"));
  };

  const links =
    lang === "pt"
      ? [
          { href: "/", label: "Início" },
          { href: "/work", label: "Projetos" },
          { href: "/moments", label: "Momentos" },
          { href: "/posts", label: "Posts" },
        ]
      : [
          { href: "/", label: "Home" },
          { href: "/work", label: "Projects" },
          { href: "/moments", label: "Moments" },
          { href: "/posts", label: "Posts" },
        ];

  const isDark = (theme ?? "dark") === "dark";

  return (
    <nav
      id="main-nav"
      className="fixed left-0 right-0 top-0 z-50 backdrop-blur-sm"
      style={{
        backgroundColor: "var(--nav-bg)",
        borderBottom: "1px solid var(--nav-border)",
      }}
    >

      <div className="mx-auto flex h-12 max-w-4xl items-center justify-between px-6">
        <div className="hidden sm:flex items-center gap-1">
          {links.map((link, i) => {
            const isActive =
              currentPath === link.href ||
              (link.href !== "/" && currentPath.startsWith(link.href));
            return (
              <div key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className="px-3 py-1 text-sm transition-colors"
                  style={{
                    color: isActive ? "var(--text)" : "var(--text-dim)",
                    fontWeight: isActive ? 500 : 400,
                  }}
                >
                  {link.label}
                </Link>
                {i < links.length - 1 && (
                  <span style={{ color: "var(--border2)" }} className="text-sm">|</span>
                )}
              </div>
            );
          })}
        </div>

        <span
          className="sm:hidden text-sm font-medium"
          style={{ color: "var(--text)" }}
        >
          GS
        </span>

        <div className="flex items-center gap-3">  
          <button
            onClick={toggleLang}
            className="rounded px-2 py-1 text-xs font-medium transition-colors"
            style={{ color: "var(--text-dim)", border: "1px solid var(--border2)" }}
            title={lang === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>

          <button
            onClick={() => setTheme((c) => ((c ?? "dark") === "dark" ? "light" : "dark"))}
            className="text-lg transition-colors"
            style={{ color: "var(--text-dim)" }}
            aria-label="Alternar tema"
            title={isDark ? "Modo claro" : "Modo escuro"}
          >
            {isDark ? "✦" : "✧"}
          </button>
 
          <button
            className="sm:hidden flex flex-col justify-center gap-[5px] p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Menu"
          >
            <span
              className="block h-[1.5px] w-5 transition-all duration-200"
              style={{
                backgroundColor: "var(--text-dim)",
                transform: menuOpen ? "rotate(45deg) translate(4.5px, 4.5px)" : "none",
              }}
            />
            <span
              className="block h-[1.5px] w-5 transition-all duration-200"
              style={{
                backgroundColor: "var(--text-dim)",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block h-[1.5px] w-5 transition-all duration-200"
              style={{
                backgroundColor: "var(--text-dim)",
                transform: menuOpen ? "rotate(-45deg) translate(4.5px, -4.5px)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="sm:hidden px-6 pb-4 pt-2 flex flex-col gap-1"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {links.map((link) => {
            const isActive =
              currentPath === link.href ||
              (link.href !== "/" && currentPath.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm transition-colors"
                style={{
                  color: isActive ? "var(--text)" : "var(--text-dim)",
                  fontWeight: isActive ? 500 : 400,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}