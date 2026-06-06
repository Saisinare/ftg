"use client";

import { motion } from "framer-motion";
import { Gamepad2, Award, Globe, Cpu } from "lucide-react";

export default function Differentiator() {
  const perks = [
    {
      title: "Game Loops",
      desc: "Engaging mechanics requiring your active participation.",
      icon: <Gamepad2 className="w-8 h-8" />,
    },
    {
      title: "Micro-Wins",
      desc: "Built-in reward system to keep motivation at maximum.",
      icon: <Award className="w-8 h-8" />,
    },
    {
      title: "Global Rank",
      desc: "Real-time leaderboards to foster healthy competition.",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "Adaptive AI",
      desc: "Intelligent engine adapting to your learning pace instantly.",
      icon: <Cpu className="w-8 h-8" />,
    },
  ];

  // Positions for the 4 orbiting orbs on desktop
  const orbitalPositions = [
    "top-[15%] left-[20%]", // Top-Left
    "top-[15%] right-[20%]", // Top-Right
    "bottom-[15%] right-[20%]", // Bottom-Right
    "bottom-[15%] left-[20%]", // Bottom-Left
  ];

  const xOffsets = [-50, 50, 50, -50];
  const yOffsets = [-50, -50, 50, 50];

  return (
    <section className="py-32 bg-[#05050A] text-white relative border-t border-white/5 overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1 mb-4 rounded-full border border-blue-500/50 bg-blue-500/10 text-blue-400 font-mono text-sm tracking-widest uppercase shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            Passive Buffs
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            Why FTG Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Different</span>
          </h2>
        </div>

        <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[600px] md:min-h-[800px] mt-10">
          
          {/* Center 3D Holographic Core */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-64 h-64 flex items-center justify-center [perspective:1000px] z-20 mb-16 md:mb-0"
          >
             {/* Base Glow */}
             <div className="absolute w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]" />
             
             {/* 3D Rotating Rings */}
             <motion.div
               animate={{ rotateX: [60, 60], rotateZ: [0, 360] }}
               transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
               className="absolute w-80 h-80 border-4 border-blue-500/30 rounded-full border-dashed"
             />
             <motion.div
               animate={{ rotateX: [60, 60], rotateZ: [360, 0] }}
               transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
               className="absolute w-64 h-64 border-2 border-indigo-500/50 rounded-full"
             />
             <motion.div
               animate={{ rotateX: [60, 60], rotateZ: [0, -360] }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
               className="absolute w-48 h-48 border-[6px] border-blue-400/80 rounded-full border-dotted"
             />
             
             {/* Floating Isometric Core */}
             <motion.div
               animate={{ y: [-15, 15, -15] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute z-10 w-28 h-28 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-2xl rotate-45 shadow-[0_0_60px_rgba(59,130,246,0.8)] flex items-center justify-center border-2 border-blue-300/30 backdrop-blur-md"
             >
               <div className="w-20 h-20 border border-white/20 rounded-xl" />
               <span className="absolute -rotate-45 font-black text-white tracking-widest text-3xl drop-shadow-lg">FTG</span>
             </motion.div>
          </motion.div>

          {/* Desktop Circular Arrangement (Orbiting the Core) */}
          <div className="hidden md:block absolute inset-0 z-10 pointer-events-none">
            {perks.map((perk, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: xOffsets[index], y: yOffsets[index] }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className={`absolute ${orbitalPositions[index]} pointer-events-auto`}
              >
                <OrbNode perk={perk} />
              </motion.div>
            ))}
          </div>

          {/* Mobile Stacked Arrangement */}
          <div className="flex md:hidden flex-col w-full space-y-10 z-10 relative mt-10">
            {perks.map((perk, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex justify-center"
              >
                <OrbNode perk={perk} />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function OrbNode({ perk }: { perk: any }) {
  return (
    <div className="group relative flex flex-col items-center justify-center gap-4 cursor-default">
      {/* Orb Background Glow */}
      <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-500/40 transition-colors duration-500" />
      
      {/* Orb Core */}
      <div className="relative w-28 h-28 rounded-full border-2 border-indigo-800/50 bg-[#050510] flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.2)] group-hover:border-blue-400 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-all duration-300">
        <div className="absolute inset-[-4px] rounded-full border border-blue-500/30 animate-[spin_6s_linear_infinite]" />
        <div className="absolute inset-[-8px] rounded-full border border-indigo-500/20 animate-[spin_8s_linear_infinite_reverse]" />
        <div className="relative z-10 text-blue-500 group-hover:scale-125 group-hover:text-blue-300 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
          {perk.icon}
        </div>
      </div>
      
      {/* Minimal Title */}
      <h3 className="text-lg font-black text-center text-white/60 group-hover:text-white uppercase tracking-widest drop-shadow-md transition-colors w-40 mt-2">
        {perk.title}
      </h3>

      {/* Hover Information Tooltip */}
      <div className="absolute top-[130%] left-1/2 -translate-x-1/2 w-64 bg-[#050A15]/95 backdrop-blur-md border border-blue-500/40 p-4 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] opacity-0 -translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50">
         <p className="text-sm text-blue-100/80 text-center font-mono leading-relaxed">
           {perk.desc}
         </p>
      </div>
    </div>
  )
}
