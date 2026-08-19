"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProjects } from "@/data/portfolio";
import {
  ChevronDown,
  ChevronUp,
  Brain,
  Eye,
  Shield,
  Layers,
} from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";

const categoryIcons: Record<string, React.ElementType> = {
  "AI/ML": Brain,
  "Computer Vision": Eye,
  DevSecOps: Shield,
};

const categoryStyles: Record<string, string> = {
  "AI/ML": "text-purple-600 bg-purple-50 border-purple-100",
  "Computer Vision": "text-cyan-600 bg-cyan-50 border-cyan-100",
  DevSecOps: "text-emerald-600 bg-emerald-50 border-emerald-100",
};

export function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Featured Work"
          title="Engineering projects that solve real problems"
          description="Each project represents a genuine technical challenge — from medical imaging pipelines to infrastructure security at scale."
        />

        <div className="space-y-4">
          {featuredProjects.map((project, i) => {
            const Icon = categoryIcons[project.category] || Layers;
            const isExpanded = expanded === i;
            const style =
              categoryStyles[project.category] || "text-gray-600 bg-gray-50 border-gray-100";

            return (
              <TiltCard
                key={project.title}
                className={`border rounded-2xl transition-all duration-300 ${
                  isExpanded
                    ? "border-indigo-200 bg-white shadow-lg shadow-indigo-50"
                    : "border-gray-100 bg-white/60 hover:bg-white hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => setExpanded(isExpanded ? null : i)}
                  className="w-full p-6 flex items-start justify-between text-left"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-2 rounded-xl border ${style} shrink-0 mt-0.5`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <h3 className="text-gray-900 font-semibold text-lg">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mt-0.5">
                        {project.subtitle}
                      </p>
                      <p className="text-gray-500 text-sm mt-2 max-w-2xl">
                        {project.problem}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-400 shrink-0 ml-4 mt-1">
                    {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-gray-100 ml-14">
                        <div className="grid md:grid-cols-2 gap-6 mt-4">
                          <div>
                            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                              Approach
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {project.approach}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                              Architecture
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed font-mono">
                              {project.architecture}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                              Engineering Challenges
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {project.challenges}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">
                              Result
                            </h4>
                            <p className="text-gray-700 text-sm leading-relaxed font-medium">
                              {project.result}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 p-4 bg-indigo-50/50 border border-indigo-100 rounded-xl">
                          <h4 className="text-xs font-mono text-indigo-500 uppercase tracking-wider mb-2">
                            Engineering Insight
                          </h4>
                          <p className="text-gray-600 text-sm italic leading-relaxed">
                            {project.learning}
                          </p>
                        </div>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs font-mono text-gray-500 border border-gray-200 rounded-full bg-gray-50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {"publication" in project && project.publication && (
                          <div className="mt-4">
                            <span className="inline-flex items-center px-3 py-1 text-xs font-mono text-amber-600 border border-amber-200 bg-amber-50 rounded-full">
                              📄 Published: {project.publication}
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
