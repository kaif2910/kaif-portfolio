"use client";

import { motion } from "framer-motion";
import { User, Code2, Sparkles, Layout } from "lucide-react";

const stats = [
  { label: "Location", value: "Mumbai, India", icon: User },
  { label: "Focus", value: "Web & Mobile", icon: Layout },
  { label: "Stacks", value: "Angular & Flutter", icon: Code2 },
  { label: "Passion", value: "UI/UX & Arch", icon: Sparkles },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              <p>
                I am a motivated B.Sc IT student with hands-on experience building dynamic web and mobile applications. My journey started with a fascination for how interfaces come to life, which led me to dive deep into frontend technologies.
              </p>
              <p>
                Skilled in component-based architecture, I specialize in Angular for web applications and Flutter/Dart for cross-platform mobile development. I maintain an active GitHub portfolio with diverse projects ranging from e-commerce UIs to full CRUD systems.
              </p>
              <p>
                I am currently seeking a Frontend / Flutter Developer Internship to contribute to real-world products and continue expanding my skillset.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-1 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="glass p-6 rounded-3xl flex flex-col items-start gap-4 hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <div className="w-12 h-12 rounded-full bg-black/5 dark:bg-white/10 flex items-center justify-center text-accent">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-gray-500 dark:text-gray-500 text-sm font-medium mb-1">{stat.label}</h3>
                  <p className="text-black dark:text-white font-semibold">{stat.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
