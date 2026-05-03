import { PORTFOLIO } from "../data/portfolio";
import { Plane, Instagram } from "lucide-react";

export function BeyondWork() {
  const { beyondWork } = PORTFOLIO;

  return (
    <section id="beyond-work" className="py-20 px-4 md:px-8 container mx-auto max-w-4xl">
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-4">
        <span className="text-primary font-mono text-lg">06.</span> Beyond Work
        <div className="h-px bg-border flex-1 ml-4" />
      </h3>
      <div className="flex flex-col md:flex-row gap-6 items-start bg-gradient-to-br from-sky-50/60 to-teal-50/40 p-8 rounded-lg border border-border">
        <div className="text-primary p-3.5 bg-white rounded-lg border border-border shadow-sm shrink-0" aria-hidden="true">
          <Plane className="w-6 h-6" />
        </div>
        <div className="space-y-4 flex-1">
          <p className="text-base leading-relaxed text-foreground/80">
            {beyondWork.description}
          </p>
          <a
            href={beyondWork.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit @pnq.spotter aviation Instagram page (opens in new tab)"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-border rounded-md bg-white hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors shadow-sm"
          >
            <Instagram className="w-4 h-4" aria-hidden="true" />
            Visit @pnq.spotter
          </a>
        </div>
      </div>
    </section>
  );
}
