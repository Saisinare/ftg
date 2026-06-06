"use client";

import { motion } from "framer-motion";
import { 
  Coins, Target, TrendingUp, Users, Trophy, 
  Brain, Gamepad2, Sparkles, Cloud
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Users,
      subtitle: "FEATURE 01",
      title: "Community Driven",
      description: "Join a community of growth-focused students. Collaborate, compete, and learn together.",
      color: "text-blue-400"
    },
    {
      icon: Target,
      subtitle: "FEATURE 02",
      title: "Goal Oriented",
      description: "Track your progress and unlock rewards as you achieve your educational milestones.",
      color: "text-indigo-400"
    },
    {
      icon: Coins,
      subtitle: "FEATURE 03",
      title: "Earn Rewards",
      description: "Earn virtual coins, achievements, and recognition for your hard work and dedication.",
      color: "text-blue-400"
    },
    {
      icon: TrendingUp,
      subtitle: "FEATURE 04",
      title: "Skill Improvement",
      description: "Enhance your logical thinking, problem-solving skills, and AI literacy.",
      color: "text-indigo-400"
    },
    {
      icon: Brain,
      subtitle: "FEATURE 05",
      title: "IQ Challenges",
      description: "Test your intellect with daily brain teasers and high-stakes logic puzzles.",
      color: "text-blue-400"
    },
    {
      icon: Trophy,
      subtitle: "FEATURE 06",
      title: "Leaderboards",
      description: "Rise through the ranks and prove your mastery on the global stage.",
      color: "text-indigo-400"
    },
    {
      icon: Gamepad2,
      subtitle: "FEATURE 07",
      title: "Logic Games",
      description: "Dive into interactive games designed to make complex concepts intuitive.",
      color: "text-blue-400"
    },
    {
      icon: Sparkles,
      subtitle: "FEATURE 08",
      title: "AI Tailoring",
      description: "Experience a learning path uniquely tailored to your strengths and weaknesses.",
      color: "text-indigo-400"
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#05050A] text-white relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
        >
          Logic Games, IQ Challenges, <br className="hidden md:block" />
          <span className="text-indigo-400">and Edutainment Delights!</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 max-w-2xl mx-auto"
        >
          Explore our collection of gamified features, ready to elevate your learning experience.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-white/5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="group aspect-square [perspective:1000px] bg-[#05050A]">
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* Front Side */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#101018] border-r border-b border-white/5 [backface-visibility:hidden] cursor-pointer">
                    <Icon className={`w-16 h-16 md:w-20 md:h-20 ${feature.color} transition-transform duration-500 group-hover:scale-110`} strokeWidth={1.2} />
                    <div className="absolute bottom-6 text-[10px] text-gray-600 uppercase tracking-[0.2em] font-medium">
                      {feature.subtitle}
                    </div>
                  </div>

                  {/* Back Side (Flipped) */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-white border-r border-b border-gray-200 [backface-visibility:hidden] [transform:rotateY(180deg)] p-4 sm:p-6 shadow-2xl cursor-pointer">
                    <div className="absolute top-4 left-4 text-[9px] font-bold bg-indigo-500 text-white px-2 py-1 rounded-sm uppercase tracking-wide">
                      INFO
                    </div>
                    <Cloud className="absolute top-4 right-4 w-5 h-5 text-gray-300" />
                    
                    <h3 className="text-black font-bold text-center text-sm md:text-base leading-tight uppercase tracking-wider mb-3">
                      {feature.title}
                    </h3>
                    <div className="w-8 h-1 bg-blue-500 mb-3 rounded-full opacity-80" />
                    <p className="text-gray-600 text-xs text-center leading-relaxed hidden sm:block">
                      {feature.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
