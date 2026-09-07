"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * Announces route changes to screen readers via a polite live region.
 * After a route change, moves focus to <main id="main-content">.
 */
export default function RouteAnnouncer() {
    const pathname = usePathname();
    const previousPathname = useRef(pathname);
    const announcerRef = useRef(null);

    useEffect(() => {
        // Don't announce on initial mount
        if (previousPathname.current === pathname) return;
        previousPathname.current = pathname;

        // Allow the DOM to settle before announcing
        const timer = setTimeout(() => {
            // Announce the new page title to screen readers
            const pageTitle = document.title || "Page loaded";
            if (announcerRef.current) {
                announcerRef.current.textContent = pageTitle;
            }

            // Move focus to main content
            const main = document.getElementById("main-content");
            if (main) {
                main.focus();
            }
        }, 100);

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <div
            ref={announcerRef}
            aria-live="polite"
            aria-atomic="true"
            role="status"
            className="sr-only"
        />
    );
}
