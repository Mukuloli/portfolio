import Image from "next/image";

export default function About() {
    return (
        <section className="about section-padding" id="about">
            <h2 className="section-title">
                About <span>Me</span>
            </h2>
            <div className="about-content">
                <div className="about-image-wrapper">
                    <div className="about-image-card">
                        <Image
                            src="/about.jpg"
                            alt="About Mukul Oli"
                            width={360}
                            height={420}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>

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
                        <div className="education-item">
                            <span>
                                <strong>MCA</strong> — Birla Institute of Applied Sciences,
                                Bhimtal (Uttarakhand Technical University), 2023–2025
                            </span>
                        </div>
                        <div className="education-item">
                            <span>
                                <strong>BCA</strong> — D.S.B Campus Nainital, Kumaun University,
                                2020–2023
                            </span>
                        </div>
                    </div>

                    <a href="#contact" className="btn-primary">
                        <i className="bx bx-message-dots"></i> Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}
