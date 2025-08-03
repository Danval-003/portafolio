import React from "react";
import Link from "next/link";

type HeroProps = {
  name: string;
  tagline: string;
  ctaText: string;
};

const HeroSection: React.FC<HeroProps> = ({ name, tagline, ctaText }) => (
  <header
    className="fixed top-0 left-0 w-full z-50 bg-transparent"
    style={{
      zIndex: 9999999,
    }}
  >
    <div
      className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6
                    bg-yellow-300/90 backdrop-blur-sm border-b-4 border-black rounded-b-2xl"
    >
      {/* Left: Title + Tagline */}
      <div className="text-black">
        <h1
          className="text-2xl md:text-3xl font-extrabold"
          style={{ fontFamily: "'Bungee', sans-serif" }}
        >
          {name}
        </h1>
        <p
          className="mt-1 text-sm md:text-base font-medium"
          style={{ fontFamily: "'Rubik', sans-serif" }}
        >
          {tagline}
        </p>
      </div>

      {/* Center: CTA Button */}
      <Link
        href="https://github.com/Danval-003"
        className="mt-4 md:mt-0 inline-block bg-yellow-500 text-black font-bold px-5 py-2 rounded-full
                   shadow-[4px_4px_0_rgba(0,0,0,1)] hover:scale-105 transform transition"
      >
        {ctaText}
      </Link>

      {/* Right: Contact Info */}
      <div className="mt-4 md:mt-0 space-y-1 text-sm text-black/90">
        <p>
          📧{" "}
          <a
            href="mailto:danarvare@outlook.com"
            className="underline hover:text-black"
          >
            danarvare@outlook.com
          </a>
        </p>
        <p>
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/daniel-armando-valdez-reyes-65bb98127/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-black"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </div>
  </header>
);

export default HeroSection;
