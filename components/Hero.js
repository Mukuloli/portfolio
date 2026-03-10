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
                    <p className="hero-greeting">Hello, It&apos;s Me</p>
                    <h1 className="hero-name">Mukul Oli</h1>
                    <h2 className="hero-role">
                        And I am a{" "}
                        <span className="typed-text" suppressHydrationWarning>
                            {mounted ? displayText : "AI Developer"}
                            <span className="cursor-blink">&nbsp;</span>
                        </span>
                    </h2>
                    <p className="hero-desc">
                        Full-Time AI Developer at Webuters Technologies Pvt. Ltd., Noida.
                        Specialized in building intelligent agents using LangChain, LiveKit,
                        Pinecone, and multiple AI APIs. Passionate about creating AI-driven
                        solutions including voice agents, RAG systems, and automated
                        workflows.
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

                    <div className="social-links">
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
                </div>

                <div className="hero-image-wrapper">
                    <div className="hero-image-glow">
                        <Image
                            src="/shared image.jfif"
                            alt="Mukul Oli"
                            width={380}
                            height={380}
                            priority
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
        .cursor-blink {
          border-right: 2px solid var(--accent-cyan);
          animation: blink 0.7s infinite;
          margin-left: 2px;
        }
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>
        </section>
    );
}
