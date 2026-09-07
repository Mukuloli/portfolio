"use client";

import { useState, useRef } from "react";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");
    const [fieldErrors, setFieldErrors] = useState({});
    const statusRef = useRef(null);
    const formRef = useRef(null);

    const validateField = (name, value) => {
        switch (name) {
            case "name":
                return value.trim() ? "" : "Full name is required.";
            case "email":
                if (!value.trim()) return "Email address is required.";
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
                    return "Please enter a valid email address.";
                return "";
            case "subject":
                return value.trim() ? "" : "Subject is required.";
            case "message":
                return value.trim() ? "" : "Message is required.";
            default:
                return "";
        }
    };

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

        // Client-side validation
        const errors = {};
        ["name", "email", "subject", "message"].forEach((field) => {
            const err = validateField(field, data[field] || "");
            if (err) errors[field] = err;
        });

        if (Object.keys(errors).length > 0) {
            setFieldErrors(errors);
            setSending(false);
            // Focus the first errored field
            const firstErrorField = Object.keys(errors)[0];
            const el = document.getElementById(`contact-${firstErrorField}`);
            if (el) el.focus();
            return;
        }

        setFieldErrors({});

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

    const handleBlur = (e) => {
        const { name, value } = e.target;
        const err = validateField(name, value);
        setFieldErrors((prev) => {
            if (err) return { ...prev, [name]: err };
            const next = { ...prev };
            delete next[name];
            return next;
        });
    };

    const renderFieldError = (fieldName) => {
        if (!fieldErrors[fieldName]) return null;
        return (
            <p
                id={`contact-${fieldName}-error`}
                className="field-error"
                role="alert"
            >
                {fieldErrors[fieldName]}
            </p>
        );
    };

    return (
        <section className="contact section-padding" id="contact" tabIndex={-1}>
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
                            <div className="contact-info-icon" aria-hidden="true">
                                <i className="bx bx-envelope"></i>
                            </div>
                            <div>
                                <h3>Email</h3>
                                <p>mukuloli43@gmail.com</p>
                            </div>
                        </a>

                        <a
                            href="tel:+919411398572"
                            className="contact-info-item"
                            style={{ textDecoration: "none" }}
                        >
                            <div className="contact-info-icon" aria-hidden="true">
                                <i className="bx bx-phone"></i>
                            </div>
                            <div>
                                <h3>Phone</h3>
                                <p>+91 9411398572</p>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/mukul-oli-268251217"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-info-item"
                            style={{ textDecoration: "none" }}
                            aria-label="LinkedIn profile for Mukul Oli (opens in new tab)"
                        >
                            <div className="contact-info-icon" aria-hidden="true">
                                <i className="bx bxl-linkedin"></i>
                            </div>
                            <div>
                                <h3>LinkedIn</h3>
                                <p>mukul-oli-268251217</p>
                            </div>
                        </a>

                        <a
                            href="https://github.com/Mukuloli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-info-item"
                            style={{ textDecoration: "none" }}
                            aria-label="GitHub profile for Mukul Oli (opens in new tab)"
                        >
                            <div className="contact-info-icon" aria-hidden="true">
                                <i className="bx bxl-github"></i>
                            </div>
                            <div>
                                <h3>GitHub</h3>
                                <p>Mukuloli</p>
                            </div>
                        </a>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="right" delay={200}>
                    <form
                        ref={formRef}
                        className="contact-form"
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="contact-name">
                                    Full Name <span className="required-indicator" aria-hidden="true">*</span>
                                    <span className="sr-only">(required)</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="contact-name"
                                    required
                                    autoComplete="name"
                                    aria-invalid={!!fieldErrors.name}
                                    aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
                                    onBlur={handleBlur}
                                />
                                {renderFieldError("name")}
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-email">
                                    Email Address <span className="required-indicator" aria-hidden="true">*</span>
                                    <span className="sr-only">(required)</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="contact-email"
                                    required
                                    autoComplete="email"
                                    aria-invalid={!!fieldErrors.email}
                                    aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
                                    onBlur={handleBlur}
                                />
                                {renderFieldError("email")}
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="contact-phone">
                                    Mobile Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    id="contact-phone"
                                    autoComplete="tel"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact-subject">
                                    Subject <span className="required-indicator" aria-hidden="true">*</span>
                                    <span className="sr-only">(required)</span>
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    id="contact-subject"
                                    required
                                    aria-invalid={!!fieldErrors.subject}
                                    aria-describedby={fieldErrors.subject ? "contact-subject-error" : undefined}
                                    onBlur={handleBlur}
                                />
                                {renderFieldError("subject")}
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact-message">
                                Your Message <span className="required-indicator" aria-hidden="true">*</span>
                                <span className="sr-only">(required)</span>
                            </label>
                            <textarea
                                name="message"
                                id="contact-message"
                                required
                                aria-invalid={!!fieldErrors.message}
                                aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
                                onBlur={handleBlur}
                            ></textarea>
                            {renderFieldError("message")}
                        </div>

                        {/* Live region for form status announcements */}
                        <div
                            ref={statusRef}
                            role="status"
                            aria-live="polite"
                            aria-atomic="true"
                        >
                            {sent && (
                                <div className="form-status form-status-success">
                                    <span aria-hidden="true">✓</span> Message sent successfully! I&apos;ll get back to you soon.
                                </div>
                            )}

                            {error && (
                                <div className="form-status form-status-error">
                                    <span aria-hidden="true">✕</span> {error}
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="btn-primary"
                            disabled={sending}
                            aria-busy={sending}
                        >
                            <i
                                className={`bx ${sending ? "bx-loader-alt bx-spin" : "bx-send"}`}
                                aria-hidden="true"
                            ></i>
                            {sending ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </ScrollReveal>
            </div>
        </section>
    );
}
