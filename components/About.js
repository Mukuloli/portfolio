"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function About() {
    return (
        <section className="about section-padding" id="about" tabIndex={-1}>
            <ScrollReveal>
                <h2 className="section-title">
                    About <span>Me</span>
                </h2>
            </ScrollReveal>
            <div className="about-content">
                <ScrollReveal direction="left" delay={100}>
                    <div className="about-image-wrapper">
                        <div className="about-image-card">
                            <Image
                                src="/about.png"
                                alt="Illustration of Mukul Oli at work"
                                fill
                                sizes="360px"
                                style={{ objectFit: "contain", objectPosition: "center center" }}
                            />
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={200}>
                    <div className="about-text">
                        <h3 className="about-subtitle">AI Developer & Software Engineer</h3>
                        <p className="about-desc">
                            I am a dedicated AI Developer with expertise in Python, LangChain,
                            LiveKit, and vector databases. Currently working full-time at
                            Webuters Technologies Pvt. Ltd. in Noida, where I develop
                            intelligent agents, voice AI systems, and APIs for clients. My
                            passion lies in creating innovative AI solutions that solve
                            real-world problems — from conversational chatbots to real-time voice
                            agents and document processing systems.
                        </p>

                        <div className="education-list">
                            <h4 className="education-label">Education</h4>
                            <ul className="education-items">
                                <li className="education-item">
                                    <span>
                                        <strong>MCA</strong> — Birla Institute of Applied Sciences,
                                        Bhimtal (Uttarakhand Technical University), 2023–2025
                                    </span>
                                </li>
                                <li className="education-item">
                                    <span>
                                        <strong>BCA</strong> — D.S.B Campus Nainital, Kumaun University,
                                        2020–2023
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <a
                            href="#contact"
                            className="btn-primary"
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
                            <i className="bx bx-message-dots" aria-hidden="true"></i>
                            Contact Me
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
