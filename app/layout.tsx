import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "TR Productions | Music Production Studio in Trier",
  description:
    "TR Productions offers professional music production, mixing & mastering, beats and studio sessions in Trier, Germany, specialized in hip-hop, rap and RnB.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="body-root">
        <header className="site-header">
          <div className="container">
            <nav className="nav">
              <Link href="/" className="logo">
                <span className="logo-mark">TR</span>
                <span>Productions</span>
              </Link>
              <div className="nav-links">
                <Link href="/beats" className="nav-link">
                  Beats
                </Link>
                <Link href="/mix-master" className="nav-link">
                  Mix &amp; Master
                </Link>
                <Link href="/studio" className="nav-link">
                  Studio
                </Link>
                <Link href="/custom-beats" className="nav-link">
                  Custom Beats
                </Link>
                <Link href="/contact" className="nav-cta">
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </header>

        <main className="main">
          <div className="container">{children}</div>
        </main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <div>© {new Date().getFullYear()} TR Productions · Trier, Germany</div>
            <div className="footer-right">
              <span>Hip-hop · Rap · RnB</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
