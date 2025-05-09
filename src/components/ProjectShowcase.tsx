import React from 'react';

const ProjectShowcase: React.FC = () => {
  const projects = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600'
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600'
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600'
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600'
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600'
    }
  ];

  return (
    <section className="relative w-full bg-black py-8 md:py-16 overflow-hidden">
      {/* First row */}
      <div className="showcase-wrapper md:mt-0">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`showcase-item showcase-item${index + 1}`}
            style={{
              backgroundImage: `url(${project.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
      </div>
      
      {/* Second row */}
      <div className="showcase-wrapper mt-1 md:mt-4">
        {projects.map((project, index) => (
          <div 
            key={`second-${project.id}`} 
            className={`showcase-item showcase-item${index + 1}`}
            style={{
              backgroundImage: `url(${project.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;
