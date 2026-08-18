"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Mail, MapPin, Github, Linkedin, FileText, Copy, Check } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-indigo-500 font-mono text-sm tracking-wider uppercase">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
            Let&apos;s build something together
          </h2>
          <p className="text-gray-500 text-lg mb-12 max-w-xl mx-auto">
            Open to opportunities in ML Engineering, DevSecOps, Cloud
            Infrastructure, and AI Systems. Based in India, open to remote and
            relocation.
          </p>

          {/* Email CTA */}
          <div className="inline-flex items-center gap-3 p-4 border border-gray-200 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm mb-8">
            <Mail size={18} className="text-indigo-500" />
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-900 font-mono text-sm hover:text-indigo-600 transition-colors"
            >
              {personalInfo.email}
            </a>
            <button
              onClick={copyEmail}
              className="p-1.5 text-gray-400 hover:text-gray-700 transition-colors rounded"
              aria-label="Copy email"
            >
              {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
            </button>
          </div>

          {/* Links */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-gray-200 rounded-full text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-white/50 transition-all text-sm shadow-sm"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-gray-200 rounded-full text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-white/50 transition-all text-sm shadow-sm"
            >
              <Github size={16} />
              GitHub
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-5 py-3 border border-gray-200 rounded-full text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-white/50 transition-all text-sm shadow-sm"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>

          {/* Location */}
          <p className="text-gray-400 text-sm flex items-center justify-center gap-1.5">
            <MapPin size={13} />
            {personalInfo.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
