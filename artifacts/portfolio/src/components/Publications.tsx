import { PORTFOLIO } from "../data/portfolio";
import { BookOpen, ExternalLink, Quote } from "lucide-react";

export function Publications() {
  const { publications } = PORTFOLIO;

  return (
    <section id="publications" className="py-20 bg-muted/30 px-4 md:px-8 border-y border-border">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-2xl font-bold mb-10 flex items-center gap-4">
          <span className="text-primary font-mono text-lg">05.</span> Publications
          <div className="h-px bg-border flex-1 ml-4" />
        </h3>
        <div className="space-y-5">
          {publications.map((pub, index) => (
            <div
              key={index}
              className={`flex gap-5 p-6 border rounded-lg bg-card transition-all duration-200 ${
                pub.placeholder
                  ? "border-dashed border-border/70 opacity-70"
                  : "border-border hover:border-primary/30 hover:shadow-sm"
              }`}
            >
              <div className="mt-1 flex-shrink-0 text-primary">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <h4
                  className={`text-base font-bold leading-snug mb-1 ${
                    pub.placeholder ? "text-muted-foreground italic" : "text-foreground"
                  }`}
                >
                  {pub.title}
                </h4>
                {!pub.placeholder && (
                  <p className="text-sm text-muted-foreground mb-1">{pub.authors}</p>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {pub.venue}
                  {pub.year && (
                    <span className="ml-2 inline-block font-mono text-xs px-1.5 py-0.5 rounded bg-primary/10 text-primary">
                      {pub.year}
                    </span>
                  )}
                </p>
                {!pub.placeholder && Object.keys(pub.links).length > 0 && (
                  <div className="flex gap-3 mt-4 flex-wrap">
                    {pub.links.paper && (
                      <a
                        href={pub.links.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border rounded hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" /> Paper
                      </a>
                    )}
                    {pub.links.doi && (
                      <a
                        href={pub.links.doi}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border rounded hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" /> DOI
                      </a>
                    )}
                    {pub.links.citation && (
                      <a
                        href={pub.links.citation}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border rounded hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        <Quote className="w-3 h-3" /> Cite
                      </a>
                    )}
                    {pub.links.article && (
                      <a
                        href={pub.links.article}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border rounded hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" /> Read Article
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
