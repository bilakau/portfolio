import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Instagram, Send } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto space-y-16"
    >
      <section className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Let's <span className="text-gradient">Connect</span></h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Have an idea or a project in mind? Feel free to reach out. We can build something awesome together!
        </p>
      </section>

      <div className="grid md:grid-cols-5 gap-12">
        <section className="md:col-span-3 glass-panel p-8 rounded-3xl">
          <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message feature ready! Backend integration needed.'); }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Your Name</label>
                <input type="text" required className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-white placeholder-zinc-600" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-400">Email Address</label>
                <input type="email" required className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-white placeholder-zinc-600" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-zinc-400">Your Message</label>
              <textarea required rows={5} className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-white placeholder-zinc-600 resize-none" placeholder="How can I help you?"></textarea>
            </div>
            <button type="submit" className="w-full bg-zinc-100 text-black font-semibold py-4 rounded-xl hover:bg-zinc-300 transition-colors flex justify-center items-center gap-2 group">
              Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"/>
            </button>
          </form>
        </section>

        <section className="md:col-span-2 space-y-6">
          <a href="https://wa.me/6288708644467" target="_blank" rel="noopener noreferrer" className="glass-panel p-6 rounded-3xl flex items-center gap-4 hover:border-purple-500/50 transition-colors group">
            <div className="p-4 bg-green-500/10 text-green-500 rounded-2xl group-hover:scale-110 transition-transform">
              <MessageCircle size={24} />
            </div>
            <div>
              <p className="text-sm text-zinc-400">WhatsApp</p>
              <p className="font-semibold">+62 887-0864-4467</p>
            </div>
          </a>
          
          <a href="mailto:guardianmarx@gmail.com" className="glass-panel p-6 rounded-3xl flex items-center gap-4 hover:border-purple-500/50 transition-colors group">
            <div className="p-4 bg-red-500/10 text-red-500 rounded-2xl group-hover:scale-110 transition-transform">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm text-zinc-400">Email</p>
              <p className="font-semibold break-all">guardianmarx@gmail.com</p>
            </div>
          </a>
          
          <a href="https://instagram.com/fmcstoree" target="_blank" rel="noopener noreferrer" className="glass-panel p-6 rounded-3xl flex items-center gap-4 hover:border-purple-500/50 transition-colors group">
            <div className="p-4 bg-pink-500/10 text-pink-500 rounded-2xl group-hover:scale-110 transition-transform">
              <Instagram size={24} />
            </div>
            <div>
              <p className="text-sm text-zinc-400">Instagram</p>
              <p className="font-semibold">@fmcstoree</p>
            </div>
          </a>
        </section>
      </div>
    </motion.div>
  );
};

export default Contact;
