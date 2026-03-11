"use client";

import { useEffect, useRef } from "react";

export default function ScrollReveal({ children, delay = 0, direction = "up" }) {
    const ref = useRef(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

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
    }, [delay]);

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
