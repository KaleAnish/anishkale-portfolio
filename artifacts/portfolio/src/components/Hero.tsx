import { PORTFOLIO } from "../data/portfolio";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export function Hero() {
  const { name, badge, title, tagline, github, linkedin, email, resume } =
    PORTFOLIO.personalInfo;

  return (
    <section
      id="hero"
      className="pt-24 pb-20 md:pt-32 md:pb-32 px-4 md:px-8 container mx-auto flex flex-col-reverse md:flex-row items-center gap-12"
    >
      <div className="flex-1 space-y-6">
        <div className="space-y-3">
          <span className="inline-block text-xs font-mono font-medium tracking-widest uppercase px-3 py-1.5 rounded-full border border-primary/30 text-primary bg-primary/5">
            {badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            {name}
          </h1>
          <h2 className="text-xl md:text-2xl font-mono text-muted-foreground">
            {title}
          </h2>
        </div>
        <p className="text-lg text-foreground/75 max-w-2xl leading-relaxed">
          {tagline}
        </p>
        <div className="flex flex-wrap gap-3 pt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-md hover:bg-foreground/85 transition-colors text-sm font-medium shadow-sm"
          >
            <Github className="w-4 h-4" /> GitHub
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/85 transition-colors text-sm font-medium shadow-sm"
          >
            <Linkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 px-5 py-2.5 border border-border bg-background hover:bg-muted hover:border-primary/30 transition-colors text-sm font-medium rounded-md"
          >
            <Mail className="w-4 h-4" /> Email
          </a>
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 border border-border bg-background hover:bg-muted hover:border-primary/30 transition-colors text-sm font-medium rounded-md"
          >
            <FileText className="w-4 h-4" /> Resume
          </a>
        </div>
      </div>

      <div className="flex-shrink-0">
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/25 via-primary/10 to-transparent blur-xl" />
          <div className="relative w-full h-full rounded-full border-2 border-primary/20 shadow-lg flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-sky-50 to-teal-50">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent" />
            <span className="font-mono text-5xl md:text-7xl font-bold text-primary/50 select-none tracking-tight">
              AK
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
