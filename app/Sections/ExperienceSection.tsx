import React from "react";

type Experience = {
  emoji: string;
  role: string;
  company: string;
  period: string;
  details: string[];
};

const experiences: Experience[] = [
  {
    emoji: "🎓",
    role: "Teaching Assistant",
    company: "Universidad del Valle de Guatemala",
    period: "Aug 2023 – Present",
    details: [
      "Graded assignments & mentored 30 students per semester",
      "Courses: Algorithms, Discrete Math, Probability, Logic, Compilers",
    ],
  },
  {
    emoji: "📱",
    role: "Frontend Developer",
    company: "Explorax (Fundación del Valle)",
    period: "Jan 2023 – Oct 2023",
    details: [
      "Built React Native SVG interfaces for interactive learning",
      "Compressed videos 700×400 @20 fps (3–7 MB) via FFmpeg + Python",
      "Added in-app chatbot for instant feature guidance",
    ],
  },
  {
    emoji: "🌐",
    role: "Fullstack Intern",
    company: "Korean Chamber of Commerce",
    period: "Jun 2024 – Dec 2024",
    details: [
      "Led 3-dev team to build one-page portal for exporters/importers",
      "Improved trade visibility across Central America",
    ],
  },
  {
    emoji: "🐔",
    role: "Backend Developer",
    company: "Private Poultry Farm",
    period: "Feb 2022 – Jul 2022",
    details: [
      "Created Flask REST API with auth & validation",
      "Optimized PostgreSQL schema: −25% report time",
    ],
  },
  {
    emoji: "🏆",
    role: "Team Lead",
    company: "Alfabetizate Hackathon",
    period: "Nov 2021",
    details: [
      "Won first place: rapid prototype & user-centric design",
      "Built adult literacy platform on Android SDK",
    ],
  },
];

const ExperienceSection: React.FC = () => (
  <section className="relative py-12 px-4 w-full">
    <div className="w-full max-w-screen-xl mx-auto bg-yellow-100 backdrop-blur-sm border-4 border-black rounded-2xl shadow-[8px_8px_0_rgba(0,0,0,1)] p-8">
      <h2
        className="text-4xl text-black mb-6"
        style={{ fontFamily: "'Bungee', sans-serif" }}
      >
        💼 My Work Journey
      </h2>
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 bg-white/80 border-2 border-black rounded-xl"
          >
            <div className="text-5xl">{exp.emoji}</div>
            <div className="flex-1">
              <h3
                className="text-2xl text-amber-400"
                style={{ fontFamily: "'Bungee', sans-serif" }}
              >
                {exp.role} @{" "}
                <span className="text-blue-600">{exp.company}</span>
              </h3>
              <p className="text-sm italic text-gray-700">{exp.period}</p>
              <ul className="mt-2 list-disc list-inside text-gray-900">
                {exp.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
