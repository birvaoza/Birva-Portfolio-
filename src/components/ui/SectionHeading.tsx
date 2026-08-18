"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-16"
    >
      <span className="text-indigo-500 font-mono text-sm tracking-wider uppercase">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-500 max-w-2xl text-lg">{description}</p>
      )}
    </motion.div>
  );
}
