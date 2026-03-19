import React, { Suspense } from 'react';
import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';


const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col font-inter text-zinc-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel py-4 px-6 md:px-12 flex justify-between items-center bg-zinc-950/50">
        <Link to="/" className="text-2xl font-bold font-outfit tracking-tighter hover:scale-105 transition-transform">
          G<span className="text-purple-500">M</span>C.
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-purple-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-purple-400 transition-colors">About</Link>
          <Link to="/projects" className="hover:text-purple-400 transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-purple-400 transition-colors">Contact</Link>
        </div>
      </nav>

      <main className="flex-grow pt-24 pb-12 px-6 md:px-12 lg:px-24 mx-auto w-full max-w-7xl">
        <AnimatePresence mode="wait">
          <Suspense fallback={
            <div className="flex items-center justify-center h-[60vh]">
              <div className="w-10 h-10 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
            </div>
          }>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>

      <footer className="py-6 text-center text-sm text-zinc-500 border-t border-white/5">
        <p>© {new Date().getFullYear()} Guardian Marx Christocent. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}

export default App;
