"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, FileText, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16">
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6 flex justify-center"
          >
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-indigo-100">
              <Image
                src="/birva-oza.jpg"
                alt="Birva Oza"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white/60 backdrop-blur-sm mb-6 shadow-sm"
          >
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs text-gray-500 font-mono">
              Associate Software Engineer @ Infor • Open to Opportunities
            </span>
          </motion.div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-6">
            {personalInfo.name}
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl font-semibold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
            {personalInfo.title}
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed">
            {personalInfo.tagline}
          </p>

          {/* Domain tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              "Computer Vision",
              "LLMs & RAG",
              "DevSecOps",
              "Cloud Automation",
              "Medical AI",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 text-sm font-mono text-gray-600 border border-gray-200 rounded-full bg-white/50 shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="px-6 py-3 bg-indigo-500 text-white font-medium rounded-full hover:bg-indigo-600 transition-colors duration-200 flex items-center gap-2 shadow-lg shadow-indigo-200"
            >
              View Projects
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-full hover:border-gray-300 hover:bg-white/50 transition-colors duration-200 flex items-center gap-2"
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-gray-700 border border-gray-200 rounded-full hover:border-gray-300 hover:bg-white/50 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-gray-700 border border-gray-200 rounded-full hover:border-gray-300 hover:bg-white/50 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="p-3 text-gray-400 hover:text-gray-700 border border-gray-200 rounded-full hover:border-gray-300 hover:bg-white/50 transition-all duration-200"
              aria-label="Resume"
            >
              <FileText size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown size={20} className="text-gray-300" />
      </motion.div>
    </section>
  );
}
