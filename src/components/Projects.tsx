"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { IconBrandGithub } from "@tabler/icons-react";

const projects = [
  {
    title: "VSC Flutter Clones",
    category: "Flutter / Dart Project",
    tech: "Flutter, Dart, Multiple UI Clones",
    description: "A collection of high-quality mobile application clones built with Flutter, demonstrating complex UI implementations and state management across multiple app architectures.",
    github: "https://github.com/kaif2910/vsc-flutter",
    live: "https://vsc-flutter.vercel.app/",
  },
  {
    title: "Student Management App",
    category: "Angular Projects",
    tech: "Angular, TypeScript, RxJS, SCSS",
    description: "Full CRUD application to manage student records — add, edit, delete, search and filter. Built with reusable Angular components, services, and two-way data binding.",
    github: "https://github.com/kaif2910/student-management-app",
    live: "https://kaif2910.github.io/student-management-app/",
  },
  {
    title: "Zmart – Shopping Web App",
    category: "Angular Projects",
    tech: "Angular, TypeScript, RxJS, Tailwind",
    description: "Type-safe Angular shopping app with product listing, dynamic cart UI, and component-driven architecture following Angular best practices.",
    github: "https://github.com/kaif2910/zmart",
    live: "https://zmartt.netlify.app/",
  },
  {
    title: "Glow Beauty App",
    category: "Angular Projects",
    tech: "Angular, TypeScript, SCSS",
    description: "Responsive front-end web app for a cosmetics brand featuring product cards, hero section, smooth navigation, and modern Angular component design.",
    github: "https://github.com/kaif2910/-glow-beauty-app",
    live: "https://glowww.netlify.app/",
  },
  {
    title: "OMG Candles – E-commerce UI",
    category: "Angular Projects",
    tech: "Angular, TypeScript, CSS",
    description: "Pixel-perfect e-commerce front-end for a candle store built with Angular, featuring product grids, responsive layout, and clean component-based design.",
    github: "https://github.com/kaif2910/omg-Candles",
    live: "https://omggggggggg.netlify.app/",
  },
  {
    title: "Expense Tracker App",
    category: "Flutter / Dart Project",
    tech: "Flutter, Dart",
    description: "Cross-platform mobile app to track daily income and expenses with category-wise breakdown and visual charts. All data is stored locally on the device with optional sync capability.",
    github: "https://github.com/kaif2910/expense-tracker",
    live: "https://kaif2910.github.io/expense-tracker-app/",
  },
  {
    title: "Notes Shelf",
    category: "HTML / CSS / JavaScript",
    tech: "HTML, CSS, JavaScript",
    description: "Browser-based notes management app with create, save, and organize features. Demonstrates DOM manipulation, event handling, and clean UI layout.",
    github: "https://github.com/kaif2910/kaif28",
    live: "https://kaif28.onrender.com",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work across Web and Mobile development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6, ease: "easeOut" }}
              className="glass p-8 rounded-3xl flex flex-col h-full group hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors text-black dark:text-white">{project.title}</h3>
              <p className="text-sm font-mono text-gray-500 mb-4">{project.tech}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-grow mb-8">
                {project.description}
              </p>
              
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-black/10 dark:border-white/10">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-accent transition-colors flex items-center gap-2 text-sm font-medium">
                  <IconBrandGithub className="w-4 h-4" />
                  Code
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-accent transition-colors flex items-center gap-2 text-sm font-medium ml-auto">
                  Live Preview
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
