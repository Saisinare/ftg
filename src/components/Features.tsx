"use client";

import { motion } from "framer-motion";
import { Coins, Target, TrendingUp, Users } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "Community Driven",
      description: "Join a community of growth-focused students. Collaborate, compete, and learn together.",
    },
    {
      icon: <Target className="w-6 h-6 text-purple-400" />,
      title: "Goal Oriented",
      description: "Track your progress and unlock rewards as you achieve your educational milestones.",
    },
    {
      icon: <Coins className="w-6 h-6 text-amber-400" />,
      title: "Earn Rewards",
      description: "Earn virtual coins, achievements, and recognition for your hard work and dedication.",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
      title: "Skill Improvement",
      description: "Enhance your logical thinking, problem-solving skills, and AI literacy.",
    },
  ];

  return (
    <section className="py-24 bg-black text-white relative border-t border-white/10 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-900/10 rounded-full mix-blend-screen filter blur-[100px] opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why Students Should <br />
              <span className="text-blue-500">Join FTG</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
              Experience learning like never before. FTG provides the tools, the community, 
              and the motivation you need to excel in your studies while having fun.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 p-2 bg-white/5 rounded-lg border border-white/10 shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full max-w-lg relative"
          >
            <div className="aspect-square rounded-3xl bg-gradient-to-tr from-blue-900/40 to-purple-900/40 border border-white/10 flex items-center justify-center p-8 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
              
              {/* Mock UI Elements floating */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 left-10 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Achievement</div>
                    <div className="font-bold text-sm">Logic Master</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-1/4 right-10 p-4 bg-black/60 backdrop-blur-md rounded-xl border border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                    <Coins className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">Earned</div>
                    <div className="font-bold text-sm">+500 Coins</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
