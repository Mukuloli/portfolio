"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
    const roles = [
        "AI Developer",
        "Software Engineer",
        "Voice AI Specialist",
        "LangChain Expert",
    ];
    const [mounted, setMounted] = useState(false);
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        setMounted(true);
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);
        const handler = (e) => setReducedMotion(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    useEffect(() => {
        if (!mounted || reducedMotion) return;
        const currentRole = roles[roleIndex];
        let timeout;

        if (!isDeleting && displayText === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timeout = setTimeout(
                () => {
                    setDisplayText(
                        isDeleting
                            ? currentRole.substring(0, displayText.length - 1)
                            : currentRole.substring(0, displayText.length + 1)
                    );
                },
                isDeleting ? 50 : 100
            );
        }
        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex, mounted, reducedMotion]);

    // Static role text for screen readers (always present, visually hidden)
    const currentVisualRole = mounted
        ? reducedMotion
            ? roles[0]
            : displayText
        : "AI Developer";

    return (
        <section className="hero section-padding" id="home" tabIndex={-1}>
            <div className="hero-content">
                <div className="hero-text">
                    <ScrollReveal direction="left">
                        <div className="hero-badge">
                            <span className="badge-dot" aria-hidden="true"></span>
                            Available for hire
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="left" delay={100}>
                        <h1 className="hero-name">Mukul Oli</h1>
                    </ScrollReveal>

                    <ScrollReveal direction="left" delay={200}>
                        <h2 className="hero-role">
                            And I am a{" "}
                            {/* Screen reader gets the full current role */}
                            <span className="sr-only">
                                {roles[roleIndex]}
                            </span>
                            {/* Visual typewriter effect hidden from screen readers */}
                            <span className="typed-text" aria-hidden="true" suppressHydrationWarning>
                                {currentVisualRole}
                                <span className="cursor-blink">&nbsp;</span>
                            </span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal direction="left" delay={300}>
                        <p className="hero-desc">
                            Full-Time AI Developer at Webuters Technologies, Noida.
                            Crafting intelligent agents, voice AI systems, and RAG pipelines
                            using LangChain, LiveKit, Pinecone & cutting-edge AI APIs.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal direction="left" delay={400}>
                        <div className="hero-actions">
                            <a
                                href="/mukul-oli-cv.pdf"
                                download="Mukul_Oli_CV.pdf"
                                className="btn-primary"
                            >
                                <i className="bx bx-download" aria-hidden="true"></i>
                                Download CV
                                <span className="sr-only"> (PDF)</span>
                            </a>
                            <a
                                href="#contact"
                                className="btn-outline"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const contactSection = document.getElementById("contact");
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: "smooth" });
                                        contactSection.setAttribute("tabindex", "-1");
                                        contactSection.focus({ preventScroll: true });
                                    }
                                }}
                            >
                                <i className="bx bx-envelope" aria-hidden="true"></i>
                                Contact Me
                            </a>
                        </div>
                    </ScrollReveal>

                    <div className="social-links" style={{ marginBottom: "36px" }}>
                        <a
                            href="https://www.linkedin.com/in/mukul-oli-268251217"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="LinkedIn (opens in new tab)"
                        >
                            <i className="bx bxl-linkedin" aria-hidden="true"></i>
                        </a>
                        <a
                            href="https://github.com/Mukuloli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="GitHub (opens in new tab)"
                        >
                            <i className="bx bxl-github" aria-hidden="true"></i>
                        </a>
                        <a
                            href="mailto:mukuloli43@gmail.com"
                            className="social-link"
                            aria-label="Email Mukul Oli"
                        >
                            <i className="bx bx-envelope" aria-hidden="true"></i>
                        </a>
                        <a
                            href="tel:+919411398572"
                            className="social-link"
                            aria-label="Phone: +91 9411398572"
                        >
                            <i className="bx bx-phone" aria-hidden="true"></i>
                        </a>
                    </div>

                    <div className="hero-stats" role="list" aria-label="Key statistics">
                        <div className="hero-stat" role="listitem">
                            <div className="hero-stat-number">1+</div>
                            <div className="hero-stat-label">Years Exp.</div>
                        </div>
                        <div className="hero-stat" role="listitem">
                            <div className="hero-stat-number">23+</div>
                            <div className="hero-stat-label">Projects</div>
                        </div>
                        <div className="hero-stat" role="listitem">
                            <div className="hero-stat-number">10+</div>
                            <div className="hero-stat-label">AI Tools</div>
                        </div>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="hero-image-glow">
                        <Image
                            src="/profile.jpg"
                            alt="Portrait of Mukul Oli, AI Developer and Software Engineer"
                            width={370}
                            height={370}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
