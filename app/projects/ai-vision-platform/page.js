"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import "./ai-vision-platform.css";

const features = [
    {
        icon: "bx bx-image-add",
        iconStyle: "purple",
        title: "AI Image Generation",
        desc: "Generate high-quality images from natural-language prompts using modern generative AI models with fine-grained control over style, composition, and detail.",
    },
    {
        icon: "bx bx-edit-alt",
        iconStyle: "emerald",
        title: "Image Editing & Transformation",
        desc: "Modify, enhance, restyle, and transform images while preserving important visual details using advanced AI editing pipelines.",
    },
    {
        icon: "bx bx-brain",
        iconStyle: "rose",
        title: "Agentic AI Vision",
        desc: "Build AI agents capable of analyzing images, understanding visual context, making decisions, and automatically executing multi-step workflows.",
    },
    {
        icon: "bx bx-scan",
        iconStyle: "cyan",
        title: "Computer Vision",
        desc: "Integrate object detection, image analysis, visual understanding, segmentation, and image-based reasoning into intelligent pipelines.",
    },
    {
        icon: "bx bx-video-recording",
        iconStyle: "purple",
        title: "AI Video Generation",
        desc: "Generate short videos from text prompts and images, including image-to-video and text-to-video workflows with smooth transitions.",
    },
    {
        icon: "bx bx-rocket",
        iconStyle: "emerald",
        title: "Automated Content Creation",
        desc: "Use AI agents to create complete visual content pipelines from a single user request — fully autonomous end-to-end generation.",
    },
    {
        icon: "bx bx-message-square-dots",
        iconStyle: "rose",
        title: "Prompt-Based Generation",
        desc: "Control image and video generation through detailed natural-language prompts with intelligent prompt engineering and refinement.",
    },
    {
        icon: "bx bx-git-merge-alt",
        iconStyle: "cyan",
        title: "Workflow Automation",
        desc: "Connect multiple AI models and tools into an intelligent end-to-end generation pipeline with automated orchestration.",
    },
];

const pipelineSteps = [
    { icon: "bx bx-message-detail", title: "User Prompt", desc: "Natural language input", num: "1" },
    { icon: "bx bx-brain", title: "LLM Processing", desc: "Intent & planning", num: "2" },
    { icon: "bx bx-image-add", title: "Image Generation", desc: "AI model inference", num: "3" },
    { icon: "bx bx-show", title: "Vision Analysis", desc: "CV & understanding", num: "4" },
    { icon: "bx bx-video-recording", title: "Video Generation", desc: "Motion & animation", num: "5" },
    { icon: "bx bx-check-circle", title: "Output", desc: "Final delivery", num: "6" },
];

const techStack = [
    {
        category: "AI / ML",
        icon: "bx bx-brain",
        items: ["Generative AI", "Agentic AI", "Computer Vision", "LLMs", "Vision-Language Models", "Image Generation", "Video Generation"],
    },
    {
        category: "Frameworks",
        icon: "bx bx-code-alt",
        items: ["LangChain", "OpenAI", "Gemini", "Hugging Face", "Diffusers", "Transformers"],
    },
    {
        category: "Backend",
        icon: "bx bx-server",
        items: ["Python", "FastAPI", "Flask", "REST APIs", "WebSockets"],
    },
    {
        category: "Frontend & Cloud",
        icon: "bx bx-cloud",
        items: ["React", "Next.js", "Cloud APIs", "Docker", "Vercel"],
    },
];

const heroTechs = [
    "Python", "Generative AI", "Agentic AI", "Computer Vision", "LLMs",
    "OpenAI", "Gemini", "LangChain", "FastAPI", "React",
];

export default function AIVisionPlatformPage() {
    return (
        <div className="project-page">
            {/* Background Orbs — decorative */}
            <div className="project-bg-orbs" aria-hidden="true">
                <div className="orb orb-1"></div>
                <div className="orb orb-2"></div>
                <div className="orb orb-3"></div>
            </div>

            {/* Back Navigation */}
            <nav className="project-back-nav" aria-label="Breadcrumb">
                <Link href="/#projects" className="project-back-link">
                    <i className="bx bx-arrow-back" aria-hidden="true"></i>
                    Back to Portfolio
                </Link>
            </nav>

            {/* Main Content */}
            <main id="main-content" tabIndex={-1}>
                {/* Hero Section */}
                <section className="project-hero" aria-labelledby="project-title">
                    <ScrollReveal>
                        <div className="project-hero-badge">
                            <i className="bx bx-star" aria-hidden="true"></i>
                            Featured Project
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <h1 id="project-title">
                            <span className="gradient-text">AI Image</span> &{" "}
                            <span className="gradient-text-warm">Video Generation</span>
                            <br />
                            Platform
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <p className="project-hero-desc">
                            An end-to-end Generative AI and Agentic Vision platform designed for
                            automated visual content creation. Combines AI agents, computer vision,
                            image generation, and video generation to understand, analyze, generate,
                            and transform visual content.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <ul className="project-hero-techs" aria-label="Key technologies">
                            {heroTechs.map((tech, i) => (
                                <li key={i} className="tech-pill">{tech}</li>
                            ))}
                        </ul>
                    </ScrollReveal>

                    <ScrollReveal delay={400} direction="up">
                        <div className="project-hero-image">
                            <Image
                                src="/ai-vision-hero.jpg"
                                alt="AI Image and Video Generation Platform dashboard showing image generation interface with prompt input, style controls, and generated visual outputs"
                                width={1100}
                                height={619}
                                priority
                                style={{ width: "100%", height: "auto" }}
                            />
                        </div>
                    </ScrollReveal>
                </section>

                {/* Features Section */}
                <section className="project-features" id="features" aria-labelledby="features-heading">
                    <ScrollReveal>
                        <div className="project-section-header">
                            <h2 id="features-heading">Key <span>Features</span></h2>
                            <p>
                                Comprehensive AI capabilities powering intelligent visual content creation
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="features-grid">
                        {features.map((feature, i) => (
                            <ScrollReveal key={i} delay={i * 80} direction="up">
                                <div className="feature-card">
                                    <div className={`feature-card-icon ${feature.iconStyle}`} aria-hidden="true">
                                        <i className={feature.icon}></i>
                                    </div>
                                    <h3>{feature.title}</h3>
                                    <p>{feature.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* Pipeline Section */}
                <section className="project-pipeline" aria-labelledby="pipeline-heading">
                    <ScrollReveal>
                        <div className="project-section-header">
                            <h2 id="pipeline-heading">Generation <span>Pipeline</span></h2>
                            <p>
                                End-to-end intelligent workflow from user prompt to final output
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200} direction="up">
                        <ol className="pipeline-flow" aria-label="Generation pipeline steps">
                            {pipelineSteps.map((step, i) => (
                                <li key={i} className="pipeline-step-wrapper">
                                    <div className="pipeline-step">
                                        <span className="pipeline-step-num" aria-hidden="true">{step.num}</span>
                                        <div className="pipeline-step-icon" aria-hidden="true">
                                            <i className={step.icon}></i>
                                        </div>
                                        <h4>{step.title}</h4>
                                        <p>{step.desc}</p>
                                    </div>
                                    {i < pipelineSteps.length - 1 && (
                                        <div className="pipeline-arrow" aria-hidden="true">
                                            <i className="bx bx-chevron-right"></i>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ol>
                    </ScrollReveal>
                </section>

                {/* Tech Stack Section */}
                <section className="project-tech-stack" aria-labelledby="techstack-heading">
                    <ScrollReveal>
                        <div className="project-section-header">
                            <h2 id="techstack-heading">Technology <span>Stack</span></h2>
                            <p>
                                Built with cutting-edge AI frameworks and modern development tools
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="tech-categories">
                        {techStack.map((cat, i) => (
                            <ScrollReveal key={i} delay={i * 100} direction="up">
                                <div className="tech-category">
                                    <div className="tech-category-header">
                                        <i className={cat.icon} aria-hidden="true"></i>
                                        <h3>{cat.category}</h3>
                                    </div>
                                    <ul className="tech-category-items" aria-label={`${cat.category} technologies`}>
                                        {cat.items.map((item, j) => (
                                            <li key={j} className="tech-item">{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* Project Description */}
                <section className="project-description" aria-labelledby="overview-heading">
                    <ScrollReveal>
                        <div className="description-card">
                            <h2 id="overview-heading">Project <span>Overview</span></h2>
                            <p>
                                An end-to-end <strong className="description-highlight">Generative AI and Agentic Vision platform</strong> designed
                                for automated visual content creation. The system combines AI agents, computer vision, image generation,
                                and video generation to understand user requirements, analyze visual inputs, generate images, and
                                transform generated or reference images into engaging videos.
                            </p>
                            <p>
                                The project demonstrates practical expertise in building production-grade AI systems that
                                integrate multiple models and tools into cohesive, intelligent pipelines.
                            </p>
                            <ul className="expertise-tags" aria-label="Areas of expertise">
                                {[
                                    "Agentic AI",
                                    "Vision AI",
                                    "Generative AI",
                                    "Multimodal AI",
                                    "Computer Vision",
                                    "AI Automation",
                                ].map((tag, i) => (
                                    <li key={i} className="expertise-tag">{tag}</li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                </section>

                {/* CTA Footer */}
                <section className="project-cta" aria-label="Project actions">
                    <ScrollReveal>
                        <div className="project-cta-actions">
                            <Link href="/#projects" className="btn-primary">
                                <i className="bx bx-arrow-back" aria-hidden="true"></i>
                                Back to Projects
                            </Link>
                            <a
                                href="/#contact"
                                className="btn-outline"
                            >
                                <i className="bx bx-envelope" aria-hidden="true"></i>
                                Get in Touch
                            </a>
                        </div>
                    </ScrollReveal>
                </section>
            </main>
        </div>
    );
}
