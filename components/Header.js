"use client";

import { useState, useEffect } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [mounted, setMounted] = useState(false);

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

    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    const handleNav = (id) => {
        setMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <header className={`header${mounted && scrolled ? " scrolled" : ""}`} suppressHydrationWarning>
                <div className="header-container">
                    <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); handleNav("home"); }}>
                        Mukul<span>.</span>dev
                    </a>

                    <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={mounted && activeSection === item.id ? "active" : ""}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNav(item.id);
                                }}
                                suppressHydrationWarning
                            >
                                {item.label}
                                {mounted && activeSection === item.id && (
                                    <span className="nav-indicator"></span>
                                )}
                            </a>
                        ))}
                    </nav>

                    <button
                        className={`menu-toggle ${menuOpen ? "active" : ""}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"}`}></i>
                    </button>
                </div>
            </header>

            {menuOpen && (
                <div className="nav-overlay active" onClick={() => setMenuOpen(false)} />
            )}
        </>
    );
}
