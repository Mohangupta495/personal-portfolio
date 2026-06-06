"use client";

import React, { useState } from "react";
import ScrollReveal from "./ui/ScrollReveal";
import { Icons } from "./ui/Icons";

interface JobHighlight {
  role: string;
  company: string;
  location: string;
  duration: string;
  points: string[];
  techStack: string[];
}

export default function Experience() {
  const [activeJobIndex, setActiveJobIndex] = useState(0);

  const jobsData: JobHighlight[] = [
    {
      role: "SDE-1 – Frontend Engineer",
      company: "Agrim Wholesale Pvt. Ltd.",
      location: "Gurugram, India",
      duration: "Apr 2025 – Present",
      points: [
        "Architected a React Native product-catalogue browser with advanced multi-level search and filtering across 10,000+ SKUs, reducing item discovery time for B2B retailers by 40%.",
        "Engineered a seamless multi-step checkout checkout flow with volume-based pricing charts, order summaries, and secure payment integrations.",
        "Implemented an offline-first local state structure and bandwidth-aware image caching utilizing SQLite, keeping the app 100% responsive in rural, low-connectivity zones.",
        "Created query schemas and optimized GraphQL query payloads, collaborating on RESTful endpoint structures to trim overall data payloads by ~35%.",
        "Synchronized inventory updates, pricing updates, and checkout states dynamically across the Mobile app, public Web Portal, and internal Seller Portal in real-time."
      ],
      techStack: ["React Native", "TypeScript", "Redux Toolkit", "GraphQL", "SQLite", "REST APIs", "App Store / Google Play"]
    },
    {
      role: "React Native Developer",
      company: "Codeplay Labs",
      location: "Remote",
      duration: "Jan 2023 – Mar 2025",
      points: [
        "Spearheaded real-time communication tools leveraging WebRTC peer connections and WebSockets for stable live audio and video synchronization.",
        "Analyzed JavaScript memory footprints and rendered structures using Flipper and React DevTools, trimming overall JS bundle size by 28% via tree-shaking and dynamic imports.",
        "Engineered localized i18n support across 5+ international languages, expanding product usability to a global user base.",
        "Integrated ESLint, Prettier, Jest unit tests, and React Native Testing Library components inside CI/CD automation checks to ensure high code quality."
      ],
      techStack: ["React Native", "React.js", "TypeScript", "Zustand", "WebRTC", "WebSockets", "Jest", "i18n", "CI/CD"]
    },
    {
      role: "Junior Frontend Developer",
      company: "Ridobiko Solutions",
      location: "Noida, India",
      duration: "Jul 2021 – Dec 2022",
      points: [
        "Designed and maintained responsive, pixel-perfect web interfaces using modern React.js component design models and Tailwind CSS.",
        "Integrated PHP server-side API logic with frontend architectures, enhancing user engagement and behavior tracking metrics by 22%.",
        "Investigated and resolved visual defects and UI differences across Apple iOS, Google Android, and web browser environments.",
        "Assisted in development release workflows, covering TestFlight beta builds, QA validations, and Google Play Console release management."
      ],
      techStack: ["React.js", "Tailwind CSS", "PHP", "Git", "TestFlight", "Google Play Console", "HTML/CSS"]
    }
  ];

  return (
    <>
      <style jsx>{`
        .exp-container {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        @media (min-width: 1024px) {
          .exp-container {
            grid-template-columns: 0.8fr 1.2fr;
          }
        }

        .tabs-list {
          display: flex;
          flex-direction: row;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }

        @media (min-width: 1024px) {
          .tabs-list {
            flex-direction: column;
            overflow-x: visible;
            padding-bottom: 0;
            border-left: 2px solid var(--border-color);
            gap: 0;
          }
        }

        .tab-btn {
          padding: 0.75rem 1rem;
          font-size: 0.85rem;
          font-weight: 700;
          text-align: left;
          background: transparent;
          border: 1px solid var(--border-color);
          border-radius: 0.5rem;
          color: var(--text-secondary);
          cursor: pointer;
          white-space: nowrap;
          transition: all var(--transition-smooth);
        }

        @media (min-width: 1024px) {
          .tab-btn {
            border: none;
            border-radius: 0;
            border-left: 2px solid transparent;
            margin-left: -2px;
            padding: 1rem 1.5rem;
            font-size: 0.95rem;
          }
        }

        .tab-btn:hover {
          color: var(--accent);
          background: var(--bg-tertiary);
        }

        .tab-btn.active {
          color: var(--accent);
          border-color: var(--accent);
          background: rgba(var(--accent-rgb), 0.05);
        }

        @media (min-width: 1024px) {
          .tab-btn.active {
            border-left-color: var(--accent);
            background: rgba(var(--accent-rgb), 0.05);
          }
        }

        .detail-panel {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: var(--card-shadow);
          transition: all var(--transition-smooth);
        }

        .job-title {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
        }

        .job-title span {
          color: var(--accent);
        }

        .job-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-family: var(--font-mono);
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-color);
        }

        .points-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .point-item {
          position: relative;
          padding-left: 1.5rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .point-item::before {
          content: '→';
          position: absolute;
          left: 0;
          top: 0;
          color: var(--accent);
          font-weight: bold;
        }

        .tech-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        /* Glow placement */
        .glow-exp {
          bottom: -15%;
          left: 10%;
          background: rgba(var(--accent-rgb), calc(var(--glow-opacity) * 0.7));
        }
      `}</style>

      <section id="experience" className="section">
        <div className="glow-blur glow-exp"></div>

        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">
              Professional <span>Journey</span>
            </h2>
            <p className="section-subtitle">
              SDE roles and engineering achievements deployed across SaaS, B2B wholesale, and real-time streaming platforms.
            </p>
          </ScrollReveal>

          <div className="exp-container">
            {/* Sidebar selection tabs */}
            <ScrollReveal delayClass="reveal-delay-100">
              <div className="tabs-list">
                {jobsData.map((job, idx) => (
                  <button
                    key={job.company}
                    className={`tab-btn ${activeJobIndex === idx ? "active" : ""}`}
                    onClick={() => setActiveJobIndex(idx)}
                  >
                    {job.company}
                  </button>
                ))}
              </div>
            </ScrollReveal>

            {/* Role details panel */}
            <ScrollReveal delayClass="reveal-delay-200">
              <div className="detail-panel">
                <h3 className="job-title">
                  {jobsData[activeJobIndex].role} <span>@ {jobsData[activeJobIndex].company}</span>
                </h3>
                
                <div className="job-meta">
                  <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    <Icons.Location size={14} style={{ color: "var(--accent)" }} /> {jobsData[activeJobIndex].location}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    <Icons.Calendar size={14} style={{ color: "var(--accent)" }} /> {jobsData[activeJobIndex].duration}
                  </span>
                </div>

                <ul className="points-list">
                  {jobsData[activeJobIndex].points.map((point, idx) => (
                    <li key={idx} className="point-item">
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="tech-tags">
                  {jobsData[activeJobIndex].techStack.map((tech) => (
                    <span key={tech} className="badge badge-accent">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
