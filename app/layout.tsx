import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import Loader from "@/components/Loader";
import AuroraBackground from "@/components/ui/AuroraBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";
import MouseSpotlight from "@/components/ui/MouseSpotlight";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Mostafa Lahfa — Développeur Full Stack",
  description:
    "Portfolio de Mostafa Lahfa, développeur Full Stack spécialisé en React, Next.js et Laravel. Interfaces modernes, performantes et sur mesure.",
  keywords: [
    "Mostafa Lahfa",
    "Développeur Full Stack",
    "React",
    "Next.js",
    "Laravel",
    "Portfolio",
  ],
  authors: [{ name: "Mostafa Lahfa" }],
  openGraph: {
    title: "Mostafa Lahfa — Développeur Full Stack",
    description:
      "Portfolio de Mostafa Lahfa, développeur Full Stack spécialisé en React, Next.js et Laravel.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className="relative min-h-screen antialiased">
        <Loader />
        <SmoothScroll />
        <CustomCursor />
        <ScrollProgress />
        <div className="noise-overlay" />
        <AuroraBackground />
        <MouseSpotlight />
        <Nav />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
