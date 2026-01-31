import { useState } from "react";

interface Solution {
  name: string;
  icon: string;
  description: string;
  category: string;
}

interface SolutionCategory {
  id: string;
  label: string;
  icon: string;
}

interface FilterableSolutionsProps {
  solutions: Solution[];
  categories: SolutionCategory[];
}

const FilterableSolutions = ({ solutions, categories }: FilterableSolutionsProps) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSolutions =
    activeCategory === "all"
      ? solutions
      : solutions.filter((s) => s.category === activeCategory);

  return (
    <section id="solutions" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Solutions Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Solutions by <span className="text-gradient">Business Value</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Filter solutions by the outcomes that matter most to your organization.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-accent text-accent-foreground shadow-lg scale-105"
                  : "bg-card text-muted-foreground hover:bg-accent/10 hover:text-foreground border border-border/50"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((solution, index) => (
            <div
              key={solution.name}
              className="group p-6 bg-card rounded-xl border border-border/50 card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
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

        {/* Empty State */}
        {filteredSolutions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No solutions found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilterableSolutions;
