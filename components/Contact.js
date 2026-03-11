"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setError("");
        setSent(false);

        const formData = new FormData(e.target);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone") || "",
            subject: formData.get("subject"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || "Something went wrong");
            }

            setSent(true);
            e.target.reset();
            setTimeout(() => setSent(false), 5000);
        } catch (err) {
            console.error("Error sending message:", err);
            setError(err.message || "Failed to send message. Please try again.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="contact section-padding" id="contact">
            <ScrollReveal>
                <h2 className="section-title">
                    Contact <span>Me</span>
                </h2>
                <p className="section-subtitle">
                    Have a project in mind? Let&apos;s work together
                </p>
            </ScrollReveal>
            <div className="contact-wrapper">
                <ScrollReveal direction="left" delay={100}>
                    <div className="contact-info-list">
                        <a
                            href="mailto:mukuloli43@gmail.com"
                            className="contact-info-item"
                            style={{ textDecoration: "none" }}
                        >
                            <div className="contact-info-icon">
                                <i className="bx bx-envelope"></i>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>mukuloli43@gmail.com</p>
                            </div>
                        </a>

                        <a
                            href="tel:+919411398572"
                            className="contact-info-item"
                            style={{ textDecoration: "none" }}
                        >
                            <div className="contact-info-icon">
                                <i className="bx bx-phone"></i>
                            </div>
                            <div>
                                <h4>Phone</h4>
                                <p>+91 9411398572</p>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/mukul-oli-268251217"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-info-item"
                            style={{ textDecoration: "none" }}
                        >
                            <div className="contact-info-icon">
                                <i className="bx bxl-linkedin"></i>
                            </div>
                            <div>
                                <h4>LinkedIn</h4>
                                <p>mukul-oli-268251217</p>
                            </div>
                        </a>

                        <a
                            href="https://github.com/Mukuloli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-info-item"
                            style={{ textDecoration: "none" }}
                        >
                            <div className="contact-info-icon">
                                <i className="bx bxl-github"></i>
                            </div>
                            <div>
                                <h4>GitHub</h4>
                                <p>Mukuloli</p>
                            </div>
                        </a>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={200}>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                required
                                id="contact-name"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                                id="contact-email"
                            />
                        </div>
                        <div className="form-row">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Mobile Number"
                                id="contact-phone"
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                required
                                id="contact-subject"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            required
                            id="contact-message"
                        ></textarea>

                        {sent && (
                            <div
                                style={{
                                    padding: "12px 20px",
                                    borderRadius: "12px",
                                    background: "rgba(0, 229, 160, 0.08)",
                                    border: "1px solid rgba(0, 229, 160, 0.2)",
                                    color: "#00E5A0",
                                    fontSize: "0.9rem",
                                    fontWeight: 600,
                                }}
                            >
                                ✓ Message sent successfully! I&apos;ll get back to you soon.
                            </div>
                        )}

                        {error && (
                            <div
                                style={{
                                    padding: "12px 20px",
                                    borderRadius: "12px",
                                    background: "rgba(255, 107, 138, 0.08)",
                                    border: "1px solid rgba(255, 107, 138, 0.2)",
                                    color: "#FF6B8A",
                                    fontSize: "0.9rem",
                                    fontWeight: 600,
                                }}
                            >
                                ✕ {error}
                            </div>
                        )}

                        <button type="submit" className="btn-primary" disabled={sending}>
                            <i
                                className={`bx ${sending ? "bx-loader-alt bx-spin" : "bx-send"}`}
                            ></i>
                            {sending ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </ScrollReveal>
            </div>
        </section>
    );
}
