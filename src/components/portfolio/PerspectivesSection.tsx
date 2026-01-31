import { FileText, Mic, Video, BookOpen, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Publication {
  title: string;
  type: string;
  publication: string;
  date: string;
  excerpt: string;
  url: string;
}

interface PerspectivesSectionProps {
  publications: Publication[];
}

const typeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Article: FileText,
  Whitepaper: BookOpen,
  Podcast: Mic,
  "Conference Talk": Video,
};

const typeColors: Record<string, string> = {
  Article: "bg-blue-100 text-blue-700",
  Whitepaper: "bg-purple-100 text-purple-700",
  Podcast: "bg-rose-100 text-rose-700",
  "Conference Talk": "bg-amber-100 text-amber-700",
};

const PerspectivesSection = ({ publications }: PerspectivesSectionProps) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };

  return (
    <section id="insights" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Industry Perspectives
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Thought <span className="text-gradient">Leadership</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights and perspectives on the future of connected vehicles, telematics, and driver safety.
          </p>
        </div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {publications.map((pub, index) => {
            const IconComponent = typeIcons[pub.type] || FileText;
            const colorClass = typeColors[pub.type] || "bg-secondary text-secondary-foreground";

            return (
              <a
                key={pub.title}
                href={pub.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 bg-card rounded-xl border border-border/50 card-hover animate-fade-up opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${colorClass}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {pub.type}
                    </Badge>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
                  {pub.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {pub.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{pub.publication}</span>
                  <span>{formatDate(pub.date)}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PerspectivesSection;
