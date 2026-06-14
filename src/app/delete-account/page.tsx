"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Icons } from "@/components/ui/Icons";

export default function DeleteAccount() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [accent, setAccent] = useState<"blue" | "purple" | "emerald" | "amber">("blue");
  const [mounted, setMounted] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);

  // Form States
  const [appName, setAppName] = useState("Bolo Social App");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync settings with LocalStorage after mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("mohan-portfolio-theme") as "dark" | "light" | null;
    const savedAccent = localStorage.getItem("mohan-portfolio-accent") as typeof accent | null;

    setTimeout(() => {
      if (savedTheme) {
        setTheme(savedTheme);
      } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !consent) return;

    setSubmitting(true);
    // Simulate API call for 1.5 seconds
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const accents = [
    { key: "blue", color: "#0ea5e9", name: "React Blue" },
    { key: "purple", color: "#8b5cf6", name: "Cyber Purple" },
    { key: "emerald", color: "#10b981", name: "Emerald Mint" },
    { key: "amber", color: "#f59e0b", name: "Neon Amber" }
  ] as const;

  const appOptions = [
    "Bolo Social App",
    "Agrim Retailer App",
    "Agrim SuperStar Portal",
    "Agrim Seller Portal",
    "DoorVi Intercom",
    "Doorman by DoorVi",
    "Vani Meetings"
  ];

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
        .nav-bar {
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
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .logo span {
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

        .content-section {
          padding-top: 120px;
          padding-bottom: 2rem;
          min-height: calc(100vh - 120px - 172px); /* viewport minus header and footer */
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .header-area {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .title {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
        }

        @media (min-width: 768px) {
          .title {
            font-size: 3rem;
          }
        }

        .title span {
          background: var(--accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          max-width: 600px;
          margin: 0 auto;
          color: var(--text-secondary);
          font-size: 1rem;
        }

        .card-wrapper {
          max-width: 620px;
          margin: 0 auto 4rem auto;
          width: 100%;
        }

        .form-group {
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-input, .form-select, .form-textarea {
          width: 100%;
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-family: var(--font-family);
          font-size: 0.95rem;
          transition: all var(--transition-smooth);
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          outline: none;
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(var(--accent-rgb), 0.15);
          background: var(--bg-secondary);
        }

        .form-checkbox-group {
          margin: 2rem 0;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .form-checkbox {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          border: 1px solid var(--border-color);
          accent-color: var(--accent);
          cursor: pointer;
          margin-top: 2px;
        }

        .checkbox-label {
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          user-select: none;
          cursor: pointer;
        }

        .checkbox-label strong {
          color: var(--text-primary);
        }

        /* Success screen styling */
        .success-container {
          text-align: center;
          padding: 2.5rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .success-icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.1);
          border: 2px solid #10b981;
          color: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes scaleIn {
          from { transform: scale(0.6); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .success-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .success-text {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.6;
          max-width: 440px;
        }

        .success-highlight {
          font-family: var(--font-mono);
          font-weight: bold;
          color: var(--accent);
          background: rgba(var(--accent-rgb), 0.05);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          border: 1px solid rgba(var(--accent-rgb), 0.15);
        }

        .warning-notice {
          background: rgba(239, 68, 68, 0.04);
          border-left: 3px solid #ef4444;
          padding: 1rem;
          border-radius: 0 6px 6px 0;
          font-size: 0.85rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin-bottom: 2rem;
        }

        .warning-notice strong {
          color: var(--text-primary);
        }

        /* BG Glow positions */
        .glow-del-1 {
          top: 10%;
          left: -10%;
          background: rgba(var(--accent-rgb), calc(var(--glow-opacity) * 1.3));
        }

        .glow-del-2 {
          bottom: 15%;
          right: -10%;
        }
      `}</style>

      {/* Glow elements */}
      <div className="glow-blur glow-del-1"></div>
      <div className="glow-blur glow-del-2"></div>

      {/* Header bar */}
      <header className="nav-bar">
        <div className="container nav-container">
          <Link href="/" className="back-link">
            <span>←</span> Back to Portfolio
          </Link>

          <div className="logo">
            Mohan<span>.Gupta</span>
          </div>

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
              className="nav-btn"
              onClick={toggleTheme}
              title={theme === "dark" ? "Toggle Light Theme" : "Toggle Dark Theme"}
            >
              {theme === "dark" ? <Icons.Sun size={20} /> : <Icons.Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Form container */}
      <main className="container">
        <section className="content-section">
          
          <div className="header-area">
            <h1 className="title">
              Account <span>Deletion</span>
            </h1>
            <p className="subtitle">
              Submit a formal request to permanently delete your account and remove associated user data from our app systems.
            </p>
          </div>

          <div className="card-wrapper">
            <div className="glass-card">
              
              {!submitted ? (
                <form onSubmit={handleSubmit}>
                  <div className="warning-notice">
                    <Icons.AlertTriangle size={16} style={{ color: "#ef4444", display: "inline-block", marginRight: "6px", verticalAlign: "middle" }} />
                    <strong>Important:</strong> Deleting your account will permanently wipe your profile records, activity metrics, local cache records, and settings. This action is <strong>irreversible</strong> and cannot be undone.
                  </div>

                  <div className="form-group">
                    <label htmlFor="appName" className="form-label">Select Application</label>
                    <select
                      id="appName"
                      className="form-select"
                      value={appName}
                      onChange={(e) => setAppName(e.target.value)}
                    >
                      {appOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      className="form-input"
                      required
                      placeholder="e.g. John Doe"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Account Email Address</label>
                    <input
                      id="email"
                      type="email"
                      className="form-input"
                      required
                      placeholder="e.g. johndoe@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="reason" className="form-label">Reason for Deletion (Optional)</label>
                    <textarea
                      id="reason"
                      className="form-textarea"
                      rows={3}
                      placeholder="Please let us know why you are leaving so we can improve..."
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                    />
                  </div>

                  <div className="form-checkbox-group">
                    <input
                      id="consent"
                      type="checkbox"
                      className="form-checkbox"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                    />
                    <label htmlFor="consent" className="checkbox-label">
                      I understand that all my personal data, media, and records associated with <strong style={{ color: "var(--accent)" }}>{appName}</strong> will be permanently deleted and cannot be recovered.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={submitting}
                    style={{ width: "100%", padding: "0.85rem", fontSize: "1rem" }}
                  >
                    {submitting ? (
                      <>Processing Request...</>
                    ) : (
                      <>
                        <Icons.Shield size={16} /> Request Account Deletion
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="success-container">
                  <div className="success-icon-wrapper">
                    <Icons.Check size={36} />
                  </div>
                  <h3 className="success-title">Request Registered Successfully</h3>
                  <p className="success-text">
                    Your request to delete your account for <span className="success-highlight">{appName}</span> associated with the email address <strong style={{ color: "var(--text-primary)" }}>{email}</strong> has been logged.
                  </p>
                  <p className="success-text" style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "-0.5rem" }}>
                    Your request will be processed, and all data will be permanently expunged from our secure system clusters within <strong>7 business days</strong>. A final confirmation email will be dispatched to you once complete.
                  </p>
                  <Link href="/" className="btn btn-secondary" style={{ width: "100%", padding: "0.75rem", fontSize: "0.9rem", marginTop: "1rem" }}>
                    Return to Portfolio Home
                  </Link>
                </div>
              )}

            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}
