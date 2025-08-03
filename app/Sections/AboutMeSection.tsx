import React from "react";
import Image from "next/image";
import obtainAssetUrl from "@/utils/formatAssets";

const AboutMeSection: React.FC = () => (
  <section className="relative py-12 px-4 w-full mt-[11rem] md:mt-[5rem] mb-[-3rem]">
    {/* Contenedor glassmórfico con borde estilo cómic, casi ancho completo */}
    <div className="w-full max-w-screen-xl mx-auto bg-yellow-200 backdrop-blur-lg border-4 border-black rounded-2xl shadow-[8px_8px_0_rgba(0,0,0,1)] p-8 flex flex-col md:flex-row items-center gap-6">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <Image
          src={obtainAssetUrl("/avatar.jpeg")}
          alt="Avatar Danval"
          width={240}
          height={240}
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 25vw"
          className="rounded-xl ring-4 ring-black object-cover"
        />
      </div>

      {/* Texto */}
      <div className="flex-1">
        <h2
          className="text-4xl text-black mb-4"
          style={{ fontFamily: "'Bungee', sans-serif" }}
        >
          About Me
        </h2>
        <p className="text-base text-gray-900 font-body leading-relaxed">
          I grew up in a rural region of Guatemala, where I learned that
          collaboration, empathy, and a passion for sharing knowledge can
          transform communities. This belief guided me to lead human-centered
          projects like <strong>Alfabetizate</strong>, bringing digital literacy
          tools to underserved areas, and <strong>Explorax</strong>, an
          edutainment app blending curiosity and play to teach scientific and
          cultural concepts.
        </p>
        <p className="mt-4 text-base text-gray-900 font-body leading-relaxed">
          I thrive at the intersection of technical rigor and genuine user
          empathy: I deliver precise code within agile teams while always
          listening to—and adapting for—the real needs of end users. My
          &quot;learn-by-doing&quot; mindset pushes me to embrace new
          challenges, iterate quickly, and share each advancement with my
          community, because I believe that the most valuable technology is the
          one that empowers others to grow.
        </p>
      </div>
    </div>
  </section>
);

export default AboutMeSection;
