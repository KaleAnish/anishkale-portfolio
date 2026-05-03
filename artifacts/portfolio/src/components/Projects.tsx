import { PORTFOLIO } from "../data/portfolio";
import { Github, FolderOpen, Lock } from "lucide-react";

type Project = (typeof PORTFOLIO.projects)[number];

function ProjectCard({ project }: { project: Project }) {
  const githubUrl = project.links.github ?? null;
  const hasGithub = Boolean(githubUrl);

  const cardInner = (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div className="w-9 h-9 bg-primary/10 rounded-md flex items-center justify-center text-primary shrink-0">
          <FolderOpen className="w-4 h-4" />
        </div>
        <div className="flex gap-3 items-center text-muted-foreground">
          {hasGithub ? (
            <span
              onClick={(e) => {
                e.stopPropagation();
                window.open(githubUrl!, "_blank", "noopener,noreferrer");
              }}
              role="link"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.stopPropagation();
                  window.open(githubUrl!, "_blank", "noopener,noreferrer");
                }
              }}
              title="View on GitHub"
              className="hover:text-primary transition-colors cursor-pointer"
            >
              <Github className="w-4 h-4" />
            </span>
          ) : (
            <span
              className="inline-flex items-center gap-1 text-xs text-muted-foreground/60 font-mono px-2 py-0.5 rounded border border-border/50 bg-muted/40 select-none cursor-default"
              title="Repository not yet public"
            >
              <Lock className="w-3 h-3" /> Coming Soon
            </span>
          )}
        </div>
      </div>

      <h4 className="text-base font-bold mb-2 leading-snug transition-colors group-hover:text-primary">
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
  );

  if (hasGithub) {
    return (
      <a
        href={githubUrl!}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col bg-card border border-border rounded-lg p-6 transition-all duration-200 hover:border-primary/50 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
      >
        {cardInner}
      </a>
    );
  }

  return (
    <div className="group flex flex-col bg-card border border-border rounded-lg p-6 transition-all duration-200">
      {cardInner}
    </div>
  );
}

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
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
