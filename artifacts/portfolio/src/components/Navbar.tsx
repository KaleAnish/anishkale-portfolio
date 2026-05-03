import { useState } from "react";
import { PORTFOLIO } from "../data/portfolio";
import { Menu, X, FileText, ChevronDown } from "lucide-react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Contact", href: "#contact" },
];

function NavAvatar() {
  const [errored, setErrored] = useState(false);

  if (!errored) {
    return (
      <img
        src="/images/headshot.jpg"
        alt="Anish A. Kale profile photo"
        onError={() => setErrored(true)}
        className="w-10 h-10 rounded-full object-cover object-top border border-border/60 shrink-0"
      />
    );
  }

  return (
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 via-sky-50 to-teal-50 border border-border/60 flex items-center justify-center shrink-0">
      <span className="text-xs font-bold text-primary/60 select-none">AK</span>
    </div>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const { resumeDataML, resumeFinConsulting } = PORTFOLIO.personalInfo;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5">
          <NavAvatar />
          <span className="font-bold text-primary tracking-tight text-base hidden sm:block">
            AK
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <div className="relative">
            <button
              onClick={() => setResumeOpen((o) => !o)}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/85 transition-colors"
            >
              <FileText className="w-4 h-4" />
              Resumes
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${resumeOpen ? "rotate-180" : ""}`} />
            </button>
            {resumeOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-background border border-border rounded-md shadow-md overflow-hidden z-50">
                <a
                  href={resumeDataML}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setResumeOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                >
                  <FileText className="w-4 h-4 shrink-0" /> Data / ML Resume
                </a>
                <a
                  href={resumeFinConsulting}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setResumeOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors border-t border-border"
                >
                  <FileText className="w-4 h-4 shrink-0" /> Finance / Consulting Resume
                </a>
              </div>
            )}
          </div>
        </div>

        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-6 pt-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors border-b border-border/50 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 space-y-2">
            <a
              href={resumeDataML}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 w-full px-4 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/85 transition-colors"
            >
              <FileText className="w-4 h-4 shrink-0" /> Data / ML Resume
            </a>
            <a
              href={resumeFinConsulting}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 w-full px-4 py-2.5 text-sm font-medium border border-border bg-background rounded-md hover:bg-muted transition-colors"
            >
              <FileText className="w-4 h-4 shrink-0" /> Finance / Consulting Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
