"use client";

import { useEffect, useRef } from "react";

/**
 * Accessible "Skip to main content" link.
 * Visually hidden until focused, then prominently displayed.
 * Moves programmatic focus to <main id="main-content"> on activation.
 */
export default function SkipLink() {
    const linkRef = useRef(null);

    const handleClick = (e) => {
        e.preventDefault();
        const main = document.getElementById("main-content");
        if (main) {
            main.focus();
        }
    };

    return (
        <a
            ref={linkRef}
            href="#main-content"
            className="skip-link"
            onClick={handleClick}
        >
            Skip to main content
        </a>
    );
}
