'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import memojiImage from '@/assets/images/memoji-computer.png';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import GithubIcon from '@/assets/icons/github.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';

export const HeroSection = () => {
  return (
    <section id="home">
      <div className="py-36 md:py-48 lg:py-55 relative z-0 overflow-x-clip">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
          <div
            className="absolute inset-0 -z-30 opacity-5"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>

          {/* Orbits */}
          <div className="size-[620px] hero-ring"></div>
          <div className="size-[820px] hero-ring"></div>
          <div className="size-[1020px] hero-ring"></div>
          <div className="size-[1220px] hero-ring"></div>

          <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration="30s" shouldSpin spinDuration="10s">
            <SparkleIcon className="size-8 text-emerald-300/20 " />
          </HeroOrbit>
          <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="32s" shouldSpin spinDuration="8s">
            <SparkleIcon className="size-5 text-emerald-300/20 " />
          </HeroOrbit>
          <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration="34s" shouldSpin spinDuration="8s">
            <SparkleIcon className="size-10 text-emerald-300/20 " />
          </HeroOrbit>
          <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration="36s" shouldSpin spinDuration="10s">
            <StarIcon className="size-12 text-emerald-300 " />
          </HeroOrbit>
          <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration="38s" shouldSpin spinDuration="10s">
            <StarIcon className="size-8 text-emerald-300 " />
          </HeroOrbit>
          <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration="40s">
            <div className="size-2 rounded-full bg-emerald-300/50 " />
          </HeroOrbit>
          <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration="42s" shouldSpin spinDuration="8s">
            <SparkleIcon className="size-14 text-emerald-300/20 " />
          </HeroOrbit>
          <HeroOrbit size={720} rotation={0} shouldOrbit orbitDuration="46s" shouldSpin spinDuration="8s">
            <SparkleIcon className="size-3 rounded-full text-emerald-300/20 " />
          </HeroOrbit>
          <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration="48s" shouldSpin spinDuration="10s">
            <StarIcon className="size-28 text-emerald-300 " />
          </HeroOrbit>
        </div>

        {/* Content */}
        <div className="container">
          <div className="flex flex-col items-center gap-2">
            <Image
              src={memojiImage}
              className="size-[200px] lg:size-[150px]"
              alt="Person peeking from behind Laptop"
            />
            <div className="bg-gray-950 px-4 py-1.5 inline-flex items-center gap-8 lg:gap-4 rounded-3xl border-b border-green-950">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
              </div>
              <div className="text-sm font-medium">Available for New Projects</div>
            </div>
          </div>

          {/* Heading */}
          <div className="max-w-lg mx-auto">
            <h1
              className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl font-medium bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text"
            >
              Hi! I&apos;m Sarvan Kumar
            </h1>

            <p className="mt-4 text-center text-white/60 md:text-lg z-10">
              A frontend engineer skilled in HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Git, and UI/UX tools like Figma, Framer, and Canva.
            </p>
          </div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center mt-8 gap-6"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <a
              href="https://github.com/sarvan-2187"
              target="_blank"
              rel="noopener noreferrer"
              className="z-10"
            >
              <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl z-10 hover:bg-gray-700 hover:text-white transition duration-500">
                <span className="font-serif font-semibold">View Github </span>
                <GithubIcon className="size-4" />
              </button>
            </a>

            <a
              href="/resume.pdf"
              download="SarvanKumar_Resume.pdf"
              rel="noopener noreferrer"
              className="z-10"
            >
              <button className="inline-flex items-center gap-2 z-10 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl hover:bg-white/70 hover:text-gray-900 transition duration-300">
                <span className="font-serif font-semibold">Download CV</span>
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
