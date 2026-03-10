import "./globals.css";

export const metadata = {
  title: "Mukul Oli — AI Developer & Software Engineer",
  description:
    "Portfolio of Mukul Oli — AI Developer specializing in LangChain, RAG, Voice AI, and intelligent agent development at Webuters Technologies.",
  openGraph: {
    title: "Mukul Oli — AI Developer & Software Engineer",
    description:
      "AI Developer specializing in LangChain, RAG, Voice AI, and intelligent agent systems.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
