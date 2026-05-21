"use client";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  oneDark,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  code: string;
  language?: string;
};

type Theme = "dark" | "light";

export default function CodeBlock({ code, language = "tsx" }: CodeBlockProps) {
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