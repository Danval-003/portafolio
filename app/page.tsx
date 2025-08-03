import AboutMeSection from "./Sections/AboutMeSection";
import ExperienceSection from "./Sections/ExperienceSection";
import HeroSection from "./Sections/HeroSection";
import ProjectsSection from "./Sections/ProjectSection";
import SkillsSection from "./Sections/SkillsSection";

export default function Home() {
  return (
    <div className="font-sans  items-center justify-items-center min-h-screen bg-[#00215b]">
      <main className={"flex flex-col w-screen"}>
        <HeroSection
          name="Daniel Valdez"
          tagline="Full Stack Developer"
          ctaText="View GitHub"
        />

        <AboutMeSection />
        <ExperienceSection />

        <h2
          className="text-4xl text-white text-center my-8"
          style={{ fontFamily: "'Bungee', sans-serif" }}
        >
          My Projects
        </h2>
        <ProjectsSection />
        <SkillsSection />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/* Footer content with social links, to contact, etc. */}
        <p className="text-sm text-amber-50">
          © 2025 Daniel Valdez. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
