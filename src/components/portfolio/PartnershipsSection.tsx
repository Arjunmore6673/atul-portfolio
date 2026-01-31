interface Partner {
  name: string;
  logo?: string;
}

interface Partnerships {
  oems: Partner[];
  tierOne: Partner[];
  integrators: Partner[];
}

interface PartnershipsSectionProps {
  partnerships: Partnerships;
}

const PartnerCategory = ({ 
  title, 
  partners, 
  delay 
}: { 
  title: string; 
  partners: Partner[]; 
  delay: number;
}) => (
  <div 
    className="animate-fade-up opacity-0" 
    style={{ animationDelay: `${delay}s` }}
  >
    <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
      {title}
    </h3>
    <div className="grid grid-cols-2 gap-3">
      {partners.map((partner) => (
        <div
          key={partner.name}
          className="group flex items-center justify-center h-20 bg-card rounded-lg border border-border/50 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
        >
          <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center px-3">
            {partner.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

const PartnershipsSection = ({ partnerships }: PartnershipsSectionProps) => {
  return (
    <section id="partners" className="section-padding bg-secondary/50">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Partnership Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Working with <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building and nurturing strategic relationships with OEMs, Tier-1 suppliers, and leading system integrators.
          </p>
        </div>

        {/* Partner Categories */}
        <div className="grid md:grid-cols-3 gap-10">
          <PartnerCategory 
            title="OEMs" 
            partners={partnerships.oems} 
            delay={0.1}
          />
          <PartnerCategory 
            title="Tier-1 Suppliers" 
            partners={partnerships.tierOne} 
            delay={0.2}
          />
          <PartnerCategory 
            title="System Integrators" 
            partners={partnerships.integrators} 
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
