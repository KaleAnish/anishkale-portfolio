import { PORTFOLIO } from "../data/portfolio";

export function Experience() {
  const { experience } = PORTFOLIO;

  return (
    <section id="experience" className="py-20 bg-card px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-2xl font-bold mb-12 flex items-center gap-4">
          <span className="text-primary font-mono text-lg">03.</span> Experience
          <div className="h-px bg-border flex-1 ml-4" />
        </h3>
        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-6 md:pl-0">
              <div className="hidden md:block absolute left-[-29px] top-2 w-3 h-3 bg-primary rounded-full border-4 border-card" />
              <div className="md:pl-8 md:border-l border-border space-y-3">
                <h4 className="text-xl font-bold text-foreground">
                  {exp.role} <span className="text-primary">@ {exp.company}</span>
                </h4>
                <ul className="space-y-2 text-muted-foreground list-disc pl-5 marker:text-primary/50">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="leading-relaxed pl-1">{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
