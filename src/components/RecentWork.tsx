
import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Star, Play, Globe } from 'lucide-react';

interface ProjectProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  reversed?: boolean;
}

const Project: React.FC<ProjectProps> = ({ id, title, description, image, tags, reversed = false }) => {
  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 mb-20`}>
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <Badge 
              key={`${id}-tag-${index}`} 
              variant="outline" 
              className="bg-black border-white/10 text-white"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" className="rounded-full bg-black border-white/10 text-white hover:bg-white/5">
            <Star className="mr-2 h-4 w-4" />
            Testimonial
          </Button>
          <Button variant="outline" className="rounded-full bg-black border-white/10 text-white hover:bg-white/5">
            <Globe className="mr-2 h-4 w-4" />
            Website
          </Button>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2">
        <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
          {image ? (
            <img 
              src={image} 
              alt={`${title} project screenshot`} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <Button className="rounded-full flex items-center justify-center">
                <Play className="h-6 w-6" />
                Play video
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const RecentWork: React.FC = () => {
  const projects = [
    {
      id: "sprout",
      title: "Sprout",
      description: "Built multiple sites which generate more than 6-figs a year. Helping till this day with new projects and business growth",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=450&fit=crop&auto=format&q=80",
      tags: ["Enterprise", "Venture Studio"]
    },
    {
      id: "frostchanger",
      title: "FrostChanger",
      description: "Designed and coded 2 web apps. Working together for some time now and planning to do more big projects.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=450&fit=crop&auto=format&q=80",
      tags: ["Enterprise", "SaaS"]
    }
  ];

  return (
    <section className="w-full py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
          See our recent work
        </h2>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <Project 
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
