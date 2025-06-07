'use client';

import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import GitHubCalendar from 'react-github-calendar'

export const GithubHeatmap = () => {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });
  const controls = useAnimation();
  const gradientTheme = {
    light: [
      '#ffffff',       
      '#10b981',      
      '#06b6d4',        
      '#0ea5e9',      
      '#38bdf8',        
    ],
    dark: [
      '#191919',        
      '#0369a1',        
      '#0284c7',       
      '#0ea5e9',        
      '#38bdf8',        
    ]
  };
  

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className='py-16 px-4'>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          Consistent
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
        Heatmap
      </motion.h2>

      <motion.p
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="text-center text-white/60 md:text-lg mt-8 mb-8 max-w-[32rem] mx-auto"
      >
        See my GitHub Contributions/Submissions.
      </motion.p>

      <div className='mt-8 max-w-4xl mx-auto flex flex-col items-center gap-2'>
        <div className='w-full overflow-x-auto'>
          <p className='font-serif text-emerald-300 text-xl font-semibold text-center mb-6'>- GitHub -</p>
          <div className='w-full' style={{ width: '100%', overflowX: 'auto' }}>
            <GitHubCalendar
              username='sarvan-2187'
              blockSize={12}
              blockMargin={4}
              fontSize={14}
              colorScheme='dark'
              theme={gradientTheme}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GithubHeatmap;
