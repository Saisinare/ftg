"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Animate the height of the line from 0% to 100%
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const steps = [
    {
      number: "01",
      title: "Learn",
      description: "Engage with AI-powered modules and interactive quizzes tailored to your level.",
    },
    {
      number: "02",
      title: "Play",
      description: "Challenge yourself with IQ-based games designed to enhance cognitive skills.",
    },
    {
      number: "03",
      title: "Earn",
      description: "Collect coins, unlock achievements, and climb the competitive rankings.",
    },
    {
      number: "04",
      title: "Grow",
      description: "Track your long-term progress, redeem rewards, and become a top learner.",
    },
  ];

  return (
    <section className="py-32 bg-[#05050A] text-white relative border-t border-white/5 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1 mb-4 rounded-full border border-purple-500/50 bg-purple-500/10 text-purple-400 font-mono text-sm tracking-widest uppercase shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            Roadmap
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            How FTG Works
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-mono">
            A simple, intuitive path from learning to growing.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          {/* Background Timeline Line */}
          <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 w-1 bg-[#1A1A24] -translate-x-1/2 rounded-full" />
          
          {/* Animated Glowing Timeline Line */}
          <motion.div 
            className="absolute top-0 left-[28px] md:left-1/2 w-1 bg-gradient-to-b from-fuchsia-500 to-purple-600 -translate-x-1/2 rounded-full shadow-[0_0_15px_rgba(217,70,239,0.8)] z-0"
            style={{ height: lineHeight }}
          />

          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="relative flex flex-col md:flex-row items-center w-full mb-16 md:mb-32 last:mb-0">
                
                {/* Center Node Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#05050A] border-4 border-fuchsia-500 shadow-[0_0_20px_rgba(217,70,239,0.8)] z-20 flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-purple-300 rounded-full animate-pulse" />
                </motion.div>

                {/* Left Side (Empty on mobile & odd steps desktop) */}
                <div className={`hidden md:flex w-1/2 pr-16 justify-end ${!isEven ? 'invisible' : ''}`}>
                  {isEven && <StepCard step={step} isEven={isEven} />}
                </div>

                {/* Right Side (Content on mobile & odd steps desktop) */}
                <div className={`w-full pl-20 md:w-1/2 md:pl-16 flex justify-start ${isEven ? 'md:hidden' : ''}`}>
                  {/* On Mobile, even steps render here. On Desktop, odd steps render here. */}
                  {(!isEven) && <StepCard step={step} isEven={false} />}
                  <div className="md:hidden w-full">
                    {isEven && <StepCard step={step} isEven={false} />}
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

function StepCard({ step, isEven }: { step: any, isEven: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="p-8 w-full max-w-md rounded-2xl bg-[#0A0510]/80 backdrop-blur-md border border-purple-900/40 hover:border-fuchsia-500/60 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)] transition-all duration-300 group relative overflow-hidden"
    >
      <div className={`text-8xl font-black text-fuchsia-500/5 absolute -bottom-6 ${isEven ? '-left-4' : '-right-4'} group-hover:text-fuchsia-500/10 transition-colors duration-300 select-none`}>
        {step.number}
      </div>
      <div className="relative z-10">
        <h3 className="text-3xl font-black mb-3 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400 uppercase italic tracking-wide">
          {step.title}
        </h3>
        <p className="text-gray-400 leading-relaxed font-mono text-sm border-l-2 border-fuchsia-900/50 pl-3">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
