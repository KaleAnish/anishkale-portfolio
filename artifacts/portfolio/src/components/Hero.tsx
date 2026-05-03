import { useState } from "react";
import { PORTFOLIO } from "../data/portfolio";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

function HeroImage() {
  const [errored, setErrored] = useState(false);

  if (!errored) {
    return (
      <img
        src="/images/outdoor.png"
        alt="Anish Kale outdoor portrait"
        onError={() => setErrored(true)}
        className="w-full h-full object-cover object-top"
      />
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 via-sky-50 to-teal-50">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent" />
      <span className="text-5xl md:text-7xl font-bold text-primary/50 select-none tracking-tight">
        AK
      </span>
    </div>
  );
}

export function Hero() {
  const { name, title, tagline, location, github, linkedin, email, resumeDataML, resumeFinConsulting } =
    PORTFOLIO.personalInfo;

  return (
    <section
      id="hero"
      className="pt-24 pb-20 md:pt-32 md:pb-32 px-4 md:px-8 container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16"
    >
      <div className="flex-1 space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            {name}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground leading-snug">
            {title}
          </h2>
          <p className="text-sm text-muted-foreground/70 pt-1 tracking-wide">
            {location}
          </p>
        </div>
        <p className="text-lg text-foreground/75 max-w-2xl leading-relaxed">
          {tagline}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
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
            href={`mailto:${email}?subject=Reaching%20out%20from%20your%20portfolio`}
            className="flex items-center gap-2 px-5 py-2.5 border border-border bg-background hover:bg-muted hover:border-primary/30 transition-colors text-sm font-medium rounded-md"
          >
            <Mail className="w-4 h-4" /> Email
          </a>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={resumeDataML}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-border bg-background hover:bg-muted hover:border-primary/30 transition-colors text-sm font-medium rounded-md text-foreground/80"
          >
            <FileText className="w-4 h-4 shrink-0" /> Data / ML Resume
          </a>
          <a
            href={resumeFinConsulting}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-border bg-background hover:bg-muted hover:border-primary/30 transition-colors text-sm font-medium rounded-md text-foreground/80"
          >
            <FileText className="w-4 h-4 shrink-0" /> Finance / Consulting Resume
          </a>
        </div>
      </div>

      <div className="flex-shrink-0 w-full max-w-[280px] md:max-w-[300px]">
        <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-border/40">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
