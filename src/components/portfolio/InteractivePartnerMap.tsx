import { useState } from "react";

interface Partner {
  name: string;
  logo?: string;
}

interface Partnerships {
  oems: Partner[];
  tierOne: Partner[];
  integrators: Partner[];
}

interface PartnerCategory {
  id: string;
  label: string;
  count: number;
  color?: string;
}

interface InteractivePartnerMapProps {
  partnerships: Partnerships;
  categories: PartnerCategory[];
}

const categoryColors: Record<string, string> = {
  oems: "from-accent to-cyan-400",
  tierOne: "from-blue-500 to-indigo-500",
  integrators: "from-emerald-500 to-teal-500",
};

const InteractivePartnerMap = ({ partnerships, categories }: InteractivePartnerMapProps) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const getPartnersForCategory = (catId: string): Partner[] => {
    if (catId === "all") {
      return [...partnerships.oems, ...partnerships.tierOne, ...partnerships.integrators];
    }
    return partnerships[catId as keyof Partnerships] || [];
  };

  const displayedPartners = getPartnersForCategory(activeCategory);

  return (
    <section id="partners" className="section-padding bg-secondary/50">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Partnership Ecosystem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Working with <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on categories to explore strategic partnerships across the automotive ecosystem.
          </p>
        </div>

        {/* Interactive Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            const gradientClass = cat.id !== "all" ? categoryColors[cat.id] : "from-accent to-cyan-400";

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative group overflow-hidden rounded-2xl transition-all duration-300 ${
                  isActive ? "scale-105 shadow-xl" : "hover:scale-102"
                }`}
              >
                <div
                  className={`px-6 py-4 ${
                    isActive
                      ? `bg-gradient-to-r ${gradientClass} text-white`
                      : "bg-card border border-border/50 text-muted-foreground hover:border-accent/30"
                  }`}
                >
                  <div className="font-semibold text-sm">{cat.label}</div>
                  <div className={`text-2xl font-display font-bold ${isActive ? "text-white" : "text-foreground"}`}>
                    {cat.count}
                  </div>
                </div>
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-accent" />
                )}
              </button>
            );
          })}
        </div>

        {/* Visual Partner Map */}
        <div className="relative">
          {/* Connection Lines Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-48 h-48 rounded-full border-2 border-dashed border-accent/20 animate-pulse" />
            <div className="absolute w-72 h-72 rounded-full border border-accent/10" />
            <div className="absolute w-96 h-96 rounded-full border border-accent/5" />
          </div>

          {/* Center Node */}
          <div className="relative flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-cyan-400 flex items-center justify-center text-white font-display font-bold text-lg shadow-xl glow-accent z-10">
              AS
            </div>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10">
            {displayedPartners.map((partner, index) => {
              // Determine which category this partner belongs to for coloring
              let partnerCategory = "oems";
              if (partnerships.tierOne.includes(partner)) partnerCategory = "tierOne";
              if (partnerships.integrators.includes(partner)) partnerCategory = "integrators";

              const isHighlighted = activeCategory === "all" || activeCategory === partnerCategory;
              const gradientClass = categoryColors[partnerCategory];

              return (
                <div
                  key={partner.name}
                  className={`group p-4 rounded-xl border transition-all duration-300 animate-scale-in ${
                    isHighlighted
                      ? "bg-card border-accent/30 shadow-lg"
                      : "bg-card/50 border-border/30 opacity-40"
                  }`}
                  style={{ animationDelay: `${index * 0.03}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradientClass} flex items-center justify-center text-white font-bold text-sm`}
                    >
                      {partner.name.charAt(0)}
                    </div>
                    <span className={`text-sm font-medium ${isHighlighted ? "text-foreground" : "text-muted-foreground"}`}>
                      {partner.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 pt-8 border-t border-border/50">
          {categories
            .filter((c) => c.id !== "all")
            .map((cat) => (
              <div key={cat.id} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${categoryColors[cat.id]}`} />
                {cat.label}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default InteractivePartnerMap;
