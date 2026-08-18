"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { technicalSkills } from "@/data/portfolio";

const categoryColors: Record<string, string> = {
  Programming: "from-blue-50 to-sky-50 border-blue-100",
  "AI / ML": "from-purple-50 to-violet-50 border-purple-100",
  "LLMs & NLP": "from-pink-50 to-rose-50 border-pink-100",
  "Computer Vision": "from-cyan-50 to-teal-50 border-cyan-100",
  "MLOps & Cloud": "from-orange-50 to-amber-50 border-orange-100",
  "DevSecOps & Infrastructure": "from-emerald-50 to-green-50 border-emerald-100",
};

export function Skills() {
  const categories = Object.entries(technicalSkills);

  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Technical Stack"
          title="Technologies I work with in production"
          description="Grouped by domain. Only technologies backed by real project or production experience."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(([category, skills], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className={`p-5 border rounded-2xl bg-gradient-to-br ${
                categoryColors[category] || "from-gray-50 to-white border-gray-100"
              } hover:shadow-md transition-shadow`}
            >
              <h3 className="text-gray-900 font-medium text-sm mb-3 font-mono">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs text-gray-600 border border-white/80 rounded-full bg-white/60 hover:bg-white hover:text-gray-900 transition-colors shadow-sm"
                  >
                    {skill}
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
