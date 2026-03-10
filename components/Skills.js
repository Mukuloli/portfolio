export default function Skills() {
    const skillCategories = [
        {
            icon: "bx bxl-python",
            title: "Languages & Frameworks",
            tags: ["Python", "JavaScript", "HTML", "CSS", "Flask", "Next.js"],
        },
        {
            icon: "bx bx-brain",
            title: "AI & GenAI",
            tags: [
                "LangChain",
                "LangGraph",
                "RAG",
                "Vector Search",
                "Swarm",
                "OpenAI API",
            ],
        },
        {
            icon: "bx bx-data",
            title: "Databases & Storage",
            tags: ["Pinecone", "Firebase", "MySQL"],
        },
        {
            icon: "bx bx-microphone",
            title: "Voice & Realtime",
            tags: ["LiveKit", "WebRTC", "Twilio", "Assembly AI"],
        },
        {
            icon: "bx bx-code-alt",
            title: "Backend & APIs",
            tags: ["FastAPI", "Flask", "REST APIs", "Streamlit"],
        },
        {
            icon: "bx bx-git-branch",
            title: "Tools & DevOps",
            tags: [
                "Git",
                "GitHub",
                "Version Control",
                "sentence-transformers",
            ],
        },
    ];

    return (
        <section className="section-padding" id="skills">
            <h2 className="section-title">
                Technical <span>Skills</span>
            </h2>
            <div className="skills-grid">
                {skillCategories.map((cat, i) => (
                    <div key={i} className="glass-card skill-card">
                        <div className="skill-icon">
                            <i className={cat.icon}></i>
                        </div>
                        <h3>{cat.title}</h3>
                        <div className="skill-tags">
                            {cat.tags.map((tag, j) => (
                                <span key={j} className="skill-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
