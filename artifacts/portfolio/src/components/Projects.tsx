import { PORTFOLIO } from "../data/portfolio";
import { ExternalLink, Github, FileText } from "lucide-react";

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
            className="flex flex-col bg-card border border-border p-6 rounded transition-all hover:border-primary/30 hover:shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded flex items-center justify-center text-primary">
                <FileText className="w-5 h-5" />
              </div>
              <div className="flex gap-3 text-muted-foreground">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.links.report && (
                  <a href={project.links.report} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <FileText className="w-5 h-5" />
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h4>
            <p className="text-sm text-muted-foreground mb-4 flex-1">
              {project.description}
            </p>
            <p className="text-xs text-foreground/80 mb-6 font-medium border-l-2 border-primary/40 pl-3">
              {project.impact}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
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
