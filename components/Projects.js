"use client";

import ScrollReveal from "./ScrollReveal";

export default function Projects() {
    const projects = [
        {
            num: "01",
            title: "AI Voice Agent System",
            desc: "AI-powered Voice Agent for Indian Oil petrol pumps, capable of handling live interactions using LiveKit and Google Realtime. Implements real-time voice-to-text, TTS, Pinecone vector search, and Firebase for smooth, human-like conversations.",
            tech: ["LiveKit", "WebRTC", "Python", "Pinecone", "Firebase", "OpenAI TTS"],
            link: "https://github.com/Mukuloli/demo-oil",
            icon: "bx bx-microphone",
            color: "var(--accent-1)",
        },
        {
            num: "02",
            title: "Deep Agent",
            desc: "Advanced AI agent framework for building autonomous, multi-step intelligent agents with deep reasoning capabilities and tool integrations.",
            tech: ["Python", "LangChain", "AI Agents", "Deep Reasoning"],
            link: "https://github.com/Mukuloli/deep-agent",
            icon: "bx bx-brain",
            color: "var(--accent-2)",
        },
        {
            num: "03",
            title: "RAG Front-End Platform",
            desc: "Full-stack RAG application with Firebase Authentication (Email/Google Sign-in), featuring a clean UI for document querying with AI-powered context-aware answers.",
            tech: ["Next.js", "Firebase Auth", "RAG", "Google Sign-In", "Vercel"],
            link: "https://github.com/Mukuloli/front-end",
            liveDemo: "https://front-end-brown-tau.vercel.app/signup",
            icon: "bx bx-search-alt-2",
            color: "#FF6B8A",
        },
        {
            num: "04",
            title: "Agentic Vision",
            desc: "AI-powered computer vision system with agentic capabilities for intelligent image analysis, object detection, and visual understanding workflows.",
            tech: ["Python", "Computer Vision", "AI Agents", "Image Analysis"],
            link: "https://github.com/Mukuloli/agentic-vision",
            icon: "bx bx-show",
            color: "var(--accent-1)",
        },
        {
            num: "05",
            title: "Query Engine",
            desc: "Intelligent query engine for natural language data querying. Leverages AI to understand user intent and retrieve accurate results from structured/unstructured data.",
            tech: ["Python", "NLP", "RAG", "Vector Search"],
            link: "https://github.com/Mukuloli/query-engine",
            icon: "bx bx-search",
            color: "var(--accent-2)",
        },
        {
            num: "06",
            title: "Smart AI Toolkit",
            desc: "Comprehensive AI toolkit featuring chatbot, audio-to-text conversion, YouTube transcription, PDF summarizer, and multilingual translator powered by LangChain.",
            tech: ["LangChain", "ChatGPT API", "Flask", "MySQL", "Streamlit"],
            link: "https://github.com/Mukuloli/smart_ai_toolkit",
            icon: "bx bx-bot",
            color: "#FF6B8A",
        },
    ];

    return (
        <section className="section-padding" id="projects">
            <ScrollReveal>
                <h2 className="section-title">
                    Latest <span>Projects</span>
                </h2>
                <p className="section-subtitle">
                    A showcase of my recent work in AI, voice agents, and automation
                </p>
            </ScrollReveal>
            <div className="projects-grid">
                {projects.map((project, i) => (
                    <ScrollReveal key={i} delay={i * 100} direction="up">
                        <div className="glass-card project-card">
                            <div className="project-card-inner">
                                <div className="project-icon-badge" style={{ color: project.color }}>
                                    <i className={project.icon}></i>
                                </div>
                                <div className="project-number">{project.num}</div>
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                                <div className="project-tech-tags">
                                    {project.tech.map((t, j) => (
                                        <span key={j} className="tech-tag">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <i className="bx bxl-github"></i>
                                        View Code
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                            />
                                        </svg>
                                    </a>
                                    {project.liveDemo && (
                                        <a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link live-link"
                                        >
                                            <i className="bx bx-link-external"></i>
                                            Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
