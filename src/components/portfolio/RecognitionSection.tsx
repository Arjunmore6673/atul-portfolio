import { Calendar, MapPin, Award, Mic } from 'lucide-react';

interface SpeakingEngagement {
  event: string;
  role: string;
  topic: string;
  location: string;
  date: string;
}

interface Recognition {
  title: string;
  organization: string;
  year: string;
}

interface RecognitionSectionProps {
  speakingEngagements: SpeakingEngagement[];
  recognition: Recognition[];
}

const RecognitionSection = ({
  speakingEngagements,
  recognition,
}: RecognitionSectionProps) => {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Speaking Engagements */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-accent/10 rounded-xl">
                <Mic className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground">
                Speaking Engagements
              </h2>
            </div>

            <div className="space-y-6">
              {speakingEngagements.map((engagement, index) => (
                <div
                  key={engagement.event}
                  className="relative pl-6 border-l-2 border-accent/30 animate-fade-up opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] bg-accent rounded-full" />

                  <div className="bg-card rounded-xl p-5 border border-border/50 hover:border-accent/30 transition-colors">
                    <div className="flex items-center gap-2 text-xs text-accent font-medium mb-2">
                      <span className="px-2 py-0.5 bg-accent/10 rounded-full">
                        {engagement.role}
                      </span>
                    </div>

                    <h3 className="font-semibold text-foreground mb-1">
                      {engagement.event}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-3">
                      "{engagement.topic}"
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {engagement.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(engagement.date)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recognition & Awards */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-accent/10 rounded-xl">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <h2 className="text-2xl font-display font-bold text-foreground">
                Recognition & Awards
              </h2>
            </div>

            <div className="space-y-4">
              {recognition.map((award, index) => (
                <div
                  key={award.title}
                  className="group flex items-start gap-4 p-5 bg-card rounded-xl border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all animate-fade-up opacity-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-cyan-400 rounded-xl flex items-center justify-center text-white font-display font-bold text-lg group-hover:scale-110 transition-transform">
                    🏆
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                      {award.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {award.organization}
                    </p>
                    <span className="text-xs text-accent font-medium">
                      {award.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;
