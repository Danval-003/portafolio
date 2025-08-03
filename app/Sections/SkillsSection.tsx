import React from "react";

type Skill = {
  name: string;
  level: number; // porcentaje 0–100
};

const skills: Skill[] = [
  { name: "TypeScript", level: 90 },
  { name: "JavaScript (ES6+)", level: 95 },
  { name: "React.js / React Native", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Node.js & Express", level: 80 },
  { name: "PostgreSQL", level: 75 },
  { name: "Python", level: 70 },
  { name: "Git & GitHub Actions", level: 90 },
];

const SkillsSection: React.FC = () => (
  <section className="relative py-12 px-4 w-full">
    <div className="w-full max-w-screen-xl mx-auto bg-yellow-100 backdrop-blur-sm border-4 border-black rounded-2xl shadow-[8px_8px_0_rgba(0,0,0,1)] p-8">
      <h2
        className="text-4xl text-black mb-6"
        style={{ fontFamily: "'Bungee', sans-serif" }}
      >
        🛠️ Skills
      </h2>
      <div className="space-y-4">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="bg-white/80 border-2 border-black rounded-xl p-4"
          >
            <div className="flex justify-between mb-2">
              <span
                className="text-md text-amber-400"
                style={{
                  fontFamily: "'Bungee', sans-serif",
                }}
              >
                {skill.name}
              </span>
              <span
                className="text-md text-blue-600"
                style={{
                  fontFamily: "'Bungee', sans-serif",
                }}
              >
                {skill.level}%
              </span>
            </div>
            <progress
              className="w-full h-4 rounded-lg border-2 border-black accent-yellow-600"
              value={skill.level}
              max={100}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
