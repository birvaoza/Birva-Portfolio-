"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Impact } from "@/components/sections/Impact";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Research } from "@/components/sections/Research";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const sectionColors = [
  "#ffffff",       // Hero - white
  "#fdf2f8",       // About - light pink
  "#ede9fe",       // Impact - light purple
  "#e0f2fe",       // Projects - light blue
  "#ecfdf5",       // Experience - light mint
  "#fef3c7",       // Skills - light amber
  "#f0e7fe",       // Research - light lavender
  "#fce7f3",       // Contact - light rose
];

export default function Home() {
  const [bgColor, setBgColor] = useState(sectionColors[0]);

  useEffect(() => {
    const sections = document.querySelectorAll("[data-section]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-section-index"));
            if (!isNaN(index) && sectionColors[index]) {
              setBgColor(sectionColors[index]);
            }
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="transition-colors duration-700 ease-in-out min-h-screen cursor-none"
      style={{ backgroundColor: bgColor }}
    >
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <div data-section data-section-index="0">
          <Hero />
        </div>
        <div data-section data-section-index="1">
          <About />
        </div>
        <div data-section data-section-index="2">
          <Impact />
        </div>
        <div data-section data-section-index="3">
          <Projects />
        </div>
        <div data-section data-section-index="4">
          <Experience />
        </div>
        <div data-section data-section-index="5">
          <Skills />
        </div>
        <div data-section data-section-index="6">
          <Research />
        </div>
        <div data-section data-section-index="7">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
