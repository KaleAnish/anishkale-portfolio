import { PORTFOLIO } from "../data/portfolio";
import { Mail, Linkedin } from "lucide-react";

export function Contact() {
  const { email, linkedin } = PORTFOLIO.personalInfo;
  const { tagline } = PORTFOLIO.contact;

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-background to-muted/40 px-4 md:px-8 text-center border-t border-border"
    >
      <div className="container mx-auto max-w-2xl flex flex-col items-center">
        <span className="text-xs font-medium text-primary tracking-widest uppercase mb-4">
          Get In Touch
        </span>
        <h2 className="text-4xl font-bold mb-6 text-foreground">
          Let's Connect
        </h2>
        <p className="text-muted-foreground text-base mb-10 max-w-lg leading-relaxed">
          {tagline}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${email}?subject=Reaching%20out%20from%20your%20portfolio`}
            aria-label={`Send email to ${email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/85 transition-colors shadow-sm text-sm"
          >
            <Mail className="w-4 h-4" aria-hidden="true" /> Email Me
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Anish Kale's LinkedIn profile (opens in new tab)"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border bg-background font-medium rounded-md hover:border-primary/40 hover:bg-muted transition-colors text-sm"
          >
            <Linkedin className="w-4 h-4" aria-hidden="true" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { linkedin, name } = PORTFOLIO.personalInfo;

  return (
    <footer className="py-8 text-center px-4 bg-background border-t border-border">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Anish Kale on LinkedIn (opens in new tab)"
          className="text-muted-foreground hover:text-primary transition-colors text-sm"
        >
          LinkedIn
        </a>
      </div>
      <p className="text-xs text-muted-foreground">
        Designed &amp; Built by {name} &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
