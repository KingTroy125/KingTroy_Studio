
import React from 'react';
import { cn } from '@/lib/utils';

const CompanyLogos: React.FC = () => {
  const logos = [
    { id: 1, name: "Brand 1", src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=100&fit=crop&auto=format&q=60" },
    { id: 2, name: "Brand 2", src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=200&h=100&fit=crop&auto=format&q=60" },
    { id: 3, name: "Brand 3", src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop&auto=format&q=60" },
    { id: 4, name: "Brand 4", src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=100&fit=crop&auto=format&q=60" },
    { id: 5, name: "Brand 5", src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&auto=format&q=60" },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h3 className="text-center text-white/70 text-xl mb-12">Recent brands we worked with</h3>
      <div className={cn(
        "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center"
      )}>
        {logos.map((logo) => (
          <div 
            key={logo.id}
            className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img 
              src={logo.src} 
              alt={`${logo.name} logo`} 
              className="max-h-full max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogos;
