export default function Experience() {
    const experiences = [
        {
            title: "Full-Time AI Developer",
            company: "Webuters Technologies Pvt. Ltd., Noida",
            date: "July 2025 – Present",
            points: [
                "Developed agents utilizing multiple API keys (Twilio, OpenAI) to create tailored APIs for clients, ensuring secure and efficient integrations",
                "Implemented automation workflows that reduced client onboarding time significantly",
                "Collaborated with cross-functional teams to enhance AI-driven solutions and optimize application performance",
                "Built AI Voice Agent systems using LiveKit, WebRTC for real-time guest interactions",
            ],
        },
        {
            title: "Internship: Advanced AI Mastery",
            company: "Webuters Technologies Pvt. Ltd., Noida",
            date: "February 2025 – May 2025",
            points: [
                "Developed agents utilizing multiple API keys (Twilio, OpenAI) to create tailored APIs for clients",
                "Worked on AI-driven solutions and API development with LangChain and vector databases",
                "Built conversational agents, PDF query systems, and resume processing tools",
                "Gained hands-on experience with RAG, Pinecone, and real-time AI integrations",
            ],
        },
    ];

    return (
        <section className="experience section-padding" id="experience">
            <h2 className="section-title">
                Work <span>Experience</span>
            </h2>
            <div className="experience-timeline">
                {experiences.map((exp, i) => (
                    <div key={i} className="glass-card experience-card">
                        <h3>{exp.title}</h3>
                        <h4>{exp.company}</h4>
                        <span className="experience-date">{exp.date}</span>
                        <ul>
                            {exp.points.map((point, j) => (
                                <li key={j}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
