"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building2, Zap, Shield, Sparkles, TrendingUp, Users, Target, Gamepad2 } from "lucide-react";

export default function TargetAudience() {
  return (
    <section id="ecosystem" className="py-32 bg-[#05050A] text-white relative overflow-hidden font-sans border-t border-white/5">
      {/* Background Neon Pink Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(244,114,182,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(244,114,182,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1 mb-4 rounded-full border border-pink-500/50 bg-pink-500/10 text-pink-400 font-mono text-sm tracking-widest uppercase shadow-[0_0_15px_rgba(244,114,182,0.3)]">
            Symbiotic Growth
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight">
            Built For The <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-500 drop-shadow-[0_0_20px_rgba(244,114,182,0.5)]">Ecosystem</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-mono">
            A dual-engine platform designed to empower learners while giving institutions the ultimate control center.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0">
          
          {/* Central Connecting Node (Hidden on mobile for better flow) */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 items-center justify-center z-20">
            <div className="absolute inset-0 rounded-full border border-pink-500/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <div className="absolute inset-4 rounded-full bg-pink-500/20 blur-xl" />
            <div className="w-16 h-16 bg-[#05050A] border-2 border-pink-400 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(244,114,182,0.6)] z-10 relative">
              <Zap className="w-6 h-6 text-pink-400 animate-pulse" />
              {/* Connecting Lines */}
              <div className="absolute top-1/2 right-full w-24 h-px bg-gradient-to-l from-pink-400 to-transparent" />
              <div className="absolute top-1/2 left-full w-24 h-px bg-gradient-to-r from-pink-400 to-transparent" />
            </div>
          </div>

          {/* LEFT SIDE: For Students */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[45%] relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 md:p-10 rounded-[2rem] bg-[#0A050A] border border-pink-900/50 hover:border-pink-500/50 shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-colors duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-rose-400" />
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-14 h-14 bg-pink-500/10 border border-pink-500/30 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(244,114,182,0.2)]">
                  <GraduationCap className="w-7 h-7 text-pink-400" />
                </div>
                <div>
                  <div className="text-pink-500 font-mono text-[10px] uppercase tracking-widest font-bold mb-1">User Protocol</div>
                  <h3 className="text-2xl font-black uppercase italic text-white tracking-wide">For Students</h3>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <FeatureRow icon={<Sparkles className="w-4 h-4 text-pink-400" />} text="Enhance logical & critical thinking skills" />
                <FeatureRow icon={<Gamepad2 className="w-4 h-4 text-pink-400" />} text="Learn through addictive, gamified mechanics" />
                <FeatureRow icon={<Target className="w-4 h-4 text-pink-400" />} text="Compete in high-stakes daily challenges" />
                <FeatureRow icon={<Shield className="w-4 h-4 text-pink-400" />} text="Earn achievements and digital street cred" />
              </div>

              {/* Decorative Hologram Element */}
              <div className="mt-10 p-4 rounded-xl bg-pink-950/30 border border-pink-900/30 relative overflow-hidden group-hover:bg-pink-900/20 transition-colors">
                 <div className="flex justify-between text-[10px] font-mono text-pink-400 mb-2 uppercase tracking-wider">
                    <span>Skill Acquisition</span>
                    <span>Active</span>
                 </div>
                 <div className="h-1.5 w-full bg-black rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-pink-500 shadow-[0_0_10px_rgba(244,114,182,0.8)]"
                    />
                 </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: For Institutions */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[45%] relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-l from-rose-600/20 to-transparent rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative p-8 md:p-10 rounded-[2rem] bg-[#0A050A] border border-rose-900/50 hover:border-rose-500/50 shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-colors duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-rose-500 to-pink-400" />
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-14 h-14 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(243,118,150,0.2)]">
                  <Building2 className="w-7 h-7 text-rose-400" />
                </div>
                <div>
                  <div className="text-rose-500 font-mono text-[10px] uppercase tracking-widest font-bold mb-1">Admin Protocol</div>
                  <h3 className="text-2xl font-black uppercase italic text-white tracking-wide">For Schools</h3>
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <FeatureRow icon={<TrendingUp className="w-4 h-4 text-rose-400" />} text="Skyrocket student engagement metrics" />
                <FeatureRow icon={<Zap className="w-4 h-4 text-rose-400" />} text="Promote AI literacy seamlessly at scale" />
                <FeatureRow icon={<Users className="w-4 h-4 text-rose-400" />} text="Host private intra-school tournaments" />
                <FeatureRow icon={<Target className="w-4 h-4 text-rose-400" />} text="Granular analytics on student progression" />
              </div>

              {/* Decorative Hologram Element */}
              <div className="mt-10 p-4 rounded-xl bg-rose-950/30 border border-rose-900/30 relative overflow-hidden group-hover:bg-rose-900/20 transition-colors">
                 <div className="flex justify-between text-[10px] font-mono text-rose-400 mb-2 uppercase tracking-wider">
                    <span>Engagement Rate</span>
                    <span>+300%</span>
                 </div>
                 <div className="h-1.5 w-full bg-black rounded-full overflow-hidden flex gap-1">
                    <motion.div 
                      initial={{ opacity: 0, scaleY: 0 }}
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="w-1/4 h-full bg-rose-800 origin-left"
                    />
                    <motion.div 
                      initial={{ opacity: 0, scaleY: 0 }}
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      className="w-1/4 h-full bg-rose-600 origin-left"
                    />
                    <motion.div 
                      initial={{ opacity: 0, scaleY: 0 }}
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      className="w-1/4 h-full bg-rose-500 origin-left"
                    />
                    <motion.div 
                      initial={{ opacity: 0, scaleY: 0 }}
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                      className="w-1/4 h-full bg-rose-400 shadow-[0_0_10px_rgba(243,118,150,0.8)] origin-left"
                    />
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function FeatureRow({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-4 bg-white/5 p-3 rounded-lg border border-white/5 hover:bg-white/10 transition-colors cursor-default">
      <div className="w-8 h-8 rounded bg-black/50 flex items-center justify-center shrink-0 border border-white/10">
        {icon}
      </div>
      <span className="text-sm text-gray-300 font-medium">{text}</span>
    </div>
  )
}
