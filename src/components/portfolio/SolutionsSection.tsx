interface Solution {
  name: string;
  icon: string;
  description: string;
}

interface SolutionsSectionProps {
  solutions: Solution[];
}

const SolutionsSection = ({ solutions }: SolutionsSectionProps) => {
  return (
    <section id="solutions" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Solutions Delivered
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Key <span className="text-gradient">Solutions</span> I've Championed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Successfully bringing cutting-edge telematics and ADAS solutions to market across diverse industry verticals.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={solution.name}
              className="group p-6 bg-card rounded-xl border border-border/50 card-hover animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {solution.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
