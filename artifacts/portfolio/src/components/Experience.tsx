import { PORTFOLIO } from "../data/portfolio";
import { GraduationCap } from "lucide-react";

export function Experience() {
  const { experience, education } = PORTFOLIO;

  return (
    <section id="experience" className="py-20 bg-card px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">

        <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
          <span className="text-primary font-mono text-lg">03.</span> Education & Experience
          <div className="h-px bg-border flex-1 ml-4" />
        </h3>

        <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {education.map((edu, i) => (
            <div key={i} className="flex gap-3 p-4 rounded-lg border border-border bg-background">
              <div className="mt-0.5 shrink-0 text-primary">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground leading-snug">{edu.degree}</p>
                <p className="text-sm text-muted-foreground mt-0.5">{edu.school}</p>
                <p className="text-xs font-mono text-primary/70 mt-1">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-10 border-l border-border pl-6">
          {experience.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 bg-primary rounded-full border-4 border-card" />
              <div className="space-y-1 mb-3">
                <div className="flex items-center gap-3">
                  {exp.logo && (
                    exp.logoDark ? (
                      <div className="shrink-0 rounded-lg overflow-hidden bg-[#1a1a1a] p-1.5 flex items-center justify-center h-10 md:h-11 w-auto">
                        <img
                          src={exp.logo}
                          alt={exp.logoAlt}
                          className="h-7 md:h-8 w-auto object-contain"
                        />
                      </div>
                    ) : (
                      <div className="shrink-0 flex items-center justify-center h-10 md:h-11">
                        <img
                          src={exp.logo}
                          alt={exp.logoAlt}
                          className="h-10 md:h-11 w-auto max-w-[90px] object-contain"
                        />
                      </div>
                    )
                  )}
                  <h4 className="text-lg font-bold text-foreground leading-snug">
                    {exp.role} <span className="text-primary">@ {exp.company}</span>
                  </h4>
                </div>
                <p className="text-xs font-mono text-muted-foreground">{exp.period}</p>
              </div>
              <ul className="space-y-2 text-muted-foreground list-disc pl-5 marker:text-primary/50">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="leading-relaxed pl-1 text-sm">{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
