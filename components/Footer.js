"use client";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        // Move focus to skip link or main content after scrolling
        setTimeout(() => {
            const main = document.getElementById("main-content");
            if (main) {
                main.focus();
            }
        }, 300);
    };

    return (
        <footer className="footer">
            <p>Copyright &copy; 2025 <span>Mukul Oli</span>. All Rights Reserved.</p>
            <button
                className="scroll-top"
                onClick={scrollToTop}
                aria-label="Scroll to top of page"
                type="button"
            >
                <i className="bx bx-up-arrow-alt" aria-hidden="true"></i>
            </button>
        </footer>
    );
}
