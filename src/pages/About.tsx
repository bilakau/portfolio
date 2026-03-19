import React from 'react';
import { motion } from 'framer-motion';
import { Code2, GraduationCap, Laptop, Smile, BookOpen } from 'lucide-react';

const highlights = [
  { icon: <Laptop size={22} className="text-indigo-400" />, label: "Coding since 2020", bg: "bg-indigo-500/10 border-indigo-500/20" },
  { icon: <BookOpen size={22} className="text-purple-400" />, label: "SMK TJKT Student", bg: "bg-purple-500/10 border-purple-500/20" },
  { icon: <Smile size={22} className="text-pink-400" />, label: "Coding as Hobby", bg: "bg-pink-500/10 border-pink-500/20" },
];

const skillCategories = [
  {
    category: "Frontend",
    color: "indigo",
    skills: [
      { name: "HTML", level: 90 },
      { name: "JavaScript", level: 82 },
      { name: "React.js", level: 72 },
      { name: "Tailwind CSS", level: 78 },
      { name: "TypeScript", level: 60 },
    ]
  },
  {
    category: "Backend",
    color: "purple",
    skills: [
      { name: "Node.js", level: 65 },
    ]
  },
  {
    category: "Tools",
    color: "pink",
    skills: [
      { name: "Git / GitHub", level: 70 },
      { name: "Vite", level: 65 },
    ]
  }
];

const education = [
  {
    school: "SMK (TJKT)",
    detail: "Telecommunications & Computer Network Engineering",
    badge: "Present",
    color: "purple",
    dot: "bg-purple-500 border-purple-400",
  },
  {
    school: "SMP Negeri 9 Pematang Siantar",
    detail: "Junior High School",
    badge: null,
    color: "indigo",
    dot: "bg-indigo-500 border-indigo-400",
  },
  {
    school: "SD Negeri Gajing Jaya",
    detail: "Elementary School",
    badge: null,
    color: "zinc",
    dot: "bg-zinc-500 border-zinc-400",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const About = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-24">

      {/* ──── BIO SECTION ──── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="space-y-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold font-outfit">About <span className="text-gradient">Me</span></h2>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Bio */}
          <div className="md:col-span-2 space-y-4 text-zinc-300 text-base leading-relaxed">
            <p>
              Hi! I'm <span className="text-white font-semibold">Guardian Marx Christocent</span>, an enthusiastic beginner developer from{' '}
              <span className="text-purple-400 font-medium">Pematang Siantar, Sumatera Utara</span>.
            </p>
            <p>
              My journey revolves around creating intuitive and visually engaging user interfaces that bring ideas to life on the web. I started coding back in <span className="text-white font-semibold">2020</span> purely out of curiosity and it quickly turned into a genuine passion.
            </p>
            <p>
              Currently a Vocational High School student majoring in <span className="text-purple-400 font-medium">Computer Science (TJKT)</span>. I believe in learning by building, which is why every project I make pushes my skills a little further.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="flex flex-col gap-4 justify-center">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`flex items-center gap-3 px-5 py-4 rounded-2xl border ${h.bg} glass-panel`}
              >
                {h.icon}
                <span className="text-sm font-semibold text-zinc-200">{h.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ──── SKILLS SECTION ──── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="space-y-8"
      >
        <div className="flex items-center gap-3">
          <Code2 className="text-pink-500" size={28} />
          <h2 className="text-3xl font-bold font-outfit">Skills / <span className="text-gradient">Tech Stack</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              custom={ci}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-panel rounded-3xl p-6 space-y-5"
            >
              <span className={`text-xs font-bold uppercase tracking-widest text-${cat.color}-400 bg-${cat.color}-500/10 px-3 py-1 rounded-full`}>
                {cat.category}
              </span>
              <div className="space-y-4 pt-1">
                {cat.skills.map((skill, si) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-zinc-200">{skill.name}</span>
                      <span className="text-zinc-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: si * 0.1 + 0.2, duration: 0.8, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ──── EDUCATION TIMELINE ──── */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="space-y-8"
      >
        <div className="flex items-center gap-3">
          <GraduationCap className="text-purple-500" size={28} />
          <h2 className="text-3xl font-bold font-outfit">Education <span className="text-gradient">Timeline</span></h2>
        </div>

        <div className="relative pl-8 border-l-2 border-zinc-800 space-y-10">
          {education.map((item, i) => (
            <motion.div
              key={item.school}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              {/* Dot */}
              <span className={`absolute -left-[42px] w-5 h-5 rounded-full border-2 ${item.dot} bg-zinc-950`}></span>

              <div className="glass-panel rounded-2xl p-6 flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-lg text-white">{item.school}</h3>
                  <p className="text-zinc-400 text-sm mt-1">{item.detail}</p>
                </div>
                {item.badge && (
                  <span className="shrink-0 text-xs font-bold bg-purple-500/20 text-purple-400 border border-purple-500/30 px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
};

export default About;
