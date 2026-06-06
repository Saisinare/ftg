"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const width = 1000;
  const height = 600;
  const cx = width / 2;
  const cy = height / 2;

  type Node = { id: number, x: number, y: number, label: string, desc: string };
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);

  // The satellite nodes surrounding the central FTG node
  const nodes: Node[] = [
    { id: 1, x: 500, y: 70, label: "AI Learning", desc: "Personalized AI-driven paths that adapt to your unique learning pace." },
    { id: 2, x: 780, y: 150, label: "IQ Quizzes", desc: "Test your knowledge and cognitive skills with dynamic, adaptive quizzes." },
    { id: 3, x: 900, y: 300, label: "Leaderboards", desc: "Compete globally and climb the ranks by mastering new skills." },
    { id: 4, x: 780, y: 450, label: "Logic Games", desc: "Sharpen your mind with interactive puzzles and logic-based challenges." },
    { id: 5, x: 500, y: 530, label: "Rewards", desc: "Earn badges, tokens, and exclusive perks as you achieve milestones." },
    { id: 6, x: 220, y: 450, label: "Daily Challenges", desc: "Stay consistent with bite-sized daily tasks that keep you engaged." },
    { id: 7, x: 100, y: 300, label: "Community", desc: "Connect, collaborate, and learn together with peers worldwide." },
    { id: 8, x: 220, y: 150, label: "Progress Tracking", desc: "Visualize your growth with detailed analytics and performance metrics." },
  ];

  // Generates a smooth bezier curve from the center to each node
  const getPath = (x: number, y: number) => {
    const cp1x = cx + (x - cx) * 0.4;
    const cp1y = cy;
    const cp2x = x - (x - cx) * 0.4;
    const cp2y = y;
    return `M ${cx} ${cy} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`;
  };

  return (
    <section id="about" 
      className="py-24 bg-[#05050A] text-white relative border-t border-white/5 overflow-hidden min-h-screen flex flex-col justify-center"
      onClick={() => setSelectedNode(null)}
    >
      <div className="container mx-auto px-6 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }} 
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            What is <span className="text-[#d946ef] drop-shadow-[0_0_15px_rgba(217,70,239,0.5)]">FTG ??</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            FTG (Fun To Grow) is the central hub where education meets entertainment. 
            A unified ecosystem powering your entire learning journey.
          </p>
        </motion.div>

        {/* Glowing Radial Graph */}
        <div className="relative w-full max-w-5xl mx-auto aspect-[4/3] md:aspect-[16/9] mt-6">
          <svg className="w-full h-full drop-shadow-2xl" viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid meet">
             <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                   <feGaussianBlur stdDeviation="6" result="blur" />
                   <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="strong-glow" x="-50%" y="-50%" width="200%" height="200%">
                   <feGaussianBlur stdDeviation="12" result="blur" />
                   <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter id="core-glow" x="-100%" y="-100%" width="300%" height="300%">
                   <feGaussianBlur stdDeviation="60" result="blur" />
                   <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <linearGradient id="box-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7e22ce" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
                </linearGradient>
             </defs>

             {/* Center Massive Glow */}
             <circle cx={cx} cy={cy} r="140" fill="#d946ef" filter="url(#core-glow)" opacity="0.25" />
             <circle cx={cx} cy={cy} r="70" fill="#d946ef" filter="url(#core-glow)" opacity="0.4" />

             {/* Static Base Lines */}
             {nodes.map(n => (
                <motion.path 
                  key={`line-bg-${n.id}`}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  d={getPath(n.x, n.y)} 
                  stroke="#4c1d95" 
                  strokeWidth="2" 
                  fill="none" 
                  opacity="0.4"
                />
             ))}

             {/* Pulsing Energy Streaks */}
             {nodes.map((n, i) => (
                <motion.path 
                  key={`streak-${n.id}`}
                  initial={{ strokeDashoffset: 400, opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  animate={{ strokeDashoffset: -400 }}
                  transition={{ 
                    strokeDashoffset: { duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.3 },
                    opacity: { duration: 1 }
                  }}
                  d={getPath(n.x, n.y)} 
                  stroke="#d946ef" 
                  strokeWidth="3" 
                  fill="none" 
                  filter="url(#glow)" 
                  strokeDasharray="30 400"
                  strokeLinecap="round"
                />
             ))}

             {/* Satellite Nodes */}
             {nodes.map((n, i) => (
                <g key={`node-${n.id}`} transform={`translate(${n.x}, ${n.y})`}>
                  <motion.g 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 + i * 0.1, type: "spring" }}
                  >
                     {/* Dark Box Container */}
                     <rect 
                       x="-28" y="-28" width="56" height="56" rx="14" 
                       fill="#0A0A10" 
                       stroke={selectedNode?.id === n.id ? "#d946ef" : "#ffffff"} 
                       strokeWidth={selectedNode?.id === n.id ? "2" : "1"} 
                       strokeOpacity={selectedNode?.id === n.id ? "1" : "0.1"} 
                       className="hover:stroke-fuchsia-500 transition-all duration-300 cursor-pointer" 
                       onClick={(e) => {
                         e.stopPropagation();
                         setSelectedNode(prev => prev?.id === n.id ? null : n);
                       }}
                     />
                     
                     {/* Glowing Dot */}
                     <circle cx="0" cy="0" r="5" fill="#d946ef" filter="url(#glow)" />
                     <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
                     
                     {/* Feature Label */}
                     <text x="0" y="52" textAnchor="middle" fill="#9ca3af" fontSize="14" fontWeight="500" letterSpacing="0.5" className="select-none">
                       {n.label}
                     </text>
                  </motion.g>
                </g>
             ))}

             {/* Center Hub Node */}
             <g transform={`translate(${cx}, ${cy})`}>
               <motion.g 
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
               >
                  {/* Large Box */}
                  <rect x="-64" y="-64" width="128" height="128" rx="32" fill="#05050A" />
                  <rect x="-64" y="-64" width="128" height="128" rx="32" fill="url(#box-grad)" />
                  <rect x="-64" y="-64" width="128" height="128" rx="32" fill="none" stroke="#d946ef" strokeWidth="2" filter="url(#strong-glow)" opacity="0.9" />
                  <rect x="-64" y="-64" width="128" height="128" rx="32" fill="none" stroke="#ffffff" strokeWidth="1" opacity="0.4" />
                  
                  {/* FTG Text Logo */}
                  <text x="0" y="12" textAnchor="middle" fill="#ffffff" fontSize="38" fontWeight="900" letterSpacing="3" className="select-none drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                    FTG
                  </text>
               </motion.g>
             </g>
          </svg>

          {/* Info Box Overlay */}
          <AnimatePresence>
            {selectedNode && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-[#0A0A10]/80 backdrop-blur-xl border border-fuchsia-500/30 p-6 rounded-2xl shadow-[0_0_40px_rgba(217,70,239,0.15)] z-20 pointer-events-none"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent rounded-2xl pointer-events-none" />
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight drop-shadow-md">
                  {selectedNode.label}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {selectedNode.desc}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
