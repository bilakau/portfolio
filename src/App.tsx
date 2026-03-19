import React, { Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';

// Lazy load for performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col font-inter text-zinc-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel py-4 px-6 md:px-12 flex justify-between items-center bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="text-2xl font-bold font-outfit tracking-tighter hover:scale-105 transition-transform">
          G<span className="text-purple-500">M</span>C.
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="hover:text-purple-400 transition-colors">Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }} className="hover:text-purple-400 transition-colors">About</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }} className="hover:text-purple-400 transition-colors">Projects</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} className="hover:text-purple-400 transition-colors">Contact</a>
        </div>
      </nav>

      <main className="flex-grow pt-24 pb-12 px-6 md:px-12 lg:px-24 mx-auto w-full max-w-7xl space-y-32">
        <Suspense fallback={
          <div className="flex items-center justify-center h-[60vh]">
            <div className="w-10 h-10 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
          </div>
        }>
          <section id="home" className="scroll-mt-32">
            <Home />
          </section>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          
          <section id="about" className="scroll-mt-32">
            <About />
          </section>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          
          <section id="projects" className="scroll-mt-32">
            <Projects />
          </section>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          
          <section id="contact" className="scroll-mt-32">
            <Contact />
          </section>
        </Suspense>
      </main>
      
      <footer className="py-6 text-center text-sm text-zinc-500 border-t border-white/5 mt-20">
        <p>© {new Date().getFullYear()} Guardian Marx Christocent. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
