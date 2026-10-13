"use client";

import ScrollReveal from "./ScrollReveal";

const projects = [
    {
        num: "01",
        title: "AI Portfolio Voice Bot",
        desc: "Real-time AI voice assistant trained on professional resume, projects, and experience. Powered by Gemini Live API with FastAPI backend and LangChain for intelligent, human-like voice conversations.",
        tech: ["Gemini Live API", "FastAPI", "LangChain", "Python", "WebSockets"],
        liveDemo: "https://voice-bot-28-july-1.onrender.com/",
        icon: "bx bx-microphone",
        color: "var(--accent-2)",
        featured: true,
    },
    {
        num: "02",
        title: "Noor Dental Clinic",
        desc: "A modern dental care platform with appointment planning and Noor, a bilingual voice and text assistant that helps patients explore services and prepare for clinic visits.",
        tech: ["Next.js", "Voice AI", "Appointment Booking", "Vercel"],
        liveDemo: "https://noor-dental-clinic-teal.vercel.app/",
        icon: "bx bx-plus-medical",
        color: "#38BDF8",
        featured: true,
    },
    {
        num: "03",
        title: "Bal Sanskar Sainik School Jeolikote",
        desc: "A premium, modern, and fully responsive school website for Bal Sanskar Sainik School Jeolikote. Features a modern design system, seamless navigation, admission info, and comprehensive SEO.",
        tech: ["Next.js", "Vercel"],
        liveDemo: "https://bal-sanskar-sainik-school-website.vercel.app/",
        icon: "bx bx-building-house",
        color: "var(--accent-1)",
    },
    {
        num: "04",
        title: "School Website",
        desc: "A premium, modern, and fully responsive educational website for Darpan Children Garden. Features a modern design system, seamless navigation, and comprehensive SEO.",
        tech: ["Next.js", "Vercel"],
        link: "https://github.com/Mukuloli/school-website-1",
        liveDemo: "https://school-website-1-qk19-g7e7wc8um-mukul-olis-projects.vercel.app/",
        icon: "bx bx-building-house",
        color: "var(--accent-1)",
    },
    {
        num: "05",
        title: "AI Voice Agent System",
        desc: "AI-powered Voice Agent for Indian Oil petrol pumps, capable of handling live interactions using LiveKit and Google Realtime. Implements real-time voice-to-text, TTS, Pinecone vector search, and Firebase for smooth, human-like conversations.",
        tech: ["LiveKit", "WebRTC", "Python", "Pinecone", "Firebase", "OpenAI TTS"],
        link: "https://github.com/Mukuloli/demo-oil",
        icon: "bx bx-microphone",
        color: "var(--accent-1)",
    },
    {
        num: "06",
        title: "Deep Agent",
        desc: "Advanced AI agent framework for building autonomous, multi-step intelligent agents with deep reasoning capabilities and tool integrations.",
        tech: ["Python", "LangChain", "AI Agents", "Deep Reasoning"],
        link: "https://github.com/Mukuloli/deep-agent",
        icon: "bx bx-brain",
        color: "var(--accent-2)",
    },
    {
        num: "07",
        title: "RAG Front-End Platform",
        desc: "Full-stack RAG application with Firebase Authentication (Email/Google Sign-in), featuring a clean UI for document querying with AI-powered context-aware answers.",
        tech: ["Next.js", "Firebase Auth", "RAG", "Google Sign-In", "Vercel"],
        link: "https://github.com/Mukuloli/front-end",
        liveDemo: "https://front-end-brown-tau.vercel.app/signup",
        icon: "bx bx-search-alt-2",
        color: "#FF6B8A",
    },
    {
        num: "08",
        title: "Agentic Vision",
        desc: "AI-powered computer vision system with agentic capabilities for intelligent image analysis, object detection, and visual understanding workflows.",
        tech: ["Python", "Computer Vision", "AI Agents", "Image Analysis"],
        link: "https://github.com/Mukuloli/agentic-vision",
        icon: "bx bx-show",
        color: "var(--accent-1)",
    },
    {
        num: "09",
        title: "Query Engine",
        desc: "Intelligent query engine for natural language data querying. Leverages AI to understand user intent and retrieve accurate results from structured/unstructured data.",
        tech: ["Python", "RAG", "Vector Search"],
        link: "https://github.com/Mukuloli/query-engine",
        icon: "bx bx-search",
        color: "var(--accent-2)",
    },
    {
        num: "10",
        title: "Smart AI Toolkit",
        desc: "Comprehensive AI toolkit featuring chatbot, audio-to-text conversion, YouTube transcription, PDF summarizer, and multilingual translator powered by LangChain.",
        tech: ["LangChain", "ChatGPT API", "Flask", "MySQL", "Streamlit"],
        link: "https://github.com/Mukuloli/smart_ai_toolkit",
        icon: "bx bx-bot",
        color: "#FF6B8A",
    },
];

export default function Projects() {
    return (
        <section className="projects section-padding" id="projects" tabIndex={-1}>
            <div className="projects-heading">
                <ScrollReveal>
                    <div className="projects-heading-copy">
                        <span className="projects-eyebrow">
                            <i className="bx bx-layer" aria-hidden="true"></i>
                            Selected Work
                        </span>
                        <h2 className="section-title">
                            Ideas Built Into <span>Real Products</span>
                        </h2>
                        <p className="section-subtitle">
                            AI systems, voice experiences, and digital products designed to solve practical problems.
                        </p>
                    </div>
                </ScrollReveal>
                <span className="projects-count" aria-label={`${projects.length} projects`}>
                    <strong>{String(projects.length).padStart(2, "0")}</strong>
                    Projects
                </span>
            </div>
            <div className="projects-grid">
                {projects.map((project, i) => (
                    <ScrollReveal key={project.num} delay={i * 100} direction="up">
                        <article
                            className={`glass-card project-card${project.featured ? " featured-project" : ""}`}
                            style={{ "--project-accent": project.color }}
                        >
                            <div className="project-card-inner">
                                <div className="project-card-top">
                                    <div className="project-icon-badge" aria-hidden="true">
                                        <i className={project.icon}></i>
                                    </div>
                                    <div className="project-card-meta">
                                        {project.featured ? (
                                            <span className="featured-badge">
                                                <i className="bx bxs-star" aria-hidden="true"></i>
                                                Featured
                                            </span>
                                        ) : (
                                            <span className="project-type">Selected Project</span>
                                        )}
                                        <span className="project-number">Project {project.num}</span>
                                    </div>
                                </div>
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                                <ul className="project-tech-tags" aria-label={`Technologies used in ${project.title}`}>
                                    {project.tech.map((t) => (
                                        <li key={t} className="tech-tag">
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                                <div className="project-links">
                                    {project.liveDemo && (
                                        <a
                                            href={project.liveDemo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link live-link"
                                            aria-label={`Visit ${project.title} live website (opens in new tab)`}
                                        >
                                            Visit Live Site
                                            <i className="bx bx-up-arrow-alt" aria-hidden="true"></i>
                                        </a>
                                    )}
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link"
                                            aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
                                        >
                                            <i className="bx bxl-github" aria-hidden="true"></i>
                                            Source Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </article>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}
