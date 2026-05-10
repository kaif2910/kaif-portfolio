"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { IconBrandLinkedin } from "@tabler/icons-react";

export default function Contact() {
  const whatsappUrl = `https://wa.me/918294399187?text=${encodeURIComponent("Hello Kaif, I saw your portfolio and would like to connect.")}`;

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Looking for a new role and open to opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.a
            href="mailto:kaif282907@gmail.com"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:-translate-y-1 group"
          >
            <div className="w-14 h-14 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-black dark:text-white">Email Me</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">kaif282907@gmail.com</p>
          </motion.a>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:-translate-y-1 group border-accent/20"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-black dark:text-white">WhatsApp</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Chat Directly</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/kaif-shaikh-7617223b8/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-3xl flex flex-col items-center justify-center text-center hover:bg-black/5 dark:hover:bg-white/5 transition-all hover:-translate-y-1 group"
          >
            <div className="w-14 h-14 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
              <IconBrandLinkedin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-black dark:text-white">LinkedIn</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Professional Profile</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
