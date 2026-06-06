"use client";

import { motion } from "framer-motion";
import { Frown, Zap } from "lucide-react";

export default function WhyItExists() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-blue-950/20 text-white relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why FTG Exists</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Bridging the gap between entertainment and education.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* The Problem */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 max-w-md p-8 rounded-3xl bg-red-950/20 border border-red-500/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Frown className="w-32 h-32 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-red-400">The Problem</h3>
            <p className="text-gray-300 leading-relaxed relative z-10">
              Learning often feels boring and passive. Students spend significant time on entertainment platforms 
              but remain disengaged from educational content.
            </p>
          </motion.div>

          {/* VS Badge */}
          <div className="w-16 h-16 rounded-full bg-black border border-white/20 flex items-center justify-center font-bold text-xl shrink-0 z-10">
            VS
          </div>

          {/* The Solution */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 max-w-md p-8 rounded-3xl bg-blue-900/20 border border-blue-500/30 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-32 h-32 text-blue-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">The Solution</h3>
            <p className="text-gray-300 leading-relaxed relative z-10">
              FTG exists to bridge this gap by making learning interactive, rewarding, competitive, and enjoyable 
              through gamification and AI technology.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
