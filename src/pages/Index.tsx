import { lazy, Suspense } from 'react';
import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import MetricsShowcase from '@/components/portfolio/MetricsShowcase';
import ExpertiseSection from '@/components/portfolio/ExpertiseSection';
import ThemeToggle from '@/components/portfolio/ThemeToggle';
import portfolioData from '@/data/portfolio.json';

// Lazy-loaded components for performance optimization
const CaseStudiesSection = lazy(
  () => import('@/components/portfolio/CaseStudiesSection'),
);
const FilterableSolutions = lazy(
  () => import('@/components/portfolio/FilterableSolutions'),
);
const InteractivePartnerMap = lazy(
  () => import('@/components/portfolio/InteractivePartnerMap'),
);
const PerspectivesSection = lazy(
  () => import('@/components/portfolio/PerspectivesSection'),
);
const RecognitionSection = lazy(
  () => import('@/components/portfolio/RecognitionSection'),
);
const RoleMatcher = lazy(() => import('@/components/portfolio/RoleMatcher'));
const ContactSection = lazy(
  () => import('@/components/portfolio/ContactSection'),
);
const Footer = lazy(() => import('@/components/portfolio/Footer'));

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
        <ContactSection
          contact={portfolioData.contact}
          socialLinks={portfolioData.socialLinks}
        />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Footer name={portfolioData.personalInfo.name} />
      </Suspense>

      {/* <ThemeToggle /> */}
    </div>
  );
};

export default Index;
