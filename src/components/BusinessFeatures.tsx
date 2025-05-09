import React from 'react';
import { Card, CardContent } from './ui/card';
import { cn } from '@/lib/utils';

const BusinessFeatures: React.FC = () => {
  const features = [
    {
      id: 1,
      title: 'Quality',
      description: 'Get the best website out there built with custom code',
      image: '/lovable-uploads/23d54ff4-2f1a-473d-8a6a-db01aa5a9e86.png',
      details: [
        { text: 'Manage hundreds of creators with ease', position: 'right' }
      ]
    },
    {
      id: 2,
      title: 'Connection',
      description: 'Stay in touch & track entire development stages with ease',
      profileImages: [
        { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&auto=format&q=80', alt: 'Team member' }
      ],
      tags: [
        { text: 'Development', position: 'top' },
        { text: 'Design', position: 'bottom' }
      ]
    },
    {
      id: 3,
      title: 'Longevity',
      description: 'For a monthly fee get custom upgrades at any time, just ask',
      updates: [
        { text: 'Image optimization complete', status: 'complete' },
        { text: 'Dark mode adjustments applied', status: 'complete' },
        { text: 'Animation smoothness improved', status: 'active', time: '2 months ago' }
      ],
      button: 'Press to request'
    }
  ];

  return (
    <div className="bg-black py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Why Businesses Choose KingTroy.Studio?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card 
              key={feature.id} 
              className="bg-gradient-to-b from-black to-[#111] border border-white/10 rounded-lg overflow-hidden h-full"
            >
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-white/70 mb-8">{feature.description}</p>
                
                <div className="flex-grow relative mt-4">
                  {/* Quality Feature with Image */}
                  {feature.id === 1 && feature.image && (
                    <div className="flex flex-col space-y-2 h-full">
                      <div className="relative flex justify-center items-end h-full">
                        <img 
                          src={feature.image} 
                          alt="Feature preview" 
                          className="rounded-md max-w-full h-auto object-contain"
                        />
                        {feature.details && feature.details.map((detail, idx) => (
                          <div 
                            key={idx}
                            className={cn(
                              "absolute bg-black/80 backdrop-blur-sm border border-white/10 rounded-md p-3",
                              detail.position === 'right' ? "bottom-6 right-0" : "bottom-6 left-0"
                            )}
                          >
                            <p className="text-white text-sm">{detail.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Connection Feature with Profile Images */}
                  {feature.id === 2 && feature.profileImages && (
                    <div className="flex flex-col justify-between h-full">
                      <div className="flex flex-col items-center relative">
                        {feature.tags && feature.tags.filter(tag => tag.position === 'top').map((tag, idx) => (
                          <div 
                            key={idx}
                            className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1 mb-4"
                          >
                            <p className="text-white text-sm">{tag.text}</p>
                          </div>
                        ))}
                        
                        {feature.profileImages.map((profile, idx) => (
                          <div key={idx} className="relative my-4">
                            <img 
                              src={profile.src} 
                              alt={profile.alt} 
                              className="w-20 h-20 rounded-full object-cover border-2 border-white/20"
                            />
                          </div>
                        ))}
                        
                        {feature.tags && feature.tags.filter(tag => tag.position === 'bottom').map((tag, idx) => (
                          <div 
                            key={idx}
                            className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1 mt-4"
                          >
                            <p className="text-white text-sm">{tag.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Longevity Feature with Updates */}
                  {feature.id === 3 && feature.updates && (
                    <div className="flex flex-col space-y-3">
                      {feature.updates.map((update, idx) => (
                        <div 
                          key={idx}
                          className={cn(
                            "bg-black/80 backdrop-blur-sm border border-white/10 rounded-lg p-3",
                            update.status === 'active' ? "bg-black/90" : ""
                          )}
                        >
                          <p className="text-white/80 text-sm">{update.text}</p>
                          {update.time && (
                            <p className="text-white/50 text-xs mt-1">{update.time}</p>
                          )}
                        </div>
                      ))}
                      
                      {feature.button && (
                        <div className="mt-6 flex justify-end">
                          <button className="bg-black border border-white/20 hover:bg-white/10 text-white rounded-md px-4 py-2 text-sm transition-colors">
                            {feature.button}
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusinessFeatures;
