import { PORTFOLIO } from "../data/portfolio";
import { Mail } from "lucide-react";

export function Contact() {
  const { email, tagline } = PORTFOLIO.personalInfo;

  return (
    <section id="contact" className="py-24 bg-card px-4 md:px-8 text-center border-t border-border">
      <div className="container mx-auto max-w-2xl flex flex-col items-center">
        <h3 className="text-sm font-mono text-primary mb-4">07. What's Next?</h3>
        <h2 className="text-4xl font-bold mb-6 text-foreground">Get In Touch</h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-md">
          {tagline} My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a 
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded hover:bg-primary/90 transition-colors"
        >
          <Mail className="w-5 h-5" />
          Say Hello
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  const { github, linkedin, name } = PORTFOLIO.personalInfo;

  return (
    <footer className="py-8 text-center px-4 bg-background border-t border-border">
      <div className="flex justify-center gap-6 mb-4">
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          GitHub
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          LinkedIn
        </a>
      </div>
      <p className="text-sm text-muted-foreground font-mono">
        Designed & Built by {name} &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
