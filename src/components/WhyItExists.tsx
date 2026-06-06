"use client";

import { motion } from "framer-motion";
import { Frown, Gamepad2, Zap } from "lucide-react";

export default function WhyItExists() {
  return (
    <section id="why-ftg" className="py-24 bg-[#05050A] text-white relative border-t border-white/5 overflow-hidden">
      {/* Background Grid / Scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1 mb-4 rounded-full border border-pink-500/50 bg-pink-500/10 text-pink-400 font-mono text-sm tracking-widest uppercase shadow-[0_0_15px_rgba(244,114,182,0.3)]">
            Quest Log • Main Storyline
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            Why FTG Exists
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 md:gap-12 max-w-5xl mx-auto">
          
          {/* PLAYER 1: The Problem (Rose / Danger) */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="flex-1 rounded-[2rem] bg-[#0A0505] border-2 border-rose-900/50 p-6 relative overflow-hidden group shadow-[0_0_30px_rgba(244,63,94,0.1)]"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-900 to-rose-700" />
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Frown className="w-48 h-48 text-rose-500" />
            </div>
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-lg bg-rose-950/50 flex items-center justify-center border border-rose-800">
                <Frown className="text-rose-500 w-6 h-6" />
              </div>
              <div>
                <div className="text-rose-500 font-mono text-xs uppercase font-bold tracking-wider">Status: Debuffed</div>
                <h3 className="text-2xl font-black text-rose-100 uppercase italic tracking-wide drop-shadow-md">The Grind</h3>
              </div>
            </div>

            {/* Health Bar */}
            <div className="relative z-10 mt-2">
              <div className="flex justify-between text-[10px] font-mono text-rose-400 mb-1 uppercase">
                <span>Engagement HP</span>
                <span>LOW</span>
              </div>
              <div className="h-3 w-full bg-rose-950/50 rounded border border-rose-900 overflow-hidden relative mb-6">
                 <motion.div 
                   initial={{ width: "100%" }}
                   whileInView={{ width: "15%" }}
                   transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                   className="h-full bg-gradient-to-r from-rose-700 to-rose-500 relative"
                 >
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_25%,rgba(255,255,255,0.2)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.2)_75%,rgba(255,255,255,0.2)_100%)] bg-[length:16px_16px] animate-[stripes_1s_linear_infinite]" />
                 </motion.div>
              </div>
            </div>

            <div className="text-center relative z-10 py-4 bg-rose-950/30 border border-rose-900/30 rounded-lg">
              <p className="font-mono text-rose-300 font-bold tracking-widest uppercase text-sm">
                Boring • Passive • Disconnected
              </p>
            </div>
          </motion.div>

          {/* VS FIGHT Badge */}
          <div className="flex items-center justify-center -my-8 lg:my-0 z-20">
            <motion.div 
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", bounce: 0.6, duration: 0.8 }}
              className="w-24 h-24 rounded-full bg-[#0A050A] border-4 border-[#0F050F] shadow-[0_0_50px_rgba(244,114,182,0.5)] flex items-center justify-center overflow-hidden relative"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,114,182,0.4),transparent)]" />
              <div className="text-4xl font-black italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-pink-400 to-rose-500 drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
                VS
              </div>
            </motion.div>
          </div>

          {/* PLAYER 2: The Solution (Pink / Game / Power) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="flex-1 rounded-[2rem] bg-[#0A050A] border-2 border-pink-900/50 p-6 relative overflow-hidden group shadow-[0_0_40px_rgba(244,114,182,0.15)]"
          >
            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-pink-500 to-rose-400" />
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Gamepad2 className="w-48 h-48 text-pink-500" />
            </div>

            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="w-12 h-12 rounded-lg bg-pink-950/50 flex items-center justify-center border border-pink-800 shadow-[0_0_15px_rgba(244,114,182,0.4)]">
                <Zap className="text-pink-400 w-6 h-6" />
              </div>
              <div>
                <div className="text-pink-500 font-mono text-xs uppercase font-bold tracking-wider">Status: Overcharged</div>
                <h3 className="text-2xl font-black text-pink-100 uppercase italic tracking-wide drop-shadow-md">FTG Ecosystem</h3>
              </div>
            </div>

            {/* Health Bar */}
            <div className="relative z-10 mt-2">
              <div className="flex justify-between text-[10px] font-mono text-pink-400 mb-1 uppercase">
                <span>Engagement HP</span>
                <span>MAX</span>
              </div>
              <div className="h-3 w-full bg-pink-950/50 rounded border border-pink-900 overflow-hidden relative mb-6">
                 <motion.div 
                   initial={{ width: "0%" }}
                   whileInView={{ width: "100%" }}
                   transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                   className="h-full bg-gradient-to-r from-pink-600 to-pink-400 relative shadow-[0_0_10px_rgba(244,114,182,0.8)]"
                 >
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_25%,rgba(255,255,255,0.3)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.3)_75%,rgba(255,255,255,0.3)_100%)] bg-[length:16px_16px] animate-[stripes_1s_linear_infinite]" />
                 </motion.div>
              </div>
            </div>

            <div className="text-center relative z-10 py-4 bg-pink-950/30 border border-pink-900/30 rounded-lg group-hover:bg-pink-900/20 transition-colors">
              <p className="font-mono text-pink-300 font-bold tracking-widest uppercase text-sm">
                Gamified • Rewarding • Addictive
              </p>
            </div>

          </motion.div>
        </div>
      </div>
      
      {/* Global styles for the animated stripes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes stripes {
          0% { background-position: 0 0; }
          100% { background-position: 32px 0; }
        }
      `}} />
    </section>
  );
}


