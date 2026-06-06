"use client";

import React from "react";
import { Icons } from "./ui/Icons";
import ScrollReveal from "./ui/ScrollReveal";

export default function Education() {
  const educationData = [
    {
      degree: "M.C.A. (Master of Computer Applications)",
      institution: "Chaudhary Charan Singh University, Meerut, India",
      duration: "2019 – 2021",
      details: "Focused on core Computer Science principles, Advanced Database Management Systems, System Architecture, and Object-Oriented Software Design patterns."
    },
    {
      degree: "B.C.A. (Bachelor of Computer Applications)",
      institution: "Chaudhary Charan Singh University, Meerut, India",
      duration: "2016 – 2019",
      details: "Introduction to Algorithm Design, Data Structures, Web Development fundamentals (HTML/CSS/JS), and software project workflows."
    }
  ];

  const milestones = [
    {
      title: "5L+ Deployed Users Impact",
      description: "Engineered buyer-side B2B mobile systems supporting massive retailer checkouts, syncing transactions across multiple Indian states.",
      icon: <Icons.Mobile size={24} />
    },
    {
      title: "Optimized Load Performance",
      description: "Trimmed JavaScript bundle files size by 28% and query payloads size by 35% through modular routing, tree-shaking, and Apollo query optimizations.",
      icon: <Icons.Code size={24} />
    },
    {
      title: "Hardware WebRTC Intercoms",
      description: "Linked intercom audio-video streaming with physical QR gates, establishing remote lock controllers.",
      icon: <Icons.WebRTC size={24} />
    },
    {
      title: "100% Offline Caching Availability",
      description: "Built SQLite local persistence states and image loaders, keeping applications fully responsive under poor networks in agricultural areas.",
      icon: <Icons.Database size={24} />
    }
  ];

  return (
    <>
      <style jsx>{`
        .edu-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
        }

        @media (min-width: 1024px) {
          .edu-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .edu-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 1rem;
          padding: 2rem;
          margin-bottom: 1.5rem;
          position: relative;
          transition: all var(--transition-smooth);
        }

        .edu-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(var(--accent-rgb), 0.05);
        }

        .edu-icon-badge {
          position: absolute;
          top: 2rem;
          right: 2rem;
          color: var(--accent);
          background: rgba(var(--accent-rgb), 0.1);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .degree-title {
          font-size: 1.25rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          max-width: 80%;
        }

        .inst-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .edu-duration {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent);
          font-weight: bold;
          margin-bottom: 1rem;
          display: inline-block;
        }

        .edu-details {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Achievements column */
        .milestones-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .milestone-item {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 1rem;
          padding: 1.5rem;
          display: flex;
          gap: 1.25rem;
          align-items: flex-start;
          transition: all var(--transition-smooth);
        }

        .milestone-item:hover {
          border-color: var(--accent);
          transform: translateX(4px);
        }

        .milestone-icon {
          color: var(--accent);
          background: rgba(var(--accent-rgb), 0.1);
          width: 50px;
          height: 50px;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .milestone-info h4 {
          font-size: 1.05rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .milestone-info p {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Glow placements */
        .glow-edu {
          top: -10%;
          left: 30%;
          background: rgba(var(--accent-rgb), calc(var(--glow-opacity) * 0.6));
        }
      `}</style>

      <section id="education" className="section">
        <div className="glow-blur glow-edu"></div>

        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">
              Education & <span>Milestones</span>
            </h2>
            <p className="section-subtitle">
              Schooldays foundation meeting developer career highlights.
            </p>
          </ScrollReveal>

          <div className="edu-grid">
            {/* Education Column */}
            <div>
              <ScrollReveal delayClass="reveal-delay-100">
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "2rem" }}>Academic Roots</h3>
              </ScrollReveal>

              {educationData.map((edu, idx) => (
                <ScrollReveal key={edu.degree} delayClass={`reveal-delay-${idx * 150}`}>
                  <div className="edu-card">
                    <div className="edu-icon-badge">
                      <Icons.Education size={20} />
                    </div>
                    <h4 className="degree-title">{edu.degree}</h4>
                    <div className="inst-title">{edu.institution}</div>
                    <span className="edu-duration">{edu.duration}</span>
                    <p className="edu-details">{edu.details}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Career Highlights Column */}
            <div>
              <ScrollReveal delayClass="reveal-delay-100">
                <h3 style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "2rem" }}>Career Milestones</h3>
              </ScrollReveal>

              <div className="milestones-list">
                {milestones.map((ms, idx) => (
                  <ScrollReveal key={ms.title} delayClass={`reveal-delay-${idx * 100}`}>
                    <div className="milestone-item">
                      <div className="milestone-icon">{ms.icon}</div>
                      <div className="milestone-info">
                        <h4>{ms.title}</h4>
                        <p>{ms.description}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
