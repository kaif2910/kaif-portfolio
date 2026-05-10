"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 transition-all duration-300",
        scrolled ? "py-4" : "py-6"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300",
          scrolled ? "glass bg-black/50 dark:bg-black/50 w-full max-w-3xl" : "w-full max-w-5xl"
        )}
      >
        <Link href="/" className="text-xl font-heading font-bold tracking-tight">
          Kaif<span className="text-accent">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-500 dark:text-gray-300">
          <Link href="#about" className="hover:text-black dark:hover:text-white transition-colors">
            About
          </Link>
          <Link href="#skills" className="hover:text-black dark:hover:text-white transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="hover:text-black dark:hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="#experience" className="hover:text-black dark:hover:text-white transition-colors">
            Experience
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            href="#contact"
            className="bg-black dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-full font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
