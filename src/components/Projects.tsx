"use client";

import React, { useState } from "react";
import DeviceFrame from "./ui/DeviceFrame";
import ScrollReveal from "./ui/ScrollReveal";
import { Icons } from "./ui/Icons";

interface ProjectDetails {
  key: "agrim-retail" | "agrim-star" | "doorvi" | "vani-meetings" | "doorvi-web" | "doorman" | "agrim-seller" | "bolo";
  title: string;
  type: "mobile" | "web";
  deviceType: "iphone" | "android" | "browser";
  links: { label: string; url: string; icon?: React.ReactNode }[];
  overview: string;
  features: string[];
  challenges: string;
  impact: string;
  techStack: string[];
  iframeUrl?: string;
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "mobile" | "web">("all");
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(null);
  const [modalTab, setModalTab] = useState<"details" | "iframe">("details");

  const handleOpenModal = (proj: ProjectDetails) => {
    setSelectedProject(proj);
    setModalTab("details");
  };

  const projectsData: ProjectDetails[] = [
    {
      key: "agrim-retail",
      title: "Agrim Retailer App",
      type: "mobile",
      deviceType: "android",
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.agrim.agrim&hl=en_IN", icon: <Icons.GooglePlay size={14} /> },
        { label: "agrim.app", url: "https://agrim.app/", icon: <Icons.Globe size={14} /> }
      ],
      overview: "A business-to-business (B2B) agri-input commerce application connecting retail merchants across India with wholesale catalog distributions, hosting 60,000+ SKUs across seeds, fertilizers, and crop tools.",
      features: [
        "Dynamic volume pricing hierarchies matching retail order counts.",
        "Elastic product catalog indexing supporting quick queries and multi-attribute filters.",
        "SQLite persistent cache that handles offline catalog browsing and order queueing in low-connectivity areas."
      ],
      challenges: "Rural retailers frequently encounter unstable cellular connections (2G/3G transitions), causing screen freezes during checkout and slow image loads.",
      impact: "Slashed SKU discovery time by 40%. Engineered offline cache sync securing 100% app responsiveness in offline contexts, driving 5L+ downloads.",
      techStack: ["React Native", "TypeScript", "Redux", "GraphQL", "SQLite", "Android Deployment"],
      iframeUrl: "https://agrim.app/"
    },
    {
      key: "doorvi",
      title: "DoorVi Intercom App",
      type: "mobile",
      deviceType: "iphone",
      links: [
        { label: "App Store", url: "https://apps.apple.com/in/app/doorvi-door-video-intercom/id1634023696", icon: <Icons.Apple size={14} /> },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.doorvi", icon: <Icons.GooglePlay size={14} /> },
        { label: "doorvi.co", url: "https://www.doorvi.co/", icon: <Icons.Globe size={14} /> }
      ],
      overview: "A modern video intercom system utilizing WebRTC. It establishes direct calling connections between printed door QR codes, visitors, and residents without dedicated hardware units.",
      features: [
        "Direct WebRTC audio-video streaming peer sync.",
        "One-tap remote lock control integrations.",
        "Push notification rings that wake application listeners instantly upon bell ring actions."
      ],
      challenges: "Poor packet delivery rates over cellular networks caused high audio latency, screen lagging, and call drops.",
      impact: "Optimized STUN/TURN configurations and dynamic bitrate scaling to secure active WebRTC link integrity even on weak 3G networks.",
      techStack: ["React Native", "TypeScript", "Zustand", "WebRTC", "WebSockets", "Push Notifications"],
      iframeUrl: "https://www.doorvi.co/"
    },
    {
      key: "vani-meetings",
      title: "Vani Meetings Chat",
      type: "mobile",
      deviceType: "iphone",
      links: [
        { label: "App Store", url: "https://apps.apple.com/in/app/vani-meetings-share-screen/id6469126562", icon: <Icons.Apple size={14} /> },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.vani.meeting", icon: <Icons.GooglePlay size={14} /> }
      ],
      overview: "A multi-user mobile conferencing application optimized for low-bandwidth environments, incorporating audio channels, deep links, and synchronized threaded discussions.",
      features: [
        "Deep link paths enabling one-click lobby entries.",
        "Synchronized team message boards mapping conversational notes.",
        "Low-bandwidth audio channels keeping caller streams active without dropping."
      ],
      challenges: "Synchronizing state models for multiple concurrent speaking queues and updating live audio metrics without causing UI thread stuttering.",
      impact: "Constructed low-overhead UI wrappers inside Zustand, managing active speaker arrays with high performance.",
      techStack: ["React Native", "TypeScript", "Zustand", "WebRTC", "WebSockets", "iOS/Android Release"],
      iframeUrl: "https://vanimeetings.com/"
    },
    {
      key: "agrim-star",
      title: "Agrim SuperStar Portal",
      type: "mobile",
      deviceType: "android",
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.agrimsuperstar", icon: <Icons.GooglePlay size={14} /> },
        { label: "agrim.app", url: "https://agrim.app/", icon: <Icons.Globe size={14} /> }
      ],
      overview: "A workflow coordination application built for field-agent operations, onboarding funnels, gig rewards, and geofence tracking.",
      features: [
        "Geofenced check-in modules tracking operations range constraints.",
        "Multilingual localized forms (5+ languages) minimizing agent registration drop-offs.",
        "SQLite records storage syncing gig metrics."
      ],
      challenges: "Continuous GPS queries drained battery cells quickly, causing field devices to die before shift completions.",
      impact: "Structured coordinates collection intervals that scale query rates based on device movement speed metrics.",
      techStack: ["React Native", "TypeScript", "SQLite", "Geofencing APIs", "Localization (i18n)"],
      iframeUrl: "https://agrim.app/"
    },
    {
      key: "doorman",
      title: "Doorman by DoorVi",
      type: "mobile",
      deviceType: "android",
      links: [
        { label: "App Store", url: "https://apps.apple.com/in/app/doorman-by-doorvi/id6751529651", icon: <Icons.Apple size={14} /> },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.doorvi.doorman", icon: <Icons.GooglePlay size={14} /> },
        { label: "doorvi.co", url: "https://www.doorvi.co/", icon: <Icons.Globe size={14} /> }
      ],
      overview: "A dedicated resident-staff and doorman app designed to log visitors, alert residents, cross-verify QR check-ins, and trigger remote gate release operations.",
      features: [
        "Access history logging with active filter profiles.",
        "Real-time coordinate validation and visitor video check-in screens.",
        "Resident notification triggers on WebSocket loops."
      ],
      challenges: "Handling rapid checkout streams and maintaining active WebRTC lobby links without dropping connections.",
      impact: "Slid lobby connection retry routines and trimmed socket update loads to handle high B2B staff concurrency.",
      techStack: ["React Native", "TypeScript", "WebRTC", "WebSockets", "SQLite"],
      iframeUrl: "https://www.doorvi.co/"
    },
    {
      key: "agrim-seller",
      title: "Agrim Seller Portal",
      type: "mobile",
      deviceType: "android",
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.agrim.sell", icon: <Icons.GooglePlay size={14} /> },
        { label: "agrim.app", url: "https://agrim.app/", icon: <Icons.Globe size={14} /> }
      ],
      overview: "B2B seller portal application enabling manufacturers and distributors to create item catalogs, manage bulk supply listings, and monitor sales metrics.",
      features: [
        "Pricing sheets update controllers.",
        "Sales bids dashboard tracking pending transaction streams.",
        "Offline SQLite cache for listing modifications."
      ],
      challenges: "Maintaining large datasets lists and catalog pricing sync without blocking main thread processes.",
      impact: "Integrated paginated data fetching and background SQL queries batching, securing responsiveness.",
      techStack: ["React Native", "TypeScript", "Redux", "SQLite", "GraphQL"],
      iframeUrl: "https://agrim.app/"
    },
    {
      key: "bolo",
      title: "Bolo Social App",
      type: "mobile",
      deviceType: "android",
      links: [
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=bolo.codeplay.com.bolo&hl=en_IN", icon: <Icons.GooglePlay size={14} /> }
      ],
      overview: "A real-time group video chat and social streaming application designed for high-concurrency engagement and group calls.",
      features: [
        "Multi-party WebRTC video grids.",
        "Active speaker indicators with dynamic animations.",
        "In-app text chatting on WebSockets."
      ],
      challenges: "Bandwidth throttling on mobile networks causing audio distortion and pixelated video feeds.",
      impact: "Engineered automatic resolution drop-downs and audio-priority channels to protect sound feeds over weak links.",
      techStack: ["React Native", "TypeScript", "WebRTC", "WebSockets", "Zustand"],
      iframeUrl: "https://play.google.com/store/apps/details?id=bolo.codeplay.com.bolo&hl=en_IN"
    },
    {
      key: "doorvi-web",
      title: "DoorVi Web Platforms",
      type: "web",
      deviceType: "browser",
      links: [
        { label: "doorvi.co", url: "https://www.doorvi.co/", icon: <Icons.Globe size={14} /> },
        { label: "admin.doorvi.co", url: "https://admin.doorvi.co", icon: <Icons.Web size={14} /> }
      ],
      overview: "A dual-purpose web portal comprising the public-facing SEO-optimized marketing portal (SSR) and the internal admin panel for device configuration, resident logs, and access control.",
      features: [
        "WebSocket feed tracking live intercom rings.",
        "Dynamic chart visualizers monitoring hardware check-ins.",
        "Granular role-based user management panels."
      ],
      challenges: "Handling highly active WebSocket notification streams without rendering bottlenecks in log viewports.",
      impact: "Engineered rendering virtualizer lists and data updates batching, sustaining stable browser operations.",
      techStack: ["React.js", "WebSockets", "CSS Grid", "Chart dashboards", "Tailwind CSS"],
      iframeUrl: "https://www.doorvi.co/"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.type === filter);

  return (
    <>
      <style jsx>{`
        .proj-tabs {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 3rem;
        }

        .proj-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }

        @media (min-width: 768px) {
          .proj-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .proj-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .proj-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: var(--card-shadow);
          display: flex;
          flex-direction: column;
          height: 100%;
          transition: all var(--transition-smooth);
        }

        .proj-card:hover {
          border-color: var(--accent);
          transform: translateY(-4px);
          box-shadow: var(--card-shadow-hover);
        }

        .proj-preview-box {
          height: 240px;
          background: var(--bg-tertiary);
          border-bottom: 1px solid var(--border-color);
          position: relative;
          overflow: hidden;
        }

        .scale-frame {
          transform: scale(0.38);
          transform-origin: center center;
          pointer-events: none;
        }

        .proj-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .proj-card-title {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          font-weight: 800;
        }

        .proj-card-desc {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 1.25rem;
          flex: 1;
        }

        .proj-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 1.25rem;
        }

        /* Detail Modal Overlay */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: modalFade 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes modalFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-container {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 1.25rem;
          width: 100%;
          max-width: 960px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 30px 60px rgba(0,0,0,0.8);
          position: relative;
          display: grid;
          grid-template-columns: 1fr;
        }

        @media (min-width: 1024px) {
          .modal-container {
            grid-template-columns: 1.1fr 0.9fr;
            overflow: hidden;
            max-height: 85vh;
          }
        }

        .modal-left {
          padding: 2.5rem;
          overflow-y: auto;
        }

        .modal-right {
          background: var(--bg-tertiary);
          border-top: 1px solid var(--border-color);
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        @media (min-width: 1024px) {
          .modal-right {
            border-top: none;
            border-left: 1px solid var(--border-color);
            height: 100%;
          }
        }

        .modal-close-btn {
          position: absolute;
          top: 1.25rem;
          right: 1.25rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 10;
          transition: all var(--transition-smooth);
        }

        .modal-close-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: rotate(90deg);
        }

        /* Web / Browser Mock styles */
        .browser-mock {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: #0b0f19;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .browser-header {
          height: 30px;
          background: #1e293b;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          padding: 0 12px;
          gap: 6px;
        }

        .browser-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .browser-address {
          flex: 1;
          height: 18px;
          background: #0f172a;
          border-radius: 4px;
          margin: 0 30px;
          font-size: 0.6rem;
          color: #94a3b8;
          display: flex;
          align-items: center;
          padding: 0 8px;
        }

        .browser-content {
          flex: 1;
          padding: 16px;
          font-family: monospace;
          font-size: 0.7rem;
          color: #cbd5e1;
        }

        .dashboard-sim-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 10px;
          margin-top: 10px;
        }

        .dashboard-sim-card {
          background: #161e2e;
          border-radius: 6px;
          padding: 8px;
          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        .sim-bar-chart {
          display: flex;
          align-items: flex-end;
          gap: 6px;
          height: 50px;
          margin-top: 8px;
        }

        .sim-bar {
          flex: 1;
          background: var(--accent);
          border-radius: 2px;
          transition: height 0.5s ease;
        }

        /* Glow Projects */
        .glow-projects {
          top: 30%;
          right: 5%;
          background: rgba(var(--accent-rgb), calc(var(--glow-opacity) * 0.7));
        }
      `}</style>

      {/* Global CSS injections for frame alignment inside previews */}
      <style jsx global>{`
        .app-container[data-theme="light"] .browser-mock {
          background: #f8fafc;
          border-color: #e2e8f0;
        }
        .app-container[data-theme="light"] .browser-header {
          background: #cbd5e1;
          border-bottom-color: #cbd5e1;
        }
        .app-container[data-theme="light"] .browser-address {
          background: #f1f5f9;
          color: #64748b;
        }
        .app-container[data-theme="light"] .dashboard-sim-card {
          background: #ffffff;
          border-color: #e2e8f0;
          color: #0f172a;
        }
      `}</style>

      <section id="projects" className="section">
        <div className="glow-blur glow-projects"></div>

        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">
              Deployed <span>Products</span>
            </h2>
            <p className="section-subtitle">
              A comprehensive showcase of production applications shipped directly to the App Store and Google Play, alongside supporting administrator systems.
            </p>
          </ScrollReveal>

          {/* Filtering Tab buttons */}
          <ScrollReveal delayClass="reveal-delay-100">
            <div className="proj-tabs">
              <button
                className={`btn ${filter === "all" ? "btn-primary" : "btn-secondary"}`}
                style={{ padding: "0.5rem 1.25rem", borderRadius: "999px", fontSize: "0.85rem" }}
                onClick={() => setFilter("all")}
              >
                All Projects
              </button>
              <button
                className={`btn ${filter === "mobile" ? "btn-primary" : "btn-secondary"}`}
                style={{ padding: "0.5rem 1.25rem", borderRadius: "999px", fontSize: "0.85rem" }}
                onClick={() => setFilter("mobile")}
              >
                Mobile Apps
              </button>
              <button
                className={`btn ${filter === "web" ? "btn-primary" : "btn-secondary"}`}
                style={{ padding: "0.5rem 1.25rem", borderRadius: "999px", fontSize: "0.85rem" }}
                onClick={() => setFilter("web")}
              >
                Web Platforms
              </button>
            </div>
          </ScrollReveal>

          {/* Projects grid */}
          <div className="proj-grid">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal
                key={project.key}
                delayClass={`reveal-delay-${(idx % 3) * 100}`}
                animationClass="reveal-element"
              >
                <div className="proj-card">
                  {/* Scaled Device Preview Window */}
                  <div className="proj-preview-box flex-center">
                    {project.deviceType !== "browser" ? (
                      <div className="scale-frame">
                        <DeviceFrame deviceType={project.deviceType as "iphone" | "android"} projectKey={project.key as any} />
                      </div>
                    ) : (
                      <div style={{ padding: "20px", width: "90%", height: "90%" }}>
                        <div className="browser-mock">
                          <div className="browser-header">
                            <span className="browser-dot" style={{ backgroundColor: "#ef4444" }}></span>
                            <span className="browser-dot" style={{ backgroundColor: "#eab308" }}></span>
                            <span className="browser-dot" style={{ backgroundColor: "#22c55e" }}></span>
                            <div className="browser-address">admin.doorvi.co</div>
                          </div>
                          <div className="browser-content">
                            <div style={{ fontWeight: "bold", color: "var(--accent)", display: "flex", alignItems: "center", gap: "4px" }}>
                              <Icons.Check size={12} /> Access Console
                            </div>
                            <div className="dashboard-sim-grid">
                              <div className="dashboard-sim-card">
                                <div>Device Check-ins</div>
                                <div className="sim-bar-chart">
                                  <div className="sim-bar" style={{ height: "40px" }}></div>
                                  <div className="sim-bar" style={{ height: "30px" }}></div>
                                  <div className="sim-bar" style={{ height: "45px" }}></div>
                                  <div className="sim-bar" style={{ height: "20px" }}></div>
                                </div>
                              </div>
                              <div className="dashboard-sim-card flex-center" style={{ fontSize: "0.65rem", gap: "4px" }}>
                                <Icons.Bell size={12} style={{ color: "var(--accent)" }} /> 12 Rings
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content details summary */}
                  <div className="proj-content">
                    <h3 className="proj-card-title">{project.title}</h3>
                    <p className="proj-card-desc">{project.overview}</p>
                    
                    <div className="proj-tags">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <button
                      className="btn btn-secondary"
                      style={{ width: "100%", padding: "0.5rem", fontSize: "0.85rem" }}
                      onClick={() => handleOpenModal(project)}
                    >
                      View Deep Dive & Challenges
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {selectedProject && (
          <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
            <div className="modal-container" style={{ gridTemplateColumns: modalTab === "iframe" ? "1fr" : undefined }} onClick={(e) => e.stopPropagation()}>
              
              {/* Close trigger button */}
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                aria-label="Close detailed project summary"
              >
                ✕
              </button>

              {modalTab === "iframe" ? (
                /* Full bleed web preview browser frame */
                <div style={{ padding: "2rem", display: "flex", flexDirection: "column", width: "100%", height: "80vh" }}>
                  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                    <button 
                      className="btn btn-secondary"
                      style={{ padding: "0.3rem 0.75rem", fontSize: "0.7rem", borderRadius: "999px" }}
                      onClick={() => setModalTab("details")}
                    >
                      ← Back to Tech Specs
                    </button>
                    <span style={{ fontSize: "0.95rem", fontWeight: "bold", marginLeft: "10px", display: "flex", alignItems: "center" }}>
                      Live Browser: {selectedProject.title}
                    </span>
                  </div>
                  
                  <div className="browser-mock" style={{ flex: 1, height: "100%" }}>
                    <div className="browser-header">
                      <span className="browser-dot" style={{ backgroundColor: "#ef4444" }}></span>
                      <span className="browser-dot" style={{ backgroundColor: "#eab308" }}></span>
                      <span className="browser-dot" style={{ backgroundColor: "#22c55e" }}></span>
                      <div className="browser-address">
                        {selectedProject.iframeUrl || "https://google.com"}
                      </div>
                    </div>
                    <div style={{ flex: 1, position: "relative", height: "calc(100% - 30px)", background: "#fff" }}>
                      {selectedProject.iframeUrl && (
                        <iframe 
                          src={selectedProject.iframeUrl}
                          style={{ width: "100%", height: "100%", border: "none" }}
                          sandbox="allow-scripts allow-same-origin allow-forms"
                          title="Live Site Preview"
                        />
                      )}
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "8px", background: "rgba(15, 23, 42, 0.95)", borderTop: "1px solid var(--border-color)", color: "#94a3b8", fontSize: "0.65rem", textAlign: "center", zIndex: 10 }}>
                        If browser locks content due to framing restrictions, click to{" "}
                        <a 
                          href={selectedProject.iframeUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{ color: "var(--accent)", textDecoration: "underline", fontWeight: "bold" }}
                        >
                          open the website directly in a new tab instead
                        </a>.
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Split view details panel */
                <>
                  {/* Left Detail Scroll Column */}
                  <div className="modal-left">
                    {selectedProject.iframeUrl && (
                      <div className="modal-tabs" style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", borderBottom: "1px solid var(--border-color)", paddingBottom: "0.5rem" }}>
                        <button 
                          className={`btn ${modalTab === "details" ? "btn-primary" : "btn-secondary"}`}
                          style={{ padding: "0.4rem 0.85rem", fontSize: "0.75rem", borderRadius: "999px", display: "flex", alignItems: "center", gap: "4px" }}
                          onClick={() => setModalTab("details")}
                        >
                          <Icons.Code size={12} />
                          <span>Technical Specs</span>
                        </button>
                        <button 
                          className={`btn ${(modalTab as string) === "iframe" ? "btn-primary" : "btn-secondary"}`}
                          style={{ padding: "0.4rem 0.85rem", fontSize: "0.75rem", borderRadius: "999px", display: "flex", alignItems: "center", gap: "4px" }}
                          onClick={() => setModalTab("iframe")}
                        >
                          <Icons.Web size={12} />
                          <span>Live Web Preview</span>
                        </button>
                      </div>
                    )}

                    <span className="badge badge-accent" style={{ textTransform: "uppercase", marginBottom: "0.75rem", fontSize: "0.7rem" }}>
                      {selectedProject.type === "mobile" ? "Mobile Application" : "Web Application"}
                    </span>
                    
                    <h3 style={{ fontSize: "2rem", fontWeight: "800", marginBottom: "1.25rem" }}>
                      {selectedProject.title}
                    </h3>

                    <h4 style={{ fontWeight: "700", fontSize: "1rem", marginBottom: "0.5rem" }}>Overview</h4>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: "1.6", marginBottom: "1.5rem" }}>
                      {selectedProject.overview}
                    </p>

                    <h4 style={{ fontWeight: "700", fontSize: "1rem", marginBottom: "0.5rem" }}>Key Features Built</h4>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
                      {selectedProject.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ position: "relative", paddingLeft: "1.25rem", fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                          <span style={{ position: "absolute", left: 0, color: "var(--accent)", fontWeight: "bold" }}>•</span>
                          {feat}
                        </li>
                      ))}
                    </ul>

                    <div style={{ background: "rgba(239, 68, 68, 0.05)", borderLeft: "3px solid #ef4444", padding: "1rem", borderRadius: "4px", marginBottom: "1.5rem" }}>
                      <h4 style={{ fontWeight: "700", fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "0.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <Icons.AlertTriangle size={16} style={{ color: "#ef4444" }} /> Challenge Solved
                      </h4>
                      <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                        {selectedProject.challenges}
                      </p>
                    </div>

                    <div style={{ background: "rgba(16, 185, 129, 0.05)", borderLeft: "3px solid #10b981", padding: "1rem", borderRadius: "4px", marginBottom: "1.5rem" }}>
                      <h4 style={{ fontWeight: "700", fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "0.25rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <Icons.TrendingUp size={16} style={{ color: "#10b981" }} /> Impact & Performance
                      </h4>
                      <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: "1.5" }}>
                        {selectedProject.impact}
                      </p>
                    </div>

                    <h4 style={{ fontWeight: "700", fontSize: "1.05rem", marginBottom: "0.75rem" }}>Full Tech Stack</h4>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="badge badge-accent">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <h4 style={{ fontWeight: "700", fontSize: "1.05rem", marginBottom: "0.75rem" }}>Store Links & Demos</h4>
                    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                      {selectedProject.links.map((ln) => (
                        <a
                          key={ln.label}
                          href={ln.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-secondary"
                          style={{ padding: "0.5rem 1rem", fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "0.35rem" }}
                        >
                          {ln.icon}
                          <span>{ln.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Right Simulation Frame Column */}
                  <div className="modal-right">
                    {selectedProject.deviceType !== "browser" ? (
                      <DeviceFrame deviceType={selectedProject.deviceType as "iphone" | "android"} projectKey={selectedProject.key as any} />
                    ) : (
                      <div style={{ width: "90%", height: "300px" }}>
                        <div className="browser-mock">
                          <div className="browser-header">
                            <span className="browser-dot" style={{ backgroundColor: "#ef4444" }}></span>
                            <span className="browser-dot" style={{ backgroundColor: "#eab308" }}></span>
                            <span className="browser-dot" style={{ backgroundColor: "#22c55e" }}></span>
                            <div className="browser-address">admin.doorvi.co</div>
                          </div>
                          <div className="browser-content" style={{ fontSize: "0.75rem", padding: "20px" }}>
                            <div style={{ color: "var(--accent)", fontWeight: "bold", marginBottom: "10px", display: "flex", alignItems: "center", gap: "4px" }}>
                              <Icons.Shield size={14} /> Active Session (Admin Role)
                            </div>
                            <p style={{ color: "var(--text-secondary)", marginBottom: "12px" }}>
                              Viewing intercom logs, active QR mapping coordinates, and system telemetry stats.
                            </p>
                            <div className="dashboard-sim-card">
                              <div style={{ fontWeight: "bold", marginBottom: "4px" }}>System Metrics Dashboard</div>
                              <div style={{ fontSize: "0.65rem", display: "flex", justifyContent: "space-between", margin: "4px 0" }}>
                                <span>WebRTC Calls:</span>
                                <strong>1,492 / day</strong>
                              </div>
                              <div style={{ fontSize: "0.65rem", display: "flex", justifyContent: "space-between" }}>
                                <span>API Gateway:</span>
                                <strong style={{ color: "#10b981" }}>99.98% uptime</strong>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </>
              )}

            </div>
          </div>
        )}
      </section>
    </>
  );
}
