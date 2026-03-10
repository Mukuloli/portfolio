"use client";

export default function Contact() {
    return (
        <section className="contact section-padding" id="contact">
            <h2 className="section-title">
                Contact <span>Me</span>
            </h2>
            <div className="contact-wrapper">
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

                <form
                    className="contact-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        const name = formData.get("name");
                        const email = formData.get("email");
                        const subject = formData.get("subject");
                        const message = formData.get("message");
                        window.location.href = `mailto:mukuloli43@gmail.com?subject=${encodeURIComponent(
                            subject
                        )}&body=${encodeURIComponent(
                            `Name: ${name}\nEmail: ${email}\n\n${message}`
                        )}`;
                    }}
                >
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
                    <button type="submit" className="btn-primary">
                        <i className="bx bx-send"></i> Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
