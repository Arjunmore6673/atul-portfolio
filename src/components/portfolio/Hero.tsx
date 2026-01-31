import { MapPin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PersonalInfo {
  name: string;
  headline: string;
  summary: string;
  targetRoles: string[];
  location: string[];
}

interface HeroProps {
  personalInfo: PersonalInfo;
}

const Hero = ({ personalInfo }: HeroProps) => {
  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToExpertise = () => {
    const element = document.querySelector("#expertise");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/50 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/10 rounded-full" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--accent) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--accent) / 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="container-narrow relative z-10 text-center pt-20">
        {/* Location Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-up opacity-0 stagger-1">
          {personalInfo.location.map((loc) => (
            <span
              key={loc}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium border border-accent/30"
            >
              <MapPin size={14} />
              {loc}
            </span>
          ))}
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 animate-fade-up opacity-0 stagger-2">
          {personalInfo.name}
        </h1>

        {/* Headline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-primary-foreground/80 mb-6 animate-fade-up opacity-0 stagger-3 font-medium">
          {personalInfo.headline}
        </p>

        {/* Summary */}
        <p className="text-lg text-primary-foreground/60 max-w-3xl mx-auto mb-8 animate-fade-up opacity-0 stagger-4 leading-relaxed">
          {personalInfo.summary}
        </p>

        {/* Target Roles */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-up opacity-0" style={{ animationDelay: "0.5s" }}>
          <span className="text-sm text-primary-foreground/50">Seeking:</span>
          {personalInfo.targetRoles.map((role, index) => (
            <span key={role} className="text-sm text-accent font-medium">
              {role}
              {index < personalInfo.targetRoles.length - 1 && (
                <span className="text-primary-foreground/30 mx-1">•</span>
              )}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: "0.6s" }}>
          <Button
            size="lg"
            onClick={handleScrollToContact}
            className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold glow-accent animate-pulse-glow"
          >
            Let's Connect
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleScrollToExpertise}
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
          >
            View My Work
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={handleScrollToExpertise}
            className="p-3 text-primary-foreground/40 hover:text-accent transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
