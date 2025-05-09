import React from 'react';
import { Button } from './ui/button';
import ProjectShowcase from './ProjectShowcase';
import { FlipWords } from './ui/flip-words';
import { Spotlight } from './ui/spotlight';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const flipWords = ["ordinary", "templated", "forgettable", "generic"];
  const calendarLink = "https://cal.com/kingtroy125/30min?overlayCalendar=true";
  
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing-plans');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative w-full bg-black text-white overflow-hidden">
      {/* Spotlight effect */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      {/* Main content area */}
      <div className="container mx-auto px-4 pt-20 pb-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo above the badge, aligned with content */}
          <div className="mb-16">
            <img 
              src="/kt-logo.png" 
              alt="KT Studio" 
              className="w-20 h-20 md:w-24 md:h-24"
            />
          </div>
          {/* Available spot badge, left-aligned */}
          <div className="inline-block mb-12">
            <div className="bg-black border border-[#333] py-2 px-4 rounded-full flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white/80 text-sm">Limited availability this month</span>
            </div>
          </div>
          {/* Main heading with FlipWords */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent mb-6 leading-tight">
            Elevating digital experiences<br />
            beyond <FlipWords words={flipWords} className="font-serif italic" /> design
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-10">
            Crafting strategic, conversion-focused websites that transform 
            visitors into clients and elevate your brand presence
          </p>
          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-20">
            <a href={calendarLink} target="_blank" rel="noopener noreferrer">
              <Button className="bg-black text-white border border-white hover:bg-white hover:text-black transition-colors px-8 py-6 rounded-full text-base">
                Schedule consultation
              </Button>
            </a>
            <Button 
              variant="outline" 
              className="bg-white text-black hover:bg-black hover:text-white border border-white transition-colors px-8 py-6 rounded-full text-base"
              onClick={scrollToPricing}
            >
              View services
            </Button>
          </div>
        </div>
      </div>
      {/* Project Showcase - Website Examples */}
      <ProjectShowcase />
    </div>
  );
};

export default HeroSection;
