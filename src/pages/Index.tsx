import React, { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import BusinessFeatures from '../components/BusinessFeatures';
import TechStack from '../components/TechStack';
import Reviews3D from '../components/Reviews3D';
import PricingPlans from '../components/PricingPlans';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Hide scrollbar during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      
      <div className={`min-h-screen flex flex-col bg-studio-dark overflow-hidden transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* <Navbar /> */}
        <HeroSection />
        <TechStack />
        <BusinessFeatures />
        <Reviews3D />
        <PricingPlans />
        <FAQSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
