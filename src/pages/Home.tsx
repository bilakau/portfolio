import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between gap-12"
    >
      <div className="flex-1 space-y-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 text-sm font-medium mb-4"
        >
          Available for Work
        </motion.div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold font-outfit tracking-tight leading-tight"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Hi, I'm <br />
          <span className="text-gradient">Guardian Marx C.</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          An enthusiastic beginner developer passionate about creating intuitive and visually engaging user interfaces that bring ideas to life on the web.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap gap-4 pt-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }} className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2 group cursor-pointer">
            View Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
          </a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} className="px-6 py-3 rounded-xl glass-panel font-semibold hover:bg-zinc-800 transition-colors flex items-center gap-2 cursor-pointer">
            Contact Me
          </a>
        </motion.div>
      </div>
      
      <motion.div 
        className="flex-1 flex justify-center md:justify-end"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-30 animate-pulse"></div>
          <img 
            src="https://cdn.yupra.my.id/yp/6q3zt0ad.png" 
            alt="Guardian Marx Christocent Avatar" 
            loading="lazy"
            className="relative z-10 w-full h-full object-cover rounded-full border-4 border-zinc-800 shadow-2xl hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
