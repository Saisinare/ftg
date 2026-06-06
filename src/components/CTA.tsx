"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-black text-white relative border-t border-white/10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[128px]" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center backdrop-blur-sm"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500">Transform</span> Learning?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join the FTG waitlist today and be among the first to experience the future of gamified edutainment.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group relative px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden w-full sm:w-auto">
              <span className="relative z-10">Get Early Access</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-transparent hover:bg-white/5 border border-white/20 text-white rounded-full font-semibold transition-all duration-300 w-full sm:w-auto">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
