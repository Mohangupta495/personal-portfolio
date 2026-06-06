"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [accent, setAccent] = useState<"blue" | "purple" | "emerald" | "amber">("blue");
  const [mounted, setMounted] = useState(false);

  // Sync settings with LocalStorage after mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("mohan-portfolio-theme") as "dark" | "light" | null;
    const savedAccent = localStorage.getItem("mohan-portfolio-accent") as typeof accent | null;

    setTimeout(() => {
      if (savedTheme) {
        setTheme(savedTheme);
      } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        setTheme("light");
      }

      if (savedAccent) {
        setAccent(savedAccent);
      }

      setMounted(true);
    }, 0);
  }, []);

  const handleSetTheme = (newTheme: "dark" | "light") => {
    setTheme(newTheme);
    localStorage.setItem("mohan-portfolio-theme", newTheme);
  };

  const handleSetAccent = (newAccent: typeof accent) => {
    setAccent(newAccent);
    localStorage.setItem("mohan-portfolio-accent", newAccent);
  };

  // Avoid hydration mismatch flicker by waiting for browser mount
  if (!mounted) {
    return (
      <div 
        className="app-container" 
        data-theme="light" 
        data-accent="blue" 
        style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8fafc" }}
      >
        <div style={{ color: "#0f172a", fontFamily: "monospace", fontSize: "0.9rem" }}>Loading workspace environment...</div>
      </div>
    );
  }

  return (
    <div className="app-container" data-theme={theme} data-accent={accent}>
      {/* Structural layout wrapper */}
      <Header
        theme={theme}
        setTheme={handleSetTheme}
        accent={accent}
        setAccent={handleSetAccent}
      />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
