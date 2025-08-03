"use client";
import CardCarousel3D from "@/components/Carrousel3D";
import { ProjectCard, ProjectCardProps } from "@/components/Card";
import { useEffect, useState } from "react";
import obtainAssetUrl from "@/utils/formatAssets";

const ProjectsSection: React.FC = () => {
  // Use window to get the width and height of the viewport
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const placeholder = obtainAssetUrl("/assets/common/placeholder.png");

  // Despues de que la ventana tenga cierto limite de tamaño, renderizamos 3, 2 o 1 carta
  const visibleCount = size.width > 1200 ? 3 : size.width > 800 ? 2 : 1;

  return (
    <div style={{ marginTop: "2rem", width: "100%" }}>
      <CardCarousel3D<ProjectCardProps>
        data={[
          {
            title: "AI-Powered Brain Tumor Segmentation",
            description:
              "Harness the power of a U-Net deep learning model to accurately segment brain tumors in MRI scans.",
            link: "https://github.com/Danval-003/brain-tumor-segmentation",
            image: obtainAssetUrl("/assets/projects/brain.png"), // Using the placeholder image
          },
          {
            title: "Minecraft Raycasting Engine: Real-Time Block Diorama",
            description:
              "Experience a custom C++ raycasting engine rendering a Minecraft-themed 3D diorama with reflective and refractive materials.",
            link: "https://github.com/Danval-003/Minecraft_for_raycaster",
            image: obtainAssetUrl("/assets/projects/raycasting.png"), // Using the placeholder image
          },
          {
            title: "WaterCycle Visualizer: Interactive Climate Explorer",
            description:
              "Immerse yourself in Earth’s water cycle with an interactive React & Vite web application.",
            link: "https://github.com/Danval-003/EverythingStartsWithWater",
            image: obtainAssetUrl(
              "/assets/projects/everitingStartsWithWater.png"
            ), // Using the placeholder image
          },
          {
            title: "Danvaland: Immersive Virtual Portfolio",
            description:
              "Dive into Danvaland, an interactive web portfolio showcasing dynamic landscapes and sleek UI components.",
            link: "https://github.com/Danval-003/Danvaland",
            image: obtainAssetUrl("/assets/projects/danvaland.webp"), // Using the placeholder image
          },
          {
            title: "Protobuf-Powered C++ TCP Chat Server",
            description:
              "Implement a robust chat application using C++, TCP sockets, and Protocol Buffers.",
            link: "https://github.com/Danval-003/TCP_chat_server",
            image: obtainAssetUrl("/assets/projects/chatTCP.webp"), // Using the placeholder image
          },
          /**
           * B-Line is an Android app built in Kotlin that aggregates product listings from multiple online retailers, presenting each item with its current price, source, and a direct link—all in a clear, organized feed. Designed to save you time, it combines smart search, advanced filters, and a favorites feature for a faster, more personalized shopping experience.
           */
          {
            title: "B-Line: Your Shopping Companion",
            description:
              "B-Line is an Android app built in Kotlin that aggregates product listings from multiple online retailers, presenting each item with its current price, source, and a direct link—all in a clear, organized feed. Designed to save you time, it combines smart search, advanced filters, and a favorites feature for a faster, more personalized shopping experience.",
            link: "https://github.com/Dahernandezsilve/Project_B-Line",
            image: obtainAssetUrl("/assets/projects/b-line.png"), // Using the placeholder image
          },
          /**
           * The LexicalAnalyzer-LL1-SRL-Scanner API is a robust Go-based application designed to facilitate lexical analysis using Yalex files and an SLR table based on Yalp files. This API empowers text analysis by converting input text into tokens using scanners, which meticulously identify and categorize various elements within the text. These tokens are subsequently utilized by the SLR table to perform syntactical analysis.
           */
          {
            title: "LexicalAnalyzer-LL1-SRL-Scanner API",
            description:
              "The LexicalAnalyzer-LL1-SRL-Scanner API is a robust Go-based application designed to facilitate lexical analysis using Yalex files and an SLR table based on Yalp files. This API empowers text analysis by converting input text into tokens using scanners, which meticulously identify and categorize various elements within the text. These tokens are subsequently utilized by the SLR table to perform syntactical analysis.",
            link: "https://github.com/Danval-003/LexicalAnalyzer-LL1-SRL-Scanner",
            image: obtainAssetUrl("/assets/projects/scanner.jpeg"), // Using the placeholder image
          },
        ]}
        RenderItem={ProjectCard}
        cardWidth={
          size.width *
          (visibleCount >= 3 ? 0.3 : visibleCount === 2 ? 0.35 : 0.7)
        }
        height={size.height * 0.5}
        autoPlayInterval={3000}
        spacingPercent={visibleCount >= 3 ? 30 : visibleCount === 2 ? 40 : 50}
        visibleCount={visibleCount}
      />
    </div>
  );
};

export default ProjectsSection;
