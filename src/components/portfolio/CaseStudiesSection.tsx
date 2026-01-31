import { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface CaseStudyMetric {
  value: string;
  label: string;
}

interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  result: string;
  metrics: CaseStudyMetric[];
  technologies: string[];
}

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

const CaseStudiesSection = ({ caseStudies }: CaseStudiesSectionProps) => {
  const [activeStudy, setActiveStudy] = useState<string>(caseStudies[0]?.id || "");

  const activeCase = caseStudies.find((cs) => cs.id === activeStudy) || caseStudies[0];

  return (
    <section id="case-studies" className="section-padding bg-secondary/50">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Driving <span className="text-gradient">Real Results</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformational outcomes achieved through strategic partnerships and innovative telematics solutions.
          </p>
        </div>

        {/* Case Study Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {caseStudies.map((cs) => (
            <button
              key={cs.id}
              onClick={() => setActiveStudy(cs.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeStudy === cs.id
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : "bg-card text-muted-foreground hover:bg-accent/10 hover:text-foreground border border-border/50"
              }`}
            >
              {cs.client}
            </button>
          ))}
        </div>

        {/* Active Case Study Card */}
        {activeCase && (
          <div className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-xl animate-fade-in">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left: Content */}
              <div className="p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-0">
                    {activeCase.industry}
                  </Badge>
                </div>

                <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                  {activeCase.client}
                </h3>

                <div className="space-y-5">
                  <div>
                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                      Challenge
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {activeCase.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                      Solution
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {activeCase.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">
                      Result
                    </h4>
                    <p className="text-foreground font-medium leading-relaxed">
                      {activeCase.result}
                    </p>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {activeCase.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-sm text-muted-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: Metrics */}
              <div className="bg-primary p-8 lg:p-10 flex flex-col justify-center">
                <h4 className="text-sm font-semibold text-accent uppercase tracking-wider mb-8 text-center">
                  Key Outcomes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6">
                  {activeCase.metrics.map((metric, index) => (
                    <div
                      key={metric.label}
                      className="text-center animate-scale-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-4xl lg:text-5xl font-display font-bold text-accent mb-2">
                        {metric.value}
                      </div>
                      <div className="text-sm text-primary-foreground/70">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-10 mx-auto inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors group">
                  View Full Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Case Study Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {caseStudies.map((cs) => (
            <button
              key={cs.id}
              onClick={() => setActiveStudy(cs.id)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                activeStudy === cs.id
                  ? "bg-accent w-8"
                  : "bg-border hover:bg-muted-foreground"
              }`}
              aria-label={`View ${cs.client} case study`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
