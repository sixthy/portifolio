import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { posts } from "../data";

export default function PostsPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-8">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold mb-4" style={{ color: "var(--text)" }}>Posts</h1>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Comentando brevemente sobre a minha jornada.
          </p>
        </div>

        <div className="space-y-0">
          {posts.map((post, i) => (
            <div key={post.slug}>
              <Link href={`/posts/${post.slug}`} className="block py-5 group">
                <p className="text-base font-medium mb-1 transition-colors group-hover:opacity-70"
                  style={{ color: "var(--text)" }}>
                  {post.title}
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