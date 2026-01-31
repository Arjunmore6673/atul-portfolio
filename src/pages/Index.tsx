import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import MetricsShowcase from "@/components/portfolio/MetricsShowcase";
import ExpertiseSection from "@/components/portfolio/ExpertiseSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import SolutionsSection from "@/components/portfolio/SolutionsSection";
import PartnershipsSection from "@/components/portfolio/PartnershipsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import portfolioData from "@/data/portfolio.json";

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
      
      <AchievementsSection achievements={portfolioData.keyAchievements} />
      
      <SolutionsSection solutions={portfolioData.keySolutions} />
      
      <PartnershipsSection partnerships={portfolioData.partnerships} />
      
      <ContactSection 
        contact={portfolioData.contact} 
        socialLinks={portfolioData.socialLinks} 
      />
      
      <Footer name={portfolioData.personalInfo.name} />
    </div>
  );
};

export default Index;
