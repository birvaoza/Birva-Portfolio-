"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { impactMetrics } from "@/data/portfolio";
import {
  Server,
  Shield,
  Bug,
  Rocket,
  Brain,
  Zap,
  Image,
  Gauge,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  server: Server,
  shield: Shield,
  bug: Bug,
  rocket: Rocket,
  brain: Brain,
  zap: Zap,
  image: Image,
  gauge: Gauge,
};

const cardColors = [
  "from-pink-50 to-rose-50 border-pink-100",
  "from-indigo-50 to-purple-50 border-indigo-100",
  "from-emerald-50 to-teal-50 border-emerald-100",
  "from-amber-50 to-orange-50 border-amber-100",
  "from-violet-50 to-purple-50 border-violet-100",
  "from-cyan-50 to-sky-50 border-cyan-100",
  "from-rose-50 to-pink-50 border-rose-100",
  "from-blue-50 to-indigo-50 border-blue-100",
];

export function Impact() {
  return (
    <section id="impact" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          label="Impact"
          title="Measurable engineering outcomes"
          description="Numbers from production systems and research — not estimates."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {impactMetrics.map((metric, i) => {
            const Icon = iconMap[metric.icon];
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className={`p-6 border rounded-2xl bg-gradient-to-br ${cardColors[i]} hover:shadow-md transition-shadow group`}
              >
                <Icon
                  size={18}
                  className="text-gray-400 group-hover:text-indigo-500 transition-colors mb-3"
                />
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                  {metric.value}
                </div>
                <div className="text-xs text-gray-500 leading-tight">
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
