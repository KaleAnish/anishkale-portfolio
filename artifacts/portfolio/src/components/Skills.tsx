import { PORTFOLIO } from "../data/portfolio";

export function Skills() {
  const { skills } = PORTFOLIO;

  return (
    <section id="skills" className="py-20 px-4 md:px-8 container mx-auto max-w-5xl">
      <h3 className="text-2xl font-bold mb-12 flex items-center gap-4">
        <span className="text-primary font-mono text-lg">02.</span> Skills
        <div className="h-px bg-border flex-1 ml-4" />
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground/90">{category}</h4>
            <div className="flex flex-wrap gap-2">
              {items.map((skill) => (
                <span 
                  key={skill} 
                  className="px-3 py-1 bg-secondary text-secondary-foreground text-sm font-mono rounded border border-border"
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
