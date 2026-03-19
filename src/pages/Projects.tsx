import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Web AI",
    description: "Built using Vanilla JavaScript framework with SPA (Single Page Application) model. This was my first project.",
    image: "https://raw.githubusercontent.com/tralalawabi-art/datastore/storage/uploads/1771508419886.jpg",
    link: "https://ai.fmcstore.web.id",
    tags: ["Vanilla JS", "SPA", "UI"]
  },
  {
    id: 2,
    title: "Web Jualan",
    description: "Built using Vanilla JavaScript framework. This is my second project focusing on e-commerce layout.",
    image: "https://raw.githubusercontent.com/tralalawabi-art/datastore/storage/uploads/1771508478155.jpg",
    link: "https://cloud.fmcstore.web.id",
    tags: ["Vanilla JS", "E-commerce"]
  },
  {
    id: 3,
    title: "Web Comic",
    description: "Built using React framework with TypeScript and highly customized Tailwind CSS for a premium reading experience.",
    image: "https://raw.githubusercontent.com/tralalawabi-art/datastore/storage/uploads/1771508420476.jpg",
    link: "https://fmccomic.my.id",
    tags: ["React", "TypeScript", "Tailwind CSS"]
  }
];

const Projects = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-6xl mx-auto space-y-16"
    >
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Featured <span className="text-gradient">Projects</span></h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          A showcase of my journey in web development, from Vanilla JS basics to modern React applications.
        </p>
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.article 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="glass-panel rounded-3xl overflow-hidden group flex flex-col h-full"
          >
            <div className="relative overflow-hidden aspect-video border-b border-white/10 bg-zinc-900">
              <img 
                src={project.image} 
                alt={project.title} 
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform shadow-xl">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs font-semibold px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
