interface ExpertiseArea {
  name: string;
  icon: string;
  description: string;
}

interface ExpertiseSectionProps {
  expertiseAreas: ExpertiseArea[];
}

const ExpertiseSection = ({ expertiseAreas }: ExpertiseSectionProps) => {
  return (
    <section id="expertise" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Core Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Driving Innovation in <span className="text-gradient">Connected Vehicles</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep domain expertise across the vehicle telematics ecosystem, from fleet management to advanced driver assistance systems.
          </p>
        </div>

        {/* Expertise Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.name}
              className="group metric-card card-hover text-center animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {area.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
