"use client";

import { motion } from "framer-motion";
import { Play, Star, Trophy, LayoutDashboard, Flame, Hexagon } from "lucide-react";

export default function AppPreview() {
  return (
    <section id="games" className="py-32 bg-[#05050A] text-white relative border-t border-white/5 overflow-hidden">
      {/* Background glows */}
      <div className="absolute left-0 top-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-[600px] h-[600px] bg-indigo-900/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-1 mb-4 rounded-full border border-indigo-500/50 bg-indigo-500/10 text-indigo-400 font-mono text-sm tracking-widest uppercase shadow-[0_0_15px_rgba(99,102,241,0.3)]">
            Interface Preview
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            A Look Inside <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">FTG</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-mono">
            Experience an interface designed for focus, competition, and pure fun.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main App Mockup Container */}
          <div className="rounded-2xl md:rounded-[2rem] border border-white/10 bg-[#05050A] shadow-[0_30px_100px_-20px_rgba(59,130,246,0.2)] overflow-hidden aspect-video relative flex flex-col">
            
            {/* Mockup Header */}
            <div className="h-12 md:h-16 border-b border-white/10 flex items-center px-6 gap-4 bg-black/50 backdrop-blur-md">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="mx-auto font-mono text-xs tracking-wider text-gray-500 uppercase">app.ftg.education</div>
            </div>

            {/* Mockup Content Layout */}
            <div className="flex-1 flex flex-col md:flex-row p-6 gap-6 relative">
              {/* Sidebar */}
              <div className="hidden md:flex flex-col w-48 gap-4">
                <div className="h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center px-3 gap-3 text-blue-400 font-bold shadow-[0_0_10px_rgba(59,130,246,0.1)] cursor-default">
                  <LayoutDashboard className="w-4 h-4" /> Dashboard
                </div>
                <div className="h-10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center px-3 gap-3 text-gray-400 font-medium cursor-default">
                  <Play className="w-4 h-4" /> Modules
                </div>
                <div className="h-10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center px-3 gap-3 text-gray-400 font-medium cursor-default">
                  <Trophy className="w-4 h-4" /> Leaderboard
                </div>
                <div className="h-10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors flex items-center px-3 gap-3 text-gray-400 font-medium cursor-default">
                  <Hexagon className="w-4 h-4" /> Rewards
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col gap-6">
                <div className="flex gap-6">
                  {/* Stats Card: XP */}
                  <div className="flex-1 rounded-xl bg-gradient-to-br from-[#050510] to-black border border-indigo-900/40 p-5 flex items-center justify-between shadow-[0_0_20px_rgba(99,102,241,0.05)]">
                    <div>
                      <div className="text-gray-400 font-mono text-[10px] uppercase tracking-widest mb-1">Total Score</div>
                      <div className="text-3xl font-black text-white tracking-tight">12,450 <span className="text-sm text-blue-500 font-bold">XP</span></div>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30">
                      <Star className="w-6 h-6 fill-current" />
                    </div>
                  </div>

                  {/* Stats Card: Rank */}
                  <div className="flex-1 rounded-xl bg-gradient-to-br from-[#050A15] to-black border border-blue-900/40 p-5 flex items-center justify-between shadow-[0_0_20px_rgba(59,130,246,0.05)]">
                    <div>
                      <div className="text-gray-400 font-mono text-[10px] uppercase tracking-widest mb-1">Global Rank</div>
                      <div className="text-3xl font-black text-white tracking-tight">#42 <span className="text-sm text-emerald-500 font-bold">↑ 3</span></div>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/30">
                      <Trophy className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Main View Area */}
                <div className="flex-1 rounded-xl bg-[#03050C] border border-blue-900/30 p-6 relative overflow-hidden group">
                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                   
                   {/* Decorative Badges */}
                   <div className="absolute top-4 right-4 flex gap-2">
                      <div className="px-3 py-1 rounded bg-orange-500/20 text-orange-400 font-mono text-[10px] uppercase font-bold flex items-center gap-1 border border-orange-500/30">
                        <Flame className="w-3 h-3" /> 12 Day Streak
                      </div>
                   </div>

                   <div className="relative z-10 flex flex-col items-center justify-center h-full gap-4 opacity-90 group-hover:opacity-100 transition-opacity">
                     <motion.div 
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center cursor-pointer shadow-[0_0_40px_rgba(59,130,246,0.6)] border-2 border-blue-300/30"
                     >
                       <Play className="w-8 h-8 text-white ml-1 fill-current" />
                     </motion.div>
                     <div className="text-center mt-4">
                        <div className="text-blue-400 font-mono text-[10px] uppercase font-bold tracking-widest mb-2">Next Mission</div>
                        <div className="text-2xl font-black uppercase italic tracking-wide text-white drop-shadow-md">Logic Gates Masterclass</div>
                     </div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
