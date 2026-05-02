import { PORTFOLIO } from "../data/portfolio";
import { Plane } from "lucide-react";

export function BeyondWork() {
  const { beyondWork } = PORTFOLIO;

  return (
    <section id="beyond-work" className="py-20 px-4 md:px-8 container mx-auto max-w-4xl">
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
        <span className="text-primary font-mono text-lg">06.</span> Beyond Work
        <div className="h-px bg-border flex-1 ml-4" />
      </h3>
      <div className="flex flex-col md:flex-row gap-6 items-start bg-secondary/30 p-8 rounded border border-border">
        <div className="text-primary p-4 bg-background rounded-full border border-border">
          <Plane className="w-8 h-8" />
        </div>
        <div className="space-y-4 flex-1">
          <p className="text-lg leading-relaxed text-foreground/80">
            {beyondWork.description}
          </p>
          <a 
            href={beyondWork.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-primary font-medium hover:underline underline-offset-4"
          >
            Visit PnQ.Spotter →
          </a>
        </div>
      </div>
    </section>
  );
}
