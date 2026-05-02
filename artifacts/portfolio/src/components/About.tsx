import { PORTFOLIO } from "../data/portfolio";

export function About() {
  return (
    <section id="about" className="py-20 bg-card px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
          <span className="text-primary font-mono text-lg">01.</span> About
          <div className="h-px bg-border flex-1 ml-4" />
        </h3>
        <p className="text-lg leading-relaxed text-muted-foreground">
          {PORTFOLIO.about}
        </p>
      </div>
    </section>
  );
}
