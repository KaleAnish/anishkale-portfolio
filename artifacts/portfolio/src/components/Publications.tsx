import { PORTFOLIO } from "../data/portfolio";
import { BookOpen } from "lucide-react";

export function Publications() {
  const { publications } = PORTFOLIO;

  return (
    <section id="publications" className="py-20 bg-card px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-2xl font-bold mb-10 flex items-center gap-4">
          <span className="text-primary font-mono text-lg">05.</span> Publications
          <div className="h-px bg-border flex-1 ml-4" />
        </h3>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div key={index} className="flex gap-4 p-6 border border-border rounded bg-background">
              <div className="mt-1 flex-shrink-0 text-primary">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground">
                  {pub.link ? (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      {pub.title}
                    </a>
                  ) : (
                    pub.title
                  )}
                </h4>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                  {pub.venue}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
