import { Mail, Linkedin, Twitter, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Contact {
  callToAction: string;
  email: string;
  phone?: string;
  availability: string;
}

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface ContactSectionProps {
  contact: Contact;
  socialLinks: SocialLink[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

const ContactSection = ({ contact, socialLinks }: ContactSectionProps) => {
  return (
    <section
      id="contact"
      className="section-padding hero-gradient relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-accent/50 rounded-full blur-3xl" />
      </div>

      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6 animate-fade-up opacity-0">
            Let's Connect
          </span>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6 animate-fade-up opacity-0 stagger-1">
            {contact.callToAction}
          </h2>

          <p className="text-lg text-primary-foreground/70 mb-10 animate-fade-up opacity-0 stagger-2">
            {contact.availability}
          </p>

          {/* Contact Methods */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-up opacity-0 stagger-3">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold glow-accent"
            >
              <a href={`mailto:${contact.email}`}>
                <Mail className="mr-2 h-5 w-5" />
                Email Me
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>

            {contact.phone && (
              <Button
                asChild
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
              >
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Me
                </a>
              </Button>
            )}
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fade-up opacity-0 stagger-4">
            {socialLinks.map((link) => {
              const IconComponent = iconMap[link.icon] || Mail;
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-primary-foreground/10 hover:bg-accent/20 rounded-xl text-primary-foreground hover:text-accent transition-all duration-300 hover:scale-110"
                  aria-label={link.platform}
                >
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>

          {/* Email Display */}
          <div
            className="mt-10 pt-10 border-t border-primary-foreground/10 animate-fade-up opacity-0"
            style={{ animationDelay: '0.5s' }}
          >
            <p className="text-sm text-primary-foreground/50 mb-2">
              Or reach out directly:
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="text-lg text-accent hover:underline font-medium"
            >
              {contact.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
