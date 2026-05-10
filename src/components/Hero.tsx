"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] opacity-50 -z-10 pointer-events-none" />

      <div className="max-w-5xl w-full px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium text-gray-300">Available for Opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight leading-[1.1] mb-6"
        >
          Frontend & Flutter <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
            Developer
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10"
        >
          Hi, I&apos;m Shaikh Mohd Kaif Mujamill. I build responsive, component-driven web and cross-platform mobile applications that live on the edge of modern UI/UX design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center group"
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            download="Shaikh_Mohd_Kaif_Resume.pdf"
            className="flex items-center gap-2 glass text-black dark:text-white px-8 py-4 rounded-full font-semibold hover:bg-black/5 dark:hover:bg-white/10 transition-colors w-full sm:w-auto justify-center group"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
