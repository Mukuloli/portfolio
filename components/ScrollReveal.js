"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ children, delay = 0, direction = "up" }) {
    const ref = useRef(null);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setReducedMotion(mq.matches);

        const handler = (e) => setReducedMotion(e.matches);
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
    }, []);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        // If reduced motion is preferred, reveal immediately
        if (reducedMotion) {
            node.classList.add("revealed");
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        node.classList.add("revealed");
                    }, delay);
                    observer.unobserve(node);
                }
            },
            { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [delay, reducedMotion]);

    const dirClass =
        direction === "left"
            ? "scroll-reveal-left"
            : direction === "right"
                ? "scroll-reveal-right"
                : direction === "scale"
                    ? "scroll-reveal-scale"
                    : "scroll-reveal-up";

    return (
        <div ref={ref} className={`scroll-reveal ${dirClass}`}>
            {children}
        </div>
    );
}
