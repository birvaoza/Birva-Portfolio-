import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Birva Oza — ML Engineer & DevSecOps Specialist",
  description:
    "Machine Learning Engineer building production AI systems and secure cloud infrastructure. Expertise in Computer Vision, LLMs, RAG systems, and DevSecOps automation at scale.",
  keywords: [
    "Machine Learning Engineer",
    "DevSecOps",
    "Computer Vision",
    "Deep Learning",
    "Cloud Infrastructure",
    "PyTorch",
    "AWS",
    "LLMs",
    "RAG",
  ],
  authors: [{ name: "Birva Oza" }],
  openGraph: {
    title: "Birva Oza — ML Engineer & DevSecOps Specialist",
    description:
      "Building production ML systems & secure cloud infrastructure.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
