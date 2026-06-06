"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'why-ftg', 'features', 'games', 'ecosystem', 'faq'];
      let current = 'hero';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is near the top of the viewport
          if (rect.top <= 200) {
            current = section;
          }
        }
      }
      
      if (window.scrollY < 100) current = 'hero';
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Determine theme based on active section
  let themeClass = "border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.15)]"; 
  
  if (activeSection === 'about') {
    themeClass = "border-fuchsia-500/30 text-fuchsia-400 shadow-[0_0_20px_rgba(217,70,239,0.15)]";
  } else if (activeSection === 'why-ftg' || activeSection === 'ecosystem') {
    themeClass = "border-pink-500/30 text-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.15)]";
  } else if (activeSection === 'features' || activeSection === 'games' || activeSection === 'hero') {
    themeClass = "border-indigo-500/30 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.15)]";
  } else if (activeSection === 'faq') {
    themeClass = "border-gray-500/30 text-gray-400 shadow-[0_0_20px_rgba(156,163,175,0.15)]";
  }

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100]">
      <motion.div 
        className={`flex items-center gap-6 px-8 py-3 rounded-full bg-[#05050A]/80 border backdrop-blur-md transition-colors duration-500 ${themeClass}`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <button onClick={() => scrollTo('hero')} className={`font-medium transition-colors hover:text-white ${activeSection === 'hero' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : ''}`}>Home</button>
        <button onClick={() => scrollTo('about')} className={`font-medium transition-colors hover:text-white ${activeSection === 'about' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : ''}`}>About</button>
        <button onClick={() => scrollTo('why-ftg')} className={`font-medium transition-colors hover:text-white ${activeSection === 'why-ftg' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : ''}`}>Why FTG</button>
        <button onClick={() => scrollTo('features')} className={`font-medium transition-colors hover:text-white ${activeSection === 'features' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : ''}`}>Features</button>
        <button onClick={() => scrollTo('games')} className={`font-medium transition-colors hover:text-white ${activeSection === 'games' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : ''}`}>Games</button>
        <button onClick={() => scrollTo('ecosystem')} className={`font-medium transition-colors hover:text-white ${activeSection === 'ecosystem' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : ''}`}>Ecosystem</button>
        <button onClick={() => scrollTo('faq')} className={`font-medium transition-colors hover:text-white ${activeSection === 'faq' ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : ''}`}>FAQ</button>
      </motion.div>
    </div>
  );
}
