"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  Search, 
  Target, 
  BookOpen, 
  Brain, 
  Trophy, 
  ChevronRight, 
  Command,
  Mic,
  GraduationCap,
  Play,
  Gamepad2,
  Swords
} from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-[#05050A] text-white overflow-hidden font-sans flex flex-col items-center">
      {/* Background dark gradients for base */}
      <div className="absolute inset-0 bg-black z-0 pointer-events-none" />
      
      {/* Live Black Hole Video */}
      <div className="absolute bottom-[100px] md:bottom-[150px] left-1/2 -translate-x-1/2 w-full max-w-[1400px] flex justify-center pointer-events-none z-0 mix-blend-screen opacity-80">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-auto object-contain [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
        >
          <source src="/animation.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Dark vignette to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none z-0" />

      {/* Floating Edutainment Icons */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden hidden md:block">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[15%] text-indigo-500/20"
        >
          <GraduationCap className="w-16 h-16" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 25, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[12%] right-[18%] text-blue-500/20"
        >
          <Gamepad2 className="w-20 h-20" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[35%] left-[8%] text-indigo-400/20"
        >
          <Brain className="w-12 h-12" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute top-[30%] right-[8%] text-blue-400/20"
        >
          <Trophy className="w-14 h-14" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -25, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[8%] left-[40%] text-purple-500/10"
        >
          <Swords className="w-12 h-12" />
        </motion.div>
      </div>

      {/* Hero Text */}
      <div className="relative z-10 pt-20 md:pt-24 flex flex-col items-center text-center px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 border border-white/10 text-xs text-gray-200 mb-8 backdrop-blur-md shadow-[0_0_10px_rgba(0,0,0,0.5)]"
        >
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="font-medium">New: AI-powered personalized learning</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
        >
          Learn. Play. Compete. Grow.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl font-medium drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)] bg-black/10 p-2 rounded-xl"
        >
          FTG bridges the gap between entertainment and education with AI-powered learning and IQ-based gaming.
        </motion.p>
      </div>

      {/* Portal & Mockup space */}
      <div className="relative flex-1 w-full flex items-end justify-center mt-20 md:mt-32">
        {/* Mockup Window */}
        <div className="relative z-10 w-[95%] max-w-[1000px] h-[300px] md:h-[350px] bg-[#0A0A10]/90 backdrop-blur-2xl border border-white/10 border-b-0 rounded-t-xl md:rounded-t-2xl shadow-[0_-20px_50px_rgba(0,0,0,0.8)] flex overflow-hidden">
          {/* Top inner gradient for the mockup to blend with the glow */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />

          {/* Mockup Sidebar */}
          <div className="w-64 border-r border-white/5 p-4 flex-col gap-6 hidden md:flex">
             {/* Search */}
             <div className="flex items-center gap-2 px-3 py-2 bg-black/40 rounded-lg text-gray-400 text-sm border border-white/5 shadow-inner">
                <Search className="w-4 h-4" />
                <span className="flex-1">Find a quest...</span>
                <div className="flex items-center gap-0.5 bg-white/10 px-1.5 py-0.5 rounded text-[10px]">
                  <Command className="w-3 h-3" />
                  <span>K</span>
                </div>
                <Mic className="w-4 h-4 ml-1 hover:text-white cursor-pointer" />
             </div>
             {/* Nav */}
             <div className="flex flex-col gap-1 mt-4">
                <div className="flex items-center gap-3 px-3 py-2 text-blue-400 bg-blue-500/10 rounded-lg text-sm font-medium border border-blue-500/20">
                   <Target className="w-4 h-4" /> Daily Challenges
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm">
                   <BookOpen className="w-4 h-4" /> My Courses
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm">
                   <Brain className="w-4 h-4" /> IQ Arena
                </div>
                <div className="flex items-center gap-3 px-3 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm">
                   <Trophy className="w-4 h-4" /> Leaderboard
                </div>
             </div>
          </div>

          {/* Mockup Main Dashboard */}
          <div className="flex-1 p-6 md:p-8 flex flex-col gap-6 relative z-10 bg-black/20">
              <div className="flex items-center justify-between text-white">
                 <div>
                   <h2 className="text-xl md:text-2xl font-bold tracking-tight">Mathematics Mastery</h2>
                   <p className="text-gray-400 text-sm mt-1">Level 12 • Algebra & Geometry</p>
                 </div>
                 <div className="flex items-center gap-2 bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm font-bold border border-indigo-500/30">
                    <Trophy className="w-4 h-4" />
                    <span>2,450 XP</span>
                 </div>
              </div>

              {/* Progress Bar */}
              <div className="flex flex-col gap-2">
                 <div className="flex justify-between text-xs text-gray-400 font-medium">
                    <span>Progress to Level 13</span>
                    <span className="text-blue-400">75%</span>
                 </div>
                 <div className="w-full h-3 bg-black/60 rounded-full overflow-hidden border border-white/5 shadow-inner">
                    <div className="w-[75%] h-full bg-gradient-to-r from-blue-600 to-indigo-400 rounded-full relative">
                       <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </div>
                 </div>
              </div>

              {/* Next Challenge Card */}
              <div className="mt-2 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl p-5 flex flex-col gap-4 backdrop-blur-sm">
                 <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                       <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 shadow-[0_0_10px_rgba(79,70,229,0.2)]">
                          <Brain className="w-5 h-5 text-indigo-400" />
                       </div>
                       <div>
                          <h3 className="text-white font-medium">Quadratic Equations</h3>
                          <p className="text-gray-400 text-xs mt-0.5">Boss Battle • +500 XP</p>
                       </div>
                    </div>
                    <span className="text-xs font-bold px-2 py-1 bg-purple-500/20 text-purple-400 rounded border border-purple-500/20">Hard</span>
                 </div>
                 
                 <button className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(79,70,229,0.4)]">
                    <Play className="w-4 h-4" fill="currentColor" /> Enter Arena
                 </button>
              </div>
          </div>

          {/* Mockup Right Leaderboard */}
          <div className="w-72 border-l border-white/5 p-6 hidden lg:flex flex-col gap-5 bg-black/40">
              <div className="flex items-center justify-between text-white mb-2">
                 <span className="font-semibold text-sm">Global Rankings</span>
                 <Trophy className="w-4 h-4 text-yellow-500 drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
              </div>
              
              <div className="flex flex-col gap-3">
                 {/* Top 1 */}
                 <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5 shadow-sm">
                    <div className="w-6 h-6 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center text-xs font-bold border border-yellow-500/30">1</div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-[1px]">
                       <div className="w-full h-full bg-black rounded-full border-2 border-transparent" />
                    </div>
                    <div className="flex-1">
                       <div className="text-sm text-white font-medium">Alex C.</div>
                       <div className="text-xs text-blue-400 font-mono">14.2k XP</div>
                    </div>
                 </div>
                 
                 {/* Top 2 */}
                 <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-gray-300/20 text-gray-300 flex items-center justify-center text-xs font-bold border border-gray-300/30">2</div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 p-[1px]">
                       <div className="w-full h-full bg-black rounded-full" />
                    </div>
                    <div className="flex-1">
                       <div className="text-sm text-gray-300 font-medium">Sarah M.</div>
                       <div className="text-xs text-gray-500 font-mono">13.8k XP</div>
                    </div>
                 </div>

                 {/* You (Top 3) */}
                 <div className="flex items-center gap-3 p-2 rounded-lg bg-indigo-500/20 border border-indigo-500/30 relative overflow-hidden shadow-[0_0_10px_rgba(79,70,229,0.1)]">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-400" />
                    <div className="w-6 h-6 rounded-full bg-orange-400/20 text-orange-400 flex items-center justify-center text-xs font-bold border border-orange-400/30 ml-1">3</div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-400" />
                    <div className="flex-1">
                       <div className="text-sm text-white font-bold">You</div>
                       <div className="text-xs text-indigo-300 font-mono font-bold">12.4k XP</div>
                    </div>
                 </div>
                 
                 {/* Top 4 */}
                 <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-white/5 text-gray-500 flex items-center justify-center text-xs font-bold">4</div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 p-[1px]">
                       <div className="w-full h-full bg-black rounded-full" />
                    </div>
                    <div className="flex-1">
                       <div className="text-sm text-gray-400 font-medium">David K.</div>
                       <div className="text-xs text-gray-600 font-mono">11.9k XP</div>
                    </div>
                 </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
