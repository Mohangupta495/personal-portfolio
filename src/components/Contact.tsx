"use client";

import React, { useState } from "react";
import { Icons } from "./ui/Icons";
import ScrollReveal from "./ui/ScrollReveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Message must be at least 10 characters long";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitStatus("loading");

    // Simulate API request delay
    setTimeout(() => {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const contactCards = [
    {
      title: "Direct Email",
      value: "mohangupta.react@gmail.com",
      link: "mailto:mohangupta.react@gmail.com",
      icon: <Icons.Mail size={20} />
    },
    {
      title: "Current Location",
      value: "Gurugram, Haryana, India",
      link: "https://maps.google.com/?q=Gurugram,Haryana,India",
      icon: <Icons.Location size={20} />
    },
    {
      title: "LinkedIn Profile",
      value: "linkedin.com/in/mohan-gupta",
      link: "https://linkedin.com/in/mohan-gupta",
      icon: <Icons.LinkedIn size={20} />
    },
    {
      title: "GitHub Repository",
      value: "github.com/Mohangupta495",
      link: "https://github.com/Mohangupta495",
      icon: <Icons.GitHub size={20} />
    }
  ];

  return (
    <>
      <style jsx>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
        }

        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr;
          }
        }

        .info-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 0.75rem;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          transition: all var(--transition-smooth);
        }

        .contact-card:hover {
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(var(--accent-rgb), 0.05);
        }

        .card-icon-wrap {
          color: var(--accent);
          background: rgba(var(--accent-rgb), 0.1);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .card-detail h4 {
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          margin-bottom: 0.15rem;
        }

        .card-detail p {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        /* Form styling */
        .form-panel {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: 1rem;
          padding: 2.5rem;
          box-shadow: var(--card-shadow);
        }

        .form-group {
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-label {
          font-size: 0.85rem;
          font-weight: bold;
          color: var(--text-secondary);
        }

        .form-input {
          background: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: 0.5rem;
          padding: 0.75rem 1rem;
          color: var(--text-primary);
          font-family: inherit;
          font-size: 0.95rem;
          transition: all var(--transition-smooth);
          outline: none;
        }

        .form-input:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 2px rgba(var(--accent-rgb), 0.15);
        }

        .form-error-msg {
          font-size: 0.75rem;
          color: #ef4444;
          font-weight: 600;
        }

        .status-msg {
          padding: 1rem;
          border-radius: 0.5rem;
          font-size: 0.9rem;
          font-weight: 600;
          margin-top: 1rem;
          text-align: center;
        }

        .status-msg.success {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        /* Glow placement */
        .glow-contact {
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(var(--accent-rgb), calc(var(--glow-opacity) * 0.5));
        }
      `}</style>

      <section id="contact" className="section">
        <div className="glow-blur glow-contact"></div>

        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">
              Let&apos;s <span>Connect</span>
            </h2>
            <p className="section-subtitle">
              Have a mobile app to construct, bundle optimizations to perform, or a frontend role to fill? Drop a message!
            </p>
          </ScrollReveal>

          <div className="contact-grid">
            {/* Direct Cards Column */}
            <ScrollReveal delayClass="reveal-delay-100">
              <div className="info-col">
                <div style={{ marginBottom: "1rem" }}>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "0.5rem" }}>Direct Enquiries</h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                    I am currently based out of Gurugram, India, and open to remote, hybrid, or relocation contracts.
                  </p>
                </div>

                {contactCards.map((card) => (
                  <a
                    key={card.title}
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card"
                  >
                    <div className="card-icon-wrap">{card.icon}</div>
                    <div className="card-detail">
                      <h4>{card.title}</h4>
                      <p>{card.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </ScrollReveal>

            {/* Interactive Form Panel */}
            <ScrollReveal delayClass="reveal-delay-200">
              <div className="form-panel">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-input"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                    {errors.name && <span className="form-error-msg">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-input"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                    {errors.email && <span className="form-error-msg">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-input"
                      placeholder="Project Discussion / Opportunity"
                      value={formData.subject}
                      onChange={handleInputChange}
                    />
                    {errors.subject && <span className="form-error-msg">{errors.subject}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="form-input"
                      placeholder="Hey Mohan, I'd love to chat about..."
                      style={{ resize: "vertical", minHeight: "100px" }}
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                    {errors.message && <span className="form-error-msg">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "100%", padding: "0.85rem" }}
                    disabled={submitStatus === "loading"}
                  >
                    {submitStatus === "loading" ? "Transmitting Message..." : "Send Secure Message"}
                  </button>

                  {submitStatus === "success" && (
                    <div className="status-msg success" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                      <Icons.Check size={18} /> Message sent successfully! I will get back to you shortly.
                    </div>
                  )}
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
