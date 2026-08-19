"use client";

import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, FileText, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import Image from "next/image";

const nameLetters = personalInfo.name.split("");

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05, delayChildren: 0.3 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 1.0 + i * 0.1, duration: 0.4, type: "spring" },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-indigo-300/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Soft gradient blobs */}
      <motion.div
        className="absolute top-20 -right-20 w-72 h-72 bg-purple-200/30 rounded-full blur-[80px]"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 -left-20 w-72 h-72 bg-pink-200/30 rounded-full blur-[80px]"
        animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Profile Photo with rotating ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.1, duration: 0.7, type: "spring" }}
          className="mb-6 flex justify-center"
        >
          <div className="relative">
            {/* Animated ring */}
            <motion.div
              className="absolute -inset-2 rounded-full border-2 border-dashed border-indigo-300/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-xl ring-4 ring-indigo-100">
              <Image
                src="/birva-oza.jpg"
                alt="Birva Oza"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white/60 backdrop-blur-sm mb-6 shadow-sm"
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-xs text-gray-500 font-mono">
            Associate Software Engineer @ Infor • Open to Opportunities
          </span>
        </motion.div>

        {/* Animated Name - letter by letter */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 mb-6"
        >
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.h1>

        {/* Title with gradient animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-xl md:text-2xl font-semibold mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_ease_infinite]"
          style={{
            backgroundSize: "200% auto",
            animation: "gradient 3s ease infinite",
          }}
        >
          {personalInfo.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Domain tags - staggered float in */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            "Computer Vision",
            "LLMs & RAG",
            "DevSecOps",
            "Cloud Automation",
            "Medical AI",
          ].map((tag, i) => (
            <motion.span
              key={tag}
              custom={i}
              variants={tagVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-3 py-1.5 text-sm font-mono text-gray-600 border border-gray-200 rounded-full bg-white/50 shadow-sm cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* CTAs with hover animations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-indigo-500 text-white font-medium rounded-full hover:bg-indigo-600 transition-colors duration-200 flex items-center gap-2 shadow-lg shadow-indigo-200"
          >
            View Projects
            <ArrowDown size={16} />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 border border-gray-200 text-gray-700 font-medium rounded-full hover:border-gray-300 hover:bg-white/50 transition-colors duration-200 flex items-center gap-2"
          >
            <Mail size={16} />
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social links with stagger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.5 }}
          className="flex justify-center gap-4"
        >
          {[
            { href: personalInfo.github, icon: Github, label: "GitHub" },
            { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: "#", icon: FileText, label: "Resume" },
          ].map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 text-gray-400 hover:text-gray-700 border border-gray-200 rounded-full hover:border-gray-300 hover:bg-white/50 transition-all duration-200"
              aria-label={link.label}
            >
              <link.icon size={18} />
            </motion.a>
          ))}
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
