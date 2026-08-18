"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/data/portfolio";
import { Brain, Shield, Cloud } from "lucide-react";

const focusAreas = [
  {
    icon: Brain,
    title: "AI / ML Systems",
    description:
      "Deep learning pipelines, computer vision, LLMs, RAG systems, and production inference optimization.",
    color: "bg-purple-50 border-purple-100 text-purple-600",
  },
  {
    icon: Shield,
    title: "DevSecOps",
    description:
      "CIS compliance automation, vulnerability remediation, SBOM pipelines, and security-as-code at scale.",
    color: "bg-emerald-50 border-emerald-100 text-emerald-600",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "AWS automation, CI/CD pipelines, infrastructure-as-code with Chef, and systems management at scale.",
    color: "bg-blue-50 border-blue-100 text-blue-600",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="About"
          title="Engineering at the intersection of AI and infrastructure"
        />

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed">
              {about.intro}
            </p>
            <p className="text-gray-500 leading-relaxed">{about.story}</p>
            <p className="text-gray-500 leading-relaxed">{about.focus}</p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="p-4 border border-gray-100 rounded-2xl bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-lg border ${area.color}`}>
                    <area.icon size={18} />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium text-sm mb-1">
                      {area.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{area.description}</p>
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
