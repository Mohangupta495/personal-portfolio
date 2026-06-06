"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Icons } from "./Icons";

interface DeviceFrameProps {
  deviceType: "iphone" | "android";
  projectKey: "agrim-retail" | "agrim-star" | "doorvi" | "vani-meetings" | "doorman" | "agrim-seller" | "bolo";
}

export default function DeviceFrame({ deviceType, projectKey }: DeviceFrameProps) {
  const [time, setTime] = useState("12:00 PM");
  
  // Simulated stats for Agrim
  const [isOffline, setIsOffline] = useState(false);

  // Simulated WebRTC call for DoorVi
  const [callState, setCallState] = useState<"incoming" | "connected" | "ended">("incoming");
  const [callDuration, setCallDuration] = useState(0);

  // Simulated geofence worker check-in for Agrim SuperStar
  const [isCheckedIn, setIsCheckedIn] = useState(false);

  useEffect(() => {
    // Clock
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // WebRTC duration counter
  useEffect(() => {
    if (callState !== "connected") return;

    const timer = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [callState]);

  // Network status toggler simulation for Agrim Retailer (Offline-first demo)
  useEffect(() => {
    if (projectKey === "agrim-retail") {
      const networkInterval = setInterval(() => {
        setIsOffline((prev) => !prev);
      }, 4000);
      return () => clearInterval(networkInterval);
    }
  }, [projectKey]);

  const formatDuration = (sec: number) => {
    const m = Math.floor(sec / 60).toString().padStart(2, "0");
    const s = (sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  // UI Simulations
  const renderScreenContent = () => {
    switch (projectKey) {
      case "agrim-retail":
        return (
          <div className="sim-screen agrim-screen" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
            <Image 
              src="/agrim_retail.png" 
              alt="Agrim Retailer App Screenshot" 
              fill
              style={{ objectFit: "cover" }} 
            />
            {/* Caching status indicator overlay */}
            <div 
              style={{ position: "absolute", top: "42px", left: "10px", right: "10px", padding: "6px", background: "rgba(15, 23, 42, 0.85)", border: "1px solid var(--border-color)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "6px", fontSize: "0.6rem", color: "#f8fafc", zIndex: 10 }}
            >
              <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: isOffline ? "#ef4444" : "#10b981", animation: "pulseGlow 2s infinite" }}></span>
              <span>{isOffline ? "SQLite Cache Enabled" : "GraphQL Sync active"}</span>
            </div>
          </div>
        );

      case "agrim-star":
        return (
          <div className="sim-screen agrim-star-screen" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
            <Image 
              src="/agrim_superstar.png" 
              alt="Agrim SuperStar Screenshot" 
              fill
              style={{ objectFit: "cover" }} 
            />
            {/* Interactive check-in button overlay */}
            <button 
              className="sim-btn-action" 
              style={{ 
                position: "absolute", 
                bottom: "75px", 
                left: "12px", 
                right: "12px", 
                width: "calc(100% - 24px)", 
                padding: "8px", 
                borderRadius: "6px", 
                background: isCheckedIn ? "#ef4444" : "var(--accent)", 
                color: "#fff", 
                border: "none", 
                fontWeight: "bold", 
                fontSize: "0.65rem", 
                cursor: "pointer", 
                boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                zIndex: 10,
                transition: "background 0.3s"
              }}
              onClick={() => setIsCheckedIn(!isCheckedIn)}
            >
              {isCheckedIn ? "Check-in Logged Successfully ✓" : "Tap to Verify Coordinates"}
            </button>
          </div>
        );

      case "doorvi":
        return (
          <div className="sim-screen doorvi-screen" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
            {callState === "incoming" ? (
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <Image 
                  src="/doorvi.png" 
                  alt="DoorVi Intercom Screenshot" 
                  fill
                  style={{ objectFit: "cover" }} 
                />
                {/* Overlay click areas over the green and red buttons in the image */}
                <div style={{ position: "absolute", bottom: "75px", left: "0", right: "0", display: "flex", justifyContent: "center", gap: "45px", zIndex: 10 }}>
                  <button 
                    style={{ width: "56px", height: "56px", borderRadius: "50%", border: "none", background: "transparent", cursor: "pointer" }}
                    onClick={() => { setCallState("ended"); setCallDuration(0); }}
                    title="Decline Visitor"
                  />
                  <button 
                    style={{ width: "56px", height: "56px", borderRadius: "50%", border: "none", background: "transparent", cursor: "pointer" }}
                    onClick={() => { setCallState("connected"); setCallDuration(0); }}
                    title="Answer Call"
                  />
                </div>
              </div>
            ) : callState === "connected" ? (
              <div style={{ position: "absolute", inset: 0, background: "rgba(15, 23, 42, 0.95)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "16px", textAlign: "center", zIndex: 10 }}>
                <div style={{ color: "var(--accent)", fontSize: "0.6rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "8px" }}>
                  WebRTC Audio/Video Connection
                </div>
                <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "rgba(var(--accent-rgb), 0.1)", border: "1px solid var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", fontSize: "1.5rem", marginBottom: "12px", animation: "pulseGlow 2s infinite" }}>
                  <Icons.WebRTC size={24} />
                </div>
                <div style={{ color: "#fff", fontSize: "0.85rem", fontWeight: "bold", marginBottom: "4px" }}>Front Gate QR</div>
                <div style={{ fontSize: "1.25rem", fontFamily: "var(--font-mono)", color: "var(--accent)", fontWeight: "bold", marginBottom: "20px" }}>
                  {formatDuration(callDuration)}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
                  <button 
                    style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "none", background: "var(--accent)", color: "#fff", fontWeight: "bold", fontSize: "0.7rem", cursor: "pointer" }}
                    onClick={() => alert("Simulated unlock signal sent via API!")}
                  >
                    🔑 Unlock Door
                  </button>
                  <button 
                    style={{ width: "100%", padding: "8px", borderRadius: "6px", border: "none", background: "#ef4444", color: "#fff", fontWeight: "bold", fontSize: "0.7rem", cursor: "pointer" }}
                    onClick={() => { setCallState("incoming"); setCallDuration(0); }}
                  >
                    End Connection
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ position: "absolute", inset: 0, background: "rgba(15, 23, 42, 0.95)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px", textAlign: "center", zIndex: 10 }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.1)", color: "#10b981", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.25rem", marginBottom: "12px" }}>
                  ✓
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: "bold", color: "#fff", marginBottom: "15px" }}>Entrance Unlocked</div>
                <button 
                  style={{ padding: "6px 12px", borderRadius: "6px", border: "none", background: "var(--accent)", color: "#fff", fontWeight: "bold", fontSize: "0.7rem", cursor: "pointer" }}
                  onClick={() => { setCallState("incoming"); setCallDuration(0); }}
                >
                  Simulate Again
                </button>
              </div>
            )}
          </div>
        );

      case "vani-meetings":
        return (
          <div className="sim-screen vani-screen" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
            <Image 
              src="/vani_meetings.png" 
              alt="Vani Meetings Screenshot" 
              fill
              style={{ objectFit: "cover" }} 
            />
            {/* Waveform active overlays */}
            <div className="audio-wave" style={{ position: "absolute", top: "202px", left: "202px", display: "flex", gap: "2px", height: "8px", zIndex: 10 }}>
              <span style={{ width: "2px", height: "100%", background: "#0ea5e9", borderRadius: "2px", animation: "talkWave 0.8s ease-in-out infinite alternate" }}></span>
              <span style={{ width: "2px", height: "100%", background: "#0ea5e9", borderRadius: "2px", animation: "talkWave 0.8s ease-in-out infinite alternate", animationDelay: "0.15s" }}></span>
              <span style={{ width: "2px", height: "100%", background: "#0ea5e9", borderRadius: "2px", animation: "talkWave 0.8s ease-in-out infinite alternate", animationDelay: "0.3s" }}></span>
            </div>
          </div>
        );

      case "doorman":
        return (
          <div className="sim-screen doorvi-screen" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
            <Image 
              src="/doorman.png" 
              alt="Doorman by DoorVi Screenshot" 
              fill
              style={{ objectFit: "cover" }} 
            />
            {/* Status active overlay */}
            <div 
              style={{ position: "absolute", top: "42px", left: "10px", right: "10px", padding: "6px", background: "rgba(15, 23, 42, 0.85)", border: "1px solid var(--border-color)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "6px", fontSize: "0.6rem", color: "#f8fafc", zIndex: 10 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Icons.Shield size={10} style={{ color: "var(--accent)" }} />
                <span>Doorman Active</span>
              </div>
              <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "#10b981", animation: "pulseGlow 2s infinite" }}></span>
            </div>

            {/* Interactive check-in button overlay */}
            <button 
              style={{ 
                position: "absolute", 
                bottom: "75px", 
                left: "12px", 
                right: "12px", 
                width: "calc(100% - 24px)", 
                padding: "8px", 
                borderRadius: "6px", 
                background: isCheckedIn ? "#ef4444" : "var(--accent)", 
                color: "#fff", 
                border: "none", 
                fontWeight: "bold", 
                fontSize: "0.65rem", 
                cursor: "pointer", 
                boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                zIndex: 10,
                transition: "background 0.3s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px"
              }}
              onClick={() => setIsCheckedIn(!isCheckedIn)}
            >
              {isCheckedIn ? (
                <>
                  <Icons.Check size={12} />
                  <span>Gate Unlocked ✓</span>
                </>
              ) : (
                <>
                  <Icons.Key size={12} />
                  <span>Remote Gate Release</span>
                </>
              )}
            </button>
          </div>
        );

      case "agrim-seller":
        return (
          <div className="sim-screen agrim-screen" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
            <Image 
              src="/agrim_seller.png" 
              alt="Agrim Seller Screenshot" 
              fill
              style={{ objectFit: "cover" }} 
            />
            {/* Caching status indicator overlay */}
            <div 
              style={{ position: "absolute", top: "42px", left: "10px", right: "10px", padding: "6px", background: "rgba(15, 23, 42, 0.85)", border: "1px solid var(--border-color)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "6px", fontSize: "0.6rem", color: "#f8fafc", zIndex: 10 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Icons.Database size={10} style={{ color: "var(--accent)" }} />
                <span>{isOffline ? "SQLite Offline Mode" : "GraphQL Sync active"}</span>
              </div>
              <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: isOffline ? "#ef4444" : "#10b981", animation: "pulseGlow 2s infinite" }}></span>
            </div>

            {/* Offline simulate toggler */}
            <button 
              className="sim-btn-action" 
              style={{ 
                position: "absolute", 
                bottom: "75px", 
                left: "12px", 
                right: "12px", 
                width: "calc(100% - 24px)", 
                padding: "8px", 
                borderRadius: "6px", 
                background: "var(--accent)", 
                color: "#fff", 
                border: "none", 
                fontWeight: "bold", 
                fontSize: "0.65rem", 
                cursor: "pointer", 
                boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px"
              }}
              onClick={() => setIsOffline(!isOffline)}
            >
              <Icons.Zap size={12} />
              <span>{isOffline ? "Go Online" : "Simulate Offline Caching"}</span>
            </button>
          </div>
        );

      case "bolo":
        return (
          <div className="sim-screen vani-screen" style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
            <Image 
              src="/bolo.png" 
              alt="Bolo Screenshot" 
              fill
              style={{ objectFit: "cover" }} 
            />
            {/* Live indicator overlay */}
            <div 
              style={{ position: "absolute", top: "42px", left: "10px", right: "10px", padding: "6px", background: "rgba(15, 23, 42, 0.85)", border: "1px solid var(--border-color)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "6px", fontSize: "0.6rem", color: "#f8fafc", zIndex: 10 }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <Icons.MessageSquare size={10} style={{ color: "var(--accent)" }} />
                <span>Bolo Video Chat Live</span>
              </div>
              <span style={{ display: "inline-block", width: "6px", height: "6px", borderRadius: "50%", background: "#ef4444", animation: "pulseGlow 2s infinite" }}></span>
            </div>

            {/* Quick interactive buttons */}
            <div style={{ position: "absolute", bottom: "75px", left: "12px", right: "12px", display: "flex", gap: "8px", zIndex: 10 }}>
              <button 
                style={{ flex: 1, padding: "8px", borderRadius: "6px", border: "none", background: "var(--accent)", color: "#fff", fontWeight: "bold", fontSize: "0.65rem", cursor: "pointer", boxShadow: "0 4px 15px rgba(0,0,0,0.4)", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}
                onClick={() => alert("Simulated WebRTC link shared!")}
              >
                <Icons.ExternalLink size={10} />
                <span>Invite</span>
              </button>
              <button 
                style={{ padding: "8px 12px", borderRadius: "6px", border: "none", background: "#ef4444", color: "#fff", fontWeight: "bold", fontSize: "0.65rem", cursor: "pointer", boxShadow: "0 4px 15px rgba(0,0,0,0.4)" }}
                onClick={() => alert("Call ended")}
              >
                Leave
              </button>
            </div>
          </div>
        );
      
      default:
        return <div className="sim-screen">No content</div>;
    }
  };

  return (
    <div className="device-wrapper relative flex-center">
      {/* Simulation Stylesheet (isolated from global CSS tags but rendered in document context) */}
      <style jsx global>{`
        /* Device CSS Frames */
        .device-wrapper {
          width: 290px;
          height: 590px;
          perspective: 1000px;
          margin: 0 auto;
        }

        .device-shell {
          width: 100%;
          height: 100%;
          border-radius: 40px;
          padding: 12px;
          position: relative;
          box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.5),
                      inset 0 0 3px 2px rgba(255, 255, 255, 0.2);
          transition: all 0.5s ease;
        }

        .app-container[data-theme="dark"] .device-shell {
          background: #1e293b;
          border: 4px solid #334155;
          box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.8),
                      0 0 30px rgba(var(--accent-rgb), 0.15);
        }

        .app-container[data-theme="light"] .device-shell {
          background: #e2e8f0;
          border: 4px solid #cbd5e1;
          box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.15),
                      0 0 20px rgba(var(--accent-rgb), 0.08);
        }

        /* Notch */
        .device-notch {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 24px;
          background: #000;
          border-bottom-left-radius: 15px;
          border-bottom-right-radius: 15px;
          z-index: 10;
        }

        .device-notch::before {
          content: '';
          position: absolute;
          left: 15px;
          top: 6px;
          width: 8px;
          height: 8px;
          background: #111;
          border-radius: 50%;
        }

        .device-notch::after {
          content: '';
          position: absolute;
          right: 30px;
          top: 8px;
          width: 25px;
          height: 4px;
          background: #222;
          border-radius: 99px;
        }

        /* Screen Container */
        .device-screen {
          width: 100%;
          height: 100%;
          background: #090d16;
          border-radius: 30px;
          overflow: hidden;
          position: relative;
          display: flex;
          flex-direction: column;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          user-select: none;
        }

        /* Top Status Bar */
        .device-status-bar {
          height: 30px;
          padding: 8px 18px 0 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.7rem;
          color: #fff;
          z-index: 5;
          font-weight: 500;
        }

        .status-icons {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* App Inside Styles */
        .sim-screen {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          background: #0f172a;
          color: #f1f5f9;
        }

        .sim-header {
          padding: 12px 14px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: #1e293b;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          font-size: 0.85rem;
          font-weight: 700;
          color: #f8fafc;
        }

        .sim-header.dark {
          background: #0f172a;
        }

        .sim-body {
          flex: 1;
          padding: 12px;
          overflow-y: auto;
          font-size: 0.75rem;
        }

        /* AGRIM Retailer styles */
        .agrim-screen {
          background: #090d16;
        }
        .sim-logo-text {
          color: var(--accent);
          font-weight: 800;
        }
        .sim-cart-badge {
          background: rgba(var(--accent-rgb), 0.2);
          border: 1px solid var(--accent);
          color: #fff;
          font-size: 0.65rem;
          padding: 2px 6px;
          border-radius: 99px;
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .sim-network-banner {
          font-size: 0.65rem;
          padding: 4px;
          text-align: center;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .sim-network-banner.online {
          background: #065f46;
          color: #a7f3d0;
        }
        .sim-network-banner.offline {
          background: #991b1b;
          color: #fca5a5;
        }
        .sim-search-bar {
          background: #1e293b;
          border-radius: 6px;
          padding: 6px 10px;
          margin-bottom: 12px;
          color: #64748b;
          font-size: 0.7rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .sim-section-header {
          font-weight: bold;
          margin-bottom: 8px;
          text-transform: uppercase;
          font-size: 0.65rem;
          letter-spacing: 0.05em;
          color: #94a3b8;
        }
        .sim-product-card {
          background: #111827;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          padding: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }
        .prod-img {
          font-size: 1.5rem;
          background: #1f2937;
          padding: 4px;
          border-radius: 6px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .prod-info {
          flex: 1;
        }
        .prod-title {
          font-weight: 600;
          color: #f3f4f6;
          font-size: 0.7rem;
        }
        .prod-price {
          color: var(--accent);
          font-weight: 700;
        }
        .prod-volume {
          font-size: 0.6rem;
          color: #9ca3af;
        }
        .prod-btn {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--accent);
          border: none;
          color: white;
          font-weight: bold;
          cursor: pointer;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sim-quick-stats {
          display: flex;
          gap: 6px;
          margin-top: 10px;
        }
        .stat-bubble {
          background: rgba(255, 255, 255, 0.05);
          padding: 4px 8px;
          border-radius: 99px;
          font-size: 0.6rem;
          color: #cbd5e1;
        }

        /* DoorVi styles */
        .doorvi-screen {
          background: #090d16;
        }
        .rtc-badge {
          font-size: 0.6rem;
          background: #ef4444;
          color: white;
          padding: 1px 4px;
          border-radius: 4px;
          font-weight: 800;
        }
        .call-incoming-panel {
          height: 100%;
          width: 100%;
          flex: 1;
          flex-direction: column;
          justify-content: center;
          padding: 20px;
          background: radial-gradient(circle at center, #1e1b4b 0%, #090d16 100%);
        }
        .caller-avatar-glow {
          font-size: 3rem;
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: rgba(239, 68, 68, 0.1);
          border: 2px solid #ef4444;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          animation: ringPulse 2s infinite;
        }
        @keyframes ringPulse {
          0% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(239, 68, 68, 0); }
          100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
        }
        .caller-name {
          font-size: 1.1rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 4px;
        }
        .caller-action-text {
          font-size: 0.75rem;
          color: #94a3b8;
          margin-bottom: 40px;
          text-align: center;
        }
        .call-actions-row {
          display: flex;
          gap: 30px;
        }
        .call-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: none;
          color: white;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .call-btn.reject {
          background: #ef4444;
        }
        .call-btn.reject:hover {
          background: #dc2626;
        }
        .call-btn.accept {
          background: #10b981;
          animation: bounceCall 1s infinite alternate;
        }
        @keyframes bounceCall {
          0% { transform: translateY(0); }
          100% { transform: translateY(-6px); }
        }
        
        .call-connected-panel {
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .video-stream-container {
          flex: 1;
          background: #000;
          position: relative;
        }
        .sim-camera-feed {
          color: #94a3b8;
          font-size: 0.7rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .sim-camera-spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-top-color: var(--accent);
          border-radius: 50%;
          animation: spin 1s infinite linear;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .local-thumbnail {
          position: absolute;
          right: 10px;
          top: 10px;
          width: 50px;
          height: 70px;
          background: #1e293b;
          border-radius: 4px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          font-size: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .call-hud {
          background: #0f172a;
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .hud-buttons {
          display: flex;
          gap: 10px;
          width: 100%;
        }
        .hud-btn {
          flex: 1;
          padding: 8px;
          border-radius: 6px;
          border: none;
          font-size: 0.65rem;
          font-weight: 700;
          cursor: pointer;
        }
        .hud-btn.unlock {
          background: var(--accent);
          color: white;
        }
        .hud-btn.disconnect {
          background: #ef4444;
          color: white;
        }

        /* Vani Meeting styles */
        .vani-screen {
          background: #090b11;
        }
        .meeting-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: #f1f5f9;
        }
        .meeting-avatars-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          width: 100%;
          flex: 1;
        }
        .user-avatar {
          background: #161b26;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 8px;
          position: relative;
          min-height: 80px;
        }
        .user-avatar.active-speaker {
          border-color: var(--accent);
          background: rgba(var(--accent-rgb), 0.05);
        }
        .avatar-circle {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent) 0%, #4f46e5 100%);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.9rem;
          margin-bottom: 6px;
        }
        .avatar-name {
          font-size: 0.6rem;
          color: #94a3b8;
        }
        .audio-wave {
          position: absolute;
          bottom: 6px;
          display: flex;
          gap: 2px;
          height: 10px;
        }
        .audio-wave span {
          width: 2px;
          height: 100%;
          background: var(--accent);
          border-radius: 2px;
          animation: talkWave 0.8s ease-in-out infinite alternate;
        }
        .audio-wave span:nth-child(2) { animation-delay: 0.15s; }
        .audio-wave span:nth-child(3) { animation-delay: 0.3s; }
        @keyframes talkWave {
          0% { height: 2px; }
          100% { height: 10px; }
        }
        .discussion-mini-feed {
          background: #11141c;
          border-radius: 6px;
          padding: 6px;
          width: 100%;
          font-size: 0.6rem;
          border: 1px solid rgba(255, 255, 255, 0.04);
        }
        .feed-header {
          font-weight: 800;
          color: var(--accent);
          margin-bottom: 4px;
        }
        .feed-msg {
          margin-bottom: 2px;
          color: #cbd5e1;
        }
        .meeting-controls {
          display: flex;
          gap: 12px;
          background: #161b26;
          border-radius: 20px;
          padding: 6px 12px;
          width: 100%;
          justify-content: space-around;
        }
        .control-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: none;
          background: #272e3f;
          color: #f1f5f9;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .control-btn.active {
          background: var(--accent);
          color: white;
        }
        .control-btn.end-call {
          background: #ef4444;
          color: white;
        }

        /* SuperStar workforce styles */
        .radar-container {
          width: 100px;
          height: 100px;
          position: relative;
          margin: 10px 0;
        }
        .radar-wave {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid var(--accent);
          opacity: 0;
        }
        .radar-wave.pulsing {
          animation: radarPulse 2s infinite linear;
        }
        @keyframes radarPulse {
          0% { transform: scale(0.3); opacity: 0.8; }
          50% { opacity: 0.4; }
          100% { transform: scale(1.3); opacity: 0; }
        }
        .radar-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #1e293b;
          border: 2px solid #64748b;
          color: #94a3b8;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          z-index: 2;
        }
        .radar-circle.active {
          background: rgba(var(--accent-rgb), 0.2);
          border-color: var(--accent);
          color: white;
          box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.4);
        }
        .sim-btn-action {
          width: 100%;
          padding: 8px;
          border-radius: 6px;
          border: none;
          background: var(--accent);
          color: white;
          font-weight: 700;
          font-size: 0.7rem;
          cursor: pointer;
          transition: background 0.3s;
        }
        .sim-btn-action.check-out {
          background: #ef4444;
        }
        .stats-mini-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          width: 100%;
          margin-top: 5px;
        }
        .mini-stat {
          background: #111827;
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          padding: 6px;
          text-align: center;
        }
        .mini-stat span {
          display: block;
          font-size: 0.55rem;
          color: #94a3b8;
        }
        .mini-stat strong {
          font-size: 0.7rem;
          color: #f3f4f6;
        }

        /* Generic Android / Apple style adjustments */
        .android-bezel {
          border-radius: 36px !important;
        }
        .android-notch {
          width: 12px !important;
          height: 12px !important;
          background: #000;
          border-radius: 50%;
          top: 8px !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
        }
        .android-nav {
          height: 35px;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: space-around;
          font-size: 0.8rem;
          color: #64748b;
          border-bottom-left-radius: 26px;
          border-bottom-right-radius: 26px;
        }
        .android-nav-btn {
          width: 14px;
          height: 14px;
          border: 2px solid #64748b;
          border-radius: 2px;
        }
        .android-nav-btn.circle {
          border-radius: 50%;
        }
        .android-nav-btn.back {
          border: none;
          font-size: 0.8rem;
          line-height: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      {/* Main Shell */}
      <div className={`device-shell ${deviceType === "android" ? "android-bezel" : ""}`}>
        {/* Notch */}
        {deviceType === "iphone" ? (
          <div className="device-notch"></div>
        ) : (
          <div className="device-notch android-notch"></div>
        )}

        {/* Screen */}
        <div className="device-screen">
          {/* Status Bar */}
          <div className="device-status-bar">
            <span>{time}</span>
            <div className="status-icons" style={{ display: "flex", alignItems: "center", gap: "4.5px" }}>
              <Icons.Signal size={12} strokeWidth={2.5} />
              <Icons.Battery size={14} strokeWidth={2.5} />
            </div>
          </div>

          {/* Screen Content */}
          {renderScreenContent()}

          {/* Android Navigation Keys */}
          {deviceType === "android" && (
            <div className="android-nav">
              <span className="android-nav-btn back">◀</span>
              <span className="android-nav-btn circle"></span>
              <span className="android-nav-btn"></span>
            </div>
          )}

          {/* iPhone Home Indicator bar */}
          {deviceType === "iphone" && (
            <div className="flex-center" style={{ height: "15px", background: "transparent", paddingBottom: "5px" }}>
              <div style={{ width: "100px", height: "4px", background: "#ffffff", opacity: 0.5, borderRadius: "99px" }}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
