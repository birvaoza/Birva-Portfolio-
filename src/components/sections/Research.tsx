"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { publications, education, recognition } from "@/data/portfolio";
import { FileText, GraduationCap, Award, ExternalLink } from "lucide-react";

export function Research() {
  return (
    <section id="research" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Research & Education"
          title="Publications, credentials, and recognition"
        />

        {/* Publications */}
        <div className="mb-16">
          <h3 className="text-gray-900 font-semibold text-lg mb-6 flex items-center gap-2">
            <FileText size={18} className="text-indigo-500" />
            Publications
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-5 border border-gray-100 rounded-2xl bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h4 className="text-gray-900 font-medium text-sm leading-snug">
                    {pub.title}
                  </h4>
                  <span className="px-2 py-0.5 text-xs font-mono text-emerald-600 border border-emerald-200 bg-emerald-50 rounded-full shrink-0">
                    {pub.status}
                  </span>
                </div>
                <p className="text-xs font-mono text-indigo-500 mb-3">
                  {pub.venue} • {pub.year}
                </p>
                <p className="text-gray-500 text-sm mb-2">
                  <span className="text-gray-400">Problem: </span>
                  {pub.problem}
                </p>
                <p className="text-gray-600 text-sm">
                  <span className="text-gray-400">Contribution: </span>
                  {pub.contribution}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {pub.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs text-gray-500 border border-gray-200 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {pub.link && (
                  <div className="mt-4">
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-indigo-600 border border-indigo-200 bg-indigo-50 rounded-full hover:bg-indigo-100 hover:border-indigo-300 transition-colors"
                    >
                      <ExternalLink size={13} />
                      View Publication
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-gray-900 font-semibold text-lg mb-6 flex items-center gap-2">
            <GraduationCap size={18} className="text-indigo-500" />
            Education
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-5 border border-gray-100 rounded-2xl bg-white/70 backdrop-blur-sm shadow-sm"
              >
                <h4 className="text-gray-900 font-medium text-sm mb-1">
                  {edu.degree}
                </h4>
                <p className="text-gray-500 text-sm">{edu.institution}</p>
                <p className="text-gray-400 text-xs font-mono mt-1">
                  {edu.period} • CGPA: {edu.cgpa}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {edu.coursework.map((c) => (
                    <span
                      key={c}
                      className="px-2 py-0.5 text-xs text-gray-500 border border-gray-200 rounded-full"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recognition */}
        <div>
          <h3 className="text-gray-900 font-semibold text-lg mb-6 flex items-center gap-2">
            <Award size={18} className="text-indigo-500" />
            Recognition
          </h3>
          <div className="space-y-3">
            {recognition.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
                className="flex items-start gap-3 pl-4 border-l-2 border-gray-200"
              >
                <p className="text-gray-600 text-sm">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
