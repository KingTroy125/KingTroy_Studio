import React from 'react';
import { InfiniteSlider } from './motion-primitives/infinite-slider';

const technologies = [
  {
    name: 'React',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
    height: 40,
  },
  {
    name: 'Vite',
    logo: 'https://vitejs.dev/logo.svg',
    height: 40,
  },
  {
    name: 'Tailwind CSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
    height: 40,
  },
  {
    name: 'TypeScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    height: 40,
  },
  {
    name: 'Radix UI',
    logo: 'https://avatars.githubusercontent.com/u/75042435?s=200&v=4',
    height: 40,
  },
  {
    name: 'Zod',
    logo: 'https://avatars.githubusercontent.com/u/72518640?s=200&v=4',
    height: 40,
  },
  {
    name: 'React Query',
    logo: 'https://react-query.tanstack.com/favicon-32x32.png',
    height: 40,
  },
];

const TechStack: React.FC = () => {
  return (
    <section className="w-full bg-black py-10 md:py-16 overflow-hidden">
      <div className="relative m-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-4 md:mb-0 md:max-w-44 md:border-r md:pr-6 w-full md:w-auto">
            <p className="text-sm text-center md:text-end text-slate-400 md:text-white/70">Technology Stack</p>
          </div>
          <div className="relative py-4 md:py-6 w-full md:w-[calc(100%-11rem)]">
            <InfiniteSlider 
              speed={40} 
              speedOnHover={20} 
              gap={64}
              className="mx-auto">
              {technologies.map((tech) => (
                <div className="flex" key={tech.name}>
                  <img
                    className="mx-auto h-8 md:h-10 w-fit dark:invert grayscale opacity-70"
                    src={tech.logo}
                    alt={tech.name + ' Logo'}
                    height={tech.height}
                    style={{ height: 'auto', maxHeight: '40px', width: 'auto', maxWidth: '100px' }}
                  />
                </div>
              ))}
            </InfiniteSlider>
            {/* Faded edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/100 to-black/0" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/100 to-black/0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack; 