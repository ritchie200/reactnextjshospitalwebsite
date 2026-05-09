import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://luminara-health.example"),
  title: {
    default: "Luminara Health Centre",
    template: "%s | Luminara Health Centre"
  },
  description:
    "A fictional hospital website portfolio project built with Next.js, React, and TypeScript.",
  authors: [{ name: "Ritchie Fernandes" }]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
