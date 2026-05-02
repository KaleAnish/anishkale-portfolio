import { PORTFOLIO } from "../data/portfolio";

export function Skills() {
  const { skills } = PORTFOLIO;

  return (
    <section id="skills" className="py-16 px-4 md:px-8 container mx-auto max-w-5xl">
      <h3 className="text-2xl font-bold mb-10 flex items-center gap-4">
        <span className="text-primary font-mono text-lg">02.</span> Skills
        <div className="h-px bg-border flex-1 ml-4" />
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-3">
              {category}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded border border-border/70"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
