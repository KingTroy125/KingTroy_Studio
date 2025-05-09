import React from 'react';
import { Button } from './ui/button';
import { Paintbrush, Code, FileCode, PenSquare, CircleUser, CalendarClock } from 'lucide-react';
import { Badge } from './ui/badge';

const PricingPlans: React.FC = () => {
  const calendarLink = "https://cal.com/kingtroy125/30min?overlayCalendar=true";
  
  return (
    <div id="pricing-plans" className="w-full py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Our plans are simple
          </h2>
          
          {/* Available spot badge */}
          <div className="relative">
            <div className="flex items-center gap-2 bg-black/60 border border-white/10 px-5 py-2 rounded-full">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
              <span className="text-white text-sm font-medium">1 spot left this May</span>
            </div>
            <p className="text-white/50 text-xs mt-1 text-center">taking up to 3 per month</p>
          </div>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Website Design */}
          <div className="bg-black border border-white/10 rounded-xl p-6 flex flex-col">
            <div className="mb-6">
              <Badge className="bg-blue-950/50 text-blue-400 hover:bg-blue-900/60 border-none mb-4">
                <Paintbrush className="w-4 h-4 mr-1" /> Figma project
              </Badge>
              <h3 className="text-2xl font-bold text-white mb-2">Website Design</h3>
              <p className="text-gray-400">Only custom web-copy and entire website design</p>
            </div>
            
            <div className="text-2xl font-bold text-white mb-8">
              R1K<span className="text-xl">+</span>
            </div>
            
            <div className="border-t border-white/10 pt-4 mb-6 flex-grow">
              <ul className="space-y-3">
                <li className="flex items-center text-white">
                  <Paintbrush className="w-4 h-4 mr-3 text-gray-400" /> 
                  <span>Full design</span>
                </li>
                <li className="flex items-center text-white">
                  <FileCode className="w-4 h-4 mr-3 text-gray-400" /> 
                  <span>Single page</span>
                </li>
                <li className="flex items-center text-white">
                  <PenSquare className="w-4 h-4 mr-3 text-gray-400" /> 
                  <span>Copywriting</span>
                </li>
                <li className="flex items-center text-white">
                  <CircleUser className="w-4 h-4 mr-3 text-gray-400" /> 
                  <span>Custom visuals</span>
                </li>
                <li className="flex items-center text-white">
                  <CalendarClock className="w-4 h-4 mr-3 text-gray-400" /> 
                  <span>1 week delivery</span>
                </li>
              </ul>
            </div>
            
            <a href={calendarLink} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full bg-black text-white border border-white/30 hover:bg-white/10">
                Apply now
              </Button>
            </a>
          </div>
          
          {/* Landing Page */}
          <div className="bg-black border border-white/10 rounded-xl p-6 flex flex-col">
            <div className="mb-6">
              <Badge className="bg-purple-950/50 text-purple-400 hover:bg-purple-900/60 border-none mb-4">
                <Code className="w-4 h-4 mr-1" /> Full web-development
              </Badge>
              <h3 className="text-2xl font-bold text-white mb-2">Landing Page</h3>
              <p className="text-gray-400">Perfect for Start-ups. Everything included, custom code too.</p>
            </div>
            
            <div className="text-2xl font-bold text-white mb-8">
              R2K<span className="text-xl">+</span>
            </div>
            
            <div className="border-t border-white/10 pt-4 mb-6 flex-grow">
              <ul className="space-y-3">
                <li className="flex items-center text-white">
                  <Paintbrush className="w-4 h-4 mr-3 text-gray-400" /> 
                  <span>Full design</span>
                </li>
                <li className="flex items-center text-white">
                  <FileCode className="w-4 h-4 mr-3 text-gray-400" /> 
                  <span>Single page</span>
                </li>
                <li className="flex items-center text-white">
                  <Code className="w-4 h-4 mr-3 text-gray-400" /> 
                  <span>Custom code</span>
                </li>
                <li className="flex items-center text-white">
                  <CalendarClock className="w-4 h-4 mr-3 text-gray-400" /> 
                  <span>2 weeks delivery</span>
                </li>
                <li className="flex items-center text-white">
                  <CalendarClock className="w-4 h-4 mr-3 text-gray-400" /> 
                  <span>Monthly updates $+</span>
                </li>
              </ul>
            </div>
            
            <a href={calendarLink} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full bg-white text-black hover:bg-white/90">
                Apply now
              </Button>
            </a>
          </div>
          
          {/* Enterprise */}
          <div className="bg-black border border-white/10 rounded-xl p-6 flex flex-col">
            <div className="mb-6">
              <Badge className="bg-amber-950/50 text-amber-400 hover:bg-amber-900/60 border-none mb-4">
                <Code className="w-4 h-4 mr-1" /> Front-end services
              </Badge>
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-gray-400">A bigger brand? no problem, your big idea will need more than 1 page</p>
            </div>
            
            <div className="text-2xl font-bold text-white mb-8">
              R3K<span className="text-xl">+</span>
            </div>
            
            <div className="border-t border-white/10 pt-4 mb-6 flex-grow">
              <ul className="space-y-3">
                <li className="flex items-center text-white">
                  <CircleUser className="w-4 h-4 mr-3 text-gray-400" /> 
                  <span>Priority support</span>
                </li>
                <li className="flex items-center text-white">
                  <FileCode className="w-4 h-4 mr-3 text-gray-400" /> 
                  <span>Unlimited pages</span>
                </li>
                <li className="flex items-center text-white">
                  <Code className="w-4 h-4 mr-3 text-gray-400" /> 
                  <span>Custom projects</span>
                </li>
                <li className="flex items-center text-white">
                  <CircleUser className="w-4 h-4 mr-3 text-gray-400" /> 
                  <span>Team integration</span>
                </li>
                <li className="flex items-center text-white">
                  <CalendarClock className="w-4 h-4 mr-3 text-gray-400" /> 
                  <span>Monthly updates $+</span>
                </li>
              </ul>
            </div>
            
            <a href={calendarLink} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="w-full bg-black text-white border border-white/30 hover:bg-white/10">
                Apply now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
