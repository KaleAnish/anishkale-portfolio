import { Link } from "wouter";
import { PORTFOLIO } from "../data/portfolio";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="font-mono font-bold text-primary tracking-tight">
          AK
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#publications" className="hover:text-primary transition-colors">Publications</a>
        </div>
        <div className="flex items-center">
          <a 
            href={PORTFOLIO.personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
