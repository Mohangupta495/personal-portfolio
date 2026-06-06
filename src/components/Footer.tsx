"use client";

import React, { useState, useEffect } from "react";
import { Icons } from "./ui/Icons";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <style jsx>{`
        .footer {
          background: var(--bg-secondary);
          border-top: 1px solid var(--border-color);
          padding: 3rem 0;
          position: relative;
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }

        @media (min-width: 768px) {
          .footer-container {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
          }
        }

        .footer-logo {
          font-weight: 800;
          font-size: 1.15rem;
        }

        .footer-logo span {
          color: var(--accent);
        }

        .footer-text {
          font-size: 0.85rem;
          color: var(--text-muted);
        }

        .footer-tech {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
        }

        .socials {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary);
          transition: all var(--transition-smooth);
        }

        .social-link:hover {
          color: var(--accent);
          border-color: var(--accent);
          background: rgba(var(--accent-rgb), 0.05);
          transform: translateY(-2px);
        }

        /* Float Scroll to Top button */
        .scroll-top-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--accent);
          color: #ffffff;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(var(--accent-rgb), 0.3);
          z-index: 40;
          opacity: 0;
          transform: translateY(20px) scale(0.8);
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .scroll-top-btn.visible {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .scroll-top-btn:hover {
          box-shadow: 0 4px 25px rgba(var(--accent-rgb), 0.5);
          transform: translateY(-4px) scale(1.05);
        }
      `}</style>

      <footer className="footer">
        <div className="container footer-container">
          <div>
            <div className="footer-logo">
              Mohan<span>.Gupta</span>
            </div>
            <p className="footer-text" style={{ marginTop: "0.5rem" }}>
              © {new Date().getFullYear()} Mohan Gupta. All rights reserved.
            </p>
          </div>

          <div className="footer-tech">
            <span>Built with: Next.js 16 • React 19 • CSS Variables</span>
          </div>

          <div className="socials">
            <a href="https://github.com/Mohangupta495" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub Profile">
              <Icons.GitHub size={18} />
            </a>
            <a href="https://linkedin.com/in/mohan-gupta" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn Profile">
              <Icons.LinkedIn size={18} />
            </a>
            <a href="mailto:mohangupta.react@gmail.com" className="social-link" aria-label="Send Email">
              <Icons.Mail size={18} />
            </a>
          </div>
        </div>

        {/* Scroll back to top bubble widget */}
        <button
          className={`scroll-top-btn ${showScrollTop ? "visible" : ""}`}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <Icons.ChevronUp size={24} />
        </button>
      </footer>
    </>
  );
}
