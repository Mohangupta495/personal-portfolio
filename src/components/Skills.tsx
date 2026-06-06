"use client";

import React, { useState } from "react";
import { Icons } from "./ui/Icons";
import ScrollReveal from "./ui/ScrollReveal";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<"all" | "mobile" | "web" | "realtime" | "tools">("all");

  const skillCategories: { id: "all" | "mobile" | "web" | "realtime" | "tools"; label: string }[] = [
    { id: "all", label: "All Skills" },
    { id: "mobile", label: "Mobile Dev" },
    { id: "web", label: "Frontend Web" },
    { id: "realtime", label: "Real-Time / Data" },
    { id: "tools", label: "Tools / QA" }
  ];

  const skillsData = [
    // Mobile
    { name: "React Native", category: "mobile", level: 95, icon: <Icons.React size={18} />, details: "Android/iOS build pipelines, SQLite storage integrations" },
    { name: "SQLite Caching", category: "mobile", level: 90, icon: <Icons.Database size={18} />, details: "Offline-first sync databases, data persistency profiles" },
    { name: "Geo-Fencing APIs", category: "mobile", level: 85, icon: <Icons.Location size={18} />, details: "Real-time coordinate checks, background coordinates fetching" },
    { name: "App Store & Play Store Console", category: "mobile", level: 88, icon: <Icons.Mobile size={18} />, details: "Production rollouts, beta pipelines, TestFlight pipelines" },
    
    // Web
    { name: "React.js", category: "web", level: 95, icon: <Icons.React size={18} />, details: "Component models, custom hooks, context state management" },
    { name: "Next.js", category: "web", level: 90, icon: <Icons.Web size={18} />, details: "App directory routes, Server components, SEO optimizations" },
    { name: "Redux Toolkit / Zustand", category: "web", level: 92, icon: <Icons.Layers size={18} />, details: "Global stores configuration, actions dispatching, states persisting" },
    { name: "Tailwind CSS & CSS Grid", category: "web", level: 90, icon: <Icons.Web size={18} />, details: "Responsive mobile-first pages, dynamic visual keyframes" },

    // Realtime
    { name: "WebRTC calling", category: "realtime", level: 85, icon: <Icons.WebRTC size={18} />, details: "Peer connections synchronization, audio/video channels" },
    { name: "WebSockets", category: "realtime", level: 88, icon: <Icons.WebRTC size={18} />, details: "Live feeds integration, instant chat notification triggers" },
    { name: "GraphQL & Apollo Client", category: "realtime", level: 86, icon: <Icons.Layers size={18} />, details: "Queries optimization, variables fetching, payloads reduction" },
    { name: "REST APIs Integration", category: "realtime", level: 92, icon: <Icons.Layers size={18} />, details: "JSON feeds fetch, headers validation, error fallbacks" },

    // Tools
    { name: "TypeScript", category: "tools", level: 92, icon: <Icons.Code size={18} />, details: "Strict interfaces mapping, generic definitions, strict typing" },
    { name: "Jest & RN Testing Library", category: "tools", level: 82, icon: <Icons.Award size={18} />, details: "Component rendering tests, unit mocks assertions" },
    { name: "Flipper & React DevTools", category: "tools", level: 88, icon: <Icons.Info size={18} />, details: "Memory leak analysis, state profiling, load optimizations" },
    { name: "Git & CI/CD Pipelines", category: "tools", level: 90, icon: <Icons.GitHub size={18} />, details: "Workflow branch structures, conflict resolutions, automation hooks" }
  ];

  const filteredSkills = activeCategory === "all" 
    ? skillsData 
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <>
      <style jsx>{`
        .skills-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 3rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        @media (min-width: 640px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .skill-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 180px;
          transition: all var(--transition-smooth);
        }

        .skill-card:hover {
          border-color: var(--accent);
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(var(--accent-rgb), 0.08);
        }

        .skill-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.5rem;
        }

        .skill-name-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 700;
          font-size: 0.95rem;
        }

        .skill-icon-wrap {
          color: var(--accent);
        }

        .skill-level-text {
          font-size: 0.8rem;
          font-weight: bold;
          font-family: var(--font-mono);
          color: var(--accent);
        }

        .skill-details {
          font-size: 0.75rem;
          color: var(--text-secondary);
          line-height: 1.4;
          margin-bottom: 1rem;
          flex: 1;
        }

        .skill-progress-bg {
          height: 4px;
          background: var(--border-color);
          border-radius: 99px;
          overflow: hidden;
        }

        .skill-progress-fill {
          height: 100%;
          background: var(--accent-gradient);
          border-radius: 99px;
          transition: width 1.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Glow Skills */
        .glow-skills {
          top: 15%;
          left: 5%;
          background: rgba(var(--accent-rgb), calc(var(--glow-opacity) * 0.7));
        }
      `}</style>

      {/* Global selector rules */}
      <style jsx global>{`
        .skill-icon-wrap svg {
          display: block;
        }
      `}</style>

      <section id="skills" className="section">
        {/* Glow */}
        <div className="glow-blur glow-skills"></div>

        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">
              Technical <span>Weapons</span>
            </h2>
            <p className="section-subtitle">
              A detailed breakdown of my toolbelt, classified by application fields, along with specific implementation cases.
            </p>
          </ScrollReveal>

          {/* Categories Tab Selector */}
          <ScrollReveal delayClass="reveal-delay-100">
            <div className="skills-tabs">
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  className={`btn ${activeCategory === cat.id ? "btn-primary" : "btn-secondary"}`}
                  style={{ padding: "0.5rem 1rem", borderRadius: "999px", fontSize: "0.85rem" }}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Skills Grid */}
          <div className="skills-grid">
            {filteredSkills.map((skill, index) => (
              <ScrollReveal
                key={skill.name}
                delayClass={`reveal-delay-${(index % 4) * 100}`}
                animationClass="reveal-element"
              >
                <div className="skill-card">
                  <div>
                    <div className="skill-header">
                      <div className="skill-name-container">
                        <span className="skill-icon-wrap">{skill.icon}</span>
                        <span>{skill.name}</span>
                      </div>
                      <span className="skill-level-text">{skill.level}%</span>
                    </div>
                    <p className="skill-details">{skill.details}</p>
                  </div>
                  <div>
                    <div className="skill-progress-bg">
                      <div
                        className="skill-progress-fill"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
