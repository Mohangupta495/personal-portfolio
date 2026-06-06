"use client";

import React, { useState, useEffect } from "react";
import { Icons } from "./ui/Icons";

interface HeaderProps {
  theme: "dark" | "light";
  setTheme: (t: "dark" | "light") => void;
  accent: "blue" | "purple" | "emerald" | "amber";
  setAccent: (a: "blue" | "purple" | "emerald" | "amber") => void;
}

export default function Header({ theme, setTheme, accent, setAccent }: HeaderProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showColorPicker, setShowColorPicker] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll progress indicator
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // Backdrop change on scroll
      setIsScrolled(window.scrollY > 20);

      // Active section highlighter
      const sections = ["home", "about", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 120; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  const handleNavLinkClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const accents = [
    { key: "blue", color: "#0ea5e9", name: "React Blue" },
    { key: "purple", color: "#8b5cf6", name: "Cyber Purple" },
    { key: "emerald", color: "#10b981", name: "Emerald Mint" },
    { key: "amber", color: "#f59e0b", name: "Neon Amber" }
  ] as const;

  return (
    <>
      {/* Simulation Stylesheet for Header */}
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 70px;
          z-index: 50;
          display: flex;
          align-items: center;
          transition: all var(--transition-smooth);
          border-bottom: 1px solid transparent;
        }

        .navbar.scrolled {
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
          height: 64px;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: var(--accent);
          transition: width 0.1s ease-out;
        }

        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .logo {
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: -0.05em;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .logo span {
          color: var(--accent);
        }

        .nav-links {
          display: none;
          align-items: center;
          gap: 2rem;
        }

        @media (min-width: 1024px) {
          .nav-links {
            display: flex;
          }
        }

        .nav-link {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          cursor: pointer;
          position: relative;
          padding: 0.5rem 0;
          transition: color var(--transition-smooth);
        }

        .nav-link:hover, .nav-link.active {
          color: var(--text-primary);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--accent);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform var(--transition-smooth);
        }

        .nav-link:hover::after, .nav-link.active::after {
          transform: scaleX(1);
          transform-origin: left;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .nav-btn {
          width: 38px;
          height: 38px;
          border-radius: 0.5rem;
          border: 1px solid var(--border-color);
          background: transparent;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-smooth);
          position: relative;
        }

        .nav-btn:hover {
          background: var(--bg-tertiary);
          border-color: var(--accent);
          color: var(--accent);
        }

        /* Accent Color Selector styling */
        .color-picker-dropdown {
          position: absolute;
          top: 50px;
          right: 0;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          padding: 0.75rem;
          box-shadow: var(--card-shadow);
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          min-width: 160px;
          animation: dropdownFade 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes dropdownFade {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .color-option {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.35rem 0.5rem;
          border-radius: 0.35rem;
          width: 100%;
          border: none;
          background: transparent;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 500;
          transition: all var(--transition-smooth);
        }

        .color-option:hover, .color-option.active {
          background: var(--bg-tertiary);
          color: var(--text-primary);
        }

        .color-dot {
          width: 14px;
          height: 14px;
          border-radius: 50%;
          border: 2px solid transparent;
        }

        .color-option.active .color-dot {
          border-color: var(--text-primary);
          transform: scale(1.15);
        }

        /* Mobile menu toggle */
        .mobile-toggle {
          display: flex;
        }

        @media (min-width: 1024px) {
          .mobile-toggle {
            display: none;
          }
        }

        /* Drawer Overlay */
        .mobile-drawer {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 45;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          transition: opacity 0.3s ease;
          opacity: 0;
          pointer-events: none;
        }

        .mobile-drawer.open {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-drawer-content {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 280px;
          background: var(--bg-secondary);
          border-left: 1px solid var(--border-color);
          padding: 5rem 2rem 2rem 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-drawer.open .mobile-drawer-content {
          transform: translateX(0);
        }

        .mobile-nav-link {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--text-secondary);
          padding: 0.5rem 0;
          border-bottom: 1px solid var(--border-color);
          cursor: pointer;
        }

        .mobile-nav-link.active {
          color: var(--accent);
          border-bottom-color: var(--accent);
        }
      `}</style>

      <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          {/* Logo */}
          <div className="logo" onClick={() => handleNavLinkClick("home")}>
            Mohan<span>.Gupta</span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="nav-links">
            {navLinks.map((link) => (
              <span
                key={link.id}
                className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                onClick={() => handleNavLinkClick(link.id)}
              >
                {link.label}
              </span>
            ))}
          </nav>

          {/* Customizer actions & Theme toggle */}
          <div className="nav-actions">
            {/* Color Accent Picker */}
            <div style={{ position: "relative" }}>
              <button
                className="nav-btn"
                title="Select Accent Theme"
                onClick={() => setShowColorPicker(!showColorPicker)}
              >
                <Icons.Palette size={20} />
              </button>

              {showColorPicker && (
                <div className="color-picker-dropdown">
                  <div style={{ fontSize: "0.7rem", fontWeight: "bold", textTransform: "uppercase", color: "var(--text-muted)", padding: "0 0.5rem 0.25rem 0.5rem" }}>
                    Accent Highlight
                  </div>
                  {accents.map((acc) => (
                    <button
                      key={acc.key}
                      className={`color-option ${accent === acc.key ? "active" : ""}`}
                      onClick={() => {
                        setAccent(acc.key);
                        setShowColorPicker(false);
                      }}
                    >
                      <span className="color-dot" style={{ backgroundColor: acc.color }}></span>
                      <span>{acc.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Dark / Light toggle */}
            <button
              className="nav-btn"
              onClick={toggleTheme}
              title={theme === "dark" ? "Toggle Light Theme" : "Toggle Dark Theme"}
            >
              {theme === "dark" ? <Icons.Sun size={20} /> : <Icons.Moon size={20} />}
            </button>

            {/* Resume Call to Action */}
            <button 
              className="btn btn-primary" 
              style={{ display: "none", padding: "0.5rem 1rem", fontSize: "0.85rem", height: "38px" }} 
              onClick={() => handleNavLinkClick("contact")}
              id="desktop-hire-btn"
            >
              Hire Me
            </button>

            {/* Mobile Menu Burger Toggle */}
            <button
              className="nav-btn mobile-toggle"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
            >
              <Icons.Menu size={24} />
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="scroll-indicator" style={{ width: `${scrollProgress}%` }}></div>
      </header>

      {/* Hire button display helper */}
      <style jsx global>{`
        @media (min-width: 640px) {
          #desktop-hire-btn {
            display: inline-flex !important;
          }
        }
      `}</style>

      {/* Mobile Drawer Navigation */}
      <div 
        className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`} 
        onClick={() => setMobileMenuOpen(false)}
      >
        <div className="mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
          {/* Close trigger */}
          <button
            className="nav-btn"
            style={{ position: "absolute", top: "16px", right: "16px" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Icons.Close size={24} />
          </button>

          {/* Nav Items list */}
          {navLinks.map((link) => (
            <span
              key={link.id}
              className={`mobile-nav-link ${activeSection === link.id ? "active" : ""}`}
              onClick={() => handleNavLinkClick(link.id)}
            >
              {link.label}
            </span>
          ))}

          {/* Quick contact context */}
          <div style={{ marginTop: "auto", fontSize: "0.8rem", color: "var(--text-secondary)" }}>
            <p>mohangupta.react@gmail.com</p>
            <p style={{ marginTop: "0.25rem" }}> Gurugram, India</p>
          </div>
        </div>
      </div>
    </>
  );
}
