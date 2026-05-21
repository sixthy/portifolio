import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gabriel Santos — Software Engineer",
  description: "Software Engineer & Developer. Building things that matter.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.setAttribute('data-theme', theme);
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}