export default function Projects() {
    const projects = [
        {
            num: "01",
            title: "AI Voice Agent System",
            desc: "AI-powered Voice Agent for hotels, capable of handling live guest interactions using LiveKit and Twilio. Implements real-time voice-to-text and text-to-speech for smooth, human-like conversations.",
            tech: ["LiveKit", "Twilio", "WebRTC", "Python", "LangChain", "Firebase"],
            link: "https://github.com/Mukuloli",
        },
        {
            num: "02",
            title: "Deep Agent",
            desc: "Advanced AI agent framework for building autonomous, multi-step intelligent agents with deep reasoning capabilities and tool integrations.",
            tech: ["Python", "LangChain", "AI Agents", "Deep Reasoning"],
            link: "https://github.com/Mukuloli/deep-agent",
        },
        {
            num: "03",
            title: "Agentic Vision",
            desc: "AI-powered computer vision system with agentic capabilities for intelligent image analysis, object detection, and visual understanding workflows.",
            tech: ["Python", "Computer Vision", "AI Agents", "Image Analysis"],
            link: "https://github.com/Mukuloli/agentic-vision",
        },
        {
            num: "04",
            title: "Query Engine",
            desc: "Intelligent query engine for natural language data querying. Leverages AI to understand user intent and retrieve accurate results from structured/unstructured data.",
            tech: ["Python", "NLP", "RAG", "Vector Search"],
            link: "https://github.com/Mukuloli/query-engine",
        },
        {
            num: "05",
            title: "Smart AI Toolkit",
            desc: "Comprehensive AI toolkit featuring chatbot, audio-to-text conversion, YouTube transcription, PDF summarizer, and multilingual translator powered by LangChain.",
            tech: ["LangChain", "ChatGPT API", "Flask", "MySQL", "Streamlit"],
            link: "https://github.com/Mukuloli/smart_ai_toolkit",
        },
        {
            num: "06",
            title: "PDF RAG System",
            desc: "Document Question-Answering system built using LangChain, Pinecone, and Streamlit for uploading and querying PDF documents with AI-powered context-aware answers.",
            tech: ["LangChain", "Pinecone", "RAG", "Streamlit", "Python"],
            link: "https://github.com/Mukuloli/pdf-rag",
        },
    ];

    return (
        <section className="section-padding" id="projects">
            <h2 className="section-title">
                Latest <span>Projects</span>
            </h2>
            <div className="projects-grid">
                {projects.map((project, i) => (
                    <div key={i} className="glass-card project-card">
                        <div className="project-card-inner">
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
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                View on GitHub
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
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
