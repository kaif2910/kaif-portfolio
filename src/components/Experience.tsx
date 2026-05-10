"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Sc (IT)",
    institution: "S.I.W.S. College",
    board: "University of Mumbai",
    year: "2026 – Present"
  },
  {
    degree: "HSC (Commerce)",
    institution: "S.I.W.S. College",
    board: "Maharashtra State Board",
    year: "2025"
  },
  {
    degree: "SSC",
    institution: "Al Falah English School",
    board: "Maharashtra State Board",
    year: "2023"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Education & <span className="text-accent">Certifications</span>
          </h2>
        </motion.div>

        <div className="space-y-12">
          {/* Education Timeline */}
          <div className="relative border-l border-white/10 pl-8 space-y-12">
            <div className="absolute top-0 -left-4 w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center text-accent">
              <GraduationCap className="w-4 h-4" />
            </div>

            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -left-[41px] top-1.5 w-2 h-2 rounded-full bg-accent" />
                <div className="glass p-6 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  <span className="text-sm font-mono text-accent mb-2 block">{item.year}</span>
                  <h3 className="text-xl font-bold mb-1 text-black dark:text-white">{item.degree}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium mb-1">{item.institution}</p>
                  <p className="text-gray-500 text-sm">{item.board}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div className="relative border-l border-white/10 pl-8">
            <div className="absolute top-0 -left-4 w-8 h-8 rounded-full bg-white dark:bg-black border border-black/10 dark:border-white/10 flex items-center justify-center text-accent">
              <Award className="w-4 h-4" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative mt-8"
            >
              <div className="absolute -left-[41px] top-1.5 w-2 h-2 rounded-full bg-accent" />
              <div className="glass p-6 rounded-2xl hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <h3 className="text-lg font-bold mb-2 text-black dark:text-white">Course on Computer Concepts (CCC)</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  NIELIT | Government-recognized certification covering GUI Operating Systems, Spreadsheets, Social Networking & e-Governance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
