import { useEffect, useState } from "react";
import { ArrowUpRight, ExternalLink, Github, Linkedin, Menu, X } from "lucide-react";
import Home from "@/pages/Home";

const navItems = [
  ["Work", "work"],
  ["About", "about"],
  ["Journey", "journey"],
  ["Contact", "contact"],
] as const;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jump = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      <header className={`site-nav ${scrolled ? "site-nav--scrolled" : ""}`}>
        <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top">
          <span className="brand-mark">J</span>
          <span>Jaswanth<span className="brand-dot">.</span></span>
        </button>
        <nav className={`nav-links ${menuOpen ? "nav-links--open" : ""}`} aria-label="Main navigation">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => jump(id)}>{label}</button>
          ))}
          <a className="nav-resume" href="/Mutyala_Naga_Venkata_Sai_Jaswanth_CV.pdf" download="Mutyala_Naga_Venkata_Sai_Jaswanth_CV.pdf">Request CV <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>
      <main>
        <Home onNavigate={jump} />
      </main>
      <footer className="site-footer">
        <div className="footer-inner">
          <span>© 2026 Mutyala Naga Venkata Sai Jaswanth</span>
          <span className="footer-note">Built with curiosity <span className="footer-spark">✦</span></span>
          <div className="footer-links">
            <a href="https://github.com/mutyalajaswanth" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>
            <a href="https://www.linkedin.com/in/mutyala-naga-venkata-sai-jaswanth-7447b729" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="https://portofolio-me-e4c6.vercel.app" target="_blank" rel="noreferrer" aria-label="Live portfolio"><ExternalLink size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
