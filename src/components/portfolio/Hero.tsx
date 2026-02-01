import { MapPin, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToExpertise = () => {
    const element = document.querySelector('#expertise');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden"
    >
      {/* Background Pattern - Responsive sizes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 -left-10 sm:top-20 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-accent rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-10 -right-10 sm:bottom-20 sm:right-10 w-48 sm:w-96 h-48 sm:h-96 bg-accent/50 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1s' }}
        />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent/20 rounded-full" />
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/10 rounded-full" />
      </div>

      {/* Grid Pattern Overlay - Responsive */}
      <div
        className="absolute inset-0 opacity-5 hidden sm:block"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--accent) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--accent) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-narrow relative z-10 text-center pt-10 sm:pt-20 px-4 sm:px-6 lg:px-8">
        {/* Location Tags */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 animate-fade-up opacity-0 stagger-1">
          {personalInfo.location.map((loc) => (
            <span
              key={loc}
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-2 bg-cyan-400/20 text-cyan-100 rounded-full text-xs sm:text-sm font-semibold border border-cyan-300/40 backdrop-blur-sm"
            >
              <MapPin size={14} />
              {loc}
            </span>
          ))}
        </div>

        {/* Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-3 sm:mb-6 animate-fade-up opacity-0 stagger-2">
          {personalInfo.name}
        </h1>

        {/* Headline */}
        <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-blue-100 mb-4 sm:mb-6 animate-fade-up opacity-0 stagger-3 font-medium">
          {personalInfo.headline}
        </p>

        {/* Summary */}
        <p className="text-xs sm:text-sm md:text-lg text-blue-50/90 max-w-3xl mx-auto mb-6 sm:mb-8 animate-fade-up opacity-0 stagger-4 leading-relaxed px-3 sm:px-2">
          {personalInfo.summary}
        </p>

        {/* Target Roles */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-up opacity-0 px-3 sm:px-0"
          style={{ animationDelay: '0.5s' }}
        >
          <span className="text-xs sm:text-sm text-blue-100/70">Seeking:</span>
          {personalInfo.targetRoles.map((role, index) => (
            <span
              key={role}
              className="text-xs sm:text-sm text-cyan-300 font-semibold"
            >
              {role}
              {index < personalInfo.targetRoles.length - 1 && (
                <span className="text-white/30 mx-1.5">•</span>
              )}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-3 sm:px-2 mt-8 sm:mt-10">
          <Button
            onClick={handleScrollToContact}
            className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold w-full sm:w-auto rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Let's Connect
          </Button>
          <Button
            onClick={handleScrollToExpertise}
            className="border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold w-full sm:w-auto rounded-lg transition-all duration-200"
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
