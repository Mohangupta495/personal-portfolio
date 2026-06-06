"use client";

import React from "react";
import { Icons } from "./ui/Icons";
import ScrollReveal from "./ui/ScrollReveal";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elRect = el.getBoundingClientRect().top;
      const elPos = elRect - bodyRect;
      const offsetPos = elPos - offset;

      window.scrollTo({
        top: offsetPos,
        behavior: "smooth"
      });
    }
  };

  const handleDownloadResume = () => {
    // Generate simple dynamic text file as resume mock for demo purposes
    const content = `MOHAN GUPTA - SDE Frontend & React Native Developer
Email: mohangupta.react@gmail.com
LinkedIn: linkedin.com/in/mohan-gupta
GitHub: github.com/Mohangupta495

SUMMARY
Results-driven Frontend Developer with 4+ years of experience architecting and deploying high-performance cross-platform mobile and web applications. Specializing in React Native, React.js, and Next.js.

SKILLS
- Mobile: React Native, Android/iOS Deployment, SQLite caching, Geo-fencing APIs
- Frontend: React.js, Next.js, TypeScript, Redux, Zustand, HTML5/CSS3, Tailwind CSS
- Real-Time: WebRTC, WebSockets, REST APIs, GraphQL
- Tools: Git, ESLint, Prettier, Jest, TestFlight, Google Play Console

EXPERIENCE
- Agrim Wholesale Pvt. Ltd. (SDE-1 - Frontend Engineer), Apr 2025 - Present
- Codeplay Labs (React Native Developer), Jan 2023 - Mar 2025
- Ridobiko Solutions (Junior Frontend Developer), Jul 2021 - Dec 2022
`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Mohan_Gupta_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding-top: 80px; /* navbar padding */
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        @media (min-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1.2fr 0.8fr;
          }
        }

        .hero-tag {
          font-family: var(--font-mono);
          color: var(--accent);
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .hero-tag::before {
          content: '';
          width: 20px;
          height: 2px;
          background: var(--accent);
        }

        .hero-title {
          font-size: 2.75rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 4rem;
          }
        }

        .hero-title span {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-desc {
          font-size: 1.1rem;
          max-width: 620px;
          margin-bottom: 2rem;
          color: var(--text-secondary);
        }

        .hero-desc strong {
          color: var(--text-primary);
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          padding: 1.5rem 0;
          border-top: 1px solid var(--border-color);
          max-width: 500px;
        }

        .stat-item h3 {
          font-size: 1.75rem;
          color: var(--accent);
          font-weight: 800;
          margin-bottom: 0.25rem;
        }

        @media (min-width: 640px) {
          .stat-item h3 {
            font-size: 2.25rem;
          }
        }

        .stat-item p {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: bold;
        }

        /* Tech badges floating on the right side */
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .floating-cards-container {
          width: 300px;
          height: 300px;
          position: relative;
        }

        .floating-card {
          position: absolute;
          background: var(--glass-bg);
          border: 1px solid var(--border-color);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          padding: 0.85rem 1.25rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          box-shadow: var(--card-shadow);
          animation: floatAnimation 6s infinite ease-in-out;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .floating-card span {
          font-size: 1.25rem;
        }

        .card-1 {
          top: 10%;
          left: 10%;
          border-color: rgba(var(--accent-rgb), 0.3);
          animation-delay: 0s;
        }

        .card-2 {
          bottom: 15%;
          right: 5%;
          animation-delay: 1.5s;
        }

        .card-3 {
          top: 55%;
          left: -5%;
          animation-delay: 3s;
        }

        .card-4 {
          top: 30%;
          right: -10%;
          border-color: rgba(var(--accent-rgb), 0.3);
          animation-delay: 4.5s;
        }

        @keyframes floatAnimation {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(2deg);
          }
        }

        /* BG Glow positions */
        .glow-hero-1 {
          top: -10%;
          right: -10%;
          background: rgba(var(--accent-rgb), calc(var(--glow-opacity) * 1.5));
        }

        .glow-hero-2 {
          bottom: 10%;
          left: -10%;
        }
      `}</style>

      <section id="home" className="hero">
        {/* Glow Effects */}
        <div className="glow-blur glow-hero-1"></div>
        <div className="glow-blur glow-hero-2"></div>

        <div className="container">
          <div className="hero-grid">
            
            {/* Left Content Column */}
            <div>
              <ScrollReveal>
                <div className="hero-tag">SDE-1 Frontend / React Native Specialist</div>
              </ScrollReveal>
              
              <ScrollReveal delayClass="reveal-delay-100">
                <h1 className="hero-title">
                  Building High-Performance <span>Mobile & Web</span> Products.
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delayClass="reveal-delay-200">
                <p className="hero-desc">
                  Hi, I&apos;m <strong>Mohan Gupta</strong>. I engineer production-grade Android, iOS, and Web solutions. Specializing in <strong>offline-first architectures</strong>, SQLite caching, real-time communication via <strong>WebRTC/WebSockets</strong>, and bundle optimizations.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delayClass="reveal-delay-300">
                <div className="hero-ctas">
                  <button onClick={() => handleScrollTo("projects")} className="btn btn-primary">
                    View Deployed Apps <Icons.ExternalLink size={16} />
                  </button>
                  <button onClick={() => handleScrollTo("contact")} className="btn btn-secondary">
                    Get in Touch
                  </button>
                  <button onClick={handleDownloadResume} className="btn btn-secondary" style={{ borderStyle: "dashed" }}>
                    <Icons.Download size={16} /> Download Resume
                  </button>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delayClass="reveal-delay-400">
                <div className="hero-stats">
                  <div className="stat-item">
                    <h3>4+</h3>
                    <p>Years Exp</p>
                  </div>
                  <div className="stat-item">
                    <h3>5L+</h3>
                    <p>Downloads</p>
                  </div>
                  <div className="stat-item">
                    <h3>6+</h3>
                    <p>Shipped Apps</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Visual Floating Cloud */}
            <div className="hero-visual">
              <ScrollReveal delayClass="reveal-delay-200">
                <div className="floating-cards-container">
                  <div className="floating-card card-1">
                    <Icons.Mobile size={18} style={{ color: "var(--accent)" }} /> React Native
                  </div>
                  <div className="floating-card card-2">
                    <Icons.Web size={18} style={{ color: "var(--accent)" }} /> Next.js / React
                  </div>
                  <div className="floating-card card-3">
                    <Icons.WebRTC size={18} style={{ color: "var(--accent)" }} /> WebRTC Call
                  </div>
                  <div className="floating-card card-4">
                    <Icons.Zap size={18} style={{ color: "var(--accent)" }} /> GraphQL / REST
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
