import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { ProjectCardProps } from "./types";

const ProjectCard: React.FC<
  ProjectCardProps & { width: number; height: number }
> = ({ title, description, image, link, width, height }) => {
  const cardHeight = height * 0.8;
  return (
    <div
      style={{ width, height: cardHeight, marginTop: "1rem" }}
      className="relative group mx-auto"
    >
      {/* Comic-style glassmorphic card with bold outline */}
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex flex-col bg-[#1E90FF] backdrop-blur-lg \
                   border-2 border-black rounded-2xl shadow-[8px_8px_0_rgba(0,0,0,1)] \
                   hover:-translate-y-1 hover:shadow-[12px_12px_0_rgba(0,0,0,1)] \
                   transition-transform duration-200 ease-out"
      >
        {/* Top image with scale interaction */}
        {image && (
          <div
            className="relative w-full overflow-hidden rounded-t-2xl"
            style={{ height: cardHeight * 0.4 }}
          >
            <Image
              src={image}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        )}

        {/* Card content area */}
        <div className="flex flex-col flex-grow p-4 space-y-2">
          <h3
            className="text-lg text-[#ffffff] font-heading leading-snug truncate"
            style={{ fontFamily: "'Bungee', sans-serif" }}
          >
            {title}
          </h3>
          <p
            className="text-sm text-[#ffffff] font-body line-clamp-3"
            style={{ fontFamily: "'Rubik', sans-serif" }}
          >
            {description}
          </p>
        </div>

        {/* Footer icon with vibrant accent */}
        <div className="flex justify-end p-3">
          <span
            className="p-2 bg-[#FFD300] text-[#1E1E1E] rounded-full shadow-md \
                         hover:bg-[#E1B12C] transition-colors duration-200"
          >
            <ExternalLink size={18} />
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
