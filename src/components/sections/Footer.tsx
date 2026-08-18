"use client";

import { personalInfo } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-400 text-sm font-mono">
          {personalInfo.name.split(" ")[0].toLowerCase()}
          <span className="text-indigo-500">.</span>dev
        </p>
        <p className="text-gray-400 text-xs">
          Built with Next.js, Tailwind CSS, and Framer Motion
        </p>
        <p className="text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} {personalInfo.name}
        </p>
      </div>
    </footer>
  );
}
