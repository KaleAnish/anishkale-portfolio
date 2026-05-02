import { PORTFOLIO } from "../data/portfolio";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export function Hero() {
  const { name, title, tagline, github, linkedin, email, resume } = PORTFOLIO.personalInfo;

  return (
    <section id="hero" className="pt-24 pb-20 md:pt-32 md:pb-32 px-4 md:px-8 container mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            {name}
          </h1>
          <h2 className="text-xl md:text-2xl font-mono text-muted-foreground">
            {title}
          </h2>
        </div>
        <p className="text-lg text-foreground/80 max-w-2xl leading-relaxed">
          {tagline}
        </p>
        <div className="flex flex-wrap gap-4 pt-4">
          <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/80 transition-colors text-sm font-medium">
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/80 transition-colors text-sm font-medium">
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a href={`mailto:${email}`} className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded hover:bg-secondary/80 transition-colors text-sm font-medium">
            <Mail className="w-4 h-4" /> Email
          </a>
          <a href={resume} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 border border-border bg-background hover:bg-muted transition-colors text-sm font-medium rounded">
            <FileText className="w-4 h-4" /> Resume
          </a>
        </div>
      </div>
      <div className="flex-shrink-0">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-muted border-4 border-background shadow-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10"></div>
          <span className="font-mono text-5xl md:text-7xl font-bold text-primary/40 select-none">
            AK
          </span>
        </div>
      </div>
    </section>
  );
}
