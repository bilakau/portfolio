import React, { Suspense, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Hamburger } from './components/Hamburger';

// Lazy load for performance
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false); // Close menu on click
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col font-inter text-zinc-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel py-3 px-6 md:px-12 flex justify-between items-center bg-zinc-950/80 backdrop-blur-xl border-b border-white/5">
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="text-2xl font-bold font-outfit tracking-tighter hover:scale-105 transition-transform z-50">
          G<span className="text-purple-500">M</span>C.
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="hover:text-purple-400 transition-colors cursor-pointer">Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }} className="hover:text-purple-400 transition-colors cursor-pointer">About</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }} className="hover:text-purple-400 transition-colors cursor-pointer">Projects</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} className="hover:text-purple-400 transition-colors cursor-pointer">Contact</a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="md:hidden z-50">
           <Hamburger isOpen={isMenuOpen} toggle={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-zinc-950/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden h-screen"
          >
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home'); }} className="text-2xl font-semibold hover:text-purple-400 transition-colors">Home</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }} className="text-2xl font-semibold hover:text-purple-400 transition-colors">About</a>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }} className="text-2xl font-semibold hover:text-purple-400 transition-colors">Projects</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }} className="text-2xl font-semibold hover:text-purple-400 transition-colors">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>

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
