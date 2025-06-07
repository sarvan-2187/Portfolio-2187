'use client';

import { Card } from '@/components/Card';
import Image from 'next/image';
import Linkedin from '@/assets/images/linkedin.png';
import Github from '@/assets/images/github.png';
import Instagram from '@/assets/images/instagram.png';
import Whatsapp from '@/assets/images/whatsapp.png';
import React, { FormEvent, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

export function Contact() {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const target = e.currentTarget;
    const name = (target.elements.namedItem("name") as HTMLInputElement).value;
    const email = (target.elements.namedItem("email") as HTMLInputElement).value;
    const message = (target.elements.namedItem("message") as HTMLTextAreaElement).value;

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "7af1432a-847c-4679-8b8f-e55d934beb1a",
        name,
        email,
        message,
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log("Success:", result);
    } else {
      console.error("Error:", result);
    }
  }

  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section className="pt-8 pb-16 container" id='contact'>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          Collaborative side
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
        Get in Touch
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
        Let&apos;s build something amazing together.
      </motion.p>
      <Card className='container flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-start justify-start py-6 lg:px-12'>
        <div className='sm:w-full md:w-1/2'>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your name"
                className="px-4 py-2 rounded-lg bg-gray-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email@example.com"
                className="px-4 py-2 rounded-lg bg-gray-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Enter your message..."
                className="px-4 py-2 rounded-lg bg-gray-700 text-white border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all duration-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="mt-2 bg-sky-600 hover:bg-sky-800 text-white font-medium py-2 rounded-lg transition-all duration-500"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className='flex flex-col gap-4 md:gap-6 sm:w-full md:w-2/3' >
          <p className='font-serif tracking-wide font-semibold text-3xl md:text-5xl lg:text-8xl bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text'>Let&apos;s<br></br>Connect!</p>
          <div className='flex flex-row gap-4'>
            <div>
              <a href='https://www.linkedin.com/in/nagarampalli-sarvan-kumar/' title='Linkedin' target='_blank'>
                <Image src={Linkedin} alt='Linkedin' className='size-10 md:size-12 rounded-full shadow-gray-400 shadow-sm' />
              </a>
            </div>
            <div>
              <a href='https://github.com/sarvan-2187/' title='Github' target='_blank'>
                <Image src={Github} alt='Linkedin' className='size-10 md:size-12 rounded-full shadow-gray-400 shadow-sm ' />
              </a>
            </div>
            <div>
              <a href='https://wa.link/t1td0b' title='Whatsapp' target='_blank'>
                <Image src={Whatsapp} alt='Linkedin' className='size-10 md:size-12 rounded-full shadow-gray-400 shadow-sm' />
              </a>
            </div>
            <div>
              <a href='https://www.instagram.com/sarvan._.21/' title='Instagram' target='_blank'>
                <Image src={Instagram} alt='Linkedin' className='size-10 md:size-12 rounded-full shadow-gray-400 shadow-sm' />
              </a>
            </div>
          </div>
          <div className='flex flex-row gap-2 justify-end'>
            <div className='bg-gradient-to-br from-emerald-600 via-sky-800 to-emerald-200 size-2.5 rounded-full animate-spin'></div>
            <div className='bg-gray-500 size-2.5 rounded-full animate-bounce'></div>
            <div className='bg-gradient-to-br from-indigo-500 via-sky-800 to-emerald-600 size-2.5 rounded-full animate-spin'></div>
          </div>
        </div>
      </Card>
    </section>
  );
}
