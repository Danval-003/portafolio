// app/layout.tsx
import "./globals.css";
import { Bungee, Poppins, Rubik } from "next/font/google";
import type { Metadata } from "next";

// Cargamos Bungee para títulos, con fallback a Nunito y sans-serif
const bungee = Bungee({
  subsets: ["latin"],
  weight: "400",
  fallback: ["Nunito", "sans-serif"],
  display: "swap",
  variable: "--font-heading",
});

// Cargamos Poppins para el texto de cuerpo
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  fallback: ["system-ui", "sans-serif"],
  display: "swap",
  variable: "--font-body",
});

// Cargamos Rubik para subtítulos y elementos destacados
const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  fallback: ["system-ui", "sans-serif"],
  display: "swap",
  variable: "--font-subtitle",
});

export const metadata: Metadata = {
  title: "Daniel Valdez - Full Stack Developer",
  description: "Portfolio de Daniel Valdez",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bungee.className} ${poppins.className} ${rubik.className}`}
      style={{ fontFamily: "'Rubik', sans-serif" }}
    >
      <body className="antialiased bg-[#FDEDEC]">{children}</body>
    </html>
  );
}
