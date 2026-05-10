"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Web Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "Angular", "Bootstrap", "Responsive Design"]
  },
  {
    category: "Mobile",
    items: ["Flutter", "Dart", "Cross-platform iOS & Android"]
  },
  {
    category: "UI / UX",
    items: ["Flexbox", "CSS Grid", "Material Design", "Component Architecture"]
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "VS Code", "Android Studio", "Chrome DevTools"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Technologies and tools I use to build digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent"></span>
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-sm text-gray-600 dark:text-gray-300 hover:text-white hover:border-accent hover:bg-accent transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
