import { PORTFOLIO } from "../data/portfolio";
import { Github, FileText, FolderOpen } from "lucide-react";

export function Projects() {
  const { projects } = PORTFOLIO;

  return (
    <section id="projects" className="py-20 px-4 md:px-8 container mx-auto max-w-6xl">
      <h3 className="text-2xl font-bold mb-12 flex items-center gap-4">
        <span className="text-primary font-mono text-lg">04.</span> Projects
        <div className="h-px bg-border flex-1 ml-4" />
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col bg-card border border-border rounded-lg p-6 transition-all duration-200 hover:border-primary/40 hover:shadow-md"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-9 h-9 bg-primary/10 rounded-md flex items-center justify-center text-primary shrink-0">
                <FolderOpen className="w-4 h-4" />
              </div>
              <div className="flex gap-3 text-muted-foreground">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                    className="hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {project.links.report && (
                  <a
                    href={project.links.report}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Report"
                    className="hover:text-primary transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            <h4 className="text-base font-bold mb-2 leading-snug group-hover:text-primary transition-colors">
              {project.title}
            </h4>

            <p className="text-sm text-muted-foreground mb-4 flex-1 leading-relaxed">
              {project.description}
            </p>

            <p className="text-xs text-foreground/80 mb-5 font-medium border-l-2 border-primary/50 pl-3 leading-relaxed">
              {project.impact}
            </p>

            <div className="mt-auto pt-4 border-t border-border/60 flex flex-wrap gap-x-3 gap-y-1">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs font-mono text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
