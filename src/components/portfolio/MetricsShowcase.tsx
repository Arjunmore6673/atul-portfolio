interface Metric {
  figure: string;
  label: string;
}

interface MetricsShowcaseProps {
  metrics: Metric[];
}

const MetricsShowcase = ({ metrics }: MetricsShowcaseProps) => {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container-narrow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="text-center group animate-fade-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                {metric.figure}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/70">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsShowcase;
