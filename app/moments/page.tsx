"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { moments } from "../data";

export default function MomentsPage() {
  const [selected, setSelected] = useState<string | null>(null);
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
    title: lang === "pt" ? "Momentos" : "Moments",
    subtitle: lang === "pt"
      ? "Como é a vida além da tela? Um pouco dos lugares por onde passei, coisas que vi e momentos que valem a pena lembrar."
      : "What is life like beyond the screen? A glimpse of places I've been, things I've seen, and moments worth remembering.",
    empty: lang === "pt" ? "Em breve..." : "Coming soon...",
    footer: lang === "pt" ? "viva e não sobreviva..." : "live, don't just survive...",
  };

  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4" style={{ color: "var(--text)" }}>{t.title}</h1>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {t.subtitle}
          </p>
        </div>
        {moments.length === 0 ? (
          <p className="text-center text-sm mt-16" style={{ color: "var(--text-dim)" }}>{t.empty}</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {moments.map((moment, i) => (
              <button key={i} onClick={() => setSelected(moment.src)}
                className="aspect-square rounded-lg overflow-hidden relative group focus:outline-none"
                style={{ border: "1px solid var(--border)" }}>
                <Image src={moment.src} alt={moment.alt} fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </button>
            ))}
          </div>
        )}
        <p className="text-center text-sm mt-10" style={{ color: "var(--text-dim)" }}>{t.footer}</p>
      </main>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}>
          <div className="relative max-w-3xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <Image src={selected} alt="Foto ampliada" width={900} height={600}
              className="rounded-xl object-contain w-full h-auto max-h-[85vh]" />
            <button onClick={() => setSelected(null)}
              className="absolute top-3 right-3 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80 transition-colors text-sm">
              ✕
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}