"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Icons } from "@/components/ui/Icons";

export default function PrivacyPolicy() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [accent, setAccent] = useState<"blue" | "purple" | "emerald" | "amber">("blue");
  const [mounted, setMounted] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  // Sync settings with LocalStorage after mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("mohan-portfolio-theme") as "dark" | "light" | null;
    const savedAccent = localStorage.getItem("mohan-portfolio-accent") as typeof accent | null;

    setTimeout(() => {
      if (savedTheme) {
        setTheme(savedTheme);
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        // Default to dark theme if system prefers dark
        setTheme("dark");
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

  const toggleTheme = () => {
    handleSetTheme(theme === "dark" ? "light" : "dark");
  };

  const accents = [
    { key: "blue", color: "#0ea5e9", name: "React Blue" },
    { key: "purple", color: "#8b5cf6", name: "Cyber Purple" },
    { key: "emerald", color: "#10b981", name: "Emerald Mint" },
    { key: "amber", color: "#f59e0b", name: "Neon Amber" }
  ] as const;

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
      <style jsx>{`
        .privacy-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 70px;
          z-index: 50;
          display: flex;
          align-items: center;
          background: var(--glass-bg);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border-color);
        }

        .privacy-nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
        }

        .privacy-logo {
          font-size: 1.3rem;
          font-weight: 800;
          letter-spacing: -0.05em;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .privacy-logo span {
          color: var(--accent);
        }

        .back-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem;
          border-radius: 0.5rem;
          border: 1px solid var(--border-color);
          background: transparent;
          transition: all var(--transition-smooth);
        }

        .back-link:hover {
          color: var(--accent);
          border-color: var(--accent);
          background: var(--bg-tertiary);
          transform: translateX(-2px);
        }

        .privacy-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .privacy-nav-btn {
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

        .privacy-nav-btn:hover {
          background: var(--bg-tertiary);
          border-color: var(--accent);
          color: var(--accent);
        }

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

        .privacy-content-section {
          padding-top: 120px;
          padding-bottom: 6px;
        }

        .privacy-header-area {
          text-align: center;
          margin-bottom: 3rem;
        }

        .privacy-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .privacy-title {
            font-size: 3.5rem;
          }
        }

        .privacy-title span {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .privacy-meta {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .privacy-card {
          margin-bottom: 5rem;
        }

        .policy-group {
          margin-bottom: 2.5rem;
        }

        .policy-group:last-child {
          margin-bottom: 0;
        }

        .policy-heading {
          font-size: 1.35rem;
          font-weight: 800;
          margin-bottom: 1rem;
          color: var(--text-primary);
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .policy-heading span {
          color: var(--accent);
        }

        .policy-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .policy-list {
          list-style: none;
          padding-left: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin: 1.25rem 0;
        }

        .policy-list-item {
          position: relative;
          padding-left: 1.5rem;
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .policy-list-item::before {
          content: '→';
          position: absolute;
          left: 0;
          top: 0;
          color: var(--accent);
          font-weight: bold;
        }

        .policy-highlight-box {
          background: rgba(var(--accent-rgb), 0.03);
          border-left: 3px solid var(--accent);
          padding: 1.25rem;
          border-radius: 0 8px 8px 0;
          margin: 1.5rem 0;
        }

        /* BG Glow positions */
        .glow-priv-1 {
          top: 15%;
          right: -10%;
          background: rgba(var(--accent-rgb), calc(var(--glow-opacity) * 1.3));
        }

        .glow-priv-2 {
          bottom: 25%;
          left: -10%;
        }
      `}</style>

      {/* Glow Elements */}
      <div className="glow-blur glow-priv-1"></div>
      <div className="glow-blur glow-priv-2"></div>

      {/* Header bar */}
      <header className="privacy-navbar">
        <div className="container privacy-nav-container">
          <Link href="/" className="back-link">
            <span>←</span> Back to Portfolio
          </Link>

          <div className="privacy-logo">
            Mohan<span>.Gupta</span>
          </div>

          <div className="privacy-actions">
            {/* Color Accent Picker */}
            <div style={{ position: "relative" }}>
              <button
                className="privacy-nav-btn"
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
                        handleSetAccent(acc.key);
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
              className="privacy-nav-btn"
              onClick={toggleTheme}
              title={theme === "dark" ? "Toggle Light Theme" : "Toggle Dark Theme"}
            >
              {theme === "dark" ? <Icons.Sun size={20} /> : <Icons.Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Privacy policy content */}
      <main className="container">
        <section className="privacy-content-section">
          
          <div className="privacy-header-area">
            <h1 className="privacy-title">
              Privacy <span>Policy</span>
            </h1>
            <p className="privacy-meta">Last Updated: June 14, 2026</p>
          </div>

          <div className="glass-card privacy-card">
            
            <div className="policy-group">
              <h2 className="policy-heading">
                <span>01.</span> Introduction
              </h2>
              <p className="policy-text">
                This Privacy Policy is designed to provide transparency regarding the treatment of sensitive user and device data by the mobile applications, web platforms, and associated services developed by <strong>Mohan Gupta</strong> (&quot;I&quot;, &quot;me&quot;, &quot;my&quot;, or the &quot;Developer&quot;).
              </p>
              <p className="policy-text">
                I build high-performance mobile (Android/iOS) and web applications, including B2B retail management tools (such as <strong>Agrim Retailer App</strong>, <strong>Agrim Superstar Portal</strong>, and <strong>Agrim Seller Portal</strong>), video intercom software (such as <strong>DoorVi</strong> and <strong>Doorman by DoorVi</strong>), and real-time social communication tools (such as <strong>Vani Meetings</strong> and <strong>Bolo Social App</strong>). This policy governs data practices across all applications published by me on the Google Play Store and Apple App Store.
              </p>
            </div>

            <div className="policy-group">
              <h2 className="policy-heading">
                <span>02.</span> Information Collection and Use
              </h2>
              <p className="policy-text">
                To deliver stable, fast, and feature-rich experiences, my applications may require access to specific device permissions and features. Below are details of what sensitive information is processed and how it is managed:
              </p>
              
              <ul className="policy-list">
                <li className="policy-list-item">
                  <strong>Camera & Microphone access:</strong> Used exclusively in intercom and conference products (like DoorVi, Vani Meetings, and Bolo Social App) to initialize WebRTC streams for real-time video/audio calling. These feeds are transmitted peer-to-peer and are <em>never</em> recorded or saved on any servers.
                </li>
                <li className="policy-list-item">
                  <strong>Precise Location Data:</strong> Required for geofenced field operations and agent tracking (like in Agrim Superstar). Location queries are scheduled dynamically based on movement telemetry to minimize device battery consumption and are only captured when the app is actively performing gig checks.
                </li>
                <li className="policy-list-item">
                  <strong>Device Storage (SQLite & Caching):</strong> Used to handle offline-first caching for catalogs, orders, and local settings (like in Agrim Retailer). This offline cached information resides locally on your device in a secure SQLite sandbox and synchronizes with our backend API when a stable internet link is recovered.
                </li>
                <li className="policy-list-item">
                  <strong>Network state & Telemetry:</strong> Connection speed and websocket heartbeat checks are run locally to ensure bitrate scaling and call drops prevention, adapting applications to low-bandwidth (2G/3G) environments.
                </li>
              </ul>
            </div>

            <div className="policy-group">
              <h2 className="policy-heading">
                <span>03.</span> Third-Party Services
              </h2>
              <p className="policy-text">
                The applications use third-party services that may collect information used to identify you. Below are links to the privacy policies of the standard third-party service providers used by my mobile apps:
              </p>
              <ul className="policy-list">
                <li className="policy-list-item">
                  <a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "underline" }}>Google Play Services</a>
                </li>
                <li className="policy-list-item">
                  <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "underline" }}>Firebase Analytics & Crashlytics</a>
                </li>
                <li className="policy-list-item">
                  <a href="https://www.apple.com/legal/privacy/en-ww/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "underline" }}>Apple App Store & TestFlight Services</a>
                </li>
              </ul>
            </div>

            <div className="policy-group">
              <h2 className="policy-heading">
                <span>04.</span> Data Security
              </h2>
              <p className="policy-text">
                I value your trust in providing device access and processing telemetry data. I employ industry-standard encryption protocols (HTTPS/SSL, TLS) for all data in transit between mobile clients and API endpoints. Remember, however, that no method of transmission over the internet, or method of electronic storage, is 100% secure, and absolute security cannot be guaranteed.
              </p>
            </div>

            <div className="policy-group">
              <h2 className="policy-heading">
                <span>05.</span> Children&apos;s Privacy
              </h2>
              <p className="policy-text">
                My services are not intended for use by children under the age of 13. I do not knowingly collect personally identifiable information from children under 13. In the event that a child under 13 has provided personal details, I immediately delete this information from my logs. If you are a parent or guardian and you are aware that your child has provided personal info, please contact me so that I can execute required removals.
              </p>
            </div>

            <div className="policy-group">
              <h2 className="policy-heading">
                <span>06.</span> Changes to This Privacy Policy
              </h2>
              <p className="policy-text">
                I may update my Privacy Policy from time to time to align with new application features or regulatory requirements. Any updates will be published on this page, and the &quot;Last Updated&quot; timestamp at the top will be updated accordingly. These modifications become active immediately upon posting on this route.
              </p>
            </div>

            <div className="policy-group">
              <h2 className="policy-heading">
                <span>07.</span> Contact Information
              </h2>
              <p className="policy-text">
                If you have questions, feedback, or require assistance regarding this policy or the permissions requested by my applications, please contact me directly:
              </p>
              
              <div className="policy-highlight-box">
                <p style={{ fontWeight: "bold", color: "var(--text-primary)" }}>Mohan Gupta</p>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.25rem" }}>
                  Email: <a href="mailto:mohangupta.react@gmail.com" style={{ color: "var(--accent)", fontWeight: "600" }}>mohangupta.react@gmail.com</a>
                </p>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>Location: Gurugram, India</p>
              </div>
            </div>

          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
