import { lazy, Suspense } from "react";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import MetricsShowcase from "@/components/portfolio/MetricsShowcase";
import ExpertiseSection from "@/components/portfolio/ExpertiseSection";
import ThemeToggle from "@/components/portfolio/ThemeToggle";
import portfolioData from "@/data/portfolio.json";

// Lazy-loaded components for performance optimization
const CaseStudiesSection = lazy(() => import("@/components/portfolio/CaseStudiesSection"));
const FilterableSolutions = lazy(() => import("@/components/portfolio/FilterableSolutions"));
const InteractivePartnerMap = lazy(() => import("@/components/portfolio/InteractivePartnerMap"));
const PerspectivesSection = lazy(() => import("@/components/portfolio/PerspectivesSection"));
const RecognitionSection = lazy(() => import("@/components/portfolio/RecognitionSection"));
const RoleMatcher = lazy(() => import("@/components/portfolio/RoleMatcher"));
const ContactSection = lazy(() => import("@/components/portfolio/ContactSection"));
const Footer = lazy(() => import("@/components/portfolio/Footer"));

// Loading fallback component
const SectionLoader = () => (
  <div className="section-padding flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-4 border-accent/30 border-t-accent rounded-full animate-spin" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        navigation={portfolioData.navigation} 
        name={portfolioData.personalInfo.name} 
      />
      
      <Hero personalInfo={portfolioData.personalInfo} />
      
      <MetricsShowcase metrics={portfolioData.performanceMetrics} />
      
      <ExpertiseSection expertiseAreas={portfolioData.expertiseAreas} />
      
      <Suspense fallback={<SectionLoader />}>
        <CaseStudiesSection caseStudies={portfolioData.caseStudies} />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <FilterableSolutions 
          solutions={portfolioData.keySolutions} 
          categories={portfolioData.solutionCategories}
        />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <InteractivePartnerMap 
          partnerships={portfolioData.partnerships}
          categories={portfolioData.partnerCategories}
        />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <PerspectivesSection publications={portfolioData.publications} />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <RecognitionSection 
          speakingEngagements={portfolioData.speakingEngagements}
          recognition={portfolioData.recognition}
        />
      </Suspense>
      
      {/* Role Matcher Widget Section */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                For Recruiters
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                Find Your <span className="text-gradient">Perfect Match</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Looking for specific leadership qualities? Use this interactive tool to see how my experience aligns with your role requirements.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Select the attributes you're looking for
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  See real-time compatibility scoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  Matched against verified achievements
                </li>
              </ul>
            </div>
            
            <Suspense fallback={<SectionLoader />}>
              <RoleMatcher 
                attributes={portfolioData.roleAttributes}
                matchingData={portfolioData.roleMatchingData}
              />
            </Suspense>
          </div>
        </div>
      </section>
      
      <Suspense fallback={<SectionLoader />}>
        <ContactSection 
          contact={portfolioData.contact} 
          socialLinks={portfolioData.socialLinks} 
        />
      </Suspense>
      
      <Suspense fallback={<SectionLoader />}>
        <Footer name={portfolioData.personalInfo.name} />
      </Suspense>
      
      <ThemeToggle />
    </div>
  );
};

export default Index;
