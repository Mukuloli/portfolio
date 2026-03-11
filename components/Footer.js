"use client";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="footer">
            <p>Copyright &copy; 2025 <span>Mukul Oli</span>. All Rights Reserved.</p>
            <button
                className="scroll-top"
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <i className="bx bx-up-arrow-alt"></i>
            </button>
        </footer>
    );
}
