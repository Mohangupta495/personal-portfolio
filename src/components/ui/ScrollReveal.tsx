"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayClass?: string;
  threshold?: number;
  animationClass?: string;
}

export default function ScrollReveal({
  children,
  className = "",
  delayClass = "",
  threshold = 0.1,
  animationClass = "reveal-element"
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before element comes fully into view
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isVisible ? "reveal-visible" : ""} ${delayClass} ${className}`}
    >
      {children}
    </div>
  );
}
