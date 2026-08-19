"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

export function ScrambleText({ text, className = "", delay = 0 }: ScrambleTextProps) {
  const [display, setDisplay] = useState(text.replace(/[^ ]/g, "_"));
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    const duration = 1500;
    const frameRate = 30;
    const totalFrames = Math.floor(duration / (1000 / frameRate));
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;

      const newText = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          // Characters resolve left to right
          const charProgress = progress * text.length;
          if (i < charProgress) return text[i];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");

      setDisplay(newText);

      if (frame >= totalFrames) {
        clearInterval(interval);
        setDisplay(text);
      }
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay / 1000 }}
      className={className}
    >
      {display}
    </motion.span>
  );
}
