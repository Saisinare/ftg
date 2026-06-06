"use client";

import { motion } from "framer-motion";
import { Gamepad2, Brain, Trophy, Rocket } from "lucide-react";

export default function About() {
  const cards = [
    {
      icon: <Brain className="w-8 h-8 text-blue-400" />,
      title: "AI-Powered Learning",
      description: "Adaptive modules that tailor educational content to individual student needs.",
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-purple-400" />,
      title: "IQ-Based Gaming",
      description: "Engaging challenges that develop logical thinking and problem-solving skills.",
    },
    {
      icon: <Trophy className="w-8 h-8 text-amber-400" />,
      title: "Competitive Challenges",
      description: "Leaderboards and tournaments to foster healthy competition and recognition.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-emerald-400" />,
      title: "Reward-Driven Growth",
      description: "Earn coins and unlock achievements as you progress through your learning journey.",
    },
  ];

  return (
    <section className="py-24 bg-black text-white relative border-t border-white/10">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            What is <span className="text-blue-500">FTG</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            FTG (Fun To Grow) is a next-generation gamified edutainment platform designed for students. 
            It combines AI-powered learning, IQ-based gaming, competitive challenges, leaderboards, and 
            reward-driven engagement into a single ecosystem where students can learn, play, compete, and grow.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              <div className="mb-4 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
