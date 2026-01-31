interface FooterProps {
  name: string;
}

const Footer = ({ name }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-8 border-t border-primary-foreground/10">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-bold text-primary-foreground">
              {name.split(" ")[0]}
              <span className="text-accent">.</span>
            </span>
          </div>
          
          <p className="text-sm text-primary-foreground/50 text-center">
            © {currentYear} {name}. All rights reserved.
          </p>
          
          <p className="text-xs text-primary-foreground/40">
            Built with passion for connected vehicles
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
