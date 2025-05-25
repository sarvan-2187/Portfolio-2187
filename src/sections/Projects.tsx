'use client';
import TdcImage from "@/assets/images/tanjore-degree-cofee.png"
import MiImage from "@/assets/images/mumbai-indians.png"
import PillPal from "@/assets/images/pill-pal.png"
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowIcon from "@/assets/icons/arrow-up-right.svg";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const portfolioProjects = [
  {
    company: "ShadowFox",
    year: "2025",
    title: "TDC Website Redesign",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://shadowfox-client.vercel.app/landing.html",
    image: TdcImage,
  },
  {
    company: "Personal",
    year: "2025",
    title: "Mumbai Indians",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://mumbai-indians-paltan.vercel.app",
    image: MiImage,
  },
  {
    company: "Collaborated",
    year: "2025",
    title: "PillPal AI",
    results: [
      { title: "Implemented AI Chatbots" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://the-pillpal.vercel.app",
    image: PillPal,
  },
];

export const ProjectsSection = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="pt-14 pb-16" id="Projects">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real-world Results
          </p>
        </div>

        <motion.h2
          ref={headingRef}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif text-3xl md:text-5xl text-center mt-8"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-center text-white/60 md:text-lg mt-4 max-w-md mx-auto"
        >
          See how I transformed concepts into engaging digital experiences.
        </motion.p>

        <div className="flex flex-col mt-10 lg:mt-2 gap-20 lg:gap-0">
          {portfolioProjects.map((project, projectIndex) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 md:mt-20 md:pt-12 md:px-10 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 pt-8 pl-8 after:pointer-events-none lg:pt-16 lg:px-20"
              style={{
                position: "sticky",
                top: `calc(64px + ${projectIndex * 20}px)`,
              }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text inline-flex gap-2 font-bold uppercase tracking-widest text-sm">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-3xl">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-4" />
                  <ul className="flex flex-col gap-4 mt-4">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex md:flex-row lg:flex-row flex-col lg:gap-2 md:gap-1 gap-0 mt-1">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-950 z-10 hover:bg-white/70 hover:text-gray-900 transition duration-300 h-12 w-full md:w-1/2 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8"
                    >
                      <span>Visit Live Site</span>
                      <ArrowIcon className="size-4" />
                    </a>
                  </div>
                </div>
                <div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 lg:mt-0 -mb-8 md:-mb-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
