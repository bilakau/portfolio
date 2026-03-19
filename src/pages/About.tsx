import { motion } from 'framer-motion';
import { Code2, GraduationCap } from 'lucide-react';

const About = () => {
  const skills = ["JavaScript", "HTML", "Node.js", "React.js", "Tailwind CSS", "TypeScript"];
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto space-y-16"
    >
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-4">About <span className="text-gradient">Me</span></h1>
        <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
          Hi! I'm an enthusiastic beginner developer from Pematang Siantar, Sumatera Utara. My journey revolves around creating intuitive and visually engaging user interfaces that bring ideas to life on the web. Coding has been my hobby since 2020, and I continuously strive to learn new technologies.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-12">
        <section className="glass-panel p-8 rounded-3xl space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="text-purple-500" size={28} />
            <h2 className="text-2xl font-semibold">Education</h2>
          </div>
          <div className="relative pl-6 border-l-2 border-zinc-800 space-y-8">
            <div className="relative">
              <div className="absolute -left-[35px] bg-zinc-950 p-1 rounded-full border border-purple-500">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-lg">SMK (TJKT)</h3>
              <p className="text-zinc-400 text-sm">Telecommunications and Computer Network Engineering</p>
              <p className="text-zinc-500 text-sm mt-1">Currently studying</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[35px] bg-zinc-950 p-1 rounded-full border border-zinc-700">
                <div className="w-3 h-3 bg-zinc-700 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-lg">SMP Negeri 9 Pematang Siantar</h3>
            </div>
            <div className="relative">
              <div className="absolute -left-[35px] bg-zinc-950 p-1 rounded-full border border-zinc-700">
                <div className="w-3 h-3 bg-zinc-700 rounded-full"></div>
              </div>
              <h3 className="font-semibold text-lg">SD Negeri Gajing Jaya</h3>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="glass-panel p-8 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-pink-500" size={28} />
              <h2 className="text-2xl font-semibold">Skills</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                 <motion.div 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700 text-zinc-300 font-medium hover:border-pink-500/50 hover:text-white transition-colors cursor-default"
                 >
                   {skill}
                 </motion.div>
              ))}
            </div>
          </div>
          
          <div className="glass-panel p-8 rounded-3xl">
             <h3 className="text-xl font-semibold mb-2">Location</h3>
             <p className="text-zinc-400">Sumatera Utara, Pematang Siantar</p>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default About;
