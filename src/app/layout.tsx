import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Yamen Najeh | Portfolio",
  description:
    "Portfolio de Yamen Najeh — Développeur Full-Stack (Next.js, Node/Express, PHP/MySQL).",
  metadataBase: new URL("https://example.vercel.app"),
  openGraph: {
    title: "Yamen Najeh | Portfolio",
    description:
      "Projets, compétences et parcours — Next.js, Node/Express, PHP/MySQL.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <div className="min-h-dvh flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
