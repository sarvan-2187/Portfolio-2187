'use client';

import GitIcon from "@/assets/icons/git.svg"
import ChromeIcon from "@/assets/icons/chrome.svg"
import { Card } from "@/components/Card";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JsIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextjsIcon from "@/assets/icons/next-js.svg"
import VsCodeIcon from "@/assets/icons/vs-code.svg"
import MapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const toolboxItems = [
  { title: 'JavaScript', iconType: JsIcon },
  { title: 'HTML5', iconType: HtmlIcon },
  { title: 'CSS3', iconType: CssIcon },
  { title: 'React', iconType: ReactIcon },
  { title: 'VS Code', iconType: VsCodeIcon },
  { title: 'Next.JS', iconType: NextjsIcon },
  { title: 'Chrome', iconType: ChromeIcon },
  { title: 'Git', iconType: GitIcon},
];

const hobbies = [
  { title: "Painting", emoji: "🎨", left: '5%', top: '5%' },
  { title: "Photography", emoji: "📸", left: '50%', top: '5%' },
  { title: "Hiking", emoji: "🥾", left: '35%', top: '40%' },
  { title: "Gaming", emoji: "🎮", left: '5%', top: '35%' },
  { title: "Music", emoji: "🎵", left: '70%', top: '45%' },
  { title: "Movies", emoji: "🎬", left: '5%', top: '70%' },
  { title: "Videography", emoji: "📽️", left: '45%', top: '70%' },
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="About" className="py-16">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            About Me
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
          A Glimpse Into My World
        </motion.h2>

        <motion.p
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-center text-white/60 md:text-lg mt-4"
        >
          Learn more about who I am, what I do and what inspires me.
        </motion.p>

        <div className="mt-20 md:mt-10 flex flex-col gap-8">
          <div className="md:grid md:grid-cols-5 md:gap-8 lg:grid lg:grid-cols-3 flex flex-col gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the book shaping my perspectives" />
              <div className="w-40 mx-auto mt-8">
                <Image src={BookImage} alt="Atomic Habits" />
              </div>
            </Card>

            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader title="My Toolbox" description="Explore the technologies I use to craft exceptional digital experiences" className="pt-6 px-6" />
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-left [animation-duration:20s]" />
              <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:20s]" />
            </Card>
          </div>

          <div className="md:grid md:grid-cols-5 md:gap-8 flex flex-col lg:grid-cols-3 lg:gap-8 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader title="Beyond the Code" description="Explore my interests and hobbiles beyond the realm." className="px-6 py-6" />
              <div className="relative flex-1" ref={constraintRef}>
                {hobbies.map(hobby => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full absolute py-1.5"
                    style={{ left: hobby.left, top: hobby.top }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">{hobby.title}</span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image src={MapImage} alt="Map" className="h-full w-full object-fit-left-top" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10" />
                <Image src={smileMemoji} alt="Smiling Memoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
