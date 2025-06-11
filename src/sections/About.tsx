'use client';

import GitIcon from "@/assets/icons/git.svg"
import { Card } from "@/components/Card";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JsIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextjsIcon from "@/assets/icons/next-js.svg"
import VsCodeIcon from "@/assets/icons/vs-code.svg"
import MapImage from "@/assets/images/hero_image.jpg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";

const toolboxItems = [
  { title: 'JavaScript', iconType: JsIcon },
  { title: 'HTML', iconType: HtmlIcon },
  { title: 'CSS', iconType: CssIcon },
  { title: 'React.js', iconType: ReactIcon },
  { title: 'VS Code', iconType: VsCodeIcon },
  { title: 'Next.js', iconType: NextjsIcon },
  { title: 'Git', iconType: GitIcon},
];

const hobbies = [
  { title: "Painting", emoji: "🎨", left: '5%', top: '5%' },
  { title: "Photography", emoji: "📸", left: '50%', top: '5%' },
  { title: "Yoga", emoji: "🧘‍♂️", left: '25%', top: '48%' },
  { title: "Gaming", emoji: "🎮", left: '11%', top: '30%' },
  { title: "Music", emoji: "🎵", left: '70%', top: '45%' },
  { title: "Movies", emoji: "🎬", left: '5%', top: '70%' },
  { title: "Videography", emoji: "📽️", left: '45%', top: '65%' },
  { title: "Blogs", emoji: "📃", left: '45%', top: '20%' },
  { title: "Cricket", emoji: "🏏", left: '30%', top: '0%' },
  { title: "Chess", emoji: "♟️", left: '45%', top: '20%' },
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

        <div className="mt-20 md:mt-6 flex flex-col gap-4 ">
          <div className="md:grid md:grid-cols-5 md:gap-8 lg:grid lg:grid-cols-3 flex flex-col gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader title="My Reads" description="Explore the book shaping my perspectives" />
              <div className="w-40 mx-auto mt-8">
                <Image src={BookImage} alt="Atomic Habits" />
              </div>
            </Card>

            <Card className="h-[320px] p-0 md:col-span-3 lg:col-span-2">
              <CardHeader title="My Education" description="Explore where, what, when I have studied" className="pt-6 px-6" />
              <div className="px-6 pt-6 font-serif">
              <p>• <span className="uppercase font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">2024 - 2028</span> Amrita Vishwa Vidyapeetham, Chennai - B.tech, CSE</p><br></br>
              <p>• <span className="uppercase font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">2022 - 2024</span> Ascent Classes, Visakhaptnam - PUC (95.90%)</p><br></br>
              <p>• <span className="uppercase font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">2021 - 2022</span> Sri Chaitanya Schools, Madhurawada - SSC (97.16%)</p><br></br>
              </div>
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
              <Image src={MapImage} alt="Map" className="h-full w-full object-cover" />
              
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
