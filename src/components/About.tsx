"use client";

import React from "react";
import { Icons } from "./ui/Icons";
import ScrollReveal from "./ui/ScrollReveal";

export default function About() {
  const corePillars = [
    {
      icon: <Icons.Database size={32} />,
      title: "Offline-First Architect",
      desc: "Designed SQLite local databases and bandwidth-aware caching strategies, securing stable app response for users in rural low-connectivity areas."
    },
    {
      icon: <Icons.Code size={32} />,
      title: "Performance Engineer",
      desc: "Audited codebases using Flipper and React DevTools, trimming bundle sizes by 28% and optimizing payload requests (GraphQL / REST) by 35%."
    },
    {
      icon: <Icons.WebRTC size={32} />,
      title: "Real-Time Systems",
      desc: "Implemented WebRTC video intercoms, WebSocket notification triggers, and zero-latency deep link redirection across hardware and software."
    },
    {
      icon: <Icons.Mobile size={32} />,
      title: "Store Specialist",
      desc: "Managed end-to-end releases from TestFlight/Google Beta pipelines to public rollouts, aligning and syncing Web, Mobile, and Admin dashboards."
    }
  ];

  return (
    <>
      <style jsx>{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr 1.1fr;
          }
        }

        .bio-lead {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .bio-text {
          margin-bottom: 1.25rem;
          font-size: 1rem;
          color: var(--text-secondary);
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 640px) {
          .pillars-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .pillar-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: all var(--transition-smooth);
        }

        .pillar-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(var(--accent-rgb), 0.05);
        }

        .pillar-icon {
          color: var(--accent);
          margin-bottom: 1rem;
          display: inline-block;
        }

        .pillar-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .pillar-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Glow placement */
        .glow-about {
          bottom: -10%;
          right: 20%;
          background: rgba(var(--accent-rgb), calc(var(--glow-opacity) * 0.8));
        }
      `}</style>

      <section id="about" className="section">
        {/* Glow */}
        <div className="glow-blur glow-about"></div>

        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">
              Engineering <span>Value</span>
            </h2>
            <p className="section-subtitle">
              SDE focusing on user-centric cross-platform application execution, speed, and real-world efficiency.
            </p>
          </ScrollReveal>

          <div className="about-grid">
            {/* Bio Info Column */}
            <ScrollReveal delayClass="reveal-delay-100">
              <div>
                <p className="bio-lead">
                  I bridge the gap between design vision, hardware interactions, and scalable frontend logic.
                </p>
                <p className="bio-text">
                  With over 4 years in mobile and web software development, my career centers on shipping production applications that work smoothly under any circumstance—whether it&apos;s a gig worker checks-in using offline geofences in low connectivity or a resident answering WebRTC video gates instantly.
                </p>
                <p className="bio-text">
                  My stack focuses on <strong>React Native, TypeScript, and React/Next.js</strong>. I am comfortable working with SQL local databases (SQLite), complex states (Redux/Zustand), and data layer synchronization (GraphQL/WebSockets) to ensure consistency across multiple parallel platforms.
                </p>
                <p className="bio-text" style={{ margin: 0 }}>
                  I hold a Master of Computer Applications (M.C.A.) degree, giving me strong backend and computer science fundamentals that translate directly into clean, maintainable architecture.
                </p>
              </div>
            </ScrollReveal>

            {/* Core Technical Pillars Column */}
            <ScrollReveal delayClass="reveal-delay-200">
              <div className="pillars-grid">
                {corePillars.map((pillar, index) => (
                  <div key={index} className="pillar-card">
                    <span className="pillar-icon">{pillar.icon}</span>
                    <h3 className="pillar-title">{pillar.title}</h3>
                    <p className="pillar-desc">{pillar.desc}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
