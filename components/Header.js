"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [mounted, setMounted] = useState(false);
    const menuToggleRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        setMounted(true);

        const handleScroll = () => {
            setScrolled(window.scrollY > 80);

            const sections = document.querySelectorAll("section[id]");
            sections.forEach((sec) => {
                const top = window.scrollY;
                const offset = sec.offsetTop - 200;
                const height = sec.offsetHeight;
                const id = sec.getAttribute("id");
                if (top >= offset && top < offset + height) {
                    setActiveSection(id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && menuOpen) {
                setMenuOpen(false);
                menuToggleRef.current?.focus();
            }
        };

        if (menuOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [menuOpen]);

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    const handleNav = useCallback((id) => {
        setMenuOpen(false);
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
            // Move focus to the target section for keyboard/screen reader users
            target.setAttribute("tabindex", "-1");
            target.focus({ preventScroll: true });
        }
    }, []);

    const handleOverlayClick = useCallback(() => {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
    }, []);

    return (
        <>
            <header
                className={`header${mounted && scrolled ? " scrolled" : ""}`}
                suppressHydrationWarning
            >
                <div className="header-container">
                    <a
                        href="#home"
                        className="logo"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNav("home");
                        }}
                    >
                        Mukul<span>.</span>dev
                    </a>

                    <nav
                        ref={navRef}
                        id="primary-navigation"
                        className={`nav-links ${menuOpen ? "active" : ""}`}
                        aria-label="Primary navigation"
                        {...(!menuOpen && {
                            "aria-hidden": "true",
                            inert: "",
                        })}
                    >
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={mounted && activeSection === item.id ? "active" : ""}
                                aria-current={mounted && activeSection === item.id ? "true" : undefined}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNav(item.id);
                                }}
                                tabIndex={menuOpen ? 0 : -1}
                                suppressHydrationWarning
                            >
                                {item.label}
                                {mounted && activeSection === item.id && (
                                    <span className="nav-indicator" aria-hidden="true"></span>
                                )}
                            </a>
                        ))}
                    </nav>

                    <button
                        ref={menuToggleRef}
                        className={`menu-toggle ${menuOpen ? "active" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={menuOpen}
                        aria-controls="primary-navigation"
                        type="button"
                    >
                        <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"}`} aria-hidden="true"></i>
                    </button>
                </div>
            </header>

            {menuOpen && (
                <div
                    className="nav-overlay active"
                    onClick={handleOverlayClick}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleOverlayClick();
                        }
                    }}
                    role="button"
                    tabIndex={-1}
                    aria-label="Close navigation menu"
                />
            )}
        </>
    );
}
