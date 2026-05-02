import { PORTFOLIO } from "../data/portfolio";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  const { certifications } = PORTFOLIO;

  return (
    <section id="certifications" className="py-20 px-4 md:px-8">
      <div className="container mx-auto max-w-4xl">
        <h3 className="text-2xl font-bold mb-10 flex items-center gap-4">
          <span className="text-primary font-mono text-lg">06.</span> Certifications
          <div className="h-px bg-border flex-1 ml-4" />
        </h3>
        <div className="space-y-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex gap-5 p-5 border border-border rounded-lg bg-card hover:border-primary/30 hover:shadow-sm transition-all duration-200"
            >
              <div className="mt-0.5 shrink-0 text-primary">
                <Award className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-foreground leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-0.5">{cert.issuer}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs text-muted-foreground">
                      Issued {cert.issued}
                      {cert.expiry && <span> · Expires {cert.expiry}</span>}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs text-muted-foreground/70 mt-0.5">
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                </div>
                {cert.link && (
                  <div className="mt-3">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium border border-border rounded hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" /> View Credential
                    </a>
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
