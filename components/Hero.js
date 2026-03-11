"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;
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
    }, [displayText, isDeleting, roleIndex, mounted]);

    return (
        <section className="hero section-padding" id="home">
            <div className="hero-content">
                <div className="hero-text">
                    <p className="hero-greeting">✦ Available for hire</p>
                    <h1 className="hero-name">Mukul Oli</h1>
                    <h2 className="hero-role">
                        And I am a{" "}
                        <span className="typed-text" suppressHydrationWarning>
                            {mounted ? displayText : "AI Developer"}
                            <span className="cursor-blink">&nbsp;</span>
                        </span>
                    </h2>
                    <p className="hero-desc">
                        Full-Time AI Developer at Webuters Technologies, Noida.
                        Crafting intelligent agents, voice AI systems, and RAG pipelines
                        using LangChain, LiveKit, Pinecone & cutting-edge AI APIs.
                    </p>

                    <div className="hero-actions">
                        <a href="/cv.pdf" download className="btn-primary">
                            <i className="bx bx-download"></i> Download CV
                        </a>
                        <a
                            href="#contact"
                            className="btn-outline"
                            onClick={(e) => {
                                e.preventDefault();
                                document
                                    .getElementById("contact")
                                    ?.scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            <i className="bx bx-envelope"></i> Contact Me
                        </a>
                    </div>

                    <div className="social-links" style={{ marginBottom: "36px" }}>
                        <a
                            href="https://www.linkedin.com/in/mukul-oli-268251217"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="LinkedIn"
                        >
                            <i className="bx bxl-linkedin"></i>
                        </a>
                        <a
                            href="https://github.com/Mukuloli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-link"
                            aria-label="GitHub"
                        >
                            <i className="bx bxl-github"></i>
                        </a>
                        <a
                            href="mailto:mukuloli43@gmail.com"
                            className="social-link"
                            aria-label="Email"
                        >
                            <i className="bx bx-envelope"></i>
                        </a>
                        <a
                            href="tel:+919411398572"
                            className="social-link"
                            aria-label="Phone"
                        >
                            <i className="bx bx-phone"></i>
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <div className="hero-stat-number">1+</div>
                            <div className="hero-stat-label">Years Exp.</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-number">23+</div>
                            <div className="hero-stat-label">Projects</div>
                        </div>
                        <div className="hero-stat">
                            <div className="hero-stat-number">10+</div>
                            <div className="hero-stat-label">AI Tools</div>
                        </div>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="hero-image-glow">
                        <Image
                            src="/shared image.jfif"
                            alt="Mukul Oli"
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
