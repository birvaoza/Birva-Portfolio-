"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/data/portfolio";
import { Building2, MapPin, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Experience"
          title="Professional timeline"
          description="Production engineering across enterprise infrastructure and AI research."
        />

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gray-200" />

          <div className="space-y-12">
            {experience.map((role, i) => (
              <motion.div
                key={`${role.company}-${role.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-8 md:pl-20"
              >
                <div className="absolute left-0 md:left-8 top-2 w-3 h-3 -translate-x-1.5 rounded-full bg-indigo-500 border-4 border-white shadow-sm" />

                <div className="border border-gray-100 rounded-2xl p-6 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-gray-900 font-semibold text-lg">
                        {role.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Building2 size={13} />
                          {role.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={13} />
                          {role.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={13} />
                          {role.period}
                        </span>
                      </div>
                    </div>
                    <span className="px-3 py-1 text-xs font-mono text-gray-400 border border-gray-200 rounded-full bg-gray-50">
                      {role.type}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {role.highlights.map((h, j) => (
                      <div
                        key={j}
                        className="pl-4 border-l-2 border-gray-200 hover:border-indigo-300 transition-colors"
                      >
                        <p className="text-gray-600 text-sm">
                          <span className="text-gray-400">Problem: </span>
                          {h.problem}
                        </p>
                        <p className="text-gray-600 text-sm mt-1">
                          <span className="text-gray-400">Solution: </span>
                          {h.solution}
                        </p>
                        <p className="text-indigo-600 text-sm mt-1">
                          <span className="text-gray-400">Impact: </span>
                          {h.impact}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs font-mono text-gray-500 border border-gray-200 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
